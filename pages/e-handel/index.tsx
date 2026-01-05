import React from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import Accordion from "@/components/parts/Accordion_Home"
import { useModal } from "@/components/ModalContext"
import { HomePageFaqData } from "@/data/data"

export default function EHandel() {
  const { openContractForm } = useModal()

  return (
    <Layout headTitle="Dropshipping - Checkified" isFullWidth={true}>
      <section className="relative bg-white pt-8 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-[#151E3A] text-[22px] md:text-[42px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[24px] md:leading-[44px] lg:leading-[56px] max-w-[400px] md:max-w-[707px] lg:max-w-[936px] mx-auto">
            Lär dig driva e-handel lönsamt 2026: Online utbildning på distans
          </h1>

          {/* Description */}
          <p className="text-[#434C69] text-[15px] md:text-[16px] font-inter font-medium text-center mb-8 leading-relaxed max-w-[733px] mx-auto">
            Att driva en e-handel i dagens samhälle är betydligt mer utmanande
            än vad det först kan verka. Det räcker inte att bara sätta upp en
            snygg butik och hoppas på det bästa, att bygga en framgångsrik
            e-handel är en affärsmodell som kräver tid, energi och hårt arbete.
            För att lyckas måste du förstå din marknad, hitta rätt produkter,
            bemästra digital marknadsföring och hela tiden analysera och
            förbättra dina resultat.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => openContractForm()}
              className="px-4 py-3 md:px-5 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner transition-all duration-200 ease-in-out transform flex items-center justify-center gap-2"
            >
              <span className="font-jakarta text-xs md:text-base font-bold">
                Starta din resa
              </span>
              <ArrowRightIcon
                size={16}
                className="md:w-5 md:h-5"
                color="white"
              />
            </button>
          </div>

          {/* Video/Image Section */}
          <div className="relative max-w-[360px]  md:max-w-[480px] lg:max-w-[860px] mx-auto">
            <Image
              src="/images/home/graphics/checkified-hero.svg"
              alt="Dropshipping Hero"
              width={960}
              height={540}
              className="object-cover w-auto md:w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto bg-white py-2 md:py-2 px-4 mb-[35px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex self-center items-center justify-center bg-[#F5F9FF] rounded-full w-fit mx-auto m-[10px] md:m-[30px]">
            <p className="py-2 px-5 md:py-3 md:px-9 text-[#225AEA] text-[12px] md:text-[16px] font-geist font-semibold">
              Dropshipping
            </p>
          </div>
          {/* Main Title */}
          <h2 className="text-[#151E3A] text-[20px] leading-[22px] md:text-[40px] md:leading-[42px] font-bold font-jakarta text-center mb-[24px] md:mb-8">
            Allt du behöver lära dig för att <br />
            lyckas med e-handel 2026
          </h2>
          {/* First Section - Lär dig av e-handelsexpert */}
          <div className="w-full bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[40px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[26px] md:leading-[40px] text-center md:text-left">
                  Vad ingår i online utbildningen?
                </h3>
                <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed mb-6">
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Introduktion till e-handel:{" "}
                    </span>
                    Få grepp om grunderna och hela processen, från idé till
                    lansering av din butik.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Produktforskning och nischval:{" "}
                    </span>
                    Lär dig analysera marknaden, identifiera trender och välja
                    produkter med hög efterfrågan och försäljningspotential.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Bygg din webbshop:{" "}
                    </span>
                    Steg-för-steg-guide för att skapa en snygg, professionell
                    och användarvänlig butik på Shopify, designad för att locka
                    och konvertera kunder.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Marknadsföring och trafik:{" "}
                    </span>
                    Lär dig dra nytta av Facebook Ads, Google Ads och samarbeten
                    med influencers för att nå rätt målgrupp och öka trafiken.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Analys och optimering:{" "}
                    </span>
                    Använd verktyg som Google Analytics för att spåra resultat,
                    analysera data och optimera din butik för maximal
                    försäljning.
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/ehandel-expert.jpg"
                    alt="E-handelsexpert team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Second Section - Omge dig med drivna entreprenörer */}
          <div className="bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[40px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Image */}
              <div className="order-1">
                <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/mentorer.jpg"
                    alt="Entreprenörer och mentorer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="order-2">
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[26px] md:leading-[40px] text-center md:text-left">
                  Vi har tillsammans genererat över 300 miljoner kronor
                </h3>
                <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Våra studenter har tillsammans omsatt över 250 miljoner
                    kronor genom e-handel, ett tydligt bevis på att framgång är
                    möjlig även för dig. Här är några exempel på deltagare som
                    idag driver lönsamma e-handelsverksamheter och har tagit
                    kontroll över sin framtid.
                  </p>
                  <p className="font-inter font-normal text-[11.5px] sm:text-sm text-[#434C69]">
                    Många av våra studenter arbetar nu heltid med e-handel och
                    styr både tid och inkomst själva. Med rätt vägledning är
                    detta fullt möjligt.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Deras resultat visar att e-handel i Sverige kan vara en
                    lönsam och hållbar affärsmodell när man har rätt kunskap och
                    insikter. Med vår utbildning får du verktygen för att ta
                    samma steg mot en framgångsrik e-handelskarriär.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Section - Omge dig med drivna entreprenörer */}
          <div className="bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[40px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px] mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image
                    src="/images/chansning.jpg"
                    alt="Entreprenörer och mentorer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[26px] md:leading-[40px] text-center md:text-left">
                  En e-handel onlineutbildning med ett stöttande community
                </h3>
                <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    En av de största styrkorna med vår utbildning är communityt,
                    en plats där du kan utbyta idéer och erfarenheter med andra
                    entreprenörer som delar dina mål. Här får du både kunskap
                    och stöd för att hålla motivationen uppe under hela resan.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Mentorskap från experter:{" "}
                    </span>
                    Våra coacher svarar på frågor, delar insikter och guidar dig
                    genom e-handelsvärlden.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Nätverk av studenter:{" "}
                    </span>
                    Bli en del av ett växande nätverk som stöttar och peppar
                    varandra. Dela tips, framgångar och utmaningar, du är aldrig
                    ensam.
                  </p>
                  <p className="font-inter text-xs md:text-sm text-[#27272A]">
                    <span className="font-inter text-[#27272A] text-[12px] md:text-[14px] font-bold">
                      Live-sessioner och workshops:{" "}
                    </span>
                    Få svar direkt från experter och fördjupa dina kunskaper med
                    praktiska råd och specifika verktyg.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Vårt community är mer än support, det är en källa till
                    inspiration, nya perspektiv och relationer som tar din
                    e-handel till nästa nivå.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action section */}
          <div className="flex flex-col bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] w-full p-3 md:p-[28px] rounded-[20px] items-center justify-center mt-10 max-w-[1000px] mx-auto">
            <div className="flex flex-col items-center justify-center align-middle bg-[#ffffff] w-full rounded-[20px] p-[12px] md:p-[38px] lg:p-[88px]">
              <h3 className="text-[#151E3A] text-[20px] md:text-[32px] font-bold font-jakarta text-center leading-[28px] md:leading-[30px]">
                Din bästa investering:
                <br />
                Utbildning i e-handel
              </h3>
              <p className="font-inter text-[10px] md:text-[14px] text-[#434C69] mt-2 md:mt-4 leading-relaxed max-w-[390px] md:max-w-[725px] text-center">
                Att investera i en e-handelsutbildning är att investera i din
                egen framtid. Med rätt utbildning får du de verktyg och den
                kunskap du behöver för att bygga en verksamhet som inte bara är
                lönsam nu, utan som kan fortsätta generera inkomst under många
                år framöver. Genom att följa en tydlig och strukturerad
                utbildning får du en stabil grund att stå på och lär dig att
                undvika de vanliga fallgroparna som många nybörjare möter. Det
                är en investering som kan öppna dörrar till både ekonomisk
                frihet och personlig utveckling.
              </p>
              <button
                type="button"
                onClick={() => openContractForm()}
                className="px-3 py-2 md:px-4 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner transition-all duration-200 ease-in-out transform flex items-center justify-center gap-1 mt-4"
              >
                <span className="font-jakarta text-xs md:text-sm font-bold">
                  Ansök till Mentorskap
                </span>
                <ArrowRightIcon
                  size={14}
                  className="md:w-4 md:h-4"
                  color="white"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle px-3 shadow-inner max-w-[178px] mb-4 mt-8">
            <p className="font-inter text-xs font-medium text-[#235AE9]">
              FAQs
            </p>
          </div>
          <h1 className="font-semibold font-jakarta text-[24px] md:text-[48px] mb-6 md:mb-10 lg:mb-10 text-center">
            Vanliga Frågor
          </h1>
          <div className="w-full bg-[#F5F9FF] rounded-[20px] max-w-7xl py-4 px-4 md:px-6 mb-16">
            <Accordion data={HomePageFaqData} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
