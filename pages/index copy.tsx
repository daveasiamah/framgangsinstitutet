import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"

import ScrollReveal from "@/components/transition/ScrollReveal"
import Link from "next/link.js"
import { HiQuestionMarkCircle } from "react-icons/hi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import Accordion from "@/components/parts/Accordion_Home"
import { MainFAQ } from "@/components/parts/MainFAQ"
import { HomePageFaqData } from "@/data/data"

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
              Gå med framgångsinstitutet Mentorskap idag!
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

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <>
      <Layout headTitle={t.homeData.metaData.title} isFullWidth={true}>
        <section className="relative hero-height flex w-full flex-col justify-between items-center gap-10 md:pt-10 mb-1 bg-[url('/images/home/graphics/hero-mesh.png')] bg-no-repeat bg-cover object-scale-down bg-black bg-top">
          <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col">
            <div className="flex flex-col items-center justify-center md:bg-[url('/images/pricing/store-hero-bg.svg')] md:bg-no-repeat md:bg-cover md:bg-center">
              <ScrollReveal className="flex justify-center w-full hero-height flex-col items-center mb-10 md:mb-24">
                <h1 className="font-bold font-jakarta text-[24px] md:text-[40px] lg:text-[60px] leading-6 md:leading-[46px] lg:leading-[56px] text-[#151E3A] max-w-[336px] md:max-w-[900px] lg:max-w-[1260px]">
                  Din allt i ett e-handelsskola
                </h1>
                <h2 className="text-xs md:text-[14px] text-[#434C69] max-w-[376px] md:max-w-[630px] py-2 md:leading-6 mt-2 font-inter mb-6">
                  Bygg, lansera och skala din digitala verksamhet på ett och
                  samma ställe. Få tillgång till beprövade utbildningar, färdiga
                  butiker och personlig vägledning, allt designat för att ta dig
                  från idé till lönsam e-handel.
                </h2>
                <div className="flex gap-4 relative z-10 items-center justify-center">
                  <Link
                    href="/utbildningar"
                    className="py-[14px] px-[26px] bg-[#225AEA] text-white font-semibold text-xs md:text-sm lg:text-base rounded-[8px]"
                  >
                    <p className="font-jakarta text-xs md:text-base">
                      Börja Nu →
                    </p>
                  </Link>
                  <Link
                    href="/utbildningar"
                    className="py-[14px] px-[26px] bg-white text-[#225AEA] border border-[#97a6d2] font-semibold text-xs md:text-sm lg:text-sm rounded-[8px]"
                  >
                    <p className="font-jakarta text-xs md:text-base">
                      Utforska alla kurser
                    </p>
                  </Link>
                </div>
              </ScrollReveal>
              {/* Hero Image and footnote */}
              <ScrollReveal className="w-full mt-8 md:mt-0 lg:mt-[-50px]">
                <div className="relative flex flex-col items-center px-4 md:px-6 lg:px-8">
                  <div className="relative w-full max-w-[1200px] mx-auto">
                    <Image
                      src={"/images/home/graphics/home-hero-art.svg"}
                      alt="E-handelsplattform översikt"
                      width={760}
                      height={562}
                      priority
                      className="w-full h-auto md:w-[650px] lg:w-[760px] mx-auto object-contain transition-all duration-300 hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-full max-w-[538px]">
                      <Image
                        src={"/images/home/graphics/hero-footer.png"}
                        alt="Funktioner översikt"
                        width={538}
                        height={46}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <p className="text-[9px] md:text-xs text-[#434C69] max-w-[600px] mx-auto leading-relaxed font-inter">
                      Alla funktioner är 100% vitmärkta, anpassningsbara och
                      redigerbara.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          {/* Responsive Styles */}
          <style jsx>{`
            @media (min-width: 768px) and (max-width: 1024px) {
              .hero-height {
                min-height: 550px; /* Adjusted for tablet view */
              }
              h1 {
                font-size: 34px; /* Larger text on tablets */
              }
              h2 {
                font-size: 16px;
                max-width: 450px;
              }
            }

            @media (min-width: 1024px) {
              .hero-height {
                min-height: 691px;
              }
            }
          `}</style>
        </section>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-[1.25rem] md:text-[2rem] lg:text-[2.8rem] text-center my-14 font-jakarta font-bold text-[#151E3A]">
            Utforska våra populära tjänster
          </h2>
        </section>
        {/* section 1 */}
        <section className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/graphics/hbook-icon.svg"
                alt="library icon"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-jakarta font-bold text-[#151E3A]">
                Färdig Dropshipping Butik
              </h3>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                Vi bygger en helt optimerad e-handelsbutik
              </h3>
              <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                Våra e-handelsexperter kommer bygga en helt optimerad
                e-handelsbutik på under 24 timmar för endast 999kr. Vårt team
                har designat över 1100+ dropshipping butiker och är här för att
                hjälpa dig starta din nästa butik!
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:w-1/2">
            <Image
              src="/images/home/graphics/home_pics/dropshipping.png"
              alt="E-commerce store preview"
              width={475}
              height={265}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="text-xs md:text-xs text-[#434C69] text-center leading-relaxed">
              Få tillgång till omfattande kurser som täcker allt från att starta
            </p>
          </div>
        </section>

        {/* section 2 */}
        <section className="flex flex-col-reverse md:flex-row-reverse justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/graphics/hbook-icon.svg"
                alt="library icon"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-jakarta font-bold text-[#151E3A]">
                Färdig Dropshipping Butik
              </h3>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                Vi bygger en helt optimerad e-handelsbutik
              </h3>
              <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                Våra e-handelsexperter kommer bygga en helt optimerad
                e-handelsbutik på under 24 timmar för endast 999kr. Vårt team
                har designat över 1100+ dropshipping butiker och är här för att
                hjälpa dig starta din nästa butik!
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:w-1/2">
            <Image
              src="/images/home/graphics/home_pics/dropshipping.png"
              alt="E-commerce store preview"
              width={475}
              height={265}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="text-xs md:text-xs text-[#434C69] text-center leading-relaxed">
              Få tillgång till omfattande kurser som täcker allt från att starta
            </p>
          </div>
        </section>

        {/* section 3 */}
        <section className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/graphics/hbook-icon.svg"
                alt="library icon"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-jakarta font-bold text-[#151E3A]">
                Färdig Dropshipping Butik
              </h3>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                Vi bygger en helt optimerad e-handelsbutik
              </h3>
              <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                Våra e-handelsexperter kommer bygga en helt optimerad
                e-handelsbutik på under 24 timmar för endast 999kr. Vårt team
                har designat över 1100+ dropshipping butiker och är här för att
                hjälpa dig starta din nästa butik!
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:w-1/2">
            <Image
              src="/images/home/graphics/home_pics/dropshipping.png"
              alt="E-commerce store preview"
              width={475}
              height={265}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="text-xs md:text-xs text-[#434C69] text-center leading-relaxed">
              Få tillgång till omfattande kurser som täcker allt från att starta
            </p>
          </div>
        </section>
        {/* section 4 */}
        <section className="flex flex-col-reverse md:flex-row-reverse justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/graphics/hbook-icon.svg"
                alt="library icon"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-jakarta font-bold text-[#151E3A]">
                Färdig Dropshipping Butik
              </h3>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#151E3A]">
                Vi bygger en helt optimerad e-handelsbutik
              </h3>
              <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                Våra e-handelsexperter kommer bygga en helt optimerad
                e-handelsbutik på under 24 timmar för endast 999kr. Vårt team
                har designat över 1100+ dropshipping butiker och är här för att
                hjälpa dig starta din nästa butik!
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:w-1/2">
            <Image
              src="/images/home/graphics/home_pics/dropshipping.png"
              alt="E-commerce store preview"
              width={475}
              height={265}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="text-xs md:text-xs text-[#434C69] text-center leading-relaxed">
              Få tillgång till omfattande kurser som täcker allt från att starta
            </p>
          </div>
        </section>

        {/* CTA section */}
        <section className="mt-10 mb-8 text-white">
          <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[20px] md:px-4 lg:px-6 md:py-5 lg:py-5 back-background">
            <HiQuestionMarkCircle
              className="mx-auto text-white mt-14"
              size={38}
              aria-label="help"
            />
            <div className="text-center flex flex-col items-center">
              {/* <div className="px-2"> */}
              <h1 className="text-white text-center text-[20px] leading-[48px] md:text-[24px] max-w-[557px] font-bold font-jakarta mb-2 mt-4">
                Över 10 miljoner kronor i intäkter på plattformen
              </h1>
              <p className="mb-4 max-w-xl mx-auto text-center lg:text-[16px] text-[12px] font-inter">
                Vår tjänst hjälper dig att ta kontroll över din framtid. Få
                personligt stöd från experter som vet vad som krävs för att
                lyckas.
              </p>
              <button
                onClick={() =>
                  window.open("https://buy.stripe.com/3cscO09iSdoBgVOeUZ")
                }
                className="py-2 px-4 flex items-center justify-center rounded-[8px] text-[10px] md:text-[12px] btn-white mb-5 lg:mt-10 mt-5 text-[#15133A]"
              >
                Börja Din Resa Här
                <MdOutlineKeyboardArrowRight
                  className="inline"
                  color="#cccccc"
                  size={20}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Orange Section */}
        <section className="my-10 border-[3px] border-[#DE8D13] p-[60px] bg-[#FFE3B5] rounded-[20px]">
          <div className="flex items-center gap-3">
            <Image
              src="/images/home/graphics/hbook-icon.svg"
              alt="library icon"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <h3 className="text-base md:text-[26px] font-jakarta font-semibold text-[#DE8D13]">
              Dropshipping Mentorskap
            </h3>
          </div>
          <h3 className="text-[16px] md:text-[40px] text-[#DE8D13] font-jakarta font-semibold my-6">
            Få tillgång till ett privat nätverk av hemliga strategier
          </h3>

          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="flex flex-col space-y-6 md:w-1/2">
              <div className="flex items-center gap-3">
                <h3 className="text-base text-[#DE8D13] md:text-[26px] font-jakarta font-semibold">
                  30 Vinnande Produkter
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Vi kommer att bygga en färdig e-handelsbutik med 30 vinnande
                  produkter vi har testat och bevisat sig sälja tidigare med
                  miljon försäljning. Du kommer igång inom 24 timmar och kan
                  börja sälja direkt.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:w-1/2 overflow-hidden">
              <Image
                src="/images/home/graphics/home_pics/dropshipping.png"
                alt="E-commerce store preview"
                width={376}
                height={211}
                className="h-auto object-cover rounded-xl border-[3px] border-[#DE8D13]"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center md:flex-row justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="flex flex-col space-y-6 md:w-1/2">
              <div className="space-y-4">
                <h3 className="text-base text-[#DE8D13] md:text-[26px] font-jakarta font-semibold">
                  15 Video Annonser
                </h3>
                <p className="text-sm md:text-base text-[#434C69] leading-relaxed">
                  Vårt team av e-handelsexperter skapar 10 video annonser som
                  relaterar till de 30 vinnande produkter vi lägger till i din
                  butik för att du ska enkelt börja marknadsföra.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:w-1/2">
              <Image
                src="/images/home/graphics/home_pics/dropshipping.png"
                alt="E-commerce store preview"
                width={376}
                height={211}
                className="h-auto object-cover rounded-xl border-[3px] border-[#DE8D13]"
              />
            </div>
          </div>
        </section>

        {/* Blue Section (duplicate of Orange Section with new colors) */}
        <section className="my-10 border-[3px] border-[#235AEA] p-[60px] bg-[#658af0] rounded-[20px]">
          <div className="flex items-center gap-3">
            <Image
              src="/images/home/graphics/hnews-icon.svg"
              alt="library icon"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <h3 className="text-xl md:text-2xl font-jakarta font-bold text-[#ffffff]">
              Dropshipping Mentorskap
            </h3>
          </div>
          <h3 className="text-[28px] md:text-[40px] text-[#ffffff] font-jakarta font-semibold my-6">
            Få tillgång till ett privat nätverk av hemliga strategier
          </h3>

          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="flex flex-col space-y-6 md:w-1/2">
              <div className="flex items-center gap-3">
                <h3 className="text-base md:text-[26px] text-[#ffffff] font-jakarta font-semibold">
                  10 Privat Lektioner
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base font-inter text-[#ffffff] leading-relaxed">
                  Få en exklusiv privat mentorskap med en framgångsrik
                  e-handelsmiljonär. Under 10 privata lektioner får du personlig
                  vägledning för att bygga, skala och växa ditt
                  dropshippingföretag.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:w-1/2 overflow-hidden">
              <Image
                src="/images/home/graphics/home_pics/homepic7.png"
                alt="E-commerce store preview"
                width={376}
                height={211}
                className="h-autoe object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center md:flex-row justify-between gap-6 md:gap-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="flex flex-col space-y-6 md:w-1/2 overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-inter font-semibold text-[#ffffff]">
                  Dropshipping Kurs
                </h3>
                <p className="text-sm md:text-base font-inter text-[#ffffff] leading-relaxed">
                  Få tillgång till en djupgående dropshipping e-handelskurs med
                  över 45+ avsnitt. Vi täcker områden inom produktforskning,
                  marknadsföring, och logistik, som hjälper dig att bygga ett
                  framgångsrikt e-handelsverksamhet.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:w-1/2">
              <Image
                src="/images/home/graphics/home_pics/homepic8.png"
                alt="dropshipping course"
                width={376}
                height={211}
                className="h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="flex flex-col w-full items-center gap-3 mt-10 mb-20">
          <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle self-center px-3 inset-3 shadow-sm max-w-[178px] mb-4">
            <p className="font-inter text-xs font-light text-[#235AE9]">
              Alla tillgängliga funktioner
            </p>
          </div>
          <h2 className="font-jakarta font-semibold text-[18px] md:text-[40px] lg:text-[40px] leading-[48px] mb-10">
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
                    framgångsinstitutet Mentorskap™️ är det enda stället som
                    erbjuder utbildning i världsklass med praktiskt vägledning
                    till ett unikt e-handelsystem.
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
        <section className="flex flex-col justify-center items-center py-10 mb-16">
          <Image
            src="/images/home/graphics/home_pics/ultimate_plan.png"
            alt="ultimate plan"
            width={360}
            height={268}
            className="object-contain w-[360px] h-[268px] md:w-[1024px] md:h-[568px]"
          />
          <Image
            src="/images/home/graphics/home_pics/framgångsinstitutet-logo.png"
            alt="logo"
            width={92}
            height={92}
            className="object-contain w-[92px] h-[92px] md:w-[195px] md:h-[195px] mt-[-50px]"
          />
          <h3 className="text-[22px] md:text-[48px] font-jakarta font-semibold text-[#151E3A] mt-6 mb-4">
            En ultimat plan
          </h3>
          <p className="text-center text-sm md:text-lg text-[#434C69] max-w-[600px] px-4">
            En plan med så mycket värde att den verkar för bra för att vara
            sann, plus ett pris som passar alla som är redo att vara ambitiösa.
          </p>

          <div className="flex items-center justify-center py-5">
            <Image
              src="/images/home/graphics/home_pics/ultimate-plan-pricing.png"
              alt="ultimate plan badge"
              width={751}
              height={663}
              className="object-contain w-[751px] h-[663px] items-center mt-6"
            />
          </div>
          <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle self-center px-3 inset-3 shadow-inner max-w-[178px] mb-4">
            <p className="font-inter text-xs font-light text-[#235AE9]">
              Totalt värde: 75 000 kr
            </p>
          </div>
          <Image
            src="/images/home/graphics/home_pics/Fa-Betalt.png"
            alt="ultimate plan badge"
            width={1082}
            height={376}
            className="object-contain w-[1082px] h-[376px] mt-6"
          />
        </section>

        <MainFAQ faqData={HomePageFaqData} />
      </Layout>
    </>
  )
}
