import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { MdKeyboardArrowRight } from "react-icons/md"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import ButtonArrow from "@/components/parts/ButtonArrow"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import CacingTwo from "@/components/graphic/CacingTwo"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal"

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {}

export default function University_Detail({ }: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle="University Detail">


      <section className="relative mt-10">
        <div>


          <ScrollReveal className="bg-base-200 p-8 lg:p-10 mb-8 rounded-[3rem]">
            <div className="grid grid-cols-2 gap-12">
              <div className="relative  h-[26vw] rounded-[3rem] overflow-hidden">
                <img src="/card-1.png" className=" w-[100%] object-cover" />
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[4vw] h-[4vw] flex justify-center items-center rounded-full opacity-[70%]"><img src="/play.png" className="w-[1.25vw]" /></div>
              </div>
              <div className="flex flex-col justify-center items-start">
                <Title
                  blackText='Checkified'
                  blueText='Shopify A-Z'
                  isBlock
                  className="text-left"
                />

                <p className="mb-6 text-subtitle">
                  {t.universityData.joinSubtitleFirst}
                </p>
                <Link
                  href="/signup"
                  className="mt btn btn-primary w-full lg:w-auto"
                >
                  {t.universityData.btntext}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative mt-10">
        <ScrollReveal className="pt-8 lg:pt-10 rounded-[3rem]">
          <div className="grid grid-cols-11 gap-12 ">
            <div className="p-4 lg:p-6 bg-base-200 rounded-[1rem]  col-span-3 h-fit">
              <p className="font-bold mb-4">Summary</p>
              <div className="flex justify-between">
                  <p className="mb-3 text-subtitle">
                    Video
                  </p>
                  <p className="mb-3 text-subtitle">18</p>
              </div>
              <div className="flex justify-between">
                  <p className="mb-6 text-subtitle">
                    Length
                  </p>
                  <p className="mb-6 text-subtitle">2hr 34min</p>
              </div>
              <div>
              <Link
                  href="/signup"
                  className="mt btn btn-primary w-full"
                >
                  Watch Course
                </Link>
                </div>
            </div>
            <div className="col-span-8">
              <section className="relative ">

                <ScrollReveal>
                  <Title blackText="Course" blueText="Outline" className="mb-2_cmargin"/>
                  <p className="mb-6 text-subtitle">
                    Introduction
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <ScrollReveal

                    className="flex justify-between items-center bg-base-200 py-4 px-8 rounded-2xl"
                  >
                    <p className="font-bold">Title</p>
                    <Link href="#">
                      <button
                        className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-6`}
                      >
                        <span className="hidden lg:inline">Watch</span>
                        <MdKeyboardArrowRight
                          className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
                          size={34}
                        />
                      </button>
                    </Link>
                  </ScrollReveal>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <ScrollReveal

                    className="flex justify-between items-center bg-base-200 py-4 px-8 rounded-2xl"
                  >
                    <p className="font-bold">Title</p>
                    <Link href="#">
                      <button
                        className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-4`}
                      >
                        <span className="hidden lg:inline">start</span>
                        <MdKeyboardArrowRight
                          className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
                          size={34}
                        />
                      </button>
                    </Link>
                  </ScrollReveal>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <ScrollReveal

                    className="flex justify-between items-center bg-base-200 py-4 px-8 rounded-2xl"
                  >
                    <p className="font-bold">Title</p>
                    <Link href="#">
                      <button
                        className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-4`}
                      >
                        <span className="hidden lg:inline">start</span>
                        <MdKeyboardArrowRight
                          className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
                          size={34}
                        />
                      </button>
                    </Link>
                  </ScrollReveal>
                </div>
              </section>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
