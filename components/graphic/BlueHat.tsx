import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type Props = {
  sizeClassName?: string
  positionClassName: string
  className?: string
}

export default function BlueHat({
  sizeClassName,
  positionClassName,
  className
}: Props) {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: 0, y: 20 }}
      transition={{
        ease: "linear",
        duration: 2.2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[100px] h-[100px]"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/graphics/blue-hat.png"
        alt="blue hat man"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
