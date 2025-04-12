"use client"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import {
  homePageFaqs,
  homePagePartners,
} from "@/components/blocks/home-blocks/HomePageData"
import Title from "@/components/blocks/home-blocks/Title"
import SubTitle from "@/components/blocks/home-blocks/SubTitle"
import Image from "next/image"
import { useCourses } from "@/hooks/useCourses"
import CourseCard from "@/components/blocks/courses-blocks/CourseCard"
import { useMemo } from "react"

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { courses } = useCourses()

  const randomCourses = useMemo(() => {
    if (!courses || courses.length === 0) return [] // guard in case courses is not loaded yet
    const shuffled = [...courses].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }, [courses])

  return (
    <>
      <Layout headTitle={t.homeData.metaData.title}>
        <section className="flex flex-col items-center justify-center my-10">
          <div className="flex flex-col md:flex-row gap-6">
            {randomCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="w-[200px] flex mx-auto mb-10">
          <button
            onClick={() => router.push("/utbildningar")}
            className="w-full py-3 lg:py-3 bg-[#225AEA] text-white font-semibold text-sm rounded-lg"
          >
            <p className="font-jakarta">Lär dig mer</p>
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-[1rem] md:gap-[1.625rem]">
          <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
            <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
              Få tillgång till digitalt innehåll
            </h2>
            <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
              När du startar ditt lärande får du tillgång till förinspelade
              videoföreläsningar, text- och bilddokument och övningar ledda av
              våra experter.
            </p>
          </div>

          <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
            <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
              Få tillgång till digitalt innehåll
            </h2>
            <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
              När du startar ditt lärande får du tillgång till förinspelade
              videoföreläsningar, text- och bilddokument och övningar ledda av
              våra experter.
            </p>
          </div>
        </section>

        <section className="mt-[16px] md:mt-[58px]">
          <div className="flex flex-col bg-[#225AEA] p-6 rounded-[20px]">
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
              <h2 className="font-jakarta text-white font-bold text-[0.875rem] md:text-[1.5rem]">
                Tillgängligt studiematerial.
              </h2>
              <p className="font-jakarta text-white text-xs md:text-base max-w-[916px]">
                Vi tror på kraften i praktisk applicering i dina studier. Våra
                utbildningar innehåller case och övningar hämtade från
                arbetslivet vilket gör att du kan tillämpa dina nyvunna
                kunskaper direkt i din yrkesroll.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[16px] md:mt-[58px]">
          <h1 className="font-jakarta font-bold text-center text-[1.125rem] md:text-[2.625rem] lg:text-[3.0rem] mb-2 md:mb-8">
            Så här fungerar dina studier.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1.625rem] mb-4 md:mb-12">
            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
                Välj utbildning
              </h2>
              <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
                Bläddra igenom vårt utbud för att hitta de utbildningar som
                passar dina professionella mål och intressen.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
                Få tillgång till digitalt innehåll
              </h2>
              <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
                När du startar ditt lärande får du tillgång till förinspelade
                videoföreläsningar, text- och bilddokument och övningar ledda av
                våra experter.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
                Studera på distans
              </h2>
              <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
                Våra utbildningar är utformade för att hålla dig engagerad under
                hela studietiden. Lärplattformen är självvaliderande och du
                kommer möta interaktiva frågor, quiz och övningar för att stärka
                din förståelse.
              </p>
            </div>

            <div className="flex flex-col px-[1.313rem] py-[1.5rem] md:px-[1.625rem] md:py-[2.375rem] rounded-[15px] border-[0.5px] border-gray-200 gap-2 md:gap-4">
              <h2 className="font-jakarta font-bold text-[0.875rem] md:text-[1.225rem] lg:text-[1.75rem]">
                Erhåll diplom och certifikat
              </h2>
              <p className="font-jakarta font-medium text-xs md:text-base max-w-[518px]">
                När du slutfört den teoretiska delen av utbildningen får du ett
                diplom. För certifikat krävs praktik eller tentamensarbete. Båda
                dokumenten är digitala och stärker din professionella profil,
                vilket öppnar nya karriär
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col bg-[#225AEA] p-4 md:p-14 rounded-[20px]">
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

        <section className="mt-[25px]">
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

        <section className="mb-[90px]">
          <h2 className="font-jakarta font-bold text-[1.5rem] md:text-[3.0rem] text-center">
            Frågor och svar
          </h2>
          <h4 className="font-inter text-sm md:text-[18px] text-center mb-8 mt-3 text-[#434c69]">
            Här har vi samlat vanliga frågor och svar om våra utbildningar och
            studier på Checkified
          </h4>
          {homePageFaqs.map((faq) => (
            <div key={faq.id} className="flex flex-col gap-2 mb-4">
              <h2 className="text-[#151e3a] font-jakarta font-bold text-sm md:text-lg">
                {faq.question}
              </h2>
              <p className="text-xs md:text-base text-[#434c69]">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}
