import React, { useEffect } from "react"
import Image from "next/image"
import Skeleton from "react-loading-skeleton"
import { Ebook } from "./types"

const EbookCard = ({ ebook }: { ebook: Ebook }) => {
  const { shortDescription, title, tags, imageUrl } = ebook

  return (
    <div
      className="flex flex-col max-w-[198px] min-w-[198px] max-h-[389px] lg:min-w-[198px] lg:min-h-[398px] cursor-pointer overflow-hidden"
      style={{ borderColor: "#BBBBBF" }}
    >
      {/* Image Section */}
      <div className="relative h-[280px] md:h-[280px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="ebook image"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Skeleton height="281px" width="100%" className="mt-4 mb-2" />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-2">
        {/* Description */}
        <p className="font-medium text-sm md:text-[0.875rem] text-[#151E3A] line-clamp-2 overflow-hidden">
          Entreprenörskap och företagsetablering
        </p>
      </div>

      {/* Learn more */}
      <button className="w-full py-3 lg:py-3 bg-[#225AEA] text-white text-sm rounded-xl mt-2">
        <p className="font-semibold">Köp för 159 kr</p>
      </button>
    </div>
  )
}

export default EbookCard
