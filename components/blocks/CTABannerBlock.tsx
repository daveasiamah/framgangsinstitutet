import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import React from "react"

export function CTABannerBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="lg:h-80 md:h-80 lg:px-1 lg:py-10 md:py-10 mb-8 text-white ">
      <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[20px] md:px-4 lg:px-6 md:py-5 lg:py-5 back-background">
        <div className="text-center ">
          <div className="pl-10 pr-10">
            <h1 className="text-white text-center text-[20px] leading-[48px] md:text-[24px] font-[500] font-jakarta mb-2 mt-4">
              Redo att få din butik?
            </h1>
            <p className="mb-4 max-w-3xl mx-auto text-center lg:text-[16px] text-[12px] font-inter">
              Perfekt för nybörjare som vill dyka in i dropshipping! Säkra din
              butik idag <br />
            </p>
            <div className="icons-container_ann hidden md:block lg:block w-full mt-2">
              <div className="icon-section_ann text-white font-inter">
                <span className="font-inter text-white">
                  <img
                    src="/images/pricing/calendar-06.svg"
                    className="w-full h-[24px]"
                    alt="svg"
                  />
                  Beprövade e-butiker
                </span>
                <span className="font-inter text-white">
                  <img
                    src="/images/pricing/coin-hand.svg"
                    className="w-full h-[24px]"
                    alt="svg"
                  />
                  100% riskfritt
                </span>
                <span className="font-inter text-white">
                  <img
                    src="/images/pricing/check-contained.svg"
                    className="w-full h-[24px]"
                    alt="svg"
                  />
                  Verifierade partners
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              window.open("https://buy.stripe.com/3cscO09iSdoBgVOeUZ")
            }
            className="h-[28px] md:h-[38px] max-w-[275px] rounded-[5px] w-[300px] md:w-[150px] text-[10px] md:text-[14px] btn-white mb-5 lg:mt-10 mt-5 font-normal text-[#15133A]"
          >
            Få din butik
          </button>
        </div>
      </div>
    </section>
  )
}
