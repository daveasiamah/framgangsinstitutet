import React from "react"
import { motion } from "framer-motion"
import { RiShieldUserLine } from "react-icons/ri"

type Props = { positionClassName: string; colorClassName?: string }

export default function UserBadge({
  positionClassName,
  colorClassName
}: Props) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 15 }}
      animate={{ x: 0, y: 30 }}
      transition={{
        ease: "linear",
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.5
      }}
      className={`absolute ${
        colorClassName ? colorClassName : "bg-primary text-white"
      }  p-3 inline-block rounded-lg shadow-2xl ${positionClassName} `}
    >
      <RiShieldUserLine size={28} />
    </motion.div>
  )
}
