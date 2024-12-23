import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import AccordionEstore from "../parts/Accordion_Estore"

export function FAQBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <>
      <h1 className="font-bold text-[22px] md:text-[32px] lg:text-[32px] mb-5 mt-10 md:mb-10 lg:mb-10 text-center">
        {t.pricingData.faqBlackTitle} {t.pricingData.faqBlueTitle}
      </h1>
      <AccordionEstore data={t.pricingData.faqData} />
    </>
  )
}
