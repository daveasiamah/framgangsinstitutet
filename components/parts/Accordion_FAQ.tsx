import React, { useRef, useState } from "react"
import { FaArrowRight, FaArrowDown } from "react-icons/fa"

type Props = {
  data: {
    id: number
    question: string
    answer: string
  }[]
}

function Accordion({ data }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  const ref = useRef<HTMLInputElement>(null)

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  const RightArrow = ({ index }: { index: number }) => {
    return (
      <span>
        <img
          src="/images/pricing/right-arrow.svg"
          className={`w-[10px] h-[10px] transform transition-transform duration-300 ${
            selected === index ? "rotate-90" : ""
          }`}
          alt="arrow-icon"
        />
      </span>
    )
  }
  return (
    <div className="grid gap-6">
      {data.map((data, index) => (
        <button
          onClick={() => toggle(index)}
          key={data.id}
          className="accordion-wrapper text-left bg-white py-4 px-6 rounded-xl cursor-pointer"
        >
          <div className="cursor-pointer py-2 flex gap-4 items-center">
            <RightArrow index={index} />
            <h2 className="font-semibold text-lg text-subtitle-dark font-jakarta">
              {data.question}
            </h2>
          </div>
          <div
            ref={ref}
            style={{
              height: selected === index ? "auto" : 0,
            }}
            className={`text-subtitle pr-4 pl-6 ${
              selected === index
                ? "accordion-content show bounce-pricing"
                : "accordion-content"
            }`}
          >
            {data.answer}
          </div>
        </button>
      ))}
    </div>
  )
}

export default Accordion
