import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"

import ScrollReveal from "@/components/transition/ScrollReveal"
import Link from "next/link.js"

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  

  return (
    <>
      <Layout headTitle={t.homeData.metaData.title}>
        <section className="relative hero-height flex w-full flex-col justify-between items-center gap-10 md:pt-10 mb-1 bg-[url('/images/home/graphics/hero-mesh.png')] bg-no-repeat bg-contain object-contain bg-top">
          <div className="w-full text-center mb-6 md:mb-0 lg:mb-0 flex flex-col">
            <div className="flex flex-col items-center justify-center md:bg-[url('/images/pricing/store-hero-bg.svg')] md:bg-no-repeat md:bg-cover md:bg-center">
              <ScrollReveal className="flex justify-center w-full hero-height flex-col items-center mb-10 md:mb-24">
                <h1 className="font-bold font-jakarta text-[22px] md:text-[44px] lg:text-[60px] border-2 leading-6 md:leading-[46px] lg:leading-[56px] text-[#151E3A] max-w-[336px] md:max-w-[900px] lg:max-w-[1260px]">
                  Din allt i ett e-handelsskola
                </h1>
                <h2 className="text-xs md:text-[14px] lg:text-[14px] text-[#434C69] max-w-[276px] md:max-w-[480px] lg:max-w-[733px] py-2 md:leading-6 mt-2 font-inter mb-6">
                  Bygg, lansera och skala din digitala verksamhet på ett och
                  samma ställe. Få tillgång till beprövade utbildningar, färdiga
                  butiker och personlig vägledning, allt designat för att ta dig
                  från idé till lönsam e-handel.
                </h2>
                <div className="flex gap-4 relative z-10 flex-col md:flex-row lg:flex-row items-center justify-center">
                  <Link
                    href="/utbildningar"
                    className="py-[14px] px-[26px] bg-[#225AEA] text-white font-semibold text-xs md:text-sm lg:text-base rounded-[5px]"
                  >
                    <p className="font-jakarta text-xs md:text-base">
                      Börja Nu →
                    </p>
                  </Link>
                  <Link
                    href="/utbildningar"
                    className="py-[14px] px-[26px] bg-white text-[#225AEA] border border-[#97a6d2] font-semibold text-xs md:text-sm lg:text-sm rounded-[5px]"
                  >
                    <p className="font-jakarta text-xs md:text-base">
                      Utforska alla kurser
                    </p>
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal className="hidden mt-[-100px] md:flex lg:flex md:flex-col lg:flex-col justify-start items-start md:items-center w-full">
                <Image
                  src={"/images/home/graphics/home-hero-art.svg"}
                  alt={`hero image`}
                  width={760}
                  height={562}
                  className="w-[283px] h-[208px] md:w-[650px] md:h-[480px] lg:w-[760px] lg:h-[562px] relative object-cover md:object-contain z-10"
                />
                <Image
                  src={"/images/home/graphics/hero-footer.png"}
                  alt={`hero footer`}
                  width={538}
                  height={46}
                  className="w-[538px] h-[46px] relative object-cover md:object-contain z-10"
                />
                <h2 className="text-xs text-[#434C69] max-w-[697px] md:max-w-[600px] py-2 md:leading-6 mt-2 font-inter mb-6">
                  Alla funktioner är 100% vitmärkta, anpassningsbara och
                  redigerbara.
                </h2>
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
          <h2 className="text-[1.25rem] md:text-[2rem] lg:text-[2.8rem] text-center font-jakarta font-bold text-[#151E3A]">
            Utforska våra populära tjänster
          </h2>
        </section>

        <section className="mb-10">
          <div className="container">
            <Image
                  src={"/images/home/graphics/hero-footer.png"}
                  alt={`hero footer`}
                  width={28}
                  height={28}
                  className="w-[28px] h-[28px] relative object-cover md:object-contain z-10"
                />
          </div>
        </section>

      </Layout>
    </>
  )
}
