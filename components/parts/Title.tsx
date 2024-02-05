import React from "react"

type Props = {
  blackText: string
  blackTexttwo?: string
  blueText?: string
  isBlock?: boolean
  className?: string
  textClassName?: string
  children?: React.ReactNode
}

export default function Title({
  blackText,
  blackTexttwo,
  blueText,
  isBlock,
  className,
  textClassName,
  children
}: Props) {
  return (
    <h1
      className={`${
        textClassName ? textClassName : "text-[26px] lg:text-[40px]"
      } leading-[2rem] lg:leading-[3rem] font-bold mb-8 ${className}`}
    >
      <span className={`${isBlock && "block"}`}>{blackText}</span>
      <span className={`text-primary `}> {blueText}</span>
      {children}
    </h1>
    
  )
}
 