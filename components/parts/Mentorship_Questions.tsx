import React from "react"
import { MainFAQ } from "./MainFAQ"
import { HomePageFaqData } from "@/data/data"
import Accordion from "./Accordion_Home"

function Mentorship_Questions() {
  return (
    <>
      <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle self-center px-3 inset-3 shadow-inner max-w-[178px] mb-4 mt-8">
        <p className="font-inter text-xs font-medium text-[#235AE9]">FAQs</p>
      </div>
      <h1 className="font-semibold font-jakarta text-[24px] md:text-[48px] mb-6 md:mb-10 lg:mb-10 text-center">
        Vanliga Frågor
      </h1>
      <div className="w-full bg-[#F5F9FF] rounded-[20px] max-w-4xl py-4 px-3 md:px-3 mb-16">
        <Accordion data={HomePageFaqData} />
      </div>
    </>
  )
}

export default Mentorship_Questions
