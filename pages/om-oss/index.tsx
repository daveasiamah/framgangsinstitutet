import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
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
            Framgångsinstitutet Revolution
          </h1>

          {/* Description */}
          <p className="text-[#434C69] text-[16px] font-inter font-medium text-center mb-4 leading-relaxed max-w-[733px] md:max-w-[690px] mx-auto">
            framgångsinstitutet grundades av e-handelsentreprenör och grundaren
            Dominic, för att hjälpa dig att komma igång med dropshipping och
            e-handel. Det som började som en lösning på hans egna utmaningar
            inom e-handel utvecklades så småningom till framgångsinstitutet.
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
              src="/images/home/graphics/framgångsinstitutet-hero.png"
              alt="framgångsinstitutet Hero"
              width={960}
              height={540}
              className="object-cover w-auto md:w-full h-auto"
            />
            <p className="w-full text-center text-[#434C69] text-[8px] md:text-[12px] font-inter font-medium relative z-2 whitespace-nowrap">
              Betrodd av över{" "}
              <span className="font-inter font-bold leading-[22px] text-[#225AEA]">
                2000+
              </span>{" "}
              studenter för att börja deras e-handelsresa och öka intäkterna
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-[1280px] mx-auto mb-8 mt-[25px] md:mt-[42px] px-4">
        <div className="flex flex-col mx-auto text-center mb-[17px]">
          <h2 className="text-[#151E3A] text-[24px] md:text-[38px] font-bold font-geist leading-[36px] md:leading-[32px]">
            Vår resa hittills
          </h2>
          <p className="text-[#434C69] mt-[8px] md:mt-4 text-[10px] md:text-[12px] lg:text-[16px] font-inter font-normal leading-relaxed max-w-[231px] md:max-w-[510px] mx-auto ">
            Från en idé till Sveriges största utbildningssplatform på marknaden.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/icons/framgångsinstitutet-icon.svg"
                alt="Founded"
                width={34}
                height={34}
                className="mb-1"
              />
              <h3 className="text-[#151E3A] text-[16px] md:text-[22px] font-semibold font-geist mb-2">
                Grundad
              </h3>
              <p className="text-[#434C69] text-[10px] lg:text-[14px] font-inter font-normal leading-relaxed max-w-[300px] md:max-w-[300px] text-center">
                En idé föddes, framgångsinstitutet grundades.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/brush.svg"
                alt="Founded"
                width={34}
                height={34}
                className="mb-1"
              />
              <h3 className="text-[#151E3A] text-[16px] md:text-[22px] font-semibold font-geist mb-2">
                Utbildningsdesign
              </h3>
              <p className="text-[#434C69] text-[10px] lg:text-[14px] font-inter font-normal leading-relaxed max-w-[300px] md:max-w-[300px] text-center">
                Designteamet började utveckla varumärkesidentiteten och
                användargränssnittet.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/3dcube.svg"
                alt="Founded"
                width={34}
                height={34}
                className="mb-1"
              />
              <h3 className="text-[#151E3A] text-[16px] md:text-[22px] font-semibold font-geist mb-2">
                Nutid
              </h3>
              <p className="text-[#434C69] text-[10px] lg:text-[14px] font-inter font-normal leading-relaxed max-w-[300px] md:max-w-[300px] text-center">
                framgångsinstitutet är live och hjälper människor över hela
                världen att förvandla sina dropshipping drömmar till lönsamma
                verkligheter.
              </p>
            </div>
          </div>

          {/* Middle - Timeline */}
          <div className="w-full mx-auto flex justify-center items-center">
            <img
              src="/images/home/timeline-desktop.png"
              className="w-full max-w-[590px] h-auto md:max-w-[646px] lg:max-w-[1108px]"
            />
          </div>

          {/* Bottom row - 2 cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-around items-center md:items-stretch">
            <div className="flex flex-col items-center w-full md:flex-1 md:max-w-[300px]">
              <img
                src="/icons/test.svg"
                alt="Founded"
                width={34}
                height={34}
                className="mb-1"
              />
              <h3 className="text-[#151E3A] text-[16px] md:text-[22px] font-semibold font-geist mb-2">
                Grundad
              </h3>
              <p className="text-[#434C69] text-[10px] lg:text-[14px] font-inter font-normal leading-relaxed max-w-[300px] md:max-w-[300px] text-center">
                Konceptet med minsta möjliga livskraftiga produkter (MVP)
                skapades för att validera den ursprungliga idén för marknaden.
              </p>
            </div>
            <div className="flex flex-col items-center w-full md:flex-1 md:max-w-[300px]">
              <img
                src="/icons/ranking.svg"
                alt="Founded"
                width={34}
                height={34}
                className="mb-1"
              />
              <h3 className="text-[#151E3A] text-[16px] md:text-[22px] font-semibold font-geist mb-2">
                Kommer till liv
              </h3>
              <p className="text-[#434C69] text-[10px] lg:text-[14px] font-inter font-normal leading-relaxed max-w-[300px] md:max-w-[276px] text-center">
                framgångsinstitutet är i full utvecklingsfas med nya verktyg och
                funktioner som släpps regelbundet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mt-[36px] md:mt-[68px] mb-[35px] md:mb-[97px] px-4">
        <div className="flex flex-col mx-auto text-center mb-[17px]">
          <h2 className="text-[#000000] text-[18px] md:text-[38px] font-semibold font-geist leading-[36px] md:leading-[32px]">
            Vår grundare
          </h2>
          <p className="text-[#434C69] mt-[8px] md:mt-4 text-[10px] md:text-[12px] lg:text-[16px] font-inter font-normal leading-relaxed max-w-[276px] md:max-w-[890px] mx-auto ">
            Möt grundaren bakom framgångsinstitutet, som är dedikerad till att
            hjälpa dig att nå framgång inom dropshipping.
          </p>
        </div>
        {/* Profile container */}
        <div className="flex flex-col gap-6 w-full mx-auto rounded-3xl max-w-[768px] px-[54px] py-[35px] shadow-[0_1px_4px_0_#225AEA]">
          <div className="w-full flex flex-col">
            <img
              src="/images/om-oss/dominic.jpg"
              alt="Dominic - Grundare av framgångsinstitutet"
              width={64}
              height={64}
              className="object-cover w-[64px] h-[64px] rounded-full self-start"
            />
            <h3 className="w-full text-[#434C69] text-[16px] md:text-[18px] leading-snug font-geist font-semibold">
              Dominic | VD & Grundare
            </h3>
            <p className="text-[#434C69] mt-[8px] md:mt-1 text-[10px] md:text-[12px] lg:text-[14px] font-inter font-normal leading-snug max-w-[284px] md:max-w-[647px] ">
              Dominic, en åttasiffrig dropshippare och entreprenör, VD för
              framgångsinstitutet.
            </p>
            <p className="text-[#434C69] text-[10px] mt-[14px] md:text-[12px] lg:text-[14px] font-inter font-normal leading-snug max-w-[284px] md:max-w-[647px]">
              Som din instruktör i framgångsinstitutet delar Dominic med sig av
              sin expertis för att hjälpa dig att lyckas.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <div className="max-w-[1280px] mx-auto mt-[36px] md:mt-[68px] mb-[28px] md:mb-[33px] lg:mb-[56px] px-4">
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
                En arbetsplats där varje dag räknas
              </h3>
              <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  På framgångsinstitutet händer det alltid något nytt. Vår
                  vardag är fylld av energi, idéer och människor som vill
                  framåt, och det är just den dynamiken som gör vår miljö så
                  inspirerande.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  En dag djupdyker vi i strategier för att bygga framgångsrika
                  e-handelsvarumärken, nästa får vi besök av en entreprenör som
                  redan gjort resan. Ibland kliver tidigare elever in för att
                  dela sina framgångar, ett tydligt bevis på att hårt arbete
                  lönar sig.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Även när det är en lugn dag är det aldrig stillastående. Någon
                  har hittat en ny trend, någon annan har testat en strategi som
                  fungerar oväntat bra. Hos oss finns alltid något att lära, och
                  alltid någon som vill växa.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  På framgångsinstitutet utvecklas vi tillsammans, steg för
                  steg. Här formas framtidens entreprenörer, och varje dag tar
                  vi ett nytt kliv mot att bli ännu bättre, både som människor
                  och som skapare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full flex flex-col bg-[#2E56F5] mx-auto pt-[28px] md:pt-[34px] lg:pt-[53px] pb-[47px] md:pb-[40px] lg:pb-[53px] px-4 md:px-2 mb-8 md:mb-12">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col items-center justify-center px-4 md:px-4 lg:px-0">
            <h2 className="font-geist font-semibold text-center text-white text-[26px] md:text-[40px] leading-[40px]">
              Varför välja framgångsinstitutet?
            </h2>
            <p className="font-inter text-[14px] md:text-[16px] text-white text-center leading-[18px] md:max-w-[684px] lg:max-w-[969px] mt-4 mb-12">
              Vår AI-drivna utbildning hjälper dig att fatta bättre beslut
              snabbare: från produktval och marknadsanalys till optimering av
              annonser och skalning. Istället för att fastna i trial-and-error
              får du tydliga processer, datadrivna insikter och personlig
              vägledning baserad på vad som faktiskt fungerar.
            </p>
          </div>
          <div className="max-w-[236px] md:max-w-[533px] lg:max-w-[1280px] items-center justify-center mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-start">
              <img
                src="/icons/fan.svg"
                alt="Fan icon"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <h3 className="font-geist font-semibold text-white text-[24px] leading-[34px]">
                Erfarenhet
              </h3>
              <p className="font-inter text-[14px] md:text-[16px] text-white text-start max-w-[262px]">
                Med över 9 år inom e-handel förstår vi onlineföretagens
                smärtpunkter intimt.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="/icons/spiral.svg"
                alt="Fan icon"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <h3 className="font-geist font-semibold text-white text-[24px] leading-[34px]">
                Expertis
              </h3>
              <p className="font-inter text-[14px] md:text-[16px] text-white text-start max-w-[262px]">
                Vi är specialiserade på att lära ut den komplexa
                e-handelsvärlden av dropshipping.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="/icons/stacks.svg"
                alt="Fan icon"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <h3 className="font-geist font-semibold text-white text-[24px] leading-[34px]">
                Community
              </h3>
              <p className="font-inter text-[14px] md:text-[16px] text-white text-start max-w-[262px]">
                På framgångsinstitutet tror vi på styrka i antal. Vi bygger en
                gemenskap av handlare för att kollektivt öka lärdom och kunskap
                inom e-handel.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="/icons/arrows.svg"
                alt="Fan icon"
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
              <h3 className="font-geist font-semibold text-white text-[24px] leading-[34px]">
                Innovation
              </h3>
              <p className="font-inter text-[14px] md:text-[16px] text-white text-start max-w-[262px]">
                Med hjälp av den senaste tekniken automatiserar och
                effektiviserar vi utbildningsprocesser för maximal effektivitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mb-4 px-4 md:px-0">
        <div className="flex flex-col mx-auto text-center items-center mb-[17px]">
          <h2 className="text-[#151E3A] text-[18px] md:text-[36px] lg:text-[60px] font-bold font-geist leading-[36px] md:leading-[32px]">
            Kom igång & maximera dina intäkter
          </h2>
          <p className="text-[#434C69] md:mt-2 lg:mt-6 text-[12px] md:text-base lg:text-[16px] font-inter font-normal leading-relaxed max-w-[309px] md:max-w-[365px] lg:max-w-[679px] mx-auto ">
            Med framgångsinstitutet kan du komma igång och öka din försäljning
            med hjälp av framgångsinstitutet AI.
          </p>
          <img
            src="/images/om-oss/graph-metrics.png"
            alt="Get started graphic"
            width={521}
            height={423}
            className="object-cover w-full md:w-[521px] h-[381px] md:h-[423px]"
          />
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="mb-8 text-white w-[calc(100%-20px)] md:w-full max-w-[1358px] mx-auto md:px-2">
        <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[16px] md:rounded-[20px] px-4 md:px-4 lg:px-6 py-6 md:py-8 lg:py-10 back-background">
          <div className="text-center flex flex-col items-center w-full">
            <h1 className="text-white text-center text-[14px] md:text-[32px] leading-[1.3] max-w-[90%] sm:max-w-[600px] font-bold font-jakarta mb-3 md:mb-4">
              Vill du bli en del av framgångsinstitutet team?
            </h1>
            <p className="font-inter text-[8px] md:text-[14px] max-w-[233px] md:max-w-[413px] mb-[14px] md:mb-[26px]">
              Skicka in din ansökan för den roll du tycker passar dig bäst. Vi
              rekryterar löpande, fyll i dina uppgifter, så kanske just du blir
              en del av vårt team!
            </p>
            <button
              onClick={() => openContractForm()}
              className="py-2 px-4 md:py-2.5 md:px-5 flex items-center justify-center rounded-[8px] font-semibold font-inters text-[11px] md:text-[12px] btn-white text-[#15133A] hover:bg-gray-100 transition-colors"
            >
              Ansök här <ArrowRight size={14} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
