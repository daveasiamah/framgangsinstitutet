import React from "react"
import Image from "next/image"
import Skeleton from "react-loading-skeleton"
import { Ebook } from "./types"

const EbookCard = ({ ebook }: { ebook: Ebook }) => {
  const { title, price, imageUrl } = ebook

  return (
    <div className="flex flex-col cursor-pointer w-full min-h-[470px]">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={title || "Ebook cover"}
          width={236}
          height={335}
          className="w-full h-[335px] md:w-full object-cover"
        />
      ) : (
        <Skeleton height="335.06px" width="100%" className="md:h-[281px]" />
      )}

      <div className="flex flex-col flex-grow p-2">
        <p className="font-medium text-base text-[#151E3A] text-center">
          Entreprenörskap och företagsetablering
        </p>

        {/* Price Button */}
        <button className="w-full py-3 bg-[#225AEA] text-white text-sm rounded-xl mt-auto">
          <p className="font-semibold text-base font-poppins">{price}</p>
        </button>
      </div>
    </div>
  )
}

export default EbookCard
