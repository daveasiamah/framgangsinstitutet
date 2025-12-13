import React from "react"
import Layout from "@/components/Layout"
import WelcomeSection from "@/components/WelcomeSection"
import Image from "next/image"
import { useModal } from "@/components/ModalContext"

export default function Dropshipping() {
  const { openContractForm } = useModal()

  return (
    <Layout headTitle="Dropshipping - Checkified" isFullWidth={true}>
      <section className="relative bg-white py-12 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-[#151E3A] text-[32px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-tight max-w-[960px] mx-auto">
            Allt du behöver lära dig för lyckas med Dropshipping 2026
          </h1>

          {/* Description */}
          <p className="text-[#434C69] text-[12px] md:text-[14px] lg:text-[14px] font-inter font-medium text-center mb-8 leading-relaxed max-w-[733px] mx-auto">
            Vi har lång erfarenhet av att driva dropshipping framgångsrikt, och
            det finns ett tydligt mönster för de butiker som presterar, och de
            som inte gör det. Med hjälp av dessa insikter har vi skapat vår
            onlinekurs om hur du driver dropshipping framgångsrikt 2026. Vi går
            djupt in på detaljerna av hur du lyckas med dropshipping.
          </p>

          {/* Video/Image Section */}
          <div className="relative max-w-[960px] mx-auto">
            <Image
              src="/images/home/graphics/checkified-hero.svg"
              alt="Dropshipping Hero"
              width={960}
              height={540}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

 <section className="bg-white py-2 md:py-2 px-4 mb-[35px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-[#151E3A] text-[20px] leading-[35px] sm:text-[32px] sm:leading-[38px] md:text-[40px] md:leading-[48px] font-bold font-jakarta text-center mb-[24px] md:mb-8">
          Välkommen till Sveriges ledande
          <br />
          e-handelsutbildning
        </h2>
        {/* First Section - Lär dig av e-handelsexpert */}
        <div className="bg-[#F3F6FE] rounded-[20px] p-6 sm:p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-[#151E3A] text-[18px] sm:text-[22px] md:text-[40px] font-semibold font-geist mb-4 sm:mb-6 leading-[35px]">
                Lär dig av e-handelsexpert
              </h3>
              <div className="space-y-4 font-inter font-normal text-[12px] sm:text-sm text-[#434C69] md:text-[16px] leading-relaxed">
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Ingen är bäst på allt, men våra är oslagbara på det som
                  räknas. Dominic är en av dem, e-handelsexpert och grundare av
                  Checkified, i detta privata nätverket möter du honom direkt,
                  där han lär ut exakt det han själv är bäst i landet på.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Genom Dominics erfarenhet får du helheten; e-handel,
                  entreprenörskap, marknadsföring, mindset, försäljning och allt
                  som krävs för att bygga något som faktiskt håller.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Han har bevisat resultat och en bakgrund som talar för sig
                  själv. Målet är enkelt: ge dig de skarpaste förutsättningarna
                  att lyckas inom e-handel och entreprenörskap, utan genvägar.
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
        <div className="bg-[#F3F6FE] rounded-[20px] p-6 sm:p-8 md:p-12">
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
              <h3 className="text-[#151E3A] text-[18px] sm:text-[22px] md:text-[40px] font-semibold font-geist mb-4 sm:mb-6 leading-[35px]">
                Omge dig med drivna
                <br />
                entreprenörer och mentorer.
              </h3>
              <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Människorna du omger dig med formar din nivå. Så fråga dig
                  själv: hur snabbt skulle du växa om din omgivning redan bestod
                  av människor som lyckats?
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Checkified har blivit navet för svensk e-handel och digitalt
                  entreprenörskap, en plats där allt ifrån nybörjare till
                  entreprenörer med miljonomsättning samlas för att växa.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Här skapas kontakter som spelar roll, relationer som driver
                  dig framåt och möjligheter för dig som anpassar.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Bygger du något digitalt? Då är Checkified där du hör hemma.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Section - Omge dig med drivna entreprenörer */}
        <div className="bg-[#F3F6FE] rounded-[20px] p-6 sm:p-8 md:p-12 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Image */}
            <div className="order-2">
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
            <div className="order-2 md:order-1">
              <h3 className="text-[#151E3A] text-[18px] sm:text-[22px] md:text-[40px] font-semibold font-geist mb-4 sm:mb-6 leading-[35px]">
                Låt inte din framgång vara
                <br />
                en chansning
              </h3>
              <div className="space-y-4 text-[#434C69] font-inter text-[12px] sm:text-sm md:text-[16px] leading-relaxed">
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Under de senaste åren har vi hjälpt tusentals svenskar starta
                  tiotusentals butiker. Med över hundratusen besvarade frågor är
                  det inte konstigt att våra medlemmar tillsammans omsatt
                  hundratals miljoner kronor.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Vi samlade lärdomarna från misstag, tester och framgångar och
                  skapade Checkified Mentorskap, ett beprövat system för
                  e-handelsframgång.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Metoderna är färdiga och testade; det som saknas är din tid
                  och ditt engagemang. Om du är beredd att jobba hårt har vi
                  verktygen som tar dig dit.
                </p>
                <p className="font-inter font-normal text-[12px] sm:text-sm text-[#434C69]">
                  Det blir inte lätt, men vi har gjort vägen tydligare. Förvänta
                  dig utmaning, men också resultat om du är redo att ge allt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </Layout>
  )
}
