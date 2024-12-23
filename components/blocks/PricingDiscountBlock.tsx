import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import React from "react"

export function PricingDiscountBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="flex flex-col self-center items-center mb-10">
      <div className="flex flex-col max-w-[350px] max-h-[135px] w-full h-full items-center ">
        <div className="bg-[#fff4f4] px-5 py-2 rounded-[12px]">
          <p className="text-sm md:text-xl font-semibold text-[#D71349] font-jakarta leading-6">
            {t.pricingData.discountPrice.redPrice}
          </p>
        </div>
        <img
          src="/images/pricing/discount-arrow.png"
          className="w-[20px] h-[26px] my-2"
        />
        <div className="flex flex-col items-center justify-between">
          <p className="text-base md:text-xl font-semibold text-[#16895A] font-jakarta leading-6">
            {t.pricingData.discountPrice.greenPrice}
          </p>
          <p className="text-[12px] md:text-sm text-[#16895A] font-jakarta">
            {t.pricingData.discountPrice.paymentMode}
          </p>
        </div>
      </div>
    </section>
  )
}
