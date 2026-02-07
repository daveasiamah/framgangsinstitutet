import React from "react"

function TitlePill({
  text,
  className = "",
  textClassName = "",
  style = {},
  textStyle = {},
}: {
  text?: string
  className?: string
  textClassName?: string
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
}) {
  return (
    <div
      className={`flex items-center rounded-lg bg-[#f3f6fe] justify-center align-middle self-center px-4 inset-3 shadow-inner shadow-[#3c6ce4c8] ${className}`}
      style={style}
    >
      <p
        className={`font-inter text-xs md:text-sm font-semibold py-2 text-[#235AE9] ${textClassName}`}
        style={textStyle}
      >
        {text}
      </p>
    </div>
  )
}

export default TitlePill
