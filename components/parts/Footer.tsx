import React, { useState } from "react"
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

  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleRegistration = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Ange en giltig e-postadress")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Tack för din registrering!")
        setEmail("")
      } else {
        setMessage(data.error || "Något gick fel. Försök igen.")
      }
    } catch (error) {
      setMessage("Något gick fel. Försök igen.")
      console.error("Newsletter submission error:", error)
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000)
    }
  }

  return (
    <footer className="bg-[#225AEA] text-white min-h-[445px] flex-col justify-center items-center bg-[url('/images/home/footer-vector-mesh.svg')] bg-cover sm:bg-cover bg-no-repeat bg-center mt-2 lg:mt-10">
      <div className="container flex flex-col justify-center mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
            <img
              src="/images/home/logo-base.png"
              alt="Framgångsinstitutet"
              width={200}
              height={55}
              className="h-[55px] sm:h-[55px] w-[200px] object-left object-contain"
            />
            <p className="font-inter font-medium text-[12px] md:text-[15px] md:max-w-[585px] lg:max-w-[399px] leading-[18px] mb-3">
              Registrera dig på vårt nyhetsbrev för att inte missa event,
              uppdateringar och e-handelsinspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:max-w-[380px]">
              <input
                type="email"
                placeholder="Skriv in din e-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleRegistration()}
                disabled={isSubmitting}
                className="bg-[#fff] border border-[#434C69] rounded-[8px] flex-1 sm:w-[2/3] py-2 px-4 text-[#434C69] text-[12px] disabled:opacity-50"
              />
              <button
                onClick={handleRegistration}
                disabled={isSubmitting}
                className="bg-[#072F94] text-white text-[12px] items-center justify-center text-center flex font-semibold leading-[18px] rounded-[6px] sm:w-[1/3] py-3 px-[19px] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Skickar..." : "Registrera dig"}
              </button>
            </div>
            {message && (
              <div
                className={`mt-3 p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  message.includes("Tack")
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {message}
              </div>
            )}
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-3">
            {/* Produkter */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg md:text-[22px] leading-[32px] mb-3 sm:mb-4">
                Företaget
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/om-oss"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dropshipping"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Dropshipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="/e-handel"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    E-handel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakta-oss"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>

            {/* Företag */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg md:text-[22px] leading-[32px] mb-3 sm:mb-4">
                Snabblänkar
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/mentorskap"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Mentorskap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Blogg
                  </Link>
                </li>
                <li>
                  <Link
                    href="/intervjuer"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Intervjuer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resurser */}
            <div>
              <h5 className="font-bold font-jakarta text-base sm:text-lg md:text-[22px] leading-[32px] mb-3 sm:mb-4">
                Resurser
              </h5>
              <ul className="space-y-2 flex flex-col gap-2 sm:gap-3">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Allmänna villkor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
                  >
                    Cookie policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/vsl"
                    className="font-inter font-medium text-[12px] sm:text-[14px] md:text-base"
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
        <div className="grid gap-4 pb-6 sm:gap-6 sm:pb-8 md:grid md:grid-cols-3 md:items-start md:pb-10 md:text-left">
          {/* Copyright Section */}
          <p className="order-1 text-center text-[10px] sm:text-[10px] md:text-left md:text-sm">
            Upphovsrätt © {currentYear} Framgångsinstitutet. Alla rättigheter
            förbehållna.
          </p>

          {/* Social Media Icons */}
          <div className="order-2 flex justify-center gap-3 sm:gap-4 md:justify-center">
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
        </div>
      </div>
    </footer>
  )
}
