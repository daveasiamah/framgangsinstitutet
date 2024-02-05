import React, { useRef, useState } from "react"

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

  return (
    <div className="grid gap-6">
      {data.map((data, index) => (
        <button
          onClick={() => toggle(index)}
          key={data.id}
          className="accordion-wrapper text-left bg-white border border-gray-200 hover:border-primary py-4 px-6 rounded-xl cursor-pointer focus:border-primary"
        >
          <div className="cursor-pointer py-2 flex justify-between items-center">
            <h2 className="font-semibold text-lg text-subtitle-dark">
              {data.question}
            </h2>
            <span
              className={`${
                selected === index ? "plusminus active" : "plusminus"
              }`}
            ></span>
          </div>
          <div
            ref={ref}
            style={{
              height: selected === index ? "auto" : 0
            }}
            className={`text-subtitle pr-4 ${
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
