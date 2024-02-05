import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type Props = {
  positionClassname: string
  sizeClassName?: string
  className?: string
}

export default function LineGraphic({
  positionClassname,
  sizeClassName,
  className
}: Props) {
  return (
    <div
      className={`absolute h-[300px] min-h-fit ${
        sizeClassName ? sizeClassName : "w-[240px]"
      }  ${positionClassname} ${className}`}
    >
      <div className="relative h-full w-full">
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0.2 }}
          animate={{ x: 2, y: 20, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 10,
            opacity: {
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            },
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[85%] aspect-square"
        >
          <Image
            src="/graphics/ellipse.svg"
            alt="ellipse"
            fill
            className="object-contain rotate-90"
          />
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 20, opacity: 0.2 }}
          animate={{ x: 0, y: -10, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 10,
            opacity: {
              duration: 8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            },
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[80%] aspect-square bottom-0"
        >
          <Image
            src="/graphics/circle.svg"
            alt="circle"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  )
}
