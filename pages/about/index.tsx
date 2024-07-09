import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import ButtonArrow from "@/components/parts/ButtonArrow"
import HistoryCard from "@/components/parts/HistoryCard"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import Smile from "@/components/graphic/Smile"
import BlueHat from "@/components/graphic/BlueHat"
import OrangeHat from "@/components/graphic/OrangeHat"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import FadeLogo from "@/components/graphic/FadeLogo"

import ScrollReveal from "@/components/transition/ScrollReveal"
import TiltParallax from "@/components/transition/TiltParallax"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function About({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout isFullWidth headTitle={t.aboutData.metaData.title}>
      <section className="container mx-auto relative py-10 lg:py-12 mb-12 lg:mb-32">
        <Smile
          positionClassName="top-[1%] left-[1rem] lg:left-[12%]"
          sizeClassName="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px]"
        />
        <BlueHat
          positionClassName="bottom-[-1rem] lg:bottom-[-25%] right-[1rem] lg:right-[50%]"
          sizeClassName="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]"
        />
        <OrangeHat positionClassName="top-[2rem] right-[1rem] lg:right-[14rem]" />

        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[4rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.aboutData.aboutBlackTitle}
            blueText={t.aboutData.aboutBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.aboutData.aboutSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="container mx-auto">
        <div className="our-culture-container xl:flex xl:items-center xl:min-h-[450px] bg-primary rounded-[2rem] py-10 lg:py-12 text-white relative mb-12 isolate">
          <LineGraphic
            positionClassname="right-[-13rem] lg:right-[-10rem] top-[-6rem]"
            className="svg-white"
          />

          <div className="w-full lg:w-3/5 bg-white/10 p-8 lg:p-12 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">
            <ScrollReveal>
              <h2 className="text-[30px] lg:text-[40px] mb-4 font-bold">
                {t.aboutData.aimTitle}
              </h2>

              <p className="mb-6">{t.aboutData.aimSubtitleOne}</p>
              <p>{t.aboutData.aimSubtitleTwo}</p>
            </ScrollReveal>
          </div>

          <div className="absolute w-full h-[300px] lg:w-[550px] lg:h-[550px] -top-10 -right-2 lg:-top-14 2xl:-top-20 lg:-right-10 z-[-1]">
            <Image
              src="/images/about/coffee-men.png"
              alt="stats"
              fill
              className="absolute object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="py-10 lg:py-12">
          <div className="bg-base-200 p-8 lg:p-12 rounded-[3rem]">
            <ScrollReveal>
              <Title
                blackText={t.aboutData.teamBlackTitle}
                blueText={t.aboutData.teamBlueTitle}
                className="text-left"
              />
              <p className="mb-6 text-subtitle">
                {t.aboutData.teamSubtitleOne}
              </p>
              <p className="text-subtitle">{t.aboutData.teamSubtitleTwo}</p>
              <ButtonArrow href="/signup" className="mt-8 lg:mt-10">
                {t.aboutData.teamButton}
              </ButtonArrow>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-base-100 container mx-auto  relative isolate py-10 lg:py-24 lg:mb-16">
        <div className="bg-base-200 px-8 py-10 lg:py-24 rounded-[3rem] lg:px-28 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          {t.aboutData.statsData.map((data) => (
            <div
              key={data.id}
              className="bg-primary grid justify-center items-center text-center rounded-3xl px-6 py-10"
            >
              <ScrollReveal>
                <div className="bg-white/20 p-3 rounded-full">
                  <Image
                    src={data.imageUrl}
                    width={110}
                    height={110}
                    alt={data.subtitle}
                    className="bg-white p-4 rounded-full"
                  />
                </div>
                <h2 className="text-4xl font-bold text-white mt-4 mb-3">
                  {data.title}
                </h2>
                <p className="text-white text-lg">{data.subtitle}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto">
        <div className="lg:pb-12 mb-10">
          <TiltParallax>
            <Image
              src="/images/about/vr-men.png"
              alt="virtual reality"
              height={420}
              width={420}
              className="object-contain mx-auto"
            />
          </TiltParallax>

          <ScrollReveal>
            <Title
              blackText={t.aboutData.missionBlackTitle}
              blueText={t.aboutData.missionBlueTitle}
              isBlock
              className="mx-auto text-center"
            />
            <p className="text-subtitle text-center max-w-xl mx-auto">
              {t.aboutData.missionSUbtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="relative overflow-hidden bg-base-200 p-8 lg:py-12 text-center mb-12 lg:mb-16 rounded-[3rem]">
          <LineGraphic
            positionClassname="left-[-9rem] lg:left-[-4rem] top-[-2rem]"
            className="svg-primary"
          />

          <ScrollReveal>
            <Image
              src="/icons/home/infrastructure-icon.png"
              width={100}
              height={100}
              alt="infractructure icon"
              className="mx-auto"
            />
            <Title
              blackText={t.aboutData.historyBlackTitle}
              blueText={t.aboutData.historyBlueTitle}
              isBlock
              className="mx-auto text-center"
            />
            <p className="text-subtitle text-center max-w-xl mx-auto mb-10">
              {t.aboutData.historySubtitle}
            </p>
          </ScrollReveal>

          <div className="h-[600px] lg:h-[500px] relative">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={20}
              loop={true}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 120
                }
              }}
              navigation={{
                nextEl: ".nav-right",
                prevEl: ".nav-left"
              }}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false
              // }}
              style={{ height: "100%" }}
            >
              {t.aboutData.ourHistoryData.map((data) => (
                <SwiperSlide key={data.id}>
                  {({ isActive }) => (
                    <HistoryCard data={data} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}

              <button className="hidden md:block absolute z-[1] left-1/4 top-1/2 transform -translate-y-1/2 nav-left">
                <Image
                  src="/icons/about/arrow-left.png"
                  width={30}
                  height={30}
                  alt="arrow left"
                />
              </button>
              <button className="hidden md:block absolute z-[1] right-1/4 top-1/2 transform -translate-y-1/2 nav-right">
                <Image
                  src="/icons/about/arrow-right.png"
                  width={30}
                  height={30}
                  alt="arrow left"
                />
              </button>
            </Swiper>
          </div>
        </div>
      </section>

      {/* <section className="relative isolate py-10 lg:p-12 lg:mb-16">
        <BlurCircle positionClassName="right-[-12rem] top-[10rem]" size="lg" />

        <ScrollReveal>
          <Title
            blackText="Meet Our"
            blueText="Team"
            isBlock
            className="mx-auto text-center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center">
          {ourTeamData.map((data) => (
            <TiltParallax
              key={data.id}
              className="bg-white px-8 py-10 rounded-[2rem] sosmed-card-shadow"
            >
              <div className="relative bg-primary rounded-full h-[100px] w-[100px] mx-auto">
                <Image
                  src={data.imageUrl}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="absolute top-6 left-0"
                />
              </div>
              <ScrollReveal>
                <h2 className="mt-10 mb-1 text-center font-bold text-lg">
                  {data.name}
                </h2>
                <p className="text-primary text-sm text-center">
                  {data.position}
                </p>
              </ScrollReveal>
            </TiltParallax>
          ))}
        </div>
      </section> */}

      <section className="container mx-auto">
        <div className="relative isolate bg-primary text-white p-8 lg:p-12 mb-16 lg:mb-20 rounded-2xl lg:rounded-[3rem] text-center lg:text-left">
          <BlurCircle
            positionClassName="left-[-12rem] bottom-[-3rem]"
            size="lg"
          />

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
            <Title blackText={t.aboutData.partTitle} />
            <p>{t.aboutData.partSubtitle}</p>

            <ButtonArrow href="/signup" isReverse className="mt-10">
              {t.aboutData.partButton}
            </ButtonArrow>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
