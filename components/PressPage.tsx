import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdDescription, MdMail, MdOutlineFileDownload } from "react-icons/md"
import { FaBook, FaClipboardList } from "react-icons/fa"

import { socialMedia } from "@/assets/data/socialMedia"
import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"

const aboutImageData: { id: number; imageUrl: string }[] = [
  {
    id: 1,
    imageUrl: "/images/press/image-1.png"
  },
  {
    id: 2,
    imageUrl: "/images/press/image-2.png"
  },
  {
    id: 3,
    imageUrl: "/images/press/image-3.png"
  },
  {
    id: 4,
    imageUrl: "/images/press/image-4.png"
  }
]

type Props = {}

export default function Press({}: Props) {
  return (
    <Layout headTitle="Press">
      <section className="relative py-8 lg:py-12">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="top-[6rem] left-[8rem]" />
        <UserBadge positionClassName="top-[4rem] right-[16rem]" />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[14rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <Title blackText="Press" className="mx-auto text-center" />
        <p className="text-subtitle text-center max-w-xl mx-auto">
          News, announcements, and insights about Checkified.
        </p>
      </section>

      <section className="py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 lg:mb-16">
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex items-center gap-2 text-subtitle justify-center">
            <MdMail className="text-primary" size={24} /> info@checkified.io
          </div>
        </div>
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">News</h2>
          <div className="flex items-center gap-2 text-subtitle justify-center">
            <MdDescription className="text-primary" size={24} />{" "}
            press@checkified.io
          </div>
        </div>
        <div className="p-8 shadow-xl bg-white rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
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
        </div>
      </section>

      <section className="our-culture-container bg-primary rounded-[2rem] py-12 lg:py-16 text-white relative mb-16 isolate">
        <div className="w-full lg:w-3/5 bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">
          <h2 className="text-[30px] lg:text-[40px] mb-4 font-bold">
            Built for Entrepreneurs
          </h2>

          <p className="mb-6">
            Checkified takes great pleasure in unveiling its latest offering: a
            course on dropshipping targeted at entrepreneurs.
          </p>
          <p>
            The curriculum aims to equip entrepreneurs with the necessary
            knowledge to establish and manage successful dropshipping
            businesses.
          </p>
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
              Checkified University
            </div>
          </div>
          <div className="absolute top-0 right-4 p-3 bg-secondary rounded-xl text-white rotate-[25deg]">
            <FaClipboardList size={28} />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Title
            blackText="Skills You Will Acquire"
            blueText=" Through Checkified"
            className="text-left leading-[3rem]"
          />

          <p className="mb-6 text-subtitle">
            Checkified offers an all-encompassing course that equips learners
            with the knowledge and skills required to start and operate a
            profitable dropshipping venture.
          </p>
          <p className="text-subtitle">
            Remarkable overview of dropshipping, covering its pros and cons,
            supplier sourcing techniques, and success strategies.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <Title
          blackText="About"
          blueText="Checkified"
          className="mx-auto text-center"
        />
        <p className="text-subtitle text-center max-w-xl mx-auto">
          Take a tour of how the Checkified team works. Learn more about
          Checkified, visit our{" "}
          <Link href="/about" className="text-primary font-bold">
            About page
          </Link>
          .
        </p>
        <div className="press-about-checkified grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
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

      <section className="py-8 lg:py-16 lg:px-14 mb-16 lg:mb:20">
        <Title
          blackText="Brand"
          blueText="Assets"
          className="mx-auto text-center"
        />
        <p className="text-subtitle text-center max-w-3xl mx-auto">
          Download the authorized Checkified trademark that is suitable for both
          light and blue backgrounds. Our logo constitutes a fundamental
          component of our brand, and we request that you employ it uniformly
          and refrain from altering its orientation, hue, or any visual
          enhancements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-[72rem] lg:h-[800px] my-16">
          <div>
            <div className="h-full bg-base-200 rounded-[3rem] p-12 grid place-content-center relative overflow-hidden">
              <Image
                className="svg-primary"
                src="/logo.svg"
                alt="checkified"
                height={160}
                width={160}
              />
              <Image
                className="svg-primary-opacity absolute -bottom-10 -left-10 bg-opacity-10"
                src="/logo.svg"
                alt="checkified"
                height={230}
                width={230}
              />
            </div>
            <Link
              href="/"
              className="btn btn-link text-primary p-0 w-full mt-2 gap-2"
            >
              Download Image
              <MdOutlineFileDownload size={20} />
            </Link>
          </div>
          <div>
            <div className="h-full bg-primary rounded-[3rem] p-12 grid place-content-center relative overflow-hidden">
              <div className="bg-white/20 h-[160px] w-[160px] relativer rounded-full ">
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
                height={230}
                width={230}
              />
            </div>
            <Link
              href="/"
              className="btn btn-link text-primary p-0 w-full mt-2 gap-2"
            >
              Download Image
              <MdOutlineFileDownload size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="p-8 lg:px-14 lg:py-16 bg-base-200 rounded-2xl lg:rounded-[3rem] flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 lg:mb-20">
        <div className="w-full lg:w-1/2">
          <Title
            blackText="Increase Economic"
            blueText="Freedom"
            className="text-left"
          />

          <p className="mb-6 text-subtitle">
            Checkified offers an all-encompassing course that equips learners
            with the knowledge and skills required to start and operate a
            profitable dropshipping venture.
          </p>
          <p className="text-subtitle">
            Remarkable overview of dropshipping, covering its pros and cons,
            supplier sourcing techniques, and success strategies.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative h-full grid place-content-center">
          <div className="w-full h-[240px] lg:h-[280px]">
            <Image
              src="/images/press/city.png"
              alt="city"
              fill
              className="object-cover border-[10px] lg:border-[16px] border-white rounded-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
