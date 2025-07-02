import React from "react"

const ThankyouVidGrid = () => {
  // Sample video data - replace with your actual video sources
  const videos = [
    {
      id: 1,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Ellen Bagley - Vi började tjäna våra första tusen",
    },
    {
      id: 2,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Student Interview 2",
    },
    {
      id: 3,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Student Interview 3",
    },
    {
      id: 4,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Student Interview 4",
    },
    {
      id: 5,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Student Interview 5",
    },
    {
      id: 6,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "Student Interview 6",
    },
    {
      id: 7,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      title: "Student Interview 7",
    },
    {
      id: 8,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      title: "Student Interview 8",
    },
  ]

  interface Video {
    id: number
    src: string
    title: string
  }

  interface VideoCardProps {
    video: Video
    aspectRatio?: string
  }

  const VideoCard: React.FC<VideoCardProps> = ({
    video,
    aspectRatio = "56.25%",
  }) => (
    <div
      className={`relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        aspectRatio === "100%" ? "lg:h-full" : ""
      }`}
      style={{
        paddingBottom: aspectRatio === "100%" ? "56.25%" : aspectRatio,
      }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        controls
        preload="metadata"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3C/svg%3E"
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {video.title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-medium text-sm">{video.title}</h3>
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#151e3a] mb-4 leading-tight font-jakarta">
          Studentintervjuer
        </h1>
        <p className="text-base md:text-lg text-[#434c69] max-w-2xl mx-auto leading-relaxed font-inter">
          Lär känna några av våra medlemmar som omsatt miljontals kronor
          tillsammans i akademin.
        </p>
      </div>

      {/* Video Grid Container */}
      <div className="container mx-auto space-y-6">
        {/* First Row - 3 videos (1 wide + 2 equal width) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-80">
          {/* First video - wider */}
          <div className="flex-1 lg:flex-[2] lg:h-full">
            <VideoCard video={videos[0]} aspectRatio="100%" />
          </div>

          {/* Second and third videos - equal width */}
          <div className="flex-1 lg:h-full">
            <VideoCard video={videos[1]} aspectRatio="100%" />
          </div>

          <div className="flex-1 lg:h-full">
            <VideoCard video={videos[2]} aspectRatio="100%" />
          </div>
        </div>

        {/* Second Section - Flex Row */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-96">
          {/* Left Column - Contains row of 2 videos + 1 full width video */}
          <div className="flex-1 lg:flex-[2] flex flex-col gap-4 lg:h-full">
            {/* Row with 2 videos */}
            <div className="flex flex-col sm:flex-row gap-4 lg:flex-1">
              <div className="flex-1 lg:h-full">
                <VideoCard video={videos[3]} aspectRatio="100%" />
              </div>
              <div className="flex-1 lg:h-full">
                <VideoCard video={videos[4]} aspectRatio="100%" />
              </div>
            </div>

            {/* Full width video */}
            <div className="w-full lg:flex-1">
              <VideoCard video={videos[5]} aspectRatio="100%" />
            </div>
          </div>

          {/* Right Column - 2 videos stacked vertically */}
          <div className="flex-1 flex flex-col gap-4 lg:h-full">
            <div className="lg:flex-1">
              <VideoCard video={videos[6]} aspectRatio="100%" />
            </div>
            <div className="lg:flex-1">
              <VideoCard video={videos[7]} aspectRatio="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankyouVidGrid
