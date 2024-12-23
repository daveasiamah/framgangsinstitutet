import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import React from "react"

export default function PricingHeroBlock({
  openModal,
}: {
  openModal: () => void
}) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="relative hero-height pt-8 flex flex-col justify-between items-center gap-10 mb-10">
      <div className="w-full text-center mb-6 lg:mb-0 flex flex-col items-center">
        <div
          className="flex flex-col items-center w-full justify-center"
          style={{
            backgroundImage: `url('/images/pricing/store-hero-bg.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "center bottom",
          }}
        >
          <ScrollReveal className="flex justify-center">
            <Image
              src="/prebuilt-store-icon.png"
              width={70}
              height={70}
              alt="store-icon"
            />
          </ScrollReveal>
          <div className="max-w-5xl h-auto flex items-center justify-center text-center px-5 mb-6">
            <h1 className="text-[22px] md:text-[48px] font-bold font-jakarta">
              {t.pricingData.hero.title}
            </h1>
          </div>
          <div className="text-[#434C69] font-poppins max-w-[742px] text-[12px] md:text-base text-center px-2 mb-6">
            {t.pricingData.hero.desc}
          </div>

          <div className="flex flex-col justify-center bg-[#EDF5FED9] rounded-[15px] p-[17px] w-full max-w-[739px] h-auto max-h-[450px] relative overflow-hidden">
            {/* Play Video Overlay */}
            <div
              className="absolute bg-[#225AEA] text-white flex items-center justify-center z-10 px-4"
              style={{
                width: "calc(100% - 32px)",
                height: "23px",
                top: "14px",
                left: "16px",
                borderRadius: "2px 0px 0px 0px",
              }}
            >
              <Image
                src="/icons/home/video-play-sm.svg"
                alt="play video"
                width={16}
                height={16}
              />
              <h3 className="text-[8px] md:text-[10px] lg:text-sm ml-2">
                {t.homeData.heroVideoDesc}
              </h3>
            </div>

            {/* Hero Image */}
            <Image
              src="/store_hero_image.png"
              alt="hero-image"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              width={706}
              height={423}
              className="rounded-[15px] z-0"
            />
          </div>
        </div>
        <div className="icons-container_ann hidden md:block lg:block w-full mt-2">
          <div className="icon-section_ann font-inter">
            <span className="font-inter">
              <img src="/img/calender.svg" alt="svg" />
              Prova gratis idag
            </span>
            <span className="font-inter">
              <img src="/img/hand.svg" alt="svg" />
              100% riskfritt
            </span>
            <span className="font-inter">
              <img src="/img/check.svg" alt="svg" />
              Verifierade partners
            </span>
          </div>
        </div>
        {/* Button */}
        <div className="mt-2 mb-5 lg:mt-8 flex items-center justify-center">
          <button
            onClick={openModal}
            className="text-[#fff] bg-[#225AEA] font-jakarta py-3 px-6 rounded-[7px] shadow-inner button-shadow"
            style={{
              boxShadow: `
            inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
            inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)`,
            }}
          >
            <p className="font-[600] text-xs md:text-[16px] font-jakarta">
              {t.headerData.getStarted}
            </p>
          </button>
        </div>
        {/* Horizontal line */}
        <Image
          src="/horizontal-line.png"
          className="w-[726px] hidden md:block mb-2"
          width={100}
          height={100}
          alt="hr"
        />
        {/* Payment options */}
        <Image
          src="/e-payments.svg"
          className="w-[577px] hidden md:block"
          width={577}
          height={31}
          alt="payment-options"
        />
      </div>
    </section>
  )
}
