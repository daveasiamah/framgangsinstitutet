import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"

export default function OrderNowAndGetItBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { orderNow } = t.pricingData

  return (
    <section className="flex flex-col md:py-4 md:px-6">
      <h1 className="font-bold text-[22px] md:text-[32px] text-center md:text-left mb-4">
        {orderNow.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80] flex flex-col">
          <div className="flex flex-col p-7 pr-[38px] pl-[17px] h-full">
            <div className="w-[36px] h-[34px] font-bold text-[#225AEA80] text-4xl self-start font-jakarta">
              {orderNow.items[0].id}
            </div>
            <p className="text-[##151E3A] text-14px md:text-[20px] font-[600] leading-6 font-inter md:text-xl mt-[94px]">
              {orderNow.items[0].desc}
            </p>
          </div>
        </div>

        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80] flex flex-col">
          <div className="flex flex-col p-7 pr-[38px] pl-[17px] h-full">
            <div className="w-[36px] h-[34px] font-bold text-[#225AEA80] text-4xl self-start font-jakarta">
              {orderNow.items[1].id}
            </div>
            <p className="text-[##151E3A] text-14px md:text-[20px] font-[600] leading-6 font-inter md:text-xl mt-[94px]">
              {orderNow.items[1].desc}
            </p>
          </div>
        </div>

        <div className="w-full md:col-span-2 lg:col-span-2 rounded-[30px] border-[0.5px] border-[#BBBBBF80] relative overflow-hidden flex flex-col">
          <div className="flex w-full flex-col p-7 pl-[17px] relative z-10 h-full">
            <div className="w-[36px] h-[34px] font-bold text-[#225AEA80] text-4xl self-start font-jakarta">
              {orderNow.items[2].id}
            </div>
            <p className="text-[##151E3A] text-14px md:text-[20px] font-[600] leading-6 font-inter md:text-xl mt-[94px]">
              {orderNow.items[2].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
