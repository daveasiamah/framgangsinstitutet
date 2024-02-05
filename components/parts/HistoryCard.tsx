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
    <div
      className={`${
        isActive ? "bg-primary " : "bg-white"
      } px-8 py-12 rounded-[3rem] h-full grid place-content-center`}
    >
      <div
        className={`bg-primary rounded-full p-3 mb-4 w-fit mx-auto ${
          isActive && "border-4 border-white"
        }`}
      >
        <Image
          src={data.imageUrl}
          alt="history icon"
          height={80}
          width={80}
          className="object-contain"
        />
      </div>
      <p
        className={`${
          isActive ? "bg-white/30" : "bg-primary"
        } text-white text-center rounded-full px-6 py-2 w-fit mx-auto mb-6`}
      >
        {data.year}
      </p>
      <h2 className={`text-xl font-bold mb-4 ${isActive && "text-white"}`}>
        {data.title}
      </h2>
      <p className={`text-subtitle ${isActive && "text-white"}`}>
        {data.subtitle}
      </p>
    </div>
  )
}
