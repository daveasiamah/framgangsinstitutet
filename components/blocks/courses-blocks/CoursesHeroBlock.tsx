import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import React from "react"
import Title from "@/components/parts/Title"
import { CoursesHeroHighlights } from "./CoursesHeroHighlights"

export default function CoursesHeroBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="relative hero-height pt-2 flex w-full flex-col justify-between items-center gap-10 mb-10">
      <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col items-center">
        <div
          className="flex flex-col items-center w-full justify-center"
          style={{
            backgroundImage: `url('/images/pricing/store-hero-bg.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "stretch",
            backgroundPosition: "center bottom",
          }}
        >
          <ScrollReveal className="flex justify-center">
            <Image
              src="/prebuilt-store-icon.png"
              className="w-[38px] h-[38px] md:w-[70px] md:h-[70px] mb-5"
              width={70}
              height={70}
              alt="store-icon"
            />
          </ScrollReveal>

          <h1 className="leading-[2rem] font-jakarta text-[22px] mb-4 md:text-[48px] md:leading-[3rem] font-bold">
            <p>
              Våra <span className="text-primary">utbildningar</span>
            </p>
          </h1>
          <div className="text-[#434C69] font-poppins max-w-[760px] text-[12px] md:text-base text-center px-2 mb-6">
            Vi är övertygade om att människans förmåga att växa är en
            förutsättning för utveckling av både gott ledarskap och
            medarbetarskap. På samma sätt som vi vet att samspelet mellan oss
            människor är avgörande för hur väl vi skapar resultat – vi är
            beroende av varandra.
            <br />
            <br /> Alla våra utbildningar är inriktade på att utveckla ledarskap
            med individen som utgångspunkt satt i sitt sammanhang. Välkommen att
            utvecklas tillsammans med oss!
          </div>
          <CoursesHeroHighlights />
        </div>
      </div>
    </section>
  )
}
