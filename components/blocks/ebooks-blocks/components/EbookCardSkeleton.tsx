import React from "react"
import Skeleton from "react-loading-skeleton"

export const EbookCardSkeleton = () => {
  return (
    <div className="flex flex-col w-full max-w-[250px] min-h-[470px] cursor-pointer border border-[#BBBBBF] overflow-hidden">
      {/* Image Skeleton */}
      <div className="w-full h-[335.06px] md:h-[281px]">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-2">
        <Skeleton height={20} width="80%" />
        <Skeleton height={20} width="60%" className="mt-2" />
      </div>

      {/* Button Skeleton */}
      <Skeleton height={48} width="100%" className="mt-auto rounded-xl" />
    </div>
  )
}
