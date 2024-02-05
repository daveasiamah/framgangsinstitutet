import Image from "next/image"
import React from "react"
import { BsPatchCheckFill } from "react-icons/bs"

type Props = {
  data: {
    imageUrl: string
    message: string
    name: string
    position: string
  }
  isActive: boolean
}

export default function TestimonyCard({ data }: Props) {
  return (
    <div className="bg-primary text-white p-8 pt-20 lg:p-10 lg:pt-20 rounded-[2rem] btn-shadow text-center relative">
      <div className="avatar mb-6 absolute left-1/2 transform -translate-x-1/2 -top-14">
        <div className="w-28 rounded-full overflow-hidden relative border-8 border-gray-800">
          <Image fill alt="avatar" src={data.imageUrl} />
        </div>
      </div>
      <p>{data.message}</p>
      <hr className="w-24 mx-auto my-2" />
      <h3 className="mb-2">{data.name}</h3>
      <p className="flex justify-center items-center gap-1 text-sm">
        {data.position} <BsPatchCheckFill size={18} />{" "}
      </p>
    </div>
  )
}
