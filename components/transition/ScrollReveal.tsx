import React from "react"
import { motion } from "framer-motion"

import { fadeBottomVariants } from "@/utils/framerMotionVariants"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function ScrollReveal({ className, children }: Props) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={fadeBottomVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
