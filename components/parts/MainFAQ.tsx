import Accordion from "./Accordion_Home"
interface MainAccordionProps {
  faqData: {
    id: number
    question: string
    answer: string
  }[]
}

export const MainFAQ = ({ faqData }: MainAccordionProps) => {
  return (
    <section className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle self-center px-3 inset-3 shadow-inner max-w-[178px]">
        <p className="font-inter text-xs font-light text-[#235AE9]">FAQs</p>
      </div>

      <h1 className="font-semibold font-jakarta text-[22px] md:text-[48px] mb-2 text-center">
        Vanliga Frågor
      </h1>
      <div className="w-full bg-[#F5F9FF] rounded-[20px] max-w-4xl py-4 px-3 md:px-3 mb-16">
        <>
          <Accordion data={faqData} />
        </>
      </div>
    </section>
  )
}
