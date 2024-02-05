import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import Title from "@/components/parts/Title"
import ScrollReveal from "@/components/transition/ScrollReveal"
import { jobOpeningsData } from "@/assets/data/careersData"
import TiltParallax from "@/components/transition/TiltParallax"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Careers({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.careersData.metaData.title}>
      <section className="relative py-8 lg:py-12 mb-12 lg:mb-16">
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
            blackText={t.careersData.careersBlackTitle}
            blueText={t.careersData.careersBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.careersData.careersSubtitle}
          </p>
        </ScrollReveal>
        <div className="relative mt-[400px] min-h-[700px] lg:min-h-[350px] xl:min-h-[450px]">
          <Image
            src="/images/careers/careers-men.png"
            alt="careers men"
            height={300}
            width={300}
            className="absolute object-contain mx-auto -top-[23rem] left-1/2 transform -translate-x-1/2"
          />
          <div className="absolute w-full flex flex-col lg:flex-row items-center gap-10 top-0 left-0 bg-base-200 rounded-3xl p-8 lg:p-12">
            <ScrollReveal className="lg:w-2/3">
              <Title
                blackText={t.careersData.whyBlackTitle}
                blueText={t.careersData.whyBlueTitle}
                className="mx-auto"
              />
              <p className="text-subtitle">{t.careersData.whySubtitleOne}</p>
              <p className="text-subtitle mt-4">
                {t.careersData.whySubtitleTwo}
              </p>
            </ScrollReveal>
            <TiltParallax>
              <Image
                src="/images/careers/stats.png"
                alt="stats"
                height={360}
                width={360}
                className="object-contain mx-auto"
              />
            </TiltParallax>
          </div>
        </div>
      </section>

      <section className="relative mb-28">
        <CacingOne
          positionClassName="right-[-16rem] 2xl:right-[-12rem] rotate-[-40deg] top-[18rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]"
        />

        <ScrollReveal>
          <Title blackText="Jobb" blueText="Öppningar" />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 mb-20">
          {t.careersData.jobOpeningsData.map((data) => (
            <ScrollReveal
              key={data.id}
              className="flex justify-between items-center bg-white py-4 px-8 rounded-2xl job-openings-shadow"
            >
              <p className="font-bold">{data.title}</p>
              <Link href={data.link}>
                <button
                  className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-4`}
                >
                  <span className="hidden lg:inline">{data.button}</span>
                  <MdKeyboardArrowRight
                    className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
                    size={34}
                  />
                </button>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="relative bg-base-200 rounded-[2rem] p-8 lg:p-16">
          <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />

          <ScrollReveal>
            <Title
              blackText={t.careersData.embraceBlackTitle}
              isBlock
              blueText={t.careersData.embraceBlueTitle}
            />
            <p className="text-subtitle mb-6">
              {t.careersData.embraceSubtitleOne}
            </p>
            <p className="text-subtitle ">{t.careersData.embraceSubtitleTwo}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="our-culture-container bg-primary rounded-[2rem] py-8 lg:py-12 text-white relative mb-12 isolate">
        <div className="w-full lg:w-3/5 bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tr-3xl rounded-br-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">
          <ScrollReveal>
            <h2 className="text-[30px] lg:text-[40px] mb-4 font-bold">
              {t.careersData.cultureTitle}
            </h2>

            <p className="mb-6">{t.careersData.cultureSubtitleOne}</p>
            <p>{t.careersData.cultureSubtitleTwo}</p>
          </ScrollReveal>
        </div>

        <div className="absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] 2xl:h-[500px] -top-10 -right-2 lg:-top-16 lg:-right-10 z-[-1]">
          <Image
            src="/images/careers/happy-men.png"
            alt="stats"
            fill
            className="absolute object-contain"
          />
        </div>
      </section>
    </Layout>
  )
}
