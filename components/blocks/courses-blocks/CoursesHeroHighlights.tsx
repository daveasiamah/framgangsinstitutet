import React from "react"
import Image from "next/image"

interface HighlightData {
  image: string
  title: string
  description: string
}

const highlightData: HighlightData[] = [
  {
    image: "/images/courses/3d-hero-image1.svg",
    title: "Onlineutbildninar",
    description:
      "Vi erbjuder onlineutbildningar via Zoom och digitalt verktyg som lärstöd före, under och efter utbildningen.",
  },
  {
    image: "/images/courses/3d-hero-image2.svg",
    title: "Ledarprogram",
    description:
      "För oss har alltid ett gott ledarskap utgått från individen – det personliga ledarskapet – ett ledarskap som baseras på självkännedom.",
  },
  {
    image: "/images/courses/3d-hero-image3.svg",
    title: "Coachning",
    description:
      "Coachning frigör kraften i individen och organisationen. Hos oss finner du landets ledande konsulter för coachning av samhället.",
  },
]

export const CoursesHeroHighlights: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] w-full items-center">
      {highlightData.map((highlight, index) => (
        <div
          key={index}
          className="flex flex-col min-h-[250px]rounded-xl justify-center items-center p-4"
        >
          <div className="w-[112px] h-[126px] relative">
            <Image
              src={highlight.image}
              alt={highlight.title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h4 className="font-jakarta text-[1.6rem] md:text-[1.375rem] font-extrabold text-[#151e3a] mt-4">
            {highlight.title}
          </h4>
          <p className="font-inter font-medium text-[#707ba0] text-xs md:text-sm mt-2">
            {highlight.description}
          </p>
        </div>
      ))}
    </section>
  )
}
