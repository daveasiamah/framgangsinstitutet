import React from "react"

function TitlePill({ text }: { text?: string }) {
  return (
    <div className="flex items-center rounded-lg bg-[#f3f6fe] justify-center align-middle self-center px-4 inset-3 shadow-inner shadow-[#3c6ce4c8] mb-4">
      <p className="font-inter text-xs md:text-sm font-semibold py-2 text-[#235AE9]">
        {text}
      </p>
    </div>
  )
}

export default TitlePill
