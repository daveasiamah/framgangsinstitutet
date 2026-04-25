import React from "react"
import { ArrowRight } from "lucide-react"

const BULLETS = [
  "Flexibel utbildning i din ficka",
  "Över 500 utbildningsavsnitt",
  "Kunskap som går att använda direkt",
  "Lär dig av Sveriges främsta experter",
  "Nya kurser lanseras löpande",
]

type Props = {
  title?: string
  buttonText?: string
  imageSrc?: string
  showTrustpilot?: boolean
}

export default function HeroSection({
  buttonText = "Bli medlem",
  imageSrc = "/images/home/home-banner.jpg",
  showTrustpilot = true,
}: Props) {
  return (
    <section className="relative bg-white py-8 sm:py-10 md:py-14">
      <div className="max-w-[1050px] mx-auto px-2 sm:px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
          {/* ── Left column ── */}
          <div className="flex w-full flex-col items-start lg:max-w-[560px]">
            {/* Title */}
            <h1 className="w-full text-[#151E3A] text-[28px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold font-jakarta text-center lg:text-left mb-6 leading-[1.15]">
              Studera på distans. <br className="hidden sm:block" />
              Var du vill, när du vill.
            </h1>

            {/* Bullet list */}
            <ul className="mx-auto lg:mx-0 w-fit list-disc pl-6 sm:pl-8 md:pl-9 mb-8 space-y-1 text-left">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="font-inter text-[#151E3A] text-[14px] md:text-[16px] font-medium leading-[1.2] marker:text-[1.2em]"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA + Trustpilot */}
            <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row lg:items-center lg:gap-4">
              <a
                href="https://buy.stripe.com/bJe4gyclScFaeDX0KI6wE01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[280px] justify-center lg:w-auto lg:max-w-none px-6 py-3 bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm inline-flex items-center gap-2"
              >
                {buttonText} <ArrowRight size={16} />
              </a>

              {showTrustpilot && (
                <img
                  src="/images/home/hero-trustpilot.png"
                  alt="Trustpilot"
                  width={225}
                  height={29}
                  className="w-[190px] sm:w-[225px] h-auto object-contain"
                />
              )}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="relative w-full lg:flex lg:items-end lg:justify-end">
            <img
              src={imageSrc}
              alt="Hero image"
              width={368}
              height={461}
              className="mx-auto w-full max-w-[368px] h-auto object-cover rounded-[12px] lg:mx-0 lg:w-[368px] lg:h-[461px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
