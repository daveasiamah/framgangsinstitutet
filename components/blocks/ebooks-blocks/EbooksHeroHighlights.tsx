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
    title: "E-böcker För Dina Studier",
    description:
      "Fler och fler hittar det smarta i att att köpa sin kurslitteratur som e-bok direkt hos oss för att läsa dem direkt i datorn, eller mobilen.",
  },
  {
    image: "/images/courses/3d-hero-image2.svg",
    title: "Varför Köpa E-böcker?",
    description:
      "E-böcker är ett miljövänligt alternativ som kontinuerligt uppdateras digitalt. Efter betalning får du livstid tillgång till din bok.",
  },
  {
    image: "/images/courses/3d-hero-image3.svg",
    title: "Hur Går Det Till?",
    description:
      "Du läser din e-bok i vår plattform, vilket gör det möjligt att läsa din kurslitteratur på flera enheter. Din dator, din surfplatta eller din mobil.",
  },
]

export const EbooksHeroHighlights: React.FC = () => {
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
