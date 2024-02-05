import Image from "next/image"
import React from "react"

type Props = {
  sizeClassName?: string
  positionClassName: string
  svgClassname?: string
  className?: string
}

export default function FadeLogo({
  sizeClassName,
  positionClassName,
  svgClassname,
  className
}: Props) {
  return (
    <div
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[200px] h-[200px]"
      } ${
        svgClassname ? svgClassname : "svg-primary-opacity"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="checkified logo"
        fill
        className="object-contain"
      />
    </div>
  )
}
