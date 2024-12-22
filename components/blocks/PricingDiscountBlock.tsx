import React from "react"

export function PricingDiscountBlock() {
  return (
    <section className="flex flex-col self-center items-center mb-10">
      <div className="flex flex-col max-w-[350px] max-h-[135px] w-full h-full items-center ">
        <div className="bg-[#fff4f4] px-5 py-2 rounded-[12px]">
          <p className="text-xl font-semibold text-[#D71349] font-jakarta leading-6">
            Normal Kostnad: 16,000 SEK+
          </p>
        </div>
        <img
          src="/images/pricing/discount-arrow.png"
          className="w-[20px] h-[26px] my-2"
        />
        <div className="flex flex-col items-center justify-between">
          <p className="text-xl font-semibold text-[#16895A] font-jakarta leading-6">
            Bara 999.00 KR!
          </p>
          <p className="text-[14px] text-[#16895A] font-jakarta">
            Engångsbetalning
          </p>
        </div>
      </div>
    </section>
  )
}
