"use client"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import {
  homePageCTAData,
  homePageFaqs,
  homePagePartners,
} from "@/components/blocks/home-blocks/HomePageData"
import Title from "@/components/blocks/home-blocks/Title"
import SubTitle from "@/components/blocks/home-blocks/SubTitle"
import Image from "next/image"
import { useCourses } from "@/hooks/useCourses"
import CourseCard from "@/components/blocks/courses-blocks/CourseCard"
import { useMemo } from "react"
import {
  AlmegaIcon,
  StarIcon,
  UserIcon,
  BadgeIcon,
} from "@/components/blocks/home-blocks/HomePageSvgs"
import ScrollReveal from "@/components/transition/ScrollReveal"
import Link from "next/link.js"
import Accordion, {
  AccordionItem,
} from "@/components/blocks/home-blocks/HomePageAccordion"
import { ConsultationForm } from "@/components/blocks/home-blocks/ConsultationForm"

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { courses } = useCourses()

  const randomCourses = useMemo(() => {
    if (!courses || courses.length === 0) return []
    const shuffled = [...courses].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }, [courses])

  return (
    <>
      <Layout headTitle={t.homeData.metaData.title}>
        <section className="relative hero-height flex w-full flex-col justify-between items-center gap-10 md:pt-10 mb-1">
          <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col">
            <div className="flex flex-col items-center w-full justify-center md:bg-[url('/images/pricing/store-hero-bg.svg')] md:bg-no-repeat md:bg-cover md:bg-center">
              <ScrollReveal className="flex justify-center hero-height flex-col items-center mb-10 md:mb-24">
                <h1 className="text-[18px] md:text-[38px] lg:text-[48px] font-bold font-jakarta">
                  Din framtid börjar här
                </h1>
                <h2 className="text-xs md:text-[16px] lg:text-[18px] text-[#434C69] max-w-[276px] md:max-w-[480px] lg:max-w-[600px] py-2 md:leading-6 mt-2 font-inter mb-6">
                  Hitta distans utbildningar som leder till jobb. Studera när du
                  vill, hur du vill och var du vill.
                </h2>
                <button
                  onClick={() => router.push("/utbildningar")}
                  className="w-[141px] md:w-[160px] lg:w-[180px] py-3 bg-[#225AEA] text-white font-semibold text-xs md:text-sm lg:text-base rounded-lg mb-[32px] md:mb-[52px]"
                >
                  <p className="font-jakarta text-xs md:text-base">
                    Hitta Utbildning
                  </p>
                </button>

                <Image
                  src={"/new-home/hero-image-home.jpg"}
                  alt={`hero image`}
                  width={1196}
                  height={691}
                  className="w-full md:w-[80%] lg:w-auto h-auto md:h-[450px] lg:h-[691px] object-cover md:object-contain z-10"
                />
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

        <div className="bg-blue-600 rounded-[45px] px-5 md:px-10 py-5 md:py-14 md:mt-10 mb-5 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 justify-between items-center">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-[#90adf5] w-12 h-12 md:w-16 md:h-16">
                <UserIcon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h4 className="font-jakarta text-white text-xs md:text-sm md:font-semibold lg:font-bold">
                7500+ deltagare
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-[#90adf5] w-12 h-12 md:w-16 md:h-16">
                <StarIcon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h4 className="font-jakarta text-white text-xs md:text-sm md:font-semibold lg:font-bold">
                2500+ recensioner
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-[#90adf5] w-12 h-12 md:w-16 md:h-16">
                <BadgeIcon className="w-3 h-4 md:w-5 md:h-6" />
              </div>
              <h4 className="font-jakarta text-white text-xs md:text-sm md:font-semibold lg:font-bold">
                Sveriges ledande experter
              </h4>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex justify-center items-center rounded-full bg-[#90adf5] w-12 h-12 md:w-16 md:h-16">
                <AlmegaIcon className="w-5 h-4 md:w-7 md:h-6" />
              </div>
              <h4 className="font-jakarta text-white text-xs md:text-sm md:font-semibold lg:font-bold">
                ALMEGA-auktoriserade
              </h4>
            </div>
          </div>
        </div>

        {homePageCTAData.map((item, index) => (
          <section
            key={index}
            className="mb-4 md:mb-14 w-full flex justify-center"
          >
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-5 md:gap-12 w-full max-w-[1200px]`}
            >
              <div className="flex-1 flex flex-col items-start gap-5 px-4 max-w-[617px]">
                <h2 className="font-jakarta text-xl md:text-[2rem] md:leading-[2.5rem] font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  {item.text}
                </p>
                {index === 0 && (
                  <>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/new-home/check-mark.svg"
                        alt="check-mark"
                        width={16}
                        height={11}
                      />
                      <p className="text-gray-600 text-xs md:text-base">
                        Över 90% av våra studenter får jobb
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/new-home/check-mark.svg"
                        alt="check-mark"
                        width={16}
                        height={11}
                      />
                      <p className="text-gray-600 text-xs md:text-base">
                        Över 1 000 arbetsgivare i nätverket
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/new-home/check-mark.svg"
                        alt="check-mark"
                        width={16}
                        height={11}
                      />
                      <p className="text-gray-600 text-xs md:text-base">
                        Pricksäkra utbildningslösningar
                      </p>
                    </div>
                  </>
                )}
                <Link
                  href={
                    index === 2
                      ? "https://checkified.se/ebocker/"
                      : "https://checkified.se/utbildningar"
                  }
                  className="w-[99px] md:w-[140px] px-3 py-3 bg-blue-600 text-white font-semibold text-xs md:text-base rounded-lg text-center font-sans"
                >
                  {item.buttonText}
                </Link>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="rounded-[20px] max-w-[500px] w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Section ${index + 1}`}
                    width={308}
                    height={260}
                    className="w-full h-[206px] md:h-[260px] lg:w-[500px] lg:h-[333px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="flex flex-col items-center justify-center my-10">
          <h2 className="text-[1.25rem] md:text-[2rem] lg:text-[2.8rem] text-center font-jakarta font-bold text-[#151E3A]">
            Våra mest populära distansutbildningar.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {randomCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center mb-10">
          <Link
            href="https://checkified.se/utbildningar"
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-xs md:text-base rounded-lg text-center font-sans"
          >
            Utforska alla utbildningar
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          <div className="flex flex-col items-baseline px-[2.063rem] py-6 md:py-[3rem] rounded-[30px] border-[0.5px] border-gray-200 gap-4 md:gap-4">
            <h2 className="font-jakarta font-bold text-[1.25rem] md:text-[2.188rem]">
              Få tillgång till digitalt innehåll
            </h2>
            <p className="font-jakarta font-medium text-sm md:text-base">
              Vi har grundligt utformat våra läroplaner för att täcka alla
              viktiga delar av varje ämne. Från grundläggande koncept till
              avancerade tekniker. Våra utbildningar ger en holistisk
              inlärningsupplevelse som utrustar dig med de färdigheter du
              behöver för att få det jobb du önskar.
            </p>
          </div>

          <div className="flex flex-col items-baseline px-[2.063rem] py-6 md:py-[3rem] rounded-[30px] border-[0.5px] border-gray-200 gap-4 md:gap-4">
            <h2 className="font-jakarta font-bold text-[1.25rem] md:text-[2.188rem]">
              Flexibla studier
            </h2>
            <p className="font-jakarta font-medium text-sm md:text-base">
              I vår plattform har du flexibiliteten att lära dig i din egen takt
              och sätta ditt eget schema. Oavsett om du arbetar heltid eller om
              du är en person med en hektisk livsstil kan du studera på distans
              när som helst, var som helst. Du skapar dina egna rutiner.
            </p>
          </div>
        </section>

        <section className="mt-[16px] md:mt-[58px]">
          <div className="flex flex-col bg-[#225AEA] p-6 md:p-[54px] rounded-[20px]">
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center align-middle bg-[#90adf5] rounded-full w-[45px] h-[45px] md:w-[76px] md:h-[76px]">
                <Image
                  src="/new-home/info.svg"
                  alt="learning"
                  width={40}
                  height={40}
                  className="object-contain w-[21px] h-[21px] md:w-[40px] md:h-[40px]"
                />
              </div>

              <h1 className="font-jakarta text-white font-bold text-[1.5rem] md:text-[2.0rem] lg:text-[2.5rem] mb-4">
                Praktiskt lärande
              </h1>
              <p className="font-inter text-white text-xs md:text-base max-w-[916px]">
                Vi tror på kraften i praktisk applicering i dina studier. Våra
                utbildningar innehåller case och övningar hämtade från
                arbetslivet vilket gör att du kan tillämpa dina nyvunna
                kunskaper direkt i din yrkesroll.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[16px] md:mt-[58px] md:px-[60px]">
          <h1 className="font-jakarta font-bold text-center text-[1.25rem] md:text-[2.625rem] lg:text-[3.0rem] mb-2 md:mb-8">
            Så här fungerar dina studier.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1.625rem] mb-4 md:mb-12">
            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[2px] border-gray gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-lg md:text-[1.225rem] lg:text-[1.75rem]">
                Välj utbildning
              </h2>
              <p className="font-inter font-medium text-sm md:text-base max-w-[518px]">
                Bläddra igenom vårt utbud för att hitta de utbildningar som
                passar dina professionella mål och intressen.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[2px] border-gray gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-lg md:text-[1.225rem] lg:text-[1.75rem]">
                Få tillgång till digitalt innehåll
              </h2>
              <p className="font-inter font-medium text-sm md:text-base max-w-[518px]">
                När du startar ditt lärande får du tillgång till förinspelade
                videoföreläsningar, text- och bilddokument och övningar ledda av
                våra experter.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[2px] border-gray gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-lg md:text-[1.225rem] lg:text-[1.75rem]">
                Studera på distans
              </h2>
              <p className="font-inter font-medium text-sm md:text-base max-w-[518px]">
                Våra utbildningar är utformade för att hålla dig engagerad under
                hela studietiden. Lärplattformen är självvaliderande och du
                kommer möta interaktiva frågor, quiz och övningar för att stärka
                din förståelse.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[2px] border-gray gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-lg md:text-[1.225rem] lg:text-[1.75rem]">
                Erhåll diplom och certifikat
              </h2>
              <p className="font-inter font-medium text-sm md:text-base max-w-[518px]">
                När du slutfört den teoretiska delen av utbildningen får du ett
                diplom. För certifikat krävs praktik eller tentamensarbete. Båda
                dokumenten är digitala och stärker din professionella profil,
                vilket öppnar nya karriär
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col bg-[#225AEA] p-4 md:p-[54px] rounded-[20px]">
            <div className="flex flex-col">
              <h1 className="font-jakarta text-white font-bold text-[1.5rem] md:text-[3.0rem] mb-4">
                Detta får du.
              </h1>
              <h2 className="font-jakarta text-white font-bold text-[0.875rem] md:text-[1.5rem]">
                Tillgängligt studiematerial.
              </h2>
              <p className="font-jakarta text-white text-xs md:text-base max-w-[541px]">
                Du kan återbesöka innehållet även efter att du har slutfört din
                utbildning när du behöver repetition.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mt-4">
              <h2 className="font-jakarta text-white font-bold text-[1.5re text-[0.875rem] md:text-[1.5rem]">
                Obegränsad support.
              </h2>
              <p className="font-jakarta text-white text-xs md:text-base max-w-[541px]">
                Studera på distans behöver inte betyda att du studerar helt
                ensam. Vi hjälper dig under hela din studietid. Oavsett om du
                har tekniska frågor eller behöver vägledning angående
                utbildningsmaterialet så finns vi här för att hjälpa dig att
                lyckas.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mt-4">
              <h2 className="font-jakarta text-white font-bold text-[1.5re text-[0.875rem] md:text-[1.5rem]">
                Utbildningsexperter
              </h2>
              <p className="font-jakarta text-white text-xs md:text-base max-w-[541px]">
                Du får vägledning från våra utbildningsexperter med kontinuerlig
                support och alltid när till hands vid dina studier. Allt för att
                ta samla in kunskap för att säkra dig till arbetslivet.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[25px] md:mt-[44px]">
          <Title blackText="Börja studera på " blueText="distans idag." />
          <SubTitle subtitleText="Utforska vårt utbildningsutbud och ta första steget mot din personliga utveckling." />
          <Title
            blackText="Företag vi hjälpt med kompetensutveckling"
            textClassName="font-800 font-jakarta text-[1.125rem] md:text-[1.6rem] text-center mb-[34px] mt-[43px] md:mt-[90px]"
          />

          <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 mb-[90px]">
            {homePagePartners.map((partner) => (
              <div
                key={partner.id}
                className={`
        relative flex justify-center items-center
        ${partner.imageSize?.mobile ?? "w-[200px] h-[100px]"}
        ${partner.imageSize?.lg ? `lg:${partner.imageSize.lg}` : ""}
      `}
              >
                <Image
                  src={partner.image}
                  alt="partner image"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center mb-[90px] max-w-[900px] mx-auto">
          <h2 className="font-jakarta font-bold text-[1.5rem] md:text-[3.0rem] text-center">
            Frågor och svar
          </h2>
          <h4 className="font-inter text-xs md:text-[16px] text-center mb-8 mt-3 text-[#434c69]">
            Här har vi samlat vanliga frågor och svar om våra utbildningar och
            studier på Checkified
          </h4>
          <div className="flex justify-center self-center">
            <Accordion>
              {homePageFaqs.map((item) => (
                <AccordionItem key={item.id} title={item.question}>
                  <p className="text-xs md:text-base text-[#434c69]">
                    {item.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section>
          <ConsultationForm />
        </section>
      </Layout>
    </>
  )
}
