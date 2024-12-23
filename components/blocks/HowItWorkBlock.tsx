import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

export default function HowItWorkBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { howItWorksData } = t.pricingData

  return (
    <section className="flex flex-col md:py-4 md:px-6 mb-8">
      <h1 className="font-bold text-[22px] md:text-[32px] text-center md:text-left mb-12">
        {howItWorksData.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* First Step */}
        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80] flex flex-col">
          <div className="flex flex-col p-7 pr-[38px] pl-[17px] h-full">
            <img
              src="/images/pricing/how_it_works1.svg"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] self-end"
            />
            <div className="text-black font-bold text-[16px] md:text-[18px] mb-4 mt-6 font-jakarta">
              {howItWorksData.items[0].title}
            </div>
            <p className="text-[#464C69] text-[12px] md:text-[15px] mb-4">
              {howItWorksData.items[0].description[0]}
            </p>
            <p className="text-[#464C69] text-[12px] md:text-[15px]">
              {howItWorksData.items[0].description[1]}
            </p>
          </div>
        </div>

        {/* Second Step */}
        <div className="w-full rounded-[30px] border-[0.5px] border-[#BBBBBF80] flex flex-col">
          <div className="flex flex-col p-7 pr-[38px] pl-[17px] h-full">
            <img
              src="/images/pricing/how_it_works2.svg"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] self-end"
            />
            <div className="text-black font-bold text-[16px] md:text-[18px] mb-4 mt-6 font-jakarta">
              {howItWorksData.items[1].title}
            </div>
            <p className="text-[#464C69] text-[12px] md:text-[15px] mb-4">
              {howItWorksData.items[1].description[0]}
            </p>
            <p className="text-[#464C69] text-[12px] md:text-[15px]">
              {howItWorksData.items[1].description[1]}
            </p>
          </div>
        </div>

        {/* Third Step */}
        <div className="w-full md:col-span-2 lg:col-span-2 rounded-[30px] border-[0.5px] border-[#BBBBBF80] relative overflow-hidden flex flex-col">
          {/* Content Layer */}
          <div className="flex w-full flex-col p-7 pl-[17px] relative z-10 h-full">
            <img
              src="/images/pricing/how_it_works3.svg"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] self-end"
            />
            <div className="text-black font-bold text-[18px] mb-4 mt-6 lg:mt-[76px] font-jakarta">
              {howItWorksData.items[2].title}
            </div>
            <div className="md:pr-[38px] lg:pr-[38px] max-w-2xl">
              <p className="text-[#464C69] text-[12px] md:text-[15px] max-w-2xl">
                {howItWorksData.items[2].description[0]}
                {howItWorksData.items[2].description[1]}
              </p>
            </div>
          </div>

          {/* Background Layer */}
          <div
            className="absolute inset-0 h-full hidden md:block lg:block bg-[url('/images/pricing/howitworks_bg.svg')] bg-no-repeat bg-contain opacity-50"
            style={{
              backgroundPosition: "right bottom",
            }}
          />
        </div>
      </div>
    </section>
  )
}
