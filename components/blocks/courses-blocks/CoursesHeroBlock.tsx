import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import React from "react"
import { CoursesHeroHighlights } from "./CoursesHeroHighlights"
import CoursePageTitle from "@/components/parts/CoursePageTitle"

export default function CoursesHeroBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="relative hero-height flex w-full flex-col justify-between items-center gap-10 pt-10 mb-16">
      <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col items-center">
        <div
          className="flex flex-col items-center w-full justify-center"
          style={{
            backgroundImage: `url('/images/pricing/store-hero-bg.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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

          <CoursePageTitle blackText={"Våra "} blueText={"utbildningar"} />
          <div className="text-[#707BA0] font-inter max-w-[760px] text-[0.756rem] md:text-sm text-center px-2 mb-6">
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
