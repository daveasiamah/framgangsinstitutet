import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useModal } from "./ModalContext"

type Props = {
  title?: string
  description?: string
  buttonText?: string
  imageSrc?: string
  videoId?: string
  showTrustpilot?: boolean
}

export default function HeroSection({
  title = "Ta kontroll över ditt liv med Checkified",
  description = "Få mer frihet i vardagen genom att starta ditt eget e-handelsföretag. Följ över 1000 svenskar som redan upptäckt friheten med digitalt arbete. Ta det smarta steget, utbilda dig via framtidens skola och börja se resultat samtidigt som du lär dig.",
  buttonText = "Se intro guide här",
  imageSrc = "/images/home-hero-image.png",
  showTrustpilot = true,
}: Props) {
  const { openContractForm } = useModal()
  return (
    <section className="relative bg-white py-12 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        {/* Trustpilot */}
        {showTrustpilot && (
          <div className="flex justify-center mb-8">
            <Image
              src="/icons/trustpilot-badge.svg"
              alt="Trustpilot"
              width={255}
              height={33}
              className="object-contain"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-[#151E3A] text-[32px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-tight max-w-[700px] mx-auto">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[#434C69] text-[12px] md:text-[14px] lg:text-[14px] font-inter font-medium text-center mb-8 leading-relaxed max-w-[733px] mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-12">
          <button
            onClick={() => openContractForm()}
            className="px-6 py-3 bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm inline-flex items-center gap-2"
          >
            {buttonText} <ArrowRight size={16} />
          </button>
        </div>

        {/* Video/Image Section */}
        <div className="relative max-w-[960px] mx-auto">
          <div className="relative rounded-[20px] overflow-hidden shadow-xl">
            <Image
              src={imageSrc}
              alt="Hero"
              width={960}
              height={540}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
