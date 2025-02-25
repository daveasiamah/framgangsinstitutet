import React from "react"
import Skeleton from "react-loading-skeleton"

export const EbookCardSkeleton = () => {
  return (
    <div
      className="flex flex-col max-w-[198px] min-w-[198px] max-h-[389px] lg:min-w-[198px] lg:min-h-[398px] cursor-pointer overflow-hidden"
      style={{ borderColor: "#BBBBBF", borderWidth: "0.5px" }}
    >
      {/* Image Section */}
      <div className="relative h-[280px] md:h-[280px]">
        <Skeleton height={280} width="100%" className="mt-4 mb-2" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-2">
        <Skeleton height={20} width="80%" />
        <Skeleton height={20} width="60%" className="mt-2" />
      </div>

      {/* Learn more */}
      <Skeleton height={48} width="100%" className="mt-2 rounded-xl" />
    </div>
  )
}
