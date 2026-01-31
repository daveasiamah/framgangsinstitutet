import React from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
import { useModal } from "@/components/ModalContext"
import { ArrowRightIcon } from "lucide-react"
import Accordion from "@/components/parts/Accordion_Home"
import { HomePageFaqData } from "@/data/data"

export default function Dropshipping() {
  const { openContractForm } = useModal()

  return (
    <Layout headTitle="Dropshipping - Checkified" isFullWidth={true}>
      <section className="relative bg-white pt-8 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-[#151E3A] text-[22px] md:text-[42px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[28px] md:leading-[44px] lg:leading-[56px] max-w-[400px] md:max-w-[707px] lg:max-w-[936px] mx-auto">
            Allt du behöver lära dig för att lyckas med Dropshipping 2026
          </h1>

          {/* Description */}
          <p className="text-[#434C69] text-[15px] md:text-[16px] font-inter font-medium text-center mb-8 leading-relaxed max-w-[733px] mx-auto">
            Vi har lång erfarenhet av att driva dropshipping framgångsrikt, och
            det finns ett tydligt mönster för de butiker som presterar, och de
            som inte gör det. Med hjälp av dessa insikter har vi skapat vår
            onlinekurs om hur du driver dropshipping framgångsrikt 2026. Vi går
            djupt in på detaljerna av hur du lyckas med dropshipping.
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
            <img
              src="/images/home/graphics/checkified-hero.png"
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
            Allt du behöver kunna för att <br />
            lyckas med Dropshipping 2026
          </h2>
          {/* First Section - Lär dig av e-handelsexpert */}
          <div className="w-full bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[67px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[22px] md:leading-[40px] text-left md:text-left">
                  Utbildningen som hjälper dig <br className="sm:hidden" />
                  ta kontroll över ditt liv
                </h3>
                <ul className="space-y-0.5 font-inter font-normal text-[13px] md:text-[14px] tracking-[0%] text-[#434C69] pl-[18px]">
                  <li className="list-disc list-inside">Starta ditt företag</li>
                  <li className="list-disc list-inside">
                    Bygga en optimerad e-handelshemsida
                  </li>
                  <li className="list-disc list-inside">
                    Välja bästa leverantören
                  </li>
                  <li className="list-disc list-inside">
                    Identifiera vinnande dropshipping-produkter
                  </li>
                  <li className="list-disc list-inside">
                    Bygga ditt eget varumärke
                  </li>
                  <li className="list-disc list-inside">
                    Driva dropshipping via Shopify
                  </li>
                  <li className="list-disc list-inside">
                    Arbeta datadrivet med Meta-ads
                  </li>
                  <li className="list-disc list-inside">
                    Hantera testkampanjer effektivt
                  </li>
                  <li className="list-disc list-inside">Sköta kundservice</li>
                  <li className="list-disc list-inside">Skala upp företaget</li>
                  <li className="list-disc list-inside">
                    Skapa engagerande content
                  </li>
                </ul>
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
          <div className="bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[67px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px]">
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
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[22px] md:leading-[40px] text-left md:text-left">
                  Dropshipping kursen som har <br />
                  hjälpt dra över 350 miljoner
                </h3>
                <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Våra studenter har tillsammans genererat över 300 miljoner
                    kronor genom dropshipping. Det är ett kvitto på att det går
                    att lyckas, om man gör jobbet.
                  </p>
                  <p className="font-inter font-normal text-[11.5px] sm:text-sm text-[#434C69]">
                    Här ser du ett urval av de studenter som idag driver sina
                    verksamheter lönsamt. Genom kursen har de lärt sig att
                    identifiera produkter som faktiskt säljer, bygga datadrivna
                    processer och skapa egna varumärken som står ut.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Flera av dem kör dropshipping på heltid och styr både
                    inkomst och arbetstid själva tack vare de strategier de lärt
                    sig i vår videokurs.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Deras resultat visar en sak tydligt: dropshipping i Sverige
                    funkar, med rätt kunskap och rätt verktyg.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Section - Omge dig med drivna entreprenörer */}
          <div className="bg-[#F3F6FE] rounded-[20px] pt-[20px] px-[10px] pb-[32px] md:pt-[47px] md:px-[67px] lg:pt-[60px] lg:px-[58px] lg:pb-[60px] mt-8">
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
                <h3 className="text-[#151E3A] text-[22px] md:text-[39px] font-semibold font-geist mb-4 sm:mb-6 leading-[22px] md:leading-[40px] text-left md:text-left">
                  En dropshipping utbildning
                  <br />
                  plus ett stöttande community
                </h3>
                <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Vår dropshipping utbildning ger dig verktygen för att starta
                    och växa en lönsam verksamhet. Men kärnan i Checkified är
                    communityt.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    Dropshipping är ofta en ensam resa, du är din egen chef och
                    sitter utan kollegor. Checkified skapades för att bryta den
                    isoleringen och ge entreprenörer en plats att lära av
                    varandra.
                  </p>
                  <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                    När vi såg hur många nybörjare som sökte sig till oss, lade
                    vi till utbildningen. Idag erbjuder vi både en kurs som
                    hjälper dig starta och skala din butik, och ett nätverk där
                    du kan dela erfarenheter och få råd från likasinnade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action section */}
          <div className="flex flex-col bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] w-full p-3 md:p-[28px] rounded-[20px] items-center justify-center mt-10 max-w-[1000px] mx-auto">
            <div className="flex flex-col items-center justify-center align-middle bg-[#ffffff] w-full rounded-[20px] p-[12px] md:p-[38px] lg:p-[88px]">
              <h3 className="text-[#151E3A] text-[20px] md:text-[28px] lg:text-[36px] font-bold font-jakarta text-center leading-[28px] md:leading-[30px]">
                En investering i dig själv
              </h3>
              <p className="font-inter text-[10px] md:text-[14px] text-[#434C69] mt-2 md:mt-4 leading-relaxed max-w-[280px] md:max-w-[484px] text-center">
                Vår dropshipping kurs är en investering i dig själv som ditt
                framtida jag kommer att tacka dig för. Kolla på vår gratis intro
                guide där Dominic förklarar hur dropshipping hjälpte honom
                förändra sitt liv och hur det kan göra detsamma för dig, precis
                som det har gjort för våra andra studenter.
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
