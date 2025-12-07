import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { socialMedia } from "@/assets/data/socialMedia"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Footer({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#225AEA] text-white min-h-[445px] flex-col justify-center items-center bg-[url('/images/home/footer-vector-mesh.svg')] bg-cover sm:bg-cover bg-no-repeat bg-center mt-2 lg:mt-10">
      <div className="container flex flex-col justify-center mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 sm:gap-8 md:gap-10">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
            <Image
              src="/images/home/graphics/new-checkified-logo.svg"
              alt="checkified"
              width={212}
              height={61}
              className="h-[40px] sm:h-[48px] w-auto object-left object-contain mb-3 sm:mb-4"
            />
            <p className="text-[12px] sm:text-[14px] md:max-w-[585px] md:text-[16px] font-inter font-semibold leading-[18px] sm:leading-[22px] md:leading-[32px] mb-4 sm:mb-6">
              Registrera dig på vårt nyhetsbrev för att inte missa event,
              uppdateringar och e-handelsinspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 w-full sm:h-[48px]">
              <input
                type="email"
                placeholder="Skriv in din e-post"
                className="bg-[#fff] border border-[#434C69] rounded-[8px] flex-1 sm:w-[2/3] py-3 sm:py-[14px] px-4 sm:px-[26px] text-[#434C69] text-[12px] sm:text-[14px] md:text-[16px] font-semibold leading-[18px] sm:leading-[22px] md:leading-[32px]"
              />
              <button className="bg-[#072F94] text-white text-[12px] sm:text-[12px] items-center justify-center text-center flex md:text-[16px] font-semibold leading-[18px] sm:leading-[22px] md:leading-[32px] rounded-[6px] sm:w-[1/3] py-3 sm:py-[14px] px-4 sm:px-[26px] whitespace-nowrap">
                Registrera dig
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Produkter */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                Företaget
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/om-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dropshipping"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Dropshipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ehandel"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    E-handel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakta-oss"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>

            {/* Företag */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg mb-3 sm:mb-4">
                Snabblänkar
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/mentorskap"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Mentorskap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Blogg
                  </Link>
                </li>
                <li>
                  <Link
                    href="/intervjuer"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Intervjuer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resurser */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg mb-3 sm:mb-4">
                Resurser
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Allmänna villkor
                  </Link>
                </li>
                <li>
                  <Link href="/blog">blog</Link>
                </li>
                <li>
                  <Link
                    href="/vsl"
                    className="font-inter text-[12px] sm:text-[14px] md:text-base"
                  >
                    Introguide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:my-8 md:my-10 stroke-slate-400" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pb-6 sm:pb-8 md:pb-10 text-center md:text-left">
          {/* Copyright Section */}
          <p className="text-[10px] sm:text-[10px] md:text-sm text-center md:order-1 order-1">
            Copyright © {currentYear} Checkified. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4 justify-center md:order-2 order-2">
            {socialMedia(18).map((data) => (
              <Link
                key={data.id}
                href={data.url}
                target="_blank"
                className="p-1 sm:p-1.5 rounded-md bg-white flex-shrink-0"
              >
                <div className="text-[#225AEA] hover:text-primary">
                  {data.logo}
                </div>
              </Link>
            ))}
          </div>

          {/* Links Section */}
          <Image
            src="/images/home/graphics/shopify-partner1.png"
            alt="Shopify Partner"
            width={166}
            height={27}
            className="md:order-3 order-3 w-[120px] sm:w-[140px] md:w-[166px] h-auto"
          />
        </div>
      </div>
    </footer>
  )
}
