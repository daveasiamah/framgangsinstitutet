import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"

type AccordionProps = {
  children: React.ReactNode
}

type AccordionItemProps = {
  title: string
  children: React.ReactNode
}

// RightArrow component
const RightArrow = React.memo(({ isOpen }: { isOpen: boolean }) => {
  return (
    <span className="cursor-pointer inline-block flex-shrink-0">
      <Image
        src="/images/pricing/right-arrow.svg"
        width={10}
        height={10}
        style={{
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease-in-out",
          objectFit: "contain", // Ensures the image fits well
        }}
        alt="arrow-icon"
      />
    </span>
  )
})
RightArrow.displayName = "RightArrow"

// AccordionContent now accepts children
const AccordionContent = React.memo(
  ({
    children,
    isSelected,
  }: {
    children: React.ReactNode
    isSelected: boolean
  }) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
      if (isSelected) {
        setHeight(contentRef.current?.scrollHeight || 0)
      } else {
        setHeight(0)
      }
    }, [isSelected])

    return (
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div
          ref={contentRef}
          className="text-subtitle font-inter text-xs md:text-sm pr-4"
        >
          {children}
        </div>
      </div>
    )
  },
)
AccordionContent.displayName = "AccordionContent"

// Accordion Component (Now accepts children)
export const Accordion = ({ children }: AccordionProps) => {
  return <div className="grid gap-6">{children}</div>
}

// AccordionItem Component
export const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps & { defaultOpen?: boolean }) => {
  const [isSelected, setIsSelected] = useState(defaultOpen)

  const toggle = () => {
    setIsSelected((prev) => !prev)
  }

  return (
    <div className="accordion-wrapper w-full border-2 border-[#E5E5E5] bg-white py-4 px-6 rounded-2xl cursor-pointer focus-within:border-primary transition-all">
      {/* Accordion Header */}
      <div
        onClick={toggle}
        className="cursor-pointer py-2 flex justify-between items-center"
      >
        <h2 className="text-neutral-900 font-inter font-semibold text-sm md:text-base leading-5">
          {title}
        </h2>
        <span
          className={`${isSelected ? "plusminus active" : "plusminus"}`}
        ></span>
      </div>

      {/* Accordion Content */}
      <AccordionContent isSelected={isSelected}>{children}</AccordionContent>
    </div>
  )
}

export default Accordion
