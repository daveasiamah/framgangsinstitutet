import React from "react"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import { Autoplay, EffectCards, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRouter } from "next/router"

import ButtonArrow from "@/components/parts/ButtonArrow"
import TestimonyCard from "@/components/parts/TestimonyCard"
import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import Accordion from "@/components/parts/Accordion"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import BlurCircle from "@/components/graphic/BlurCircle"

import ScrollReveal from "@/components/transition/ScrollReveal"
import TiltParallax from "@/components/transition/TiltParallax"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {}

export default function Pricing({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.pricingData.metaData.title} isFullWidth>
      <section className="bg-primary py-8 lg:py-20">
        <div className="relative container mx-auto">
          <LineGraphic
            positionClassname="right-[-12rem] 2xl:right-[-10rem] top-[-30px]"
            className="svg-white"
          />
          <ShieldBadge positionClassName="top-[1rem] left-[1rem] lg:left-[8rem]" />
          <UserBadge
            positionClassName="top-0 lg:top-[1rem] right-[1rem] lg:right-[12rem]"
            colorClassName="bg-white text-primary"
          />

          <ScrollReveal>
            <h1
              className={`text-[26px] lg:text-[40px] leading-[2rem] lg:leading-[3rem] font-bold mb-8 mx-auto text-center`}
            >
              <span className="text-white">{t.pricingData.pricingTitle}</span>
            </h1>
            <p className="p-4 text-white text-center max-w-2xl mx-auto">
              {t.pricingData.pricingSubtitle}
            </p>
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
              {t.pricingData.pricingList.map((list) => (
                <li
                  key={list.id}
                  className="flex bg-white text-primary items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold"
                >
                  <FaCheckCircle className="text-primary" size={20} />
                  {list.text}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 md:gap-16 md:gap-y-28 lg:gap-16 mt-36">
            {t.pricingData.pricingData.map((data) => (
              <div
                key={data.id}
                className={`bg-white shadow-xl w-full relative rounded-[2rem] flex flex-col`}
              >
                {/* <div className="h-24 relative overflow-hidden rounded-t-[2rem]">
                  {data.isPopular && (
                    <div className="bg-subtitle-dark absolute text-white px-4 py-1 top-[23px] right-[-68px] text-center rotate-45 w-[200px]">
                      Popular
                    </div>
                  )}
                </div> */}

                {/* <ScrollReveal className="h-32 relative rounded-t-[2rem]">
                  {data.isPopular && (
                    <p className="bottom-0 right-8 absolute bg-base-200 text-primary rounded-lg px-4 py-2">
                      MOST POPULAR
                    </p>
                  )}
                </ScrollReveal> */}
                <div
                  className={`p-6 lg:p-10 flex-1 flex rounded-[2rem] isolate`}
                >
                  <Image
                    src={data.imageUrl}
                    alt="pricing standard"
                    height={160}
                    width={160}
                    className="absolute object-contain -top-20 left-1/2 transform -translate-x-1/2"
                  />
                  <div className="flex flex-col w-full justify-between items-center ">
                    <div className="w-full">
                      <ScrollReveal className="relative w-full overflow-hidden z-[-1] bg-base-200 rounded-2xl p-8 pt-14">
                        {data.isPopular && (
                          <div className="bg-primary absolute text-white px-4 py-1 top-[23px] right-[-68px] text-center rotate-45 w-[200px]">
                            {locale === "en" ? "Popular" : "Populärst"}
                          </div>
                        )}
                        <h2 className="text-center text-2xl font-bold mb-1">
                          {data.name}
                        </h2>
                        <p className="text-center text-primary font-bold text-2xl mb-1">
                          {data.price}
                        </p>
                        <p className="text-center font-bold">
                          {locale === "en" ? "Summary" : "Summering"}
                        </p>
                      </ScrollReveal>

                      <ScrollReveal className="text-primary text-center mt-4 font-bold text-lg">
                        {data.name === "Standard" && (
                          <span className="invisible">None</span>
                        )}
                        {data.name === "Premium" && (
                          <span>
                            {locale === "en"
                              ? "All in Standard and:"
                              : "Allt i Standard och:"}
                          </span>
                        )}
                        {data.name === "Platinum" && (
                          <span>
                            {locale === "en"
                              ? "All in Premium and:"
                              : "Allt i Premium och:"}
                          </span>
                        )}
                      </ScrollReveal>
                      <ScrollReveal>
                        <ul className="text-subtitle grid gap-4 mt-3">
                          {data.lists.map((list) => (
                            <li
                              key={list.id}
                              className="flex items-center gap-2"
                            >
                              <FaCheckCircle
                                className="text-primary"
                                size={20}
                              />{" "}
                              <p className="flex-1">{list.label}</p>
                            </li>
                          ))}
                        </ul>
                      </ScrollReveal>
                    </div>
                    <ScrollReveal className="w-full">
                      <Link
                        href="/signup"
                        className="btn btn-primary w-full mt-8"
                      >
                        {data.buttonText}
                      </Link>
                      <div className="flex items-center text-center gap-4 text-sm mt-4 font-semibold text-subtitle">
                        {/* <MdLockOutline
                          size={26}
                          className="p-[2px] border-2 border-subtitle rounded-full"
                        /> */}
                        {/* {data.secureText} */}
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-14 mb-16">
        <div className="bg-base-200 p-8 lg:py-12 rounded-[3rem] flex flex-col items-center lg:flex-row gap-12">
          <div className="relative aspect-square w-[130px] lg:w-[180px] rounded-full bg-primary mx-auto">
            <Image
              src="/icons/pricing/grammerly.png"
              alt="grammerly"
              width={90}
              height={90}
              className="absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <ScrollReveal>
            <Title
              blackText={t.pricingData.enterpriseTitle}
              className="text-left mb-[1rem]"
            />
            <p className="text-subtitle">{t.pricingData.enterpriseSubtitle}</p>
          </ScrollReveal>
          <ButtonArrow href="mailto:info@checkified.se" className="mr-auto">
            {t.pricingData.enterpriseButton}
          </ButtonArrow>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="our-culture-container flex items-center bg-primary rounded-[2rem] py-12 2xl:py-24 text-white relative mb-16 isolate xl:h-[500px] 2xl:h-auto">
          <ScrollReveal className="w-full lg:w-[55%] bg-white/10 p-8 lg:p-12 rounded-tr-3xl rounded-br-3xl backdrop-blur-xl mt-28 md:mt-48 lg:mt-0">
            <h2 className="text-[26px] lg:text-[40px] mb-4 font-bold leading-[1.2]">
              {t.pricingData.outstandingTitle}
            </h2>
            <p className="mb-6">{t.pricingData.outstandingSubtitleFirst}</p>
            <p>{t.pricingData.outstandingSubtitleSecond}</p>
          </ScrollReveal>
          <Image
            src="/images/pricing/smartphone-men.png"
            alt="smartphone men"
            height={630}
            width={630}
            priority
            className="absolute object-contain -top-[5rem] sm:top-[-14rem] md:-top-32 lg:top-[-4rem] xl:top-[-4rem] 2xl:-top-[5rem] left-1/2 lg:left-3/4 transform -translate-x-1/2 scale-[.9] sm:scale-[.6] md:scale-[.7] lg:scale-[.9] z-[-1]"
          />
        </div>
      </section>

      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="right-[-12rem] top-20" size="lg" />

        <ScrollReveal>
          <Title
            blackText={t.pricingData.studentSayBlackTitle}
            blueText={t.pricingData.studentSayBlueTitle}
            isBlock
            className="text-center mx-auto"
          />
        </ScrollReveal>

        <div className="container mx-auto mt-8 lg:mt-16 bg-base-200 pt-20 mb-10 lg:pb-24 lg:pt-32 px-10 lg:px-[20rem] rounded-[3rem] relative">
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
            {t.pricingData.studentsSayData.map((data) => (
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

      <section className="relative container mx-auto mb-16">
        <CacingOne
          positionClassName="left-[-12rem] 2xl:left-[-8rem] rotate-[-40deg] top-[12rem] lg:top-[8rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]"
        />

        <TiltParallax>
          <Image
            src="/images/pricing/bulb.png"
            alt="bulb"
            height={500}
            width={500}
            className="object-contain mx-auto mb-16"
          />
        </TiltParallax>

        <ScrollReveal>
          <Title
            blackText={t.pricingData.faqBlackTitle}
            blueText={t.pricingData.faqBlueTitle}
            className="text-center mx-auto"
          />
        </ScrollReveal>
        <Accordion data={t.pricingData.faqData} />
      </section>
    </Layout>
  )
}
