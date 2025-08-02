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
    <footer className="bg-[#fff] text-[#434C69] py-1 relative mt-2 lg:mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
            <img
              src="/checkified-logo-main.svg"
              alt="checkified"
              className="h-[48px] w-[213px] object-left object-contain"
            />
            <p className="text-[14px] md:text-[16px] font-semibold leading-[22px] md:leading-[32px]">
              Börja Med Dropshipping Sverige
            </p>

            {/* Partner Logos */}
            <div className="flex flex-col flex-wrap gap-2 mt-6">
              <img
                src="/shopifypartner.svg"
                alt="Shopify Partner"
                className="h-[27px] w-[166px] md:w-[167px]"
              />
              <img
                src="/stripe.svg"
                alt="Stripe Partner"
                className="h-[34px] w-[166px] md:w-[167px]"
              />
              <img
                src="/google.svg"
                alt="Google Partner"
                className="h-[44px] w-[166px] md:w-[167px]"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {/* Produkter */}
            <div>
              <h5 className="font-bold font-jakarta text-xl mb-4">Produkter</h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <Link
                    href="https://whop.com/dropshipping-sverige/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dropshipping Kurs
                  </Link>
                </li>
                <li>
                  <Link href="/butik">Färdig E-Butik</Link>
                </li>
                <li>
                  <Link href="/annonser">Dropshipping Ads</Link>
                </li>
                <li>
                  <Link href="/mentorskap">Dropshipping Mentorskap</Link>
                </li>
              </ul>
            </div>

            {/* Företag */}
            <div>
              <h5 className="font-bold font-jakarta text-lg mb-4">Företag</h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <Link href="/about">Om oss</Link>
                </li>
                <li>
                  <Link href="/affiliate">Affiliate</Link>
                </li>
                <li>
                  <Link href="/contact-us">Kontakt</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Resurser */}
            <div>
              <h5 className="font-bold font-jakarta text-lg mb-4">Resurser</h5>
              <ul className="space-y-2 flex flex-col gap-3">
                <li>
                  <Link href="/ebocker">E-böcker</Link>
                </li>
                <li>
                  <Link href="/blog">Blogg</Link>
                </li>
                <li>
                  <Link href="/utbildningar">Utbildningar</Link>
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
              <Link key={data.id} href={data.url} target="_blank">
                <div className="text-[#225AEA] hover:text-primary">
                  {data.logo}
                </div>
              </Link>
            ))}
          </div>

          {/* Links Section */}
          <ul className="flex flex-wrap justify-center gap-4 md:order-3 order-3">
            <li>
              <Link
                href="/cookie-policy"
                className="hover:underline underline-offset-4 text-sm font-medium"
              >
                Cookiepolicy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:underline underline-offset-4 text-sm font-medium"
              >
                Allmänna villkor
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline underline-offset-4 text-sm font-medium"
              >
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
