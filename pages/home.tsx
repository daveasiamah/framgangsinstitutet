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

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <>
      <Layout headTitle={t.homeData.metaData.title}>
        <section>
          <Title blackText="Så här fungerar dina studier." />
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
