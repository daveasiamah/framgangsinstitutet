import React from "react"
import { User, Plug, Shield } from "lucide-react"
import Image from "next/image"

const MentorWhyThisWorksSection = () => {
  const features = [
    {
      icon: (
        <Image
          src="/images/mentorship/icon-1.svg"
          alt=""
          className="w-8 h-8"
          width={32}
          height={32}
        />
      ),
      title: "Det är gjort för dig",
      description:
        "Mitt personliga 8-siffriga team kommer att bygga din butik...",
    },
    {
      icon: (
        <Image
          src="/images/mentorship/icons-2.svg"
          alt=""
          className="w-8 h-8 "
          width={32}
          height={32}
        />
      ),
      title: "Det är plug-and-play",
      description:
        "Om du kan använda en Macbook är du överkvalificerad för den här affärsmodellen...",
    },
    {
      icon: (
        <Image
          src="/images/mentorship/icon-3.svg"
          alt=""
          className="w-8 h-8 "
          width={32}
          height={32}
        />
      ),
      title: "Det är bevisat",
      description:
        "Tusental människor ser framgång med vårt system varje dag...",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2 md:py-16 mt-1 mb-1">
      {/* Header */}
      <div className="text-center mb-12 font-jakarta">
        <h2 className="text-xl md:text-2xl font-jakarta font-bold text-gray-900 mb-2">
          Varför fungerar detta...
        </h2>
        <p className="text-gray-600 font-jakarta text-lg md:text-2xl font-bold">
          (när inget annat har)
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 lg:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-tranparent rounded-3xl p-6 md:p-6 border border-gray`}
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6`}
            >
              {feature.icon}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-base lg:text-[18px] font-bold text-gray-900 font-jakarta">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MentorWhyThisWorksSection
