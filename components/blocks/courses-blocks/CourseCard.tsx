import React, { useEffect } from "react"
import Image from "next/image"
import Skeleton from "react-loading-skeleton"

import { Course } from "./types"

const CourseCard = ({ course }: { course: Course }) => {
  const { videoInfo, shortDescription, title, tags, imageUrl } = course

  return (
    <div
      className="flex flex-col w-full sm:max-w-[345px] sm:min-w-[280px] md:min-w-[330px] lg:min-w-[426px] px-4 pt-5 pb-5 border rounded-3xl cursor-pointer overflow-hidden"
      style={{ borderColor: "#BBBBBF" }}
    >
      {/* Image Section */}
      <div className="relative h-[170px] md:h-[180px] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="course image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl drop-shadow-2xl"
          />
        ) : (
          <Skeleton height="100%" width="100%" className="mt-4 mb-2" />
        )}
        {/* Tags */}
        {tags && (
          <div className="absolute top-3 left-3 flex gap-2">
            {tags && (
              <span className="bg-blue-600 text-white text-xs font-inter font-medium py-1 px-3 rounded-full">
                {tags[0]}
              </span>
            )}
            {tags[1] && (
              <span className="bg-[#9B9B9B] text-gray-600 text-xs font-inter font-medium py-1 px-3 rounded-full">
                {tags[1]}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-2 mt-3">
        {/* Metadata */}
        <div className="flex items-center text-xs text-gray-500 font-medium gap-4">
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
        <h4 className="font-bold font-jakarta text-base md:text-lg text-gray-900 mt-4 mb-2">
          {title}
        </h4>

        {/* Description */}
        <p className="font-medium font-inter text-sm text-gray-900 line-clamp-2 overflow-hidden">
          {shortDescription}
        </p>
      </div>

      {/* Learn more */}
      <button className="w-full py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl mt-4 uppercase">
        lär dig mer
      </button>
    </div>
  )
}

export default CourseCard
