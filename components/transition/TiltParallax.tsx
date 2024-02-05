import React from "react"
import Tilt from "react-parallax-tilt"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function TiltParallax({ className, children }: Props) {
  return <Tilt className={className}>{children}</Tilt>
}
