import { motion } from "framer-motion"
import React from "react"

type Props = {
  positionClassName: string
  size?: "sm" | "md" | "lg" | "xl"
}

export default function BlurCircle({ positionClassName, size = "lg" }: Props) {
  const blurClassName = (size: string) => {
    let result

    switch (size) {
      case "sm":
        result = "w-[100px] h-[100px] blur-[60px]"
        break
      case "md":
        result = "w-[200px] h-[200px] blur-[80px]"
        break
      case "lg":
        result = "w-[400px] h-[260px] blur-[100px]"
        break
      case "xl":
        result = "w-[400px] h-[400px] blur-[120px]"
        break
      default:
        result = "w-[200px] h-[200px] blur-[100px]"
        break
    }

    return result
  }

  return (
    <motion.div
      animate={{ x: 100, y: 100 }}
      transition={{
        ease: "easeIn",
        repeat: Infinity,
        duration: 10,
        repeatType: "reverse"
      }}
      className={`absolute z-[-1] bg-blur-circle/20 ${blurClassName(
        size
      )} ${positionClassName}`}
    ></motion.div>
  )
}
