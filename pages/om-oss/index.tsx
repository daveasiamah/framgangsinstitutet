import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"

export default function About() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout
      headTitle="Om oss - Studera på distans via Framgångsinstitutet"
      useExactHeadTitle={true}
      isFullWidth={true}
    >
      <main className="flex-grow pt-[30px] bg-base-100">
        <section className="relative bg-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h1 className="text-[#151E3A] text-[30px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[32px] md:leading-[44px] lg:leading-[52px] max-w-[700px] md:max-w-[550px] lg:max-w-[700px] mx-auto">
              Om oss
            </h1>

            {/* Description */}
            <div className="mx-auto mt-2 w-full space-y-4 text-center md:w-[90%] md:text-left">
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Framgångsinstitutet grundades 2019 med en tydlig vision: att
                skapa en plattform där människor kan utvecklas och nå sin fulla
                potential.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Vårt mål var att ge alla, oavsett bakgrund eller mål, tillgång
                till kunskap och verktyg som hjälper dem att ta nästa steg i
                livet.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Vår vision är att hjälpa människor att utvecklas på sina egna
                villkor. Vi tror att personlig utveckling handlar om att förstå
                sina egna styrkor, utmaningar och mål och inte om att tävla med
                andra. Målet är att ge varje individ möjlighet att växa i sin
                egen takt, oavsett om det handlar om att förbättra karriären,
                bygga självledarskap eller stärka hälsan.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="container flex justify-center mx-auto mt-10">
            <img
              src="/images/om-oss/om-oss.jpg"
              alt="About Us"
              className="w-[500px] md:w-full lg:w-[768px] pointer-events-none"
            />
          </div>
        </section>
        <section className="relative bg-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-[#151E3A] text-[25px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[32px] md:leading-[44px] lg:leading-[52px] max-w-[700px] md:max-w-[550px] lg:max-w-[700px] mx-auto">
              Din resa är vårt mål
            </h2>

            {/* Description */}
            <div className="mx-auto mt-2 w-full space-y-4 text-center md:w-[90%] md:text-left">
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Genom att anpassa våra onlinekurser efter olika behov och mål,
                vill vi hjälpa till att skapa långsiktig förändring och ge
                praktiska verktyg för att uppnå personlig framgång.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Vi vill hjälpa människor att ta kontroll över sin utveckling och
                forma sin framtid. Vi vill erbjuda mer än bara teori, vi vill ge
                verktyg som gör det möjligt att ta ansvar för sin egen resa och
                skapa en meningsfull förändring i sitt liv. Med rätt kunskap och
                stöd ska alla ha möjlighet att skapa hållbar framgång, på sina
                egna villkor.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Kurserna hos oss leds av experter inom olika områden,
                framgångsrika coacher, entreprenörer, forskare och atleter, som
                delar med sig av sina erfarenheter och beprövade metoder. Vi
                vill att dessa insikter ska bli konkreta verktyg som kan
                omsättas direkt i praktiken, så att du kan börja arbeta mot dina
                mål redan från första dagen.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Framtiden för oss handlar om att fortsätta växa och ge ännu fler
                människor möjlighet att ta kontroll över sin utveckling. Med
                varje ny kurs, varje nytt verktyg och varje ny insikt, strävar
                vi efter att göra personlig utveckling tillgänglig för alla och
                hjälpa så många som möjligt att nå sina mål.
              </p>
              <p className="text-[#151E3A] text-sm md:text-base lg:text-lg font-inter leading-relaxed">
                Precis som våra medlemmar vill vi alltid lära oss nya saker och
                tar tacksamt emot feedback och önskemål på nya kurser och
                profiler. Vad blir nästa steg på din resa?
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="container flex justify-center mx-auto mt-10">
            <img
              src="/images/om-oss/om-oss-2.jpg"
              alt="About Us"
              className="w-[500px] md:w-full lg:w-[768px] pointer-events-none"
            />
          </div>
        </section>
      </main>
    </Layout>
  )
}
