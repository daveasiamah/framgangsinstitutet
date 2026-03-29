import React from "react"
import { ArrowRight } from "lucide-react"
import { useModal } from "./ModalContext"

type Props = {
  title?: string
  description?: string
  buttonText?: string
  imageSrc?: string
  showTrustpilot?: boolean
}

export default function HeroSection({
  title = "Utforska alla våra kurser",
  description = "Våra premium kurser är skapade och sammanställda av branschledande experter, vilket säkerställer att du får innehåll och support av högsta kvalitet.",
  buttonText = "Börja Nu",
  imageSrc = "/images/home/hero-image.jpg",
  showTrustpilot = true,
}: Props) {
  const { openContractForm } = useModal()
  return (
    <section className="relative bg-white py-8 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        {/* Trustpilot */}
        {showTrustpilot && (
          <div className="flex justify-center mb-4">
            <img
              src="/images/home/hero-trustpilot.png"
              alt="Trustpilot"
              width={255}
              height={33}
              className="object-contain h-[33px] w-[255px]"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-[#151E3A] text-[30px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[32px] md:leading-[44px] lg:leading-[52px] max-w-[700px] md:max-w-[550px] lg:max-w-[700px] mx-auto">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[#434C69] text-[16px] font-inter font-medium text-center mb-4 leading-relaxed max-w-[733px] mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-4">
          <button
            onClick={() => openContractForm()}
            className="px-6 py-3 md:w-64 justify-center bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm inline-flex items-center gap-2"
          >
            {buttonText} <ArrowRight size={16} />
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="relative max-w-[960px] mx-auto">
          <div className="relative rounded-[20px] overflow-hidden shadow-xl">
            <img
              src={imageSrc}
              alt="Hero image"
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
