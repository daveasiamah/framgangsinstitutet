import React, { useState } from "react"

type Props = {
  data: {
    id: number
    question: string
    answer: string
  }[]
}

function Accordion({ data }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index)
  }

  return (
    <div className="mx-auto grid gap-3 mb-6 max-w-4xl">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="accordion-wrapper text-left bg-white px-6 shadow-sm rounded-lg cursor-pointer"
        >
          <div
            className="cursor-pointer py-4 flex items-center gap-4"
            onClick={() => toggle(index)}
          >
            <img
              src="/images/pricing/right-arrow.svg"
              className={`w-[10px] h-[10px] transform transition-transform duration-300 ${
                selected === index ? "rotate-90" : ""
              }`}
              alt="arrow-icon"
            />
            <h2 className="font-semibold lg:text-lg text-subtitle-dark font-jakarta">
              {item.question}
            </h2>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out`}
            style={{
              maxHeight: selected === index ? "1000px" : "0",
              paddingBottom: selected === index ? "16px" : "0px",
            }}
          >
            <p className="text-[12px] md:text-[14px] ml-6 mt-2">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
