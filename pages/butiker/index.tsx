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
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:py-1 items-center font-inter">
          <h1 className="font-bold text-[22px] md:text-[32px] max-w-[260px] md:max-w-full leading-loose text-center mb-4">
            Så Här Ser En Butik Vi Gjort Till Kund
          </h1>
          <EstoreShowCaseVideo />
          <CreateEStoreBlock openModal={openModal} />
        </div>
      </section>
      <ReviewsBlock />
      <PrivateCoachingBlock />
      <div className="w-full flex items-center justify-center my-12">
        <a
          href="https://checkout.revolut.com/pay/598dfb4a-51fc-43c5-970d-2bd4646c9309"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#225AEA] hover:bg-[#1a4aca] text-sm px-6 py-2 flex items-center justify-center font-jakarta font-semibold rounded-[7px] transition-colors duration-200"
        >
          Få privat coachning
        </a>
      </div>

      <FAQBlock />
      <CTABannerBlock />
    </Layout>
  )
}
export default Butiker
