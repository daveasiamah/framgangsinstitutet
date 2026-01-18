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
import { useModal } from "@/components/ModalContext"
import Link from "next/link"
import { ArrowRight, ArrowRightIcon } from "lucide-react"

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

      <TrustPilotReviews />

      {/* Feature Cards Section */}
      <section className="flex flex-col w-full max-w-[1440px] mx-auto items-center gap-3 mt-[15px] md:mt-[53px] lg:mt-[77px] mb-[30px]">
        <h2 className="font-jakarta font-semibold text-[18px] text-center text-black md:text-[40px] max-w-[241px] md:max-w-[472px] lg:max-w-[478px] leading-[22px] md:leading-[36px] mb-1">
          Är du redo att ta kontroll över ditt liv?
        </h2>
        <p className="font-inter text-center text-[12px] md:text-[14px] text-[#434C69] md:max-w-[640px] lg:max-w-[570px] leading-[20px] px-4">
          Varje framgång började med ett första steg - en ansökan. Är det din
          tur nu?
        </p>

        {/* Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[11px] md:gap-[27px] lg:gap-[29px] pt-[22px] md:pt-[42px] w-full px-4 md:px-0">
          {/* Card 1 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment1.png"
                alt="comment1"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment2.png"
                alt="comment2"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment3.png"
                alt="comment3"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment4.png"
                alt="comment4"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment5.png"
                alt="comment5"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col py-[24px] px-[18px] rounded-[25px] bg-[#F8F9FA]">
            <div className="flex items-center">
              <img
                src="/images/home/testimonial/user-comments/comment6.png"
                alt="comment6"
                width={383}
                height={234}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="flex flex-col justify-center items-center py-1 mb-8">
        <img
          src="/images/mentorship/mentorship-packages.png"
          width={700}
          height={470}
          alt="mentorship packages"
        />

        <h3 className="text-[22px] md:text-[48px] font-jakarta font-semibold text-[#151E3A] mt-6 mb-4">
          En ultimat plan
        </h3>
        <p className="text-center text-sm md:text-lg text-[#434C69] max-w-[600px] px-4">
          En plan med så mycket värde att den verkar för bra för att vara sann,
          plus ett pris som passar alla som är redo att vara ambitiösa.
        </p>
        <UltimatePlanFeatures />
        <TitlePill text="Totalt värde: 155 000 kr" className="mt-2" />
        <StartYourJourney onCtaClick={() => openContractForm()} />
      </section>

      <MainFAQ faqData={HomePageFaqData} />
      <div className="w-full flex justify-center mb-4">
        <Link
          href="/faq"
          className="rounded-lg border border-[#908888] bg-white px-8 py-3 font-jakarta font-semibold text-sm md:text-base text-black inline-flex items-center gap-2"
        >
          Se alla vanliga frågor{" "}
          <span>
            <ArrowRightIcon size={14} />
          </span>
        </Link>
      </div>
    </Layout>
  )
}
