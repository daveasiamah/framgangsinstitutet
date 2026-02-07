import { useRouter } from "next/router"
import Image from "next/image"
import sv from "@/locales/sv"
import en from "@/locales/en"

export function CTABannerBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="mt-10 mb-8 text-white">
      <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[20px] md:px-4 lg:px-6 md:py-5 lg:py-5 back-background">
        <div className="text-center">
          <div className="px-2">
            <h1 className="text-white text-center text-[20px] leading-[48px] md:text-[24px] font-bold font-jakarta mb-2 mt-4">
              Gå med Checkified Mentorskap idag!
            </h1>
            <p className="mb-4 max-w-3xl mx-auto text-center lg:text-[16px] text-[12px] font-inter">
              Kom ihåg: Du är några klick från att leva livet som du vill... Har
              du verkligen råd att vänta?
            </p>
            <div className="flex flex-wrap w-full gap-8 p-1">
              <div className="flex flex-wrap gap-3 justify-center md:justify-between text-white font-inter w-full">
                <div className="flex items-center gap-[2px] text-white">
                  <Image
                    src="/images/pricing/calendar-06.svg"
                    className="w-[19px] md:w-[24px] md:h-[24px]"
                    alt="svg"
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-[10px] md:text-[14px]">
                    Beprövade e-butiker
                  </p>
                </div>
                <div className="flex items-center gap-[2px] text-white">
                  <Image
                    src="/images/pricing/coin-hand.svg"
                    className="w-[19px] md:w-[24px] md:h-[24px]"
                    alt="svg"
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-[10px] md:text-[14px]">
                    100% riskfritt
                  </p>
                </div>
                <div className="flex items-center gap-[2px] text-white">
                  <Image
                    src="/images/pricing/check-contained.svg"
                    className="w-[19px] md:w-[24px] md:h-[24px]"
                    alt="svg"
                    width={24}
                    height={24}
                  />
                  <p className="text-white text-[10px] md:text-[14px]">
                    Verifierade partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              window.open("https://buy.stripe.com/3cscO09iSdoBgVOeUZ")
            }
            className="h-[28px] md:h-[38px] max-w-[275px] rounded-[5px] w-5/6 md:w-[150px] text-[10px] md:text-[14px] btn-white mb-5 lg:mt-10 mt-5 font-normal text-[#15133A]"
          >
            Få din butik
          </button>
        </div>
      </div>
    </section>
  )
}
