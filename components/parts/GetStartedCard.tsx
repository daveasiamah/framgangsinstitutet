import React from "react"

type Props = {
  number: number
  children: React.ReactNode
}

export default function GetStartedCard({ number, children }: Props) {
  return (
    <div className="relative border-[3px] border-primary px-8 pt-20 pb-8 rounded-3xl">
      <div className="absolute -top-10 bg-primary p-3 rounded-xl btn-shadow">
        <div className="text-3xl px-4 py-3 font-bold text-white bg-white/25 rounded-lg border-2 border-white">
          {number}
        </div>
      </div>
      {children}
    </div>
  )
}
