import Image from "next/image"
import React from "react"

type Props = {
  sizeClassName?: string
  positionClassName: string
  svgClassname?: string
  className?: string
}

export default function HalfCircle({
  sizeClassName,
  positionClassName,
  svgClassname,
  className
}: Props) {
  return (
    <div
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[200px] h-[200px]"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/graphics/half-circle.svg"
        alt="checkified logo"
        fill
        className="object-contain"
      />
    </div>
  )
}
