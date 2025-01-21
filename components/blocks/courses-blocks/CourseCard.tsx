import React, { useEffect } from "react"
import Image from "next/image"
import Skeleton from "react-loading-skeleton"

import { CourseProps } from "./types"

const CourseCard = ({ course }: { course: CourseProps }) => {
  const {
    videoInfo,
    price,
    purchaseLink,
    shortDescription,
    title,
    tags,
    imageUrl,
  } = course

  return (
    <div
      className="flex flex-col max-w-[345px] min-w-[345px] max-h-[365px] md:max-h-[433px] lg:min-w-[396px] lg:min-h-[433px] xl:min-w-[396px] xl:min-h-[433px] 2xl:min-w-[463px] 2xl:min-h-[443px] px-4 pt-5 pb-5 border rounded-[29px] overflow-hidden"
      style={{ borderColor: "#BBBBBF" }}
    >
      {/* Image Section */}
      <div className="relative h-[170px] md:h-[190px]">
        {
          <Image
            src={imageUrl}
            alt="course image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[20px] drop-shadow-2xl"
          />
        }
        {/* Tags */}
        {tags && (
          <div className="absolute top-3 left-3 flex gap-2">
            {tags.distance && (
              <span className="bg-[#225AEA] text-white text-[0.625rem] font-bold py-1 px-3 rounded-full">
                {tags?.distance}
              </span>
            )}
            {tags.new && (
              <span className="bg-[#E0E0E0] text-[#434C69] text-[0.625rem] font-bold py-1 px-3 rounded-full">
                {tags?.new}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-2 mt-3">
        {/* Metadata */}
        <div className="flex items-center text-xs text-[#707BA0] font-medium gap-4">
          {videoInfo && (
            <>
              <div className="flex items-center gap-1">
                <img
                  src={videoInfo?.icons?.count}
                  alt="videos"
                  className="w-3 h-3"
                />
                <span>{videoInfo?.count} videos</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src={videoInfo?.icons?.time}
                  alt="total time"
                  className="w-3 h-3"
                />
                <span>{videoInfo?.totalTime} h</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src={videoInfo?.icons?.level}
                  alt="level"
                  className="w-3 h-3"
                />
                <span>{videoInfo?.level}</span>
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h4 className="font-bold font-jakarta text-base md:text-[1.25rem] text-[#151E3A] mt-4 mb-2">
          {title}
        </h4>

        {/* Description */}
        <p className="font-medium text-sm md:text-[0.875rem] text-[#151E3A] line-clamp-2 overflow-hidden">
          {shortDescription}
        </p>
      </div>

      {/* Price */}
      <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
        <button className="w-full py-2 bg-[#225AEA] text-white font-semibold rounded-xl">
          {price} {"SEK"}
        </button>
      </a>
    </div>
  )
}

export default CourseCard
