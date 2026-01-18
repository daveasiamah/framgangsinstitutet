import React from "react"
import Layout from "@/components/Layout"
import { ArrowRight, ArrowRightIcon } from "lucide-react"
import { useModal } from "@/components/ModalContext"
import Script from "next/script"
import TestimonialsSection from "@/components/TestimonialsSection"
import TrustPilotReviews from "@/components/parts/TrustPilotReviews"

function VSL() {
  const { openContractForm } = useModal()

  return (
    <Layout headTitle="VSL - Video Sales Letter" isFullWidth={true}>
      <section className="relative bg-white py-8 px-4 mt-[56px] flex flex-col items-center">
        <div className="max-w-7xl mx-auto">
          {/* Trustpilot */}
          <div className="flex justify-center gap-4 mb-4 max-w-[833px] mx-auto">
            <p className="text-[#434C69] text-[16px] font-inter font-medium text-center">
              Våra kunder säger Utmärkt
            </p>
            <img
              src="/images/home/trustpilot-5stars.png"
              alt="Trustpilot"
              width={127}
              height={24}
              className="object-contain h-[24px] w-[127px]"
            />
            <p className="text-[#434C69] text-[16px] font-inter font-medium text-center">
              4.5 av 5 baserat på flera omdömen
            </p>
            <img
              src="/icons/home/trustpilot-with-star.png"
              alt="Trustpilot with star"
              width={170}
              height={24}
              className="object-contain h-[24px] w-[97px]"
            />
          </div>

          {/* Title */}
          <h1 className="text-[#151E3A] text-[17px] md:text-[42px] lg:text-[40px] font-bold font-jakarta text-center mb-6 leading-[28px] md:leading-[38px] lg:leading-[46px] max-w-[343px] md:max-w-[681px] lg:max-w-[933px] mx-auto">
            Lär dig steg för steg hur du bygger ett hållbart e-handelsföretag
            från grunden till 100k i månaden i vinst, helt utan tidigare
            erfarenhet.
          </h1>

          {/* Video/Image Section */}
          <div className="relative max-w-[960px] mt-[21px] border-2 mx-auto">
            <div className="relative rounded-[20px] overflow-hidden shadow-xl">
              <div
                id="vidalytics_embed_QrsjsMAYL8q2HZuP"
                style={{
                  width: "100%",
                  position: "relative",
                  paddingTop: "56.25%",
                }}
                data-autoplay="true"
                data-muted="true"
              ></div>
              <div data-tf-live="01KA79PC8XC77WR2R93TGZYXE6"></div>
              <script src="//embed.typeform.com/next/embed.js"></script>
            </div>
          </div>
        </div>
        {/* Put the cod */}
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => openContractForm()}
            className="px-4 py-3 md:px-5 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner flex items-center justify-center gap-1"
          >
            <span className="font-jakarta font-bold text-xs md:text-sm">
              Slutför din ansökan här!
            </span>
            <ArrowRightIcon className="w-[14px] h-[14px]" color="white" />
          </button>
        </div>
        <TestimonialsSection />
        <TrustPilotReviews />
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => openContractForm()}
            className="px-4 py-3 md:px-5 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner flex items-center justify-center gap-1"
          >
            <span className="font-jakarta font-bold text-xs md:text-sm">
              Slutför din ansökan här!
            </span>
            <ArrowRightIcon className="w-[14px] h-[14px]" color="white" />
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default VSL
