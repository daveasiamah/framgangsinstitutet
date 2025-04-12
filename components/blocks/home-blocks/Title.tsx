import React from "react"

type Props = {
  blackText: string
  blueText?: string
  isBlock?: boolean
  className?: string
  textClassName?: string
  textSize?: string
}

const Title: React.FC<Props> = ({
  blackText,
  blueText,
  isBlock,
  textClassName,
  textSize,
}) => {
  const baseTextClass =
    textClassName ??
    `${
      textSize ? textSize : "text-[34px]"
    } md:text-[45px] leading-[35px] font-jakarta font-bold text-center mb-4 md:mb-6 md:leading-[45px]`

  return (
    <h1 className={baseTextClass}>
      <span className={`${isBlock ? "block" : "inline"} font-jakarta`}>
        {blackText}
      </span>
      {blueText && (
        <span
          className={`
            font-jakarta text-[#225AEA] 
            ${isBlock ? "block mt-[4px] md:mt-2" : "inline"}
          `}
        >
          {blueText}
        </span>
      )}
    </h1>
  )
}

export default Title
