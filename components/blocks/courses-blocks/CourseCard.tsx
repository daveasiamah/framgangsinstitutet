import React from "react"
import Image from "next/image"

const CourseCard = () => {
  return (
    <div className="flex flex-col max-w-[370px] border border-[#E0E0E0] rounded-lg shadow-sm overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[160px]">
        <Image
          src="/images/blog/image-5.png" // Replace with the correct path
          alt="Shopify Course"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#225AEA] text-white text-xs font-semibold py-1 px-2 rounded-lg">
            Distans
          </span>
          <span className="bg-[#E0E0E0] text-[#434C69] text-xs font-semibold py-1 px-2 rounded-lg">
            Nyhet
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 mb-3 text-[#707BA0] text-xs">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-4.553c.281-.281.697-.453 1.164-.453H21.5m-3.822 0L19.5 5m-1.707-.707a1 1 0 011.414 0l.707.707m-2.121 0H3m1.5 3.5v13.5M3 6h18m0 0l-.75-.75M3.5 2.5L4.5 3.5m3.75 12.5a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4h-4a4 4 0 01-4-4v-4z"
              />
            </svg>
            <span>18 videos</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75V5.25c0-.621-.504-1.125-1.125-1.125h-3c-.621 0-1.125.504-1.125 1.125v13.5c0 .621.504 1.125 1.125 1.125h3c.621 0 1.125-.504 1.125-1.125v-1.5m7.5-6.75l1.414-1.414a2 2 0 010-2.828L19.5 5m0 0L15 10m4.5 0H21m-6.75 0a3 3 0 110-6h-3"
              />
            </svg>
            <span>4,5h</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19h6M9 6l.6 5.993m4.8-.085L15 6m-1.5 8.615a.75.75 0 00-.675-.375h-1.65a.75.75 0 00-.675.375m3.3-.39L12 6m0 0a2.25 2.25 0 110 4.5m.225-3.667a2.25 2.25 0 10-.225-.333m0 0L12 6.75"
              />
            </svg>
            <span>För nybörjare</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-semibold text-lg text-[#151E3A] mb-2">
          Skapa en egen hemsida (Shopify)
        </h4>

        {/* Description */}
        <p className="text-sm text-[#707BA0] mb-4">
          I den här kursen kommer du lära dig skapa en egen hemsida med
          e-handelsplattformen Shopify.
        </p>

        {/* Price */}
        <button className="w-full py-3 bg-[#225AEA] text-white font-bold text-lg rounded-lg">
          2995 SEK
        </button>
      </div>
    </div>
  )
}

export default CourseCard
