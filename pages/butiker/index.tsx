import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

import Layout from "@/components/Layout"
import Accordion from "@/components/parts/Accordion"
import Title from "@/components/parts/Title"

import ScrollReveal from "@/components/transition/ScrollReveal"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

import BonusesBlock from "@/components/blocks/BonusesBlock"
import ExampleStoresBlock from "@/components/blocks/ExampleStoresBlock"
import GraphicsBlock from "@/components/blocks/GraphicsBlock"
import HowItWorkBlock from "@/components/blocks/HowItWorkBlock"
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
      <PricingHeroBlock
        openModal={() => {
          window.open("https://buy.stripe.com/3cscO09iSdoBgVOeUZ")
        }}
      />
      <TopReviewBlock />
      <OrderNowAndGetItBlock />
      <BonusesBlock />
      <PricingDiscountBlock />
      <HowItWorkBlock />
      <PricingCTAButtonBlock openModal={openModal} />
      <ExampleStoresBlock />
      <ReviewsBlock />
      <hr className="w-full border-spacing-x-0.5 border-[#888A9180] mb-4 mt-10" />
      <CreateEStoreBlock openModal={openModal} />
      {/* FAQ section / Vanliga Fragor section */}
      <FAQBlock />
      <CTABannerBlock openModal={openModal} />
    </Layout>
  )
}
