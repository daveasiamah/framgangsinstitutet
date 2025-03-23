import { useRouter } from "next/router"
import { useState } from "react"

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

type Props = {}

export default function Pricing({}: Props) {
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
      <ExampleStoresBlock />
      <ReviewsBlock />
      <CreateEStoreBlock openModal={openModal} />
      <FAQBlock />
      <CTABannerBlock />
    </Layout>
  )
}
