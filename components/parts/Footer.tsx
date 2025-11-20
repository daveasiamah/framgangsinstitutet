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
    <footer className="bg-[#225AEA] text-white h-[445px] flex-col justify-center items-center bg-[url('/images/home/footer-vector-mesh.svg')] bg-cover mt-2 lg:mt-10">
      <div className="container flex flex-col justify-center mx-auto pt-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
            <Image
              src="/images/home/graphics/new-checkified-logo.svg"
              alt="checkified"
              width={212}
              height={61}
              className="h-[48px] w-[213px] object-left object-contain"
            />
            <p className="text-[14px] md:text-[16px font-inter font-semibold leading-[22px] md:leading-[32px]">
              Registrera dig på vårt nyhetsbrev för att inte missa event,
              uppdateringar och e-handelsinspiration.
            </p>
            <div className="flex gap-1 h-[48px]">
              <input
                type="email"
                placeholder="Skriv in din e-post"
                className="bg-[#fff] border border-[#434C69] rounded-[8px] w-[2/3] py-[14px] px-[26px] text-[#434C69] text-[14px] md:text-[16px] font-semibold leading-[22px] md:leading-[32px]"
              />
              <button className="bg-[#072F94] text-white text-[12px] items-center text-center flex md:text-[16px] font-semibold leading-[22px] md:leading-[32px] rounded-[6px] w-[1/3] py-[14px] px-[26px]">
                Registrera dig
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {/* Produkter */}
            <div>
              <h5 className="font-bold font-jakarta text-xl mb-4">Företaget</h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <Link
                    href="https://whop.com/dropshipping-sverige/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link href="/butiker">Allmänna villkor</Link>
                </li>
                <li>
                  <Link href="/mentorskap">Kontakta oss</Link>
                </li>
                <li>
                  <Link href="/annonser">Cookiepolicy</Link>
                </li>
              </ul>
            </div>

            {/* Företag */}
            <div>
              <h5 className="font-bold font-jakarta text-lg mb-4">
                Snabblänkar
              </h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <Link href="/utbildningar">Utbildning</Link>
                </li>
                <li>
                  <Link href="/blogg">Blogg</Link>
                </li>
                <li>
                  <Link href="/mentorskap">Mentorskap</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Resurser */}
            <div>
              <h5 className="font-bold font-jakarta text-lg mb-4">
                Kontakta oss
              </h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <p className="text-white font-medium font-inter">
                    Sveriges ledande utbildning inom e-handel och dropshipping
                  </p>
                </li>
                <li>
                  <p className="text-white font-medium font-inter">
                    E-post: info@checkified.se
                  </p>
                </li>
                <li>
                  <Link href="/intervjuer">Intervjuer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-10 stroke-slate-400" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Copyright Section */}
          <p className="text-sm md:order-1 order-1">
            Copyright © {currentYear} Checkified. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center md:order-2 order-2">
            {socialMedia(24).map((data) => (
              <Link
                key={data.id}
                href={data.url}
                target="_blank"
                className="p-1 rounded-md bg-white"
              >
                <div className="text-[#225AEA] hover:text-primary">
                  {data.logo}
                </div>
              </Link>
            ))}
          </div>

          {/* Links Section */}
          <Image
            src="/images/home/graphics/shopify-partner-1.svg"
            alt="Shopify Partner"
            width={166}
            height={27}
            className="md:order-3 order-3"
          />
        </div>
      </div>
    </footer>
  )
}
