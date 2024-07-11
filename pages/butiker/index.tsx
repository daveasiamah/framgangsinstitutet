import React, {useState} from "react"
import Image from "next/image"
import {FaCheckCircle} from "react-icons/fa"
import {Autoplay, EffectCards, Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import {useRouter} from "next/router"

import ButtonArrow from "@/components/parts/ButtonArrow"
import TestimonyCard from "@/components/parts/TestimonyCard"
import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import Accordion from "@/components/parts/Accordion"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import BlurCircle from "@/components/graphic/BlurCircle"

import ScrollReveal from "@/components/transition/ScrollReveal"
import TiltParallax from "@/components/transition/TiltParallax"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

import en from "@/locales/en"
import sv from "@/locales/sv"
import ExampleStoresBlock from "@/components/blocks/ExampleStoresBlock";
import GraphicsBlock from "@/components/blocks/GraphicsBlock";
import HowItWorkBlock from "@/components/blocks/HowItWorkBlock";
import PricingHeroBlock from "@/components/blocks/PricingHeroBlock";
import ReviewsBlock from "@/components/blocks/ReviewsBlock";
import BonusesBlock from "@/components/blocks/BonusesBlock";
import OrderNowAndGetItBlock from "@/components/blocks/OrderNowAndGetItBlock";
import ContractForm from "@/components/ContractForm";

type Props = {}

export default function Pricing({}: Props) {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Layout headTitle={t.pricingData.metaData.title} isFullWidth>
            <div
                data-theme="light"
                className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${showModal ? "flex" : "hidden"}`}
                onClick={() => setShowModal(false)}
            >
                <ContractForm onClose={closeModal}/>
            </div>
            <PricingHeroBlock openModal={() => {
                window.open("https://checkout.revolut.com/payment-link/4fdb867a-eeeb-4f71-8fe4-5036ca251be8")
            }}/>
            <OrderNowAndGetItBlock/>
            <BonusesBlock/>
            <HowItWorkBlock openModal={() => {
                window.open("https://checkout.revolut.com/payment-link/4fdb867a-eeeb-4f71-8fe4-5036ca251be8")
            }}/>
            <ExampleStoresBlock/>
            <ReviewsBlock/>
            <GraphicsBlock openModal={() => {
                router.push("https://checkout.revolut.com/payment-link/4fdb867a-eeeb-4f71-8fe4-5036ca251be8")
            }}/>

            <section>
                <div className="relative py-10 full-bg mx-auto max-w-[900px]">
                    <Image
                        src="/images/home/question.gif"
                        width={151}
                        height={151}
                        alt="faq"
                        className="mx-auto w-[65px] h-[65px] lg:w-[151px] lg:h-[151px]"
                    />
                    <ScrollReveal>
                        <Title
                            blackText={t.pricingData.faqBlackTitle + " " + t.pricingData.faqBlueTitle}
                            className="text-center"
                        />
                    </ScrollReveal>
                    <Accordion data={t.pricingData.faqData}/>
                </div>
            </section>
        </Layout>
    )
}
