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
    <footer className="bg-[#fff] text-[#434C69] py-14 relative mt-12 lg:mt-10">
      <div className="container mx-auto border-2">
        <div className="flex flex-col lg:flex-row justify-between items-center text-left md:text-center lg:text-left lg:items-end lg:gap-[120px]">
          <div className="w-full h-full flex flex-col lg:w-1/3 items-start md:items-center lg:self-start">
            <Image
              className="mb-2 md:w-[153px] md:h-full"
              src="/checkified-logo-main.svg"
              alt="checkified"
              height={51}
              width={153}
              priority
            />
            <div>
              <p className="text-[#434C69] text-[14px] leading-[22px] md:text-[16px] font-[600] font-inter md:leading-[32px]">
                Börja Med Dropshipping Sverige
              </p>
            </div>

            {/* Partner Logos Section */}
            <div className="flex flex-col">
              <img
                className="md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                src="/shopifypartner.svg"
                alt="Shopify Partner"
              />
              <img
                className="md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                src="/stripe.svg"
                alt="Stripe Partner"
              />
              <img
                className="md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                src="/google.svg"
                alt="Google Partner"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[90px] footer-links mt-10 lg:mt-0">
            <div>
              <h5 className="font-bold text-[22px] leading-[22px] md:leading-[32px] mb-[10px] md:mb-[20px] font-jakarta">
                Produkter
              </h5>
              <ul>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/skool"
                  >
                    Dropshipping Kurs
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/butiker"
                  >
                    Färdig E-Butik
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/annonser"
                  >
                    Dropshipping Ads
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="https://whop.com/dropshipping-mentorskap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dropshipping Mentorskap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Företag Section */}
            <div>
              <h5 className="font-bold text-[22px] leading-[22px] md:leading-[32px] mb-[10px] md:mb-[20px] font-jakarta">
                Företag
              </h5>
              <ul>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/about"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/butiker"
                  >
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resurser Section */}
            <div>
              <h5 className="font-bold text-[22px] leading-[22px] md:leading-[32px] mb-[10px] md:mb-[20px] font-jakarta">
                Resurser
              </h5>
              <ul>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/blog"
                  >
                    Blogg
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/contact-us"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/university"
                  >
                    University
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline underline-offset-4 text-xs md:text-[16px] font-[500] font-inter"
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12 bg-slate-600" />
        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between items-center">
          <p className="mb-4 lg:mb-0 text-[12px] md:text-[14px] font-[500] font-inter order-3 md:order-1">
            Copyright © {new Date().getFullYear()} Checkified. All rights
            reserved.
          </p>
          <div className="flex justify-center flex-wrap lg:justify-start items-center gap-5 order-0 md:order-2">
            {socialMedia(24).map((data) => (
              <Link key={data.id} href={data.url} target="_blank">
                <div className="rounded-lg hover:bg-white hover:text-primary text-[#225AEA]">
                  {data.logo}
                </div>
              </Link>
            ))}
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-5 order-1 md:order-3">
            <li>
              <Link
                className="hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter"
                href="/cookie-policy"
              >
                Cookiepolicy
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter"
                href="/terms-of-service"
              >
                Allmänna villkor
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter"
                href="/privacy-policy"
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
