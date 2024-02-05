import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import GetStartedCard from "@/components/parts/GetStartedCard"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import ScrollReveal from "@/components/transition/ScrollReveal"

import TiltParallax from "@/components/transition/TiltParallax"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Affiliate({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.affiliateData.metaData.title}>
      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-15rem] lg:right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="top-[1rem] right-[1rem] lg:top-[4rem] lg:right-[16rem]" />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[4rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.affiliateData.affiliateBlackTitle}
            blueText={t.affiliateData.affiliateBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.affiliateData.affiliateSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center bg-base-200 p-8 lg:p-10 rounded-2xl lg:rounded-[3rem]">
          <TiltParallax className="w-full lg:w-2/5 relative">
            <Image
              src="/images/affiliate/stats.png"
              alt="graph"
              height={450}
              width={450}
              className="object-contain mx-auto"
            />
          </TiltParallax>

          <ScrollReveal className="w-full lg:w-3/5">
            <Title
              blackText={t.affiliateData.joinBlackTitle}
              blueText={t.affiliateData.joinBlueTitle}
              className="text-left"
            />
            <p className="mb-16 text-subtitle">
              {t.affiliateData.joinSubtitle}
            </p>

            <Link
              href="https://forms.gle/oSwzAizL1uiR5Ds16"
              className="btn btn-primary w-full lg:w-auto"
            >
              {t.affiliateData.joinButton}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="bg-primary text-white p-8 lg:py-14 lg:px-16 rounded-2xl lg:rounded-[3rem] relative">
          <LineGraphic
            positionClassname="right-[-12rem] lg:right-[-8rem] 2xl:right-[-10rem] bottom-[-4rem]"
            className="svg-white"
          />

          <ScrollReveal>
            <Title
              blackText={t.affiliateData.benefitTitle}
              className="text-left"
            />

            <p className="mb-6">{t.affiliateData.benefitSubtitleFirst}</p>
            <p className="mb-6">{t.affiliateData.benefitSubtitleSecond}</p>
            <p>{t.affiliateData.benefitSubtitleThird}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <ScrollReveal>
          <Title
            blackText={t.affiliateData.whyJoinBlackTitle}
            blueText={t.affiliateData.whyJoinBlueTitle}
            isBlock
            className="text-center mx-auto"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.affiliateData.affiliateData.map((data) => (
            <div key={data.id}>
              <ScrollReveal className="bg-white p-10 rounded-[2rem] feature-card-shadow text-center">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  height={100}
                  width={100}
                  className="object-contain mx-auto mb-10"
                />
                <h3 className="text-lg font-bold mb-6">{data.title}</h3>
                <p className="text-subtitle">{data.subtitle}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden p-8 lg:p-12 bg-base-200 rounded-2xl lg:rounded-[3rem]">
        <BlurCircle positionClassName="left-[1rem] top-[1rem]" size="lg" />
        <BlurCircle positionClassName="right-[1rem] top-[30%]" size="lg" />
        <BlurCircle positionClassName="left-[1rem] top-[50%]" size="lg" />
        <BlurCircle positionClassName="right-[1rem] bottom-[1rem]" size="lg" />

        <LineGraphic
          positionClassname="right-[-13rem] lg:right-[-10rem] top-[2%]"
          className="svg-primary"
        />
        <LineGraphic
          positionClassname="right-[-13rem] lg:right-[-10rem] bottom-[2rem]"
          className="svg-primary"
        />

        {/* <CacingOne
          positionClassName="left-[-14rem] rotate-[110deg] top-[44%]"
          sizeClassName="w-[27rem] h-[27rem]"
          className="z-[-1]"
        /> */}

        <ScrollReveal>
          <h3 className="text-primary font-semibold text-center mb-4">
            {t.affiliateData.guideLabel}
          </h3>
          <Title
            blackText={t.affiliateData.guideBlackTitle}
            blueText={t.affiliateData.guideBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.affiliateData.guideSubtitle}
          </p>
        </ScrollReveal>
        <div className="affiliate-get-started grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
          <GetStartedCard number={1}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.firstTitle}
            </h2>
            <p className="text-subtitle-dark mb-6">
              {t.affiliateData.guideData.firstSubtitle}
            </p>
            <Link
              href="https://forms.gle/oSwzAizL1uiR5Ds16"
              className="btn btn-link text-primary p-0 hover:text-primary/80"
            >
              {t.affiliateData.guideData.firstLink}
            </Link>
          </GetStartedCard>

          <GetStartedCard number={2}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.secondTitle}
            </h2>
            <p className="text-subtitle-dark mb-6">
              {t.affiliateData.guideData.secondSubtitleOne}
            </p>
            <p className="text-subtitle-dark">
              {t.affiliateData.guideData.secondSubtitleTwo}
            </p>
          </GetStartedCard>

          <GetStartedCard number={3}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.thirdTitle}
            </h2>
            <p className="text-subtitle-dark">
              {t.affiliateData.guideData.thirdSubtitle}
            </p>
          </GetStartedCard>

          <GetStartedCard number={4}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.fourthTitle}
            </h2>
            <p className="text-subtitle-dark">
              {t.affiliateData.guideData.thirdSubtitle}
            </p>
          </GetStartedCard>

          <GetStartedCard number={5}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.fifthTitle}
            </h2>
            <p className="text-subtitle-dark mb-6">
              {t.affiliateData.guideData.fifthSubtitleOne}
            </p>
            <p className="text-subtitle-dark">
              {t.affiliateData.guideData.fifthSubtitleTwo}
            </p>
          </GetStartedCard>

          <GetStartedCard number={6}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.sixthTitle}
            </h2>
            <p className="text-subtitle-dark mb-6">
              {t.affiliateData.guideData.sixthSubtitleOne}
            </p>
            <p className="text-subtitle-dark">
              {t.affiliateData.guideData.sixthSubtitleTwo}
            </p>
          </GetStartedCard>

          <GetStartedCard number={7}>
            <h2 className="font-bold text-xl mb-3">
              {t.affiliateData.guideData.seventhTitle}
            </h2>
            <ul className="list-disc pl-4 grid gap-2">
              {t.affiliateData.guideData.seventhList.map((list) => (
                <li key={list.id}>{list.text}</li>
              ))}
            </ul>
          </GetStartedCard>
        </div>
      </section>

      <section className="relative py-12 lg:py-16">
        <CacingOne
          positionClassName="right-[-20rem] lg:right-[-16rem] rotate-[-50deg] bottom-[-10rem] 2xl:bottom-[-6rem]"
          sizeClassName="w-[25rem] h-[25rem]"
        />

        <ScrollReveal className="bg-base-200 p-8 lg:p-12 rounded-2xl lg:rounded-[3rem]">
          <Title
            blackText={t.affiliateData.getStartedBlackTitle}
            blueText={t.affiliateData.getStartedBlueTitle}
            className="text-left"
          />
          <p className="mb-10 text-subtitle">
            {t.affiliateData.getStartedSubtitle}
          </p>
          <Link
            href="https://forms.gle/oSwzAizL1uiR5Ds16"
            className="btn btn-primary"
          >
            {t.affiliateData.getStartedButton}
          </Link>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
