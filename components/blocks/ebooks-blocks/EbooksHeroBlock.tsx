import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import React from "react"
import { EbooksHeroHighlights } from "./EbooksHeroHighlights"
import EbookPageTitle from "@/components/parts/EbookPageTitle"

export default function EbooksHeroBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="relative hero-height flex w-full flex-col justify-between items-center gap-10 pt-10 mb-16">
      <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col items-center">
        {/* Container always visible, background only from md and above */}
        <div className="flex flex-col items-center w-full justify-center bg-none md:bg-[url('/images/pricing/store-hero-bg.svg')] md:bg-cover md:bg-center md:bg-no-repeat">
          <ScrollReveal className="flex justify-center">
            <Image
              src="/prebuilt-store-icon.png"
              className="w-[38px] h-[38px] md:w-[70px] md:h-[70px] mb-5"
              width={70}
              height={70}
              alt="store-icon"
            />
          </ScrollReveal>

          <EbookPageTitle
            blackText={"E-böcker & "}
            blueText={"Studiematerial"}
          />
          <div className="text-[#707BA0] font-inter max-w-[760px] text-[0.875rem] md:text-sm text-center px-2 mb-6">
            Våra e-böcker och studiematerial är skapade för att ge dig den
            kunskap och de insikter du behöver för att utvecklas, både
            professionellt och personligt. Med flexibla och lättillgängliga
            resurser kan du studera i din egen takt, när och var det passar dig.
            <br />
            <br /> Oavsett om du vill fördjupa dina kunskaper, hitta nya
            strategier eller inspireras till nästa steg i din utveckling, har vi
            materialet som hjälper dig framåt.
          </div>
          <EbooksHeroHighlights />
        </div>
      </div>
    </section>
  )
}
