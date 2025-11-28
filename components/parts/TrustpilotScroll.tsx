import React, { useRef } from "react"
import Image from "next/image"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

interface TrustpilotScrollProps {
  src: string
  alt?: string
  width?: number
  height?: number
}

const TrustpilotScroll: React.FC<TrustpilotScrollProps> = ({
  src,
  alt = "Trustpilot",
  width = 600,
  height = 80,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 200
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className="relative w-full min-h-[80px] flex items-center border-2 border-red-500"
      style={{ height: height }}
    >
      {/* Left Arrow */}
      <button
        type="button"
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow p-2 md:hidden border border-gray-200"
        aria-label="Scroll left"
        onClick={() => scroll("left")}
        style={{ minWidth: 36, minHeight: 36 }}
      >
        <MdChevronLeft size={24} />
      </button>
      {/* Right Arrow */}
      <button
        type="button"
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full shadow p-2 md:hidden border border-gray-200"
        aria-label="Scroll right"
        onClick={() => scroll("right")}
        style={{ minWidth: 36, minHeight: 36 }}
      >
        <MdChevronRight size={24} />
      </button>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          className="flex md:justify-center"
          style={{ minWidth: width, width: "max-content" }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}

export default TrustpilotScroll
