import { Document } from "@contentful/rich-text-types"
import AccordionPricing from "./Accordion_Pricing"

interface MainAccordionProps {
  faqData: {
    id: number | string
    question: string
    answer: string | Document
  }[]
}

export const MainFAQPricing = ({ faqData }: MainAccordionProps) => {
  return (
    <section className="flex flex-col items-center gap-3 w-full">
      <h1 className="font-semibold font-jakarta text-[22px] md:text-[48px] mb-2 text-center">
        Frågor och svar
      </h1>
      <div className="w-full bg-[#F5F9FF] rounded-[20px] max-w-7xl py-4 px-3 md:px-3 mb-8">
        <AccordionPricing data={faqData} />
      </div>
    </section>
  )
}
