import React from "react"

type Props = {
  blackText: string
  blueText?: string
  isBlock?: boolean
  className?: string
  textClassName?: string
  children?: React.ReactNode
}

export default function Titleh6({
  blackText,
  blueText,
  isBlock,
  className,
  textClassName,
  children
}: Props) {
  return (
    <span
      className={`${
        textClassName ? textClassName : ""
      } leading-[2rem] lg:leading-[3rem] ${className}`}
    >
      <span className={`${isBlock && "block"}`}>{blackText}</span>
      <span className={`text-primary `}> {blueText}</span>
      {children}
    </span>
    
  )
}
