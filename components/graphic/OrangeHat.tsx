import Image from "next/image"
import React from "react"
import { delay, motion } from "framer-motion"

type Props = {
  sizeClassName?: string
  positionClassName: string
  className?: string
}

export default function OrangeHat({
  sizeClassName,
  positionClassName,
  className
}: Props) {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: 0, y: 30 }}
      transition={{
        ease: "linear",
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.5
      }}
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[4rem] h-[4rem]"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/graphics/orange-hat.png"
        alt="orange hat man"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
