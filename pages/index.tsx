import { useRouter } from "next/router"
import { GetServerSideProps } from "next"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"
import {
  AlmegaIcon,
  StarIcon,
  UserIcon,
  BadgeIcon,
} from "@/components/blocks/home-blocks/HomePageSvgs"
import { MainFAQ } from "@/components/parts/MainFAQ"
import { HomePageFaqData } from "@/data/data"
import HeroSection from "@/components/HeroSection"
import TrustPilotReviews from "@/components/parts/TrustPilotReviews"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import Title from "@/components/blocks/home-blocks/Title"
import HomePageCourseCard from "@/components/blocks/home-blocks/HomePageCourseCard"
import { courses } from "@/data/course-card-data"

type Course = (typeof courses)[number]

type HomeProps = {
  randomCourses: Course[]
}

export default function Home({ randomCourses }: HomeProps) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const homeMetaTitle =
    "Studera på distans via Framgångsinstitutet - När du vill. Var du vill."
  const homeMetaDescription =
    "Studera på distans via Framgångsinstitutet. Onlinekurser för personlig utveckling med tydliga inriktningar på yrken med behov av arbetskraft. Lär dig hantera stress, bli mer effektiv och stärka din digitala utveckling. Gör det smarta valet, utbilda dig genom framtidens skola och börja få resultat medan du lär dig."
  const homeFaqItems = HomePageFaqData.slice(0, 6)

  return (
    <Layout
      headTitle={homeMetaTitle}
      headDescription={homeMetaDescription}
      useExactHeadTitle={true}
      isFullWidth={true}
    >
      <div className="px-[18px] md:px-[38px]">
        <HeroSection />
        {/* Feature Stats section */}
        <section className="bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] rounded-[40px] max-w-[1336px] mx-auto px-5 md:px-[36px] py-5 md:py-14 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2 justify-between items-center">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#6CB0FA] to-[#225AEA] w-12 h-12 md:w-16 md:h-16">
                <UserIcon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h4 className="font-jakarta font-extrabold text-lg md:text-[25px]">
                10,000 + deltagare
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#6CB0FA] to-[#225AEA] w-12 h-12 md:w-16 md:h-16">
                <StarIcon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h4 className="font-jakarta font-extrabold text-lg md:text-[25px]">
                3000+ recensioner
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#6CB0FA] to-[#225AEA] w-12 h-12 md:w-16 md:h-16">
                <BadgeIcon className="w-3 h-4 md:w-5 md:h-6" />
              </div>
              <h4 className="font-jakarta font-extrabold text-lg md:text-[24px]">
                Sveriges ledande experter
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#6CB0FA] to-[#225AEA] w-12 h-12 md:w-16 md:h-16">
                <AlmegaIcon className="w-5 h-4 md:w-7 md:h-6" />
              </div>
              <h4 className="font-jakarta font-extrabold text-lg md:text-[25px]">
                ALMEGA-auktoriserade
              </h4>
            </div>
          </div>
        </section>

        <div className="flex flex-col w-full items-center lg:items-start lg:pl-[50px] max-w-[1336px] mx-auto mb-4">
          <h3 className="font-jakarta font-bold text-[22px] md:text-[40px] text-black mt-4 text-left">
            Vi har utbildningen för dig.
          </h3>
          <p className="font-inter font-medium text-center lg:text-start text-[14px] md:text-base text-black mt-2 mb-4 md:mb-6 max-w-[347px] md:max-w-[650px] lg:max-w-[809px] mx-0 leading-[20px]">
            Hos oss får du värdefulla kunskaper som leder till jobb genom
            expertledda yrkesutbildningar. Med våra skräddarsydda läroplaner och
            användarvänliga plattform blir det tillgängligt, bekvämt och
            effektfullt för dig att studera på distans.
          </p>
        </div>

        {/* Course Expert Section */}
        <section className="relative flex flex-col gap-8 md:py-[50px] md:px-[64px] lg:px-[60px] lg:py-[130px] bg-gradient-to-b from-[#6CB0FA] to-[#225AEA] px-4 py-6 rounded-[40px] lg:mx-auto lg:w-full lg:max-w-[1336px] lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full flex-col items-start text-left lg:flex-1">
            <h2 className="text-white leading-none text-[22px] md:text-[40px] max-w-[247px] md:max-w-[442px] font-bold font-jakarta mb-3 md:mb-4">
              Yrkesutbildningar skapade av experter.
            </h2>
            <p className="mb-4 md:mb-6 md:max-w-[709px] text-[14px] md:text-[16px] text-white font-inter font-medium leading-[1.6] sm:leading-relaxed">
              Våra yrkesutbildningar är framtagna av Sveriges mest framstående
              ämnesexperter som har omfattande kunskap och praktisk erfarenhet
              inom sina respektive områden. Du kommer att att lära av de bästa
              och få kompetenser som är efterfrågade på arbetsmarknaden.
            </p>
          </div>

          <div className="flex w-full flex-col lg:max-w-[368px]">
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                IT
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Ekonomi
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Fastighet
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Försäljning
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Entreprenörskap
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Kommunikation
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2">
              <p className="font-jakarta font-bold text-white text-[20px]">
                Pedagogik
              </p>
            </div>
            <div className="border-t-2 border-t-white py-2"></div>
          </div>
        </section>

        {/* Course Cards Section  */}
        <section className="w-full max-w-[1336px] mx-auto px-4 md:px-0 mb-8 md:mb-[50px] mt-[30px]">
          <div className="flex flex-col items-center justify-items-center w-full max-w-[1336px] mx-auto">
            <h3 className="max-w-[324px] md:max-w-[490px] font-jakarta font-extrabold text-center text-[22px] md:text-[32px] lg:text-[40px] leading-[1.0] text-black mt-4">
              Gör som över 10.000 framgångsrika svenskar
            </h3>
            <p className="font-inter font-medium text-center text-base text-black mt-4 mb-6 md:mb-10 max-w-[349px] md:max-w-[637px] lg:max-w-[700px] mx-auto leading-[20px]">
              Lär dig av Sveriges främsta experter och ta del av kunskap som har
              hjälpt tusentals personer nå sina mål.{" "}
              <br className="block md:hidden" />{" "}
              <br className="block md:hidden" />
              Oavsett om du vill bli mer effektiv, hantera stress eller stärka
              ditt ledarskap, får du insikter och strategier direkt från landets
              skarpaste hjärnor.
              <br className="block md:hidden" />
              <br className="block md:hidden" /> Börja din resa mot framgång nu!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomCourses.map((course) => (
              <HomePageCourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                credential="Diplom & certifikat"
                format="Distans"
                href="/utbildningar"
              />
            ))}
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="mb-8 mt-10 w-full max-w-[1336px] mx-auto px-4 md:px-0">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
            <div className="flex flex-col items-start w-full max-w-[1400px] rounded-[32px] bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] px-6 pt-8 pb-0 md:px-10 lg:px-12 lg:pt-10">
              <h3 className="font-jakarta font-extrabold text-[22px] md:text-[28px] text-black mb-2">
                Omfattande läroplaner
              </h3>
              <p className="font-inter font-medium text-[12px] md:text-[16px] text-[#151515] md:max-w-[640px] lg:max-w-[570px] leading-[20px] mb-6">
                Vi har grundligt utformat våra läroplaner för att täcka alla
                viktiga delar av varje ämne. Från grundläggande koncept till
                avancerade tekniker. Våra utbildningar ger en holistisk
                inlärningsupplevelse som utrustar dig med de färdigheter du
                behöver för att få det jobb du önskar.
              </p>
              <img
                src="/images/home/laroplaner.png"
                alt="Omfattande läroplaner"
                className="w-full h-auto mt-8"
              />
            </div>
            <div className="flex flex-col items-start w-full max-w-[1400px] rounded-[32px] bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] px-6 pt-8 pb-0 md:px-10 lg:px-12 lg:pt-10">
              <h3 className="font-jakarta font-extrabold text-[22px] md:text-[28px] text-black mb-2">
                Flexibla studier
              </h3>
              <p className="font-inter font-medium text-[12px] md:text-[16px] text-[#151515] md:max-w-[640px] lg:max-w-[570px] leading-[20px] mb-6">
                I vår plattform har du flexibiliteten att lära dig i din egen
                takt och sätta ditt eget schema. Oavsett om du arbetar heltid
                eller om du är en person med en hektisk livsstil kan du studera
                på distans när som helst, var som helst. Du skapar dina egna
                rutiner.
              </p>
              <img
                src="/images/home/studier.png"
                alt="Flexibla studier"
                className="w-full h-auto mt-8"
              />
            </div>
          </div>

          {/* Practical Learning Section */}
          <div className="flex flex-col bg-gradient-to-tr from-[#6CB0FA] to-[#225AEA] rounded-[40px] md:rounded-[40px] px-[26px] py-[40px] lg:px-[50px] lg:py-[50px]">
            <div className="w-full text-left flex flex-col items-start md:grid md:grid-cols-[75px,1fr] md:gap-x-4 md:items-center lg:flex lg:flex-col lg:items-start">
              <img
                src="/icons/main-icon-light.png"
                alt="Main Icon"
                className="h-[75px] w-[75px] mb-4 md:mb-0 lg:mb-4"
              />

              <div>
                <h1 className="text-white text-[18px] leading-[1.3] sm:text-[20px] sm:leading-[1.4] md:text-[24px] md:leading-[1.5] max-w-[90%] sm:max-w-[600px] font-bold font-jakarta mb-3 md:mb-3 lg:mb-4">
                  Praktiskt lärande
                </h1>
                <p className="mb-4 md:mb-0 max-w-[296px] md:max-w-[547px] lg:max-w-[817px] text-sm md:text-base text-white font-inter font-medium leading-[1.6] sm:leading-relaxed">
                  Vi tror på kraften i praktisk applicering i dina studier. Våra
                  utbildningar innehåller case och övningar hämtade från
                  arbetslivet vilket gör att du kan tillämpa dina nyvunna
                  kunskaper direkt i din yrkesroll.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Study Material Section */}
        <section className="flex flex-col items-center gap-3 w-full mb-8">
          {/* Distance Learning Section */}
          <section className="w-full max-w-[1336px] items-center lg:items-start flex flex-col mx-auto px-4 md:px-0 mt-4 mb-8">
            <Title
              blackText="Så här fungerar "
              blueText="dina studier."
              textClassName="font-jakarta font-extrabold leading-tight text-[22px] md:text-[32px] lg:text-[40px]"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="flex h-full flex-col items-start bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] rounded-[40px] md:max-w-[405px] lg:max-w-full mt-8 w-full px-4 py-8 md:px-4 lg:px-4 lg:py-10 text-left">
                <div className="flex h-[168px] w-full items-center justify-center mb-6 md:h-[180px] lg:h-[192px]">
                  <img
                    src="/images/home/calendar.png"
                    alt="Calendar"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="w-full min-h-[1.8rem] font-jakarta font-extrabold text-lg leading-tight md:min-h-[2.5rem] md:text-[26px]">
                  Studera på distans
                </h3>
                <p className="w-full font-inter text-[12px] md:text-[14px] lg:text-base text-[#000000] md:max-w-[640px] lg:max-w-[405px] mt-0">
                  Våra utbildningar är utformade för att hålla dig engagerad
                  hela studietiden. Lärplattformen är självvaliderande och
                  innehåller interaktiva frågor, quiz och övningar för att
                  stärka din förståelse.
                </p>
              </div>
              <div className="flex h-full flex-col items-start bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] rounded-[40px] md:max-w-[405px] lg:max-w-full mt-8 w-full px-4 py-8 md:px-4 lg:px-4 lg:py-10 text-left">
                <div className="flex h-[168px] w-full items-center justify-center mb-6 md:h-[180px] lg:h-[192px]">
                  <img
                    src="/images/home/mobile.png"
                    alt="Mobile"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="w-full min-h-[1.8rem] font-jakarta font-extrabold text-lg leading-tight md:min-h-[2.5rem] md:text-[26px]">
                  Få tillgång till digitalt innehåll
                </h3>
                <p className="w-full font-inter text-[12px] md:text-[14px] lg:text-base text-[#000000] md:max-w-[640px] lg:max-w-[405px] mt-0">
                  När du startar ditt lärande får du tillgång till förinspelade
                  videoföreläsningar, text- och bilddokument, instuderingsfrågor
                  och övningar ledda av våra experter.
                </p>
              </div>

              <div className="flex h-full flex-col items-start bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF] rounded-[40px] md:max-w-[405px] lg:max-w-full mt-8 w-full px-4 py-8 md:px-4 lg:px-4 lg:py-10 text-left">
                <div className="flex h-[168px] w-full items-center justify-center mb-6 md:h-[180px] lg:h-[192px]">
                  <img
                    src="/images/home/stats.png"
                    alt="Stats"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="w-full min-h-[1.8rem] font-jakarta font-extrabold text-lg leading-tight md:min-h-[2.5rem] md:text-[26px]">
                  Erhåll diplom och certifikat
                </h3>
                <p className="w-full font-inter text-[12px] md:text-[14px] lg:text-base text-[#000000] md:max-w-[640px] lg:max-w-[405px] mt-0">
                  När du är färdig med din utbildning kommer du att erhålla ett
                  diplom. Båda dokumenten är digitala och stärker din
                  professionella profil, vilket öppnar dörrar till nya
                  karriärmöjligheter.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start mt-8 w-full max-w-[1336px] rounded-[32px] bg-gradient-to-b from-[#F9FBFF] to-[#E5F2FF]  px-4 py-6 md:px-[52px] md:py-[55px] lg:px-24 lg:py-16">
              <Title
                blackText="Detta "
                blueText="får du."
                textClassName="font-jakarta font-extrabold leading-none text-[22px] md:text-[32px] lg:text-[40px] mb-6"
              />
              <h3 className="font-jakarta font-extrabold md:text-[28px] lg:text-[32px]">
                Tillgång studiematerial.
              </h3>
              <p className="font-inter font-medium text-[12px] md:text-[14px] lg:text-base text-[#151515] md:max-w-[640px] lg:max-w-[720px] leading-[20px] mb-6">
                Du kan återbesöka innehållet även efter att du har slutfört din
                utbildning när du behöver repetition.
              </p>
              <h3 className="font-jakarta font-extrabold md:text-[28px] lg:text-[32px]">
                Obegränsad support.{" "}
              </h3>
              <p className="font-inter font-medium text-[12px] md:text-[14px] lg:text-base text-[#151515] md:max-w-[640px] lg:max-w-[720px] leading-[20px] mb-6">
                Studera på distans behöver inte betyda att du studerar helt
                ensam. Vi hjälper dig under hela din studietid. Oavsett om du
                har tekniska frågor eller behöver vägledning angående
                utbildningsmaterialet så finns vi här för att hjälpa dig att
                lyckas.
              </p>
              <h3 className="font-jakarta font-extrabold md:text-[28px] lg:text-[32px]">
                14 dagar ångerrätt.
              </h3>
              <p className="font-inter font-medium text-[12px] md:text-[14px] lg:text-base text-[#151515] md:max-w-[640px] lg:max-w-[720px] leading-[20px] mb-6">
                Skulle du inte vara nöjd med en utbildning du köpt betalar vi
                tillbaka alla pengar till dig inom 14 dagar efter köptillfället
                förutsatt att du inte slutfört utbildningen.
              </p>
            </div>
          </section>
          <div className="w-full flex flex-col justify-center mb-8">
            <Title blackText="Recensioner" />
            <TrustPilotReviews />
          </div>
        </section>

        {/* Brands Section */}
        <section className="flex flex-col justify-center items-center py-1 mb-8">
          <h1 className="font-jakarta font-extrabold text-lg text-center md:text-3xl lg:text-left">
            Företag vi hjälpt med kompetensutveckling
            <br className="lg:hidden" /> av personalen
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-[18px] md:gap-[36px] mt-6">
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/tele2.png"
                alt="Tele2"
                width={220}
                height={110}
                className="h-auto w-[78%] max-w-[155px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/sveriges-radio.png"
                alt="Sveriges Radio"
                width={234}
                height={36}
                className="h-auto w-[78%] max-w-[162px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/securitas.png"
                alt="Securitas"
                width={162}
                height={110}
                className="h-auto w-[78%] max-w-[162px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/astrazeneca.png"
                alt="AstraZeneca"
                width={233}
                height={56}
                className="h-auto w-[78%] max-w-[233px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/arbetsformedlingen.png"
                alt="Arbetsförmedlingen"
                width={236}
                height={29}
                className="h-auto w-[78%] max-w-[236px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/ericsson.png"
                alt="Ericsson"
                width={230}
                height={110}
                className="h-auto w-[78%] max-w-[230px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/stockholmsstad.png"
                alt="Stockholms Stad"
                width={202}
                height={69}
                className="h-auto w-[78%] max-w-[202px] object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-[160.34px] md:w-[284px] h-[94.28px] md:h-[167px] lg:h-[160px] bg-[#F8F8F8]">
              <Image
                src="/icons/almi.png"
                alt="Almi"
                width={160}
                height={57}
                className="h-auto w-[78%] max-w-[160px] object-contain"
              />
            </div>
          </div>
          <div className="mt-8 w-full max-w-[1240px] rounded-[32px] bg-[#F8F8F8] px-6 py-8 md:px-10 lg:px-12 lg:py-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px,1fr] lg:gap-12">
              <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
                <h3 className="font-jakarta text-[22px] font-extrabold text-[#151E3A]">
                  Betala tryggt med
                </h3>
                <Image
                  src="/icons/klarna.png"
                  alt="Klarna"
                  width={180}
                  height={120}
                  className="h-auto w-[180px] object-contain md:w-[193px]"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:pl-12 lg:text-left">
                <h3 className="font-jakarta text-[22px] font-extrabold text-[#151E3A]">
                  Vi erbjuder följande betalningssätt:
                </h3>
                <div className="flex flex-col">
                  <ul className="mx-auto grid w-fit grid-cols-1 gap-y-0 list-disc list-inside text-left text-base font-inter font-medium text-[#151E3A] lg:mx-0 lg:grid-cols-2 lg:gap-x-28 lg:list-outside lg:pl-5">
                    <li>Få först. Betala sedan.</li>
                    <li>Betalningstid minst 14 dagar.</li>
                    <li>14 dagars ångerrätt</li>
                    <li>Dela upp betalningen per månad.</li>
                    <li>Betala direkt med BankID.</li>
                    <li>Betala med kort.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1258px] bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] bg-cover rounded-[20px] sm:rounded-[32px] mx-auto px-2 sm:px-4 py-4 sm:py-4 mt-4 mb-4">
          <div className="relative w-full max-w-[1170px] mx-auto min-h-[240px] sm:min-h-[260px] md:h-[366px] flex flex-col items-center justify-center">
            {/* Icon placeholder */}
            <div className="flex flex-col items-center px-2">
              {/* Main heading */}
              <h3 className="max-w-[455px] font-semibold text-white text-sm md:text-[32px] leading-7 mb-3 sm:mb-4 font-jakarta text-center">
                Börja studera på distans idag.
              </h3>

              {/* Subtext */}
              <p className="max-w-[346px] text-center font-regular text-white text-[10px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 font-inter px-1">
                Utforska vårt utbildningsutbud och ta första steget mot din
                personliga utveckling.
              </p>

              <div className="border-0.5 border-white shadow-sm shadow-slate-50 drop-shadow-sm rounded-full px-2 sm:px-4 md:px-6 py-3 sm:py-4 mb-4">
                <div className="flex items-center border-1 border-white justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white font-inter overflow-hidden">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                    <Image
                      src="/icons/bolt.svg"
                      width={12}
                      height={13.3}
                      alt="bolt"
                      className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                    />
                    <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                      Få omedelbar åtkomst
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                    <Image
                      src="/icons/handshake.svg"
                      width={12}
                      height={13.3}
                      alt="handshake"
                      className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                    />
                    <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                      24/7 support
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                    <Image
                      src="/icons/hand.svg"
                      width={12}
                      height={13.3}
                      alt="hand"
                      className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                    />
                    <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                      Livstids tillgång
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
              <p className="text-white font-inter font-medium text-[9px] sm:text-[10px] md:text-[14px] whitespace-nowrap">
                Strålande
              </p>
              <Image
                src="/icons/trustpilot-stars.svg"
                className="w-[100px] sm:w-[124px] h-[18px] sm:h-[20px] md:h-[24px] flex-shrink-0"
                alt="svg"
                width={124}
                height={24}
              />
              <p className="text-white font-inter font-medium text-[9px] sm:text-[10px] md:text-[14px] whitespace-nowrap">
                4.8 av 5.0
              </p>
            </div>
            {/* CTA Button */}
            <a
              href="https://buy.stripe.com/bJe4gyclScFaeDX0KI6wE01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-white text-gray-600 px-[24px] py-2 rounded-lg font-semibold text-sm font-jakarta mt-[16px] md:mt-[28px]"
            >
              <p className="font-inter font-semibold text-[#151E3A] text-[14px]">
                Bli medlem
              </p>{" "}
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </section>

        <MainFAQ faqData={homeFaqItems} />
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
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const shuffledCourses = [...courses]

  for (let i = shuffledCourses.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[shuffledCourses[i], shuffledCourses[randomIndex]] = [
      shuffledCourses[randomIndex],
      shuffledCourses[i],
    ]
  }

  return {
    props: {
      randomCourses: shuffledCourses.slice(0, 6),
    },
  }
}
