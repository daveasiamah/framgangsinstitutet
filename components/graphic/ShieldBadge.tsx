import React from "react"
import { motion } from "framer-motion"
import { BsShieldCheck } from "react-icons/bs"

type Props = {
  positionClassName: string
  className?: string
}

export default function ShieldBadge({ positionClassName, className }: Props) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: -15 }}
      animate={{ x: 0, y: 20 }}
      transition={{
        ease: "linear",
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className={`absolute bg-white p-1 inline-block rounded-lg shadow-2xl ${positionClassName} ${className}`}
    >
      <div className="bg-base-200 p-2 rounded-md">
        <BsShieldCheck size={24} className="text-primary" />
      </div>
    </motion.div>
  )
}
