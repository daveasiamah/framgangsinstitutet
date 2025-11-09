import React, { useRef, useState } from "react"

type Props = {
  data: {
    id: number
    question: string
    answer: string
  }[]
}

function Accordion({ data }: Props) {
  const [selected, setSelected] = useState<number[]>([])

  const ref = useRef<HTMLInputElement>(null)

  const toggle = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index))
    } else {
      setSelected([...selected, index])
    }
  }

  const isExpanded = (index: number) => selected.includes(index)

  return (
    <div className="mx-auto grid gap-6 max-w-4xl">
      {data.map((data, index) => (
        <button
          onClick={() => toggle(index)}
          key={data.id}
          className="accordion-wrapper text-left border-2 border-[#E5E5E5] bg-white py-4 px-6 rounded-lg cursor-pointer focus:border-primary transition-all w-full"
        >
          <div className="cursor-pointer py-2 flex justify-between items-center">
            <h2 className="font-semibold lg:text-lg text-subtitle-dark font-jakarta">
              {data.question}
            </h2>
            <span
              className={`${
                isExpanded(index) ? "plusminus active" : "plusminus"
              }`}
            ></span>
          </div>
          <div
            ref={ref}
            style={{
              height: isExpanded(index) ? "auto" : 0,
            }}
            className={`text-subtitle pr-4 ${
              isExpanded(index)
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
