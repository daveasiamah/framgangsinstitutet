import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

import Layout from "@/components/Layout"
import "swiper/css"
import "swiper/css/effect-cards"

import BonusesBlock from "@/components/blocks/BonusesBlock"
import ExampleStoresBlock from "@/components/blocks/ExampleStoresBlock"
import HowItWorksBlock from "@/components/blocks/HowItWorksBlock"
import OrderNowAndGetItBlock from "@/components/blocks/OrderNowAndGetItBlock"
import PricingHeroBlock from "@/components/blocks/PricingHeroBlock"
import ReviewsBlock from "@/components/blocks/ReviewsBlock"
import ContractForm from "@/components/ContractForm"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { CTABannerBlock } from "@/components/blocks/CTABannerBlock"
import { TopReviewBlock } from "@/components/blocks/TopReviewBlock"
import { PricingDiscountBlock } from "@/components/blocks/PricingDiscountBlock"
import { PricingCTAButtonBlock } from "@/components/blocks/PricingCTAButtonBlock"
import { CreateEStoreBlock } from "@/components/blocks/CreateEStoreBlock"
import { FAQBlock } from "@/components/blocks/FAQBlock"
import { EstoreShowCaseVideo } from "@/components/blocks/EstoreShowCaseVideo"
import PrivateCoachingBlock from "@/components/blocks/PrivateCoachingBlock"

const Butiker = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <Layout headTitle={t.pricingData.metaData.title}>
      <div
        data-theme="light"
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${
          showModal ? "flex" : "hidden"
        }`}
        onClick={() => openModal()}
      >
        <ContractForm onClose={closeModal} />
      </div>
      <PricingHeroBlock />
      <TopReviewBlock />
      <OrderNowAndGetItBlock />
      <BonusesBlock />
      <PricingDiscountBlock />
      <HowItWorksBlock />
      <PricingCTAButtonBlock openModal={openModal} />
      <section className="flex flex-col md:py-4 md:px-6 items-center">
        <h1 className="font-bold text-[22px] md:text-[32px] leading-loose text-center md:text-left mb-4">
          Så Här Ser En Butik Vi Gjort Till Kund
        </h1>
        <EstoreShowCaseVideo />
        <div className="w-full flex items-center justify-center my-1">
          <a
            href="https://checkout.revolut.com/pay/598dfb4a-51fc-43c5-970d-2bd4646c9309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fff] bg-[#225AEA] text-[14px] w-50 py-2 flex items-center justify-center font-jakarta font-bold w-[194px] h-[36px] rounded-[7px] shadow-inner button-shadow"
            style={{
              boxShadow: `
        inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
        inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)`,
              borderRadius: "7px",
            }}
          >
            Få privat coachning
          </a>
        </div>
      </section>
      <ExampleStoresBlock />
      <ReviewsBlock />
      <PrivateCoachingBlock />
      <CreateEStoreBlock openModal={openModal} />
      <FAQBlock />
      <CTABannerBlock />
    </Layout>
  )
}
export default Butiker
