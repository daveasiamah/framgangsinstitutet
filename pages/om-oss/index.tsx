import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { HiQuestionMarkCircle } from "react-icons/hi"
import HeroSection from "@/components/HeroSection"
import { useModal } from "@/components/ModalContext"
import { ArrowRight, ArrowRightIcon } from "lucide-react"

export default function About() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { openContractForm } = useModal()

  return (
    <Layout headTitle={t.homeData.metaData.title} isFullWidth={true}>
      <section className="relative bg-white py-8 px-4 bg-[url('/images/hero-mesh.svg')] pt-8 bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-[#151E3A] text-[30px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[32px] md:leading-[44px] lg:leading-[52px] max-w-[700px] md:max-w-[550px] lg:max-w-[700px] mx-auto">
            Checkified Revolution
          </h1>

          {/* Description */}
          <p className="text-[#434C69] text-[16px] font-inter font-medium text-center mb-4 leading-relaxed max-w-[733px] md:max-w-[690px] mx-auto">
            Checkified grundades av e-handelsentreprenör och grundaren Dominic,
            för att hjälpa dig att komma igång med dropshipping och e-handel.
            Det som började som en lösning på hans egna utmaningar inom e-handel
            utvecklades så småningom till Checkified.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-4">
            <button
              onClick={() => openContractForm()}
              className="py-3 w-[299px] bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] font-jakarta text-sm flex items-center justify-center gap-2"
            >
              Börja Nu <ArrowRight size={16} />
            </button>
          </div>

          {/* Video/Image Section */}
          <div className="relative flex flex-col items-center max-w-[360px] md:max-w-[480px] lg:max-w-[860px] mx-auto">
            <img
              src="/images/home/graphics/checkified-hero.png"
              alt="Checkified Hero"
              width={960}
              height={540}
              className="object-cover w-auto md:w-full h-auto"
            />
            <p className="w-full text-center text-[#434C69] text-[8px] md:text-[12px] font-inter font-medium -mt-4 md:-mt-2 lg:-mt-8 border relative z-2">
              Betrodd av över{" "}
              <span className="font-inter font-bold leading-[22px] text-[#225AEA]">
                2000+
              </span>{" "}
              studenter för att börja deras e-handelsresa och öka intäkterna
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mb-8 px-4">
        
      </section>

      {/* Second Section - Omge dig med drivna entreprenörer */}
      <div className="max-w-[1280px] mx-auto mb-8 px-4">
        <div className="bg-[#F3F6FE] rounded-[20px] p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] items-start">
            {/* Image */}
            <div className="order-1">
              <div className="relative w-full rounded-[40px] overflow-hidden">
                <img
                  src="/images/home/welcome2.jpg"
                  alt="Entreprenörer och mentorer"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="order-2 lg:pt-[10px]">
              <h3 className="text-[#151E3A] text-[21px] sm:text-[22px] md:text-[40px] font-semibold font-geist mb-4 sm:mb-6 leading-[18px] sm:leading-[19px] md:leading-[35px]">
                Omge dig med drivna
                <br />
                entreprenörer och mentorer.
              </h3>
              <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Människorna du omger dig med formar din nivå. Så fråga dig
                  själv: hur snabbt skulle du växa om din omgivning redan bestod
                  av människor som lyckats?
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Checkified har blivit navet för svensk e-handel och digitalt
                  entreprenörskap, en plats där allt ifrån nybörjare till
                  entreprenörer med miljonomsättning samlas för att växa.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Här skapas kontakter som spelar roll, relationer som driver
                  dig framåt och möjligheter för dig som anpassar.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Bygger du något digitalt? Då är Checkified där du hör hemma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* CTA Section 1 */}
      <section className="mb-8 text-white w-[calc(100%-20px)] md:w-full max-w-[1358px] mx-auto px-4 md:px-2">
        <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[16px] md:rounded-[20px] px-4 md:px-4 lg:px-6 py-6 md:py-8 lg:py-10 back-background">
          <HiQuestionMarkCircle
            className="mx-auto text-white mb-3 md:mb-4"
            size={38}
            aria-label="help"
          />
          <div className="text-center flex flex-col items-center w-full">
            <h1 className="text-white text-center text-[18px] leading-[1.3] sm:text-[20px] sm:leading-[1.4] md:text-[24px] md:leading-[1.5] max-w-[90%] sm:max-w-[600px] font-bold font-jakarta mb-3 md:mb-4">
              Över 300 miljoner kronor i intäkter på plattforme
            </h1>
            <p className="mb-4 md:mb-6 max-w-[95%] sm:max-w-[85%] md:max-w-xl mx-auto text-center text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white font-inter leading-[1.6] sm:leading-relaxed px-2 sm:px-0">
              Vår tjänst hjälper dig att ta kontroll över din framtid. Få
              personligt stöd från experter som vet vad som krävs för att
              lyckas.
            </p>
            <button
              onClick={() => openContractForm()}
              className="py-2 px-4 md:py-2.5 md:px-5 flex items-center justify-center rounded-[8px] font-semibold font-inters text-[11px] md:text-[12px] btn-white text-[#15133A] hover:bg-gray-100 transition-colors"
            >
              Starta din resa idag <ArrowRight size={14} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
