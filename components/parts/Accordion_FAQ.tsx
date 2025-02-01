import React, { useState, useRef, useEffect, useCallback } from "react"
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
    <span className="cursor-pointer inline-block">
      <Image
        src="/images/pricing/right-arrow.svg"
        width={10}
        height={10}
        style={{
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease-in-out",
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
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div ref={contentRef} className="py-2 pl-6">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

// Accordion Component (Now accepts children)
export const Accordion = ({ children }: AccordionProps) => {
  return <div className="grid gap-4">{children}</div>
}

// AccordionItem Component
export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const toggle = () => {
    setIsSelected((prev) => !prev)
  }

  return (
    <div className="accordion-wrapper w-full bg-white shadow-md py-4 px-6 rounded-xl">
      {/* Accordion Header */}
      <div
        onClick={toggle}
        className="cursor-pointer py-2 flex gap-4 items-center"
      >
        <RightArrow isOpen={isSelected} />
        <h2 className="font-bold text-lg text-gray-800 font-jakarta">
          {title}
        </h2>
      </div>

      {/* Accordion Content */}
      <AccordionContent isSelected={isSelected}>{children}</AccordionContent>
    </div>
  )
}

export default Accordion
