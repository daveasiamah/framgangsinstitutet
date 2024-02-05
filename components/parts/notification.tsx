import Image from "next/image"
import React from "react"

type Props = {
  data: {
    id: number
    imageUrl: string
    year: number
    title: string
    subtitle: string
  }
  isActive: boolean
}

export default function HistoryCard({ data, isActive }: Props) {
  return (
    <div>
    </div>
  )
}
