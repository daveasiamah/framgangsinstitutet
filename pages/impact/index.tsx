import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRouter } from "next/router"

// import required modules
import { Autoplay, EffectCards, Navigation } from "swiper"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import ButtonArrow from "@/components/parts/ButtonArrow"
import TestimonyCard from "@/components/parts/TestimonyCard"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import FadeLogo from "@/components/graphic/FadeLogo"

import TiltParallax from "@/components/transition/TiltParallax"
import ScrollReveal from "@/components/transition/ScrollReveal"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Impact({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.impactData.metaData.title}>
      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-15rem] lg:right-[-14rem] 2xl:right-[-12rem] top-[1rem] lg:top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[-1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="top-[1rem] right-[-1rem] lg:top-[4rem] lg:right-[16rem]" />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[14rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.impactData.impactBlackTitle}
            blueText={t.impactData.impactBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.impactData.impactSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="flex flex-col items-center gap-10 lg:flex-row bg-base-200 p-8 lg:p-12 rounded-[3rem] mb-12 lg:mb-16">
        <div className="w-full lg:w-3/5">
          <ScrollReveal>
            <Title
              blackText={t.impactData.comprehenBlackTitle}
              blueText={t.impactData.comprehenBlueTitle}
              className="text-left"
            />

            <p className="mb-6 text-subtitle">
              {t.impactData.comprehenSubtitleOne}
            </p>
            <p className="text-subtitle">{t.impactData.comprehenSubtitleTwo}</p>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-2/5">
          <TiltParallax>
            <Image
              src="/icons/impact/graph.png"
              alt="graph"
              height={450}
              width={450}
              className="object-contain mx-auto"
            />
          </TiltParallax>
        </div>
      </section>

      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="right-[-12rem] top-20" size="lg" />

        <ScrollReveal>
          <Title
            blackText={t.impactData.studentSayBlackTitle}
            blueText={t.impactData.studentSayBlueTitle}
            isBlock
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <div className="mt-8 lg:mt-16 bg-base-200 pt-20 mb-10 lg:pb-24 lg:pt-32 px-10 lg:px-[20rem] rounded-[3rem] relative">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Navigation, Autoplay]}
            className="testimony-swiper"
            navigation={{
              nextEl: ".nav-right",
              prevEl: ".nav-left"
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {t.impactData.studentsSayData.map((data) => (
              <SwiperSlide key={data.id}>
                {({ isActive }) => (
                  <TestimonyCard data={data} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
            <button className="hidden lg:block absolute z-[1] -left-40 top-1/2 transform -translate-y-1/2 nav-left">
              <Image
                src="/icons/impact/arrow-left.png"
                width={80}
                height={80}
                alt="arrow left"
              />
            </button>
            <button className="hidden lg:block absolute z-[1] -right-40 top-1/2 transform -translate-y-1/2 nav-right">
              <Image
                src="/icons/impact/arrow-right.png"
                width={80}
                height={80}
                alt="arrow left"
              />
            </button>
          </Swiper>
        </div>
      </section>

      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="left-[-12rem] bottom-0" size="lg" />
        <CacingOne
          positionClassName="left-[-14rem] 2xl:left-[-6rem] rotate-[-50deg] top-[-12rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]"
        />

        <div className="bg-primary text-white p-8 pt-24 lg:p-12 rounded-[3rem] relative">
          <Image
            src="/icons/impact/puzzel.png"
            width={200}
            height={200}
            alt="puzzel"
            className="absolute -top-16 -right-10"
          />

          <ScrollReveal>
            <Title
              blackText={t.impactData.assistTitle}
              className="text-left lg:w-[700px] custom-mb-0"
              
            />
            <Title
              blackText={t.impactData.assistTitleTwo}
              className="text-left lg:w-[900px]"
            />
            <p className="mb-6">{t.impactData.assistSubtitleOne}</p>
            <p>{t.impactData.assistSubtitleTwo}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 mb-12">
        <BlurCircle positionClassName="right-[-12rem] top-[6rem]" size="lg" />

        <TiltParallax>
          <Image
            src="/icons/impact/stats.png"
            alt="virtual reality"
            height={380}
            width={380}
            className="object-contain mx-auto mb-10"
          />
        </TiltParallax>

        <ScrollReveal>
          <Title
            blackText={t.impactData.reprocityBlackTitle}
            blueText={t.impactData.reprocityBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.impactData.reprocitySubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="relative isolate bg-primary text-white p-8 lg:p-12 rounded-[3rem]">
        <LineGraphic
          positionClassname="right-[-12rem] lg:right-[-8rem] 2xl:right-[-10rem] bottom-[-4rem]"
          className="svg-white"
        />
        <FadeLogo
          positionClassName="left-[-2rem] bottom-[-2rem]"
          svgClassname="svg-white-opacity"
          sizeClassName="w-[20rem] h-[20rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
       
          <Title
            blackText={t.impactData.readyTitle}
            className="text-left xl:max-w-[900px] 2xl:max-w-full custom-mb-0"
          />
          <Title
            blackText={t.impactData.readyTitletwo}
            className="text-left xl:max-w-[900px] 2xl:max-w-full"/>
         
          <ButtonArrow href="/signup" isReverse className="mt-10">
            {t.impactData.readyButton}
          </ButtonArrow>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
