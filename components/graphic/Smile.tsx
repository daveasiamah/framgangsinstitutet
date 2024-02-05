import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type Props = {
  sizeClassName?: string
  positionClassName: string
  className?: string
}

export default function Smile({
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
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.5
      }}
      className={`absolute ${
        sizeClassName ? sizeClassName : "w-[80px] h-[80px]"
      } ${positionClassName} ${className}`}
    >
      <Image
        src="/graphics/smile.png"
        alt="smile man"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
