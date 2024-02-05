import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdDescription, MdMail, MdOutlineFileDownload } from "react-icons/md"
import { FaBook, FaClipboardList } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import ScrollReveal from "@/components/transition/ScrollReveal"

import { socialMedia } from "@/assets/data/socialMedia"
import { aboutImageData } from "@/assets/data/pressData"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Press({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-15rem] lg:right-[-14rem] 2xl:right-[-12rem] top-[1rem] lg:top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="top-[1rem] right-[1rem] lg:top-[4rem] lg:right-[16rem]" />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[14rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.pressData.pressTitle}
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.pressData.pressSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className="py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 lg:mb-16">
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4">
              {t.pressData.pressCard.titleOne}
            </h2>
            <Link
              href={`mailto:${t.pressData.pressCard.infoEmail}`}
              className="flex items-center gap-2 text-subtitle justify-center"
            >
              <MdMail className="text-primary" size={24} />{" "}
              {t.pressData.pressCard.infoEmail}
            </Link>
          </ScrollReveal>
        </div>
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4">
              {t.pressData.pressCard.titleTwo}
            </h2>
            <Link
              href={`mailto:${t.pressData.pressCard.pressEmail}`}
              className="flex items-center gap-2 text-subtitle justify-center"
            >
              <MdDescription className="text-primary" size={24} />{" "}
              {t.pressData.pressCard.pressEmail}
            </Link>
          </ScrollReveal>
        </div>
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4">
              {t.pressData.pressCard.titleThree}
            </h2>
            <div className="flex items-center gap-5 justify-center">
              {socialMedia(20).map((data) => (
                <Link
                  key={data.id}
                  href={data.url}
                  target="_blank"
                  className="bg-primary rounded-full p-[6px] text-white hover:bg-primary/80"
                >
                  {data.logo}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="our-culture-container bg-primary rounded-[2rem] py-12 lg:py-16 text-white relative mb-16 isolate">
        <div className="w-full lg:w-3/5 bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">
          <ScrollReveal>
            <h2 className="text-[30px] lg:text-[40px] mb-4 font-bold">
              {t.pressData.builtTitle}
            </h2>

            <p className="mb-6">{t.pressData.builtSubtitleOne}</p>
            <p>{t.pressData.builtSubtitlTwo}</p>
          </ScrollReveal>
        </div>

        <div className="absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] xl:w-[460px] xl:h-[460px] -top-10 -right-2 lg:top-[1rem] xl:top-[-3rem] lg:-right-10 xl:right-[1rem] z-[-1]">
          <Image
            src="/images/press/pointing-men.png"
            alt="stats"
            fill
            className="absolute object-contain"
          />
        </div>
      </section>

      <section className="p-8 lg:p-12 bg-base-200 rounded-[3rem] flex flex-col items-center lg:flex-row gap-8">
        <div className="w-full lg:w-2/5 relative h-[360px]">
          <Image
            src="/icons/press/list.png"
            alt="list"
            width={180}
            height={180}
            className="absolute top-0 left-0"
          />
          <Image
            src="/icons/press/diary.png"
            alt="diary"
            width={280}
            height={280}
            className="absolute-center"
          />
          <div className="absolute -bottom-2 left-0 bg-glass p-3 rounded-full">
            <div className="bg-white h-14 flex items-center gap-2 py-2 px-3 rounded-full text-sm">
              <div className="bg-primary text-white p-2 rounded-full btn-shadow">
                <FaBook size={14} />
              </div>
              {t.pressData.skillCard}
            </div>
          </div>
          <motion.div
            initial={{ x: 0, y: 0, rotate: -15 }}
            animate={{ x: 0, y: 10 }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="absolute top-10 right-6 p-3 bg-secondary rounded-xl text-white rotate-[25deg]">
              <FaClipboardList size={28} />
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-3/5">
          <ScrollReveal>
            <Title
              blackText={t.pressData.skillBlackTitle}
              blueText={t.pressData.skillBlueTitle}
              className="text-left"
            />

            <p className="mb-6 text-subtitle">{t.pressData.skillSubtitleOne}</p>
            <p className="text-subtitle">{t.pressData.skillSubtitleTwo}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12 lg:py-16">
        <BlurCircle positionClassName="left-[-12rem] top-[-10rem]" size="lg" />

        <LineGraphic
          positionClassname="right-[-12rem] top-[6rem]"
          className="svg-primary"
        />
        <ScrollReveal>
          <Title
            blackText={t.pressData.aboutBlackTitle}
            blueText={t.pressData.aboutBlueTitle}
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.pressData.aboutSubtitle}{" "}
            <Link href="/about" className="text-primary font-bold">
              {t.pressData.aboutLink}
            </Link>
            .
          </p>
        </ScrollReveal>
        <div className="press-about-checkified grid grid-cols-1 lg:grid-cols-4 gap-10 mt-16">
          {aboutImageData.map((data) => (
            <div
              key={data.id}
              className={`w-full h-[300px] relative rounded-2xl overflow-hidden faq-card-shadow`}
            >
              <Image
                src={data.imageUrl}
                alt="about image"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-8 lg:py-12 mb-12 lg:mb-16">
        <CacingOne
          positionClassName="left-[-18rem] 2xl:left-[-10rem] rotate-[-50deg] top-[10rem] lg:top-[-5rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]"
        />
        <ScrollReveal>
          <Title
            blackText={t.pressData.brandBlackTitle}
            blueText={t.pressData.brandBlueTitle}
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-3xl mx-auto">
            {t.pressData.brandSubtitle}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-[28rem] lg:h-[18rem] my-16">
          <div className="h-full">
            <div className="h-full bg-base-200 rounded-[3rem] grid place-content-center relative overflow-hidden">
              <Image
                className="svg-primary"
                src="/logo.svg"
                alt="checkified"
                height={150}
                width={150}
              />
              <Image
                className="svg-primary-opacity absolute -bottom-10 -left-10 bg-opacity-10"
                src="/logo.svg"
                alt="checkified"
                height={200}
                width={200}
              />
            </div>
            <Link
              href="/checkified-light.zip"
              className="btn btn-link text-primary p-0 w-full mt-2 gap-2"
            >
              {t.pressData.brandDownload}
              <MdOutlineFileDownload size={20} />
            </Link>
          </div>
          <div className="h-full">
            <div className="h-full bg-primary rounded-[3rem] grid place-content-center relative overflow-hidden">
              <div className="bg-white/20 h-[150px] w-[150px] relative rounded-full ">
                <Image
                  className="svg-white absolute-center"
                  src="/logo.svg"
                  alt="checkified"
                  height={100}
                  width={100}
                />
              </div>
              <Image
                className="svg-white-opacity absolute -bottom-10 -left-10 bg-opacity-10"
                src="/logo.svg"
                alt="checkified"
                height={200}
                width={200}
              />
            </div>
            <Link
              href="/checkified-dark.zip"
              className="btn btn-link text-primary p-0 w-full mt-2 gap-2"
            >
              {t.pressData.brandDownload}
              <MdOutlineFileDownload size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative p-8 lg:p-12 bg-base-200 rounded-2xl lg:rounded-[3rem] flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 lg:mb-20">
        <BlurCircle positionClassName="right-[-10rem] top-[-10rem]" size="lg" />

        <CacingOne
          positionClassName="right-[-12rem] rotate-[-50deg] bottom-[-14rem] 2xl:bottom-[-6rem]"
          sizeClassName="w-[20rem] h-[20rem]"
          className="z-[-1]"
        />

        <div className="w-full lg:w-1/2 xl:min-h-[300px] xl:flex xl:items-center">
          <ScrollReveal>
            <Title
              blackText={t.pressData.increaseBlackTitle}
              blueText={t.pressData.increaseBlueTitle}
              className="text-left"
            />

            <p className="mb-6 text-subtitle">
              {t.pressData.increaseSubtitleOne}
            </p>
            <p className="text-subtitle">{t.pressData.increaseSubtitleTwo}</p>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 relative h-auto grid place-content-center rounded-xl overflow-hidden bg-white">
          <Image
            src="/images/press/city.png"
            alt="city"
            fill
            className="object-cover p-3 rounded-xl"
          />
        </div>
      </section>
    </Layout>
  )
}
