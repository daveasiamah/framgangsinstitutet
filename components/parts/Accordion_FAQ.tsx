import React, { useState, useRef, useEffect, useCallback } from "react"

type Props = {
  data: {
    id: number
    question: string
    answer: string
  }[]
}

import Image from "next/image"

// Replace <img> with <Image> in RightArrow component
const RightArrow = React.memo(
  ({ index, selected }: { index: number; selected: number[] }) => {
    return (
      <span className="cursor-pointer inline-block">
        <Image
          src="/images/pricing/right-arrow.svg"
          width={10}
          height={10}
          style={{
            transform: selected.includes(index)
              ? "rotate(90deg)"
              : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
          alt="arrow-icon"
        />
      </span>
    )
  }
)
RightArrow.displayName = "RightArrow"

const AccordionContent = React.memo(
  ({ content, isSelected }: { content: string; isSelected: boolean }) => {
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
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

function Accordion({ data }: Props) {
  const [selected, setSelected] = useState<number[]>([])

  const toggle = useCallback((index: number) => {
    setSelected(
      (prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((item) => item !== index) // Close the item
          : [...prevSelected, index] // Open the item
    )
  }, [])

  return (
    <div className="grid gap-4">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="accordion-wrapper w-full bg-white shadow-md py-4 px-6 rounded-xl"
        >
          {/* Accordion Header */}
          <div
            onClick={() => toggle(index)}
            className="cursor-pointer py-2 flex gap-4 items-center"
          >
            <RightArrow index={index} selected={selected} />
            <h2 className="font-semibold text-lg text-gray-800 font-jakarta">
              {item.question}
            </h2>
          </div>

          {/* Accordion Content */}
          <AccordionContent
            content={item.answer}
            isSelected={selected.includes(index)} // Only animate selected items
          />
        </div>
      ))}
    </div>
  )
}

export default Accordion
