import React from "react"
import Image from "next/image"
import { HiOutlineClock } from "react-icons/hi"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Blog({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.blogData.metaData.title}>
      <section className="relative py-8 lg:py-16">
        <BlurCircle positionClassName="left-[-12rem] top-[2rem]" size="lg" />
        <LineGraphic
          positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="left-[1rem] top-[1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="right-[1rem] top-[1rem] lg:top-[4rem] lg:right-[16rem]" />
        <CacingOne
          positionClassName="left-[-12rem] 2xl:left-[-8rem] rotate-[-40deg] top-[2rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.blogData.blogTitle}
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.blogData.blogSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="relative isolate overflow-hidden p-6 lg:p-8 bg-base-200 rounded-2xl lg:rounded-[2rem]">
        <BlurCircle positionClassName="bottom-[2rem] right-[2rem]" size="md" />
        <LineGraphic
          positionClassname="left-[-2rem] bottom-[-8rem]"
          className="svg-primary"
        />

        <ScrollReveal className="bg-primary rounded-xl lg:rounded-[1rem] p-6 lg:p-12 text-white relative isolate w-full">
          <h3 className="font-light mb-2">{t.blogData.companyLabel}</h3>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">
            {t.blogData.companyTitle}
          </h2>
          <p>{t.blogData.companySubtitle}</p>

          <div className="triangle bg-primary w-56 h-32 absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-[-1]"></div>
        </ScrollReveal>
        <div className="bg-glass p-3 rounded-full rounded-tl-none mt-20 w-fit mx-auto">
          <div className="bg-white h-14 flex items-center gap-2 py-2 px-3 rounded-full rounded-tl-none text-sm">
            <div className="relative bg-primary rounded-full h-[40px] w-[40px]">
              <Image
                src="/images/about/1-dominic.png"
                width={60}
                height={60}
                alt="avatar"
                className="absolute -top-2 left-0"
              />
            </div>
            {t.blogData.companyBottomCard}
          </div>
        </div>
      </section>

      <section className="py-16 mb-16">
        <ScrollReveal>
          <Title
            blackText={t.blogData.articleBlackTitle}
            blueText={t.blogData.articleBlueTitle}
            className="text-left"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {t.blogData.blogData.map((data) => (
            <ScrollReveal
              key={data.id}
              className="bg-white grid justify-between hover:bg-base-200 p-4 cursor-pointer transition-all duration-150"
            >
              <div>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={data.imageUrl}
                    fill
                    alt="blog"
                    className="absolute object-cover"
                  />
                </div>
                <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                  {data.title}
                </h1>
                <p className="text-subtitle mb-3">{data.subtitle}</p>
                <p className="text-subtitle text-sm mt-auto flex items-center gap-2">
                  <HiOutlineClock size={20} />
                  {data.date}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative isolate bg-primary text-white p-8 lg:py-14 lg:px-16 mb-16 lg:mb-20 rounded-[3rem]">
        <LineGraphic
          positionClassname="right-[-12rem] bottom-[-6rem] lg:right-[-8rem] 2xl:right-[-10rem] lg:bottom-[-4rem]"
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
            blackText={t.blogData.keepYourselfTitle}
            className="text-left text-[24px]"
          />
          <p>{t.blogData.keepYourselfSubtitle}</p>
          <div className="mt-4 lg:mt-10">
            <input
              type="text"
              placeholder="Skriv in din e-postadress"
              className="pl-4 pr-10 py-3 rounded-lg mr-2 text-subtitle-dark focus:outline-primary"
            />
            <button className="btn bg-primary text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary">
              {t.blogData.keepYourselfButton}
            </button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
