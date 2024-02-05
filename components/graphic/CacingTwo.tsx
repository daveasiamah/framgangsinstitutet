import Image from "next/image"
import React from "react"

type Props = {
  sizeClassName?: string
  positionClassName: string
  className?: string
}

export default function CacingTwo({
  sizeClassName,
  positionClassName,
  className
}: Props) {
  return (
    <div
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[200px] h-[200px]"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/graphics/cacing2.png"
        alt="cacing 2"
        fill
        className="object-contain drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]"
      />
    </div>
  )
}
