import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"

import { HiQuestionMarkCircle } from "react-icons/hi"
import { MainFAQ } from "@/components/parts/MainFAQ"
import { HomePageFaqData } from "@/data/data"
import WelcomeSection from "@/components/WelcomeSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import HeroSection from "@/components/HeroSection"
import UltimatePlanFeatures from "@/components/parts/UltimatePlanFeatures"
import StartYourJourney from "@/components/parts/StartYourJourney"
import TrustPilotReviews from "@/components/parts/TrustPilotReviews"
import TitlePill from "@/components/parts/TitlePill"
import { useDisclosure } from "@chakra-ui/react"
import { useModal } from "@/components/ModalContext"

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { openContractForm } = useModal()

  return (
    <Layout headTitle={t.homeData.metaData.title} isFullWidth={true}>
      <HeroSection />
      <TestimonialsSection />
      <WelcomeSection />
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
              Över 300 miljoner kronor i intäkter på plattformen
            </h1>
            <p className="mb-4 md:mb-6 max-w-[90%] sm:max-w-xl mx-auto text-center text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-white font-inter leading-relaxed">
              Vår tjänst hjälper dig att ta kontroll över din framtid. Få
              personligt stöd från experter som vet vad som krävs för att
              lyckas.
            </p>
            <button
              onClick={() => openContractForm()}
              className="py-2 px-4 md:py-2.5 md:px-5 flex items-center justify-center rounded-[8px] font-semibold font-inters text-[11px] md:text-[12px] btn-white text-[#15133A] hover:bg-gray-100 transition-colors"
            >
              Starta din resa idag →
            </button>
          </div>
        </div>
      </section>

      <TrustPilotReviews />

      {/* Feature Cards Section */}
      <section className="flex flex-col w-full max-w-7xl mx-auto items-center gap-3 mt-10 md:mt-20 mb-20">
        <TitlePill text="Färdig e-handelsbutik" />
        <h2 className="font-jakarta font-semibold text-[16px] md:text-[24px] lg:text-[40px] leading-[48px] mb-5">
          Allt du behöver för att börja sälja och skala upp
        </h2>

        {/* Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
          {/* Card 1 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hbook-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  Färdig Dropshipping Butik
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Behåll vinsten och utveckla din butik
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Beställ din e-handelswebbplats med 30 vinnande produkter,
                  kurs, video annonser och TikTok krediter så är du igång inom
                  24 timmar.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hpencil-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  Dropshipping Kurs
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Exklusiv E-handelskurs
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Du kommer få tillgång till ett avancerad kurs med över 45+
                  avsnitt som täcker alla områden inom e-handel och
                  dropshipping.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hpeople-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  Gemenskaper
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Tillgång till interaktiv community
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Få tillgång till vår blomstrande community med över 2000
                  medlemmar. Använd tillgångarna i kursen för att öka
                  engagemanget
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hmedia-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  Högkonverterande Annonser
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Annonsmaterial för varje sociala medier
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Öka tillväxten i din butik med våra beprövade
                  tillväxtstrategier som driver trafik och ökar dina intäkter.
                </p>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hnews-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  Exklusiv E-handelskurs
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Tillgång till privata lektioner av experter
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Checkified Mentorskap™️ är det enda stället som erbjuder
                  utbildning i världsklass med praktiskt vägledning till ett
                  unikt e-handelsystem.
                </p>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col p-[10px] border-1 rounded-[16px] bg-[#F5F9FF] space-y-6">
            <div className="flex flex-col p-7 border-1 rounded-[16px] bg-[#FFFFFF] border-[#908888] space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/home/graphics/hstar-icon.svg"
                  alt="library icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm md:text-md lg:text-xl font-jakarta font-semibold text-[#151E3A]">
                  AI Verktyg
                </h3>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                  Inbyggda AI verktyg för e-handel
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Vi ger dig alla de senaste verktygen för att din online
                  verksamhet ska växa med hjälp av AI. Dessa hemliga verktyg
                  behöver du.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="flex flex-col justify-center items-center py-1 mb-16">
        <Image
          src="/images/ultimate-plan-banner.svg"
          alt="ultimate plan"
          width={768}
          height={690}
          className="object-contain w-[360px] h-[268px] md:w-[768px] md:h-[690px]"
        />

        <h3 className="text-[22px] md:text-[48px] font-jakarta font-semibold text-[#151E3A] mt-6 mb-4">
          En ultimat plan
        </h3>
        <p className="text-center text-sm md:text-lg text-[#434C69] max-w-[600px] px-4">
          En plan med så mycket värde att den verkar för bra för att vara sann,
          plus ett pris som passar alla som är redo att vara ambitiösa.
        </p>
        <UltimatePlanFeatures />
        <TitlePill text="Totalt värde: 155 000 kr" />
        <StartYourJourney />
      </section>

      <MainFAQ faqData={HomePageFaqData} />
    </Layout>
  )
}
