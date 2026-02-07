import React from "react"
import Image from "next/image"
import Link from "next/link"
import MentorshipButton from "./Mentorship_Button"
import { ArrowRightIcon } from "lucide-react"

const MentorshipStaticImage = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  return (
    <div className="w-full max-w-[1258px] mx-auto">
      <div className="relative w-full max-w-[1170px] mx-auto min-h-[280px] sm:min-h-[300px] lg:h-[314px] bg-[url(/images/mentorship/next-success.svg)] bg-cover bg-center rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-6 py-6 sm:py-8">
        {/* Icon placeholder */}
        <div className="w-full h-full flex justify-center">
          <img
            src={"/images/mentorship/question-icon.svg"}
            alt="Payout Icon"
            width={33}
            height={32}
            className="w-[33px] h-[32px] object-contain"
          />
        </div>

        {/* Main heading */}
        <h2 className="max-w-[278px] md:max-w-[338px] font-bold text-white text-[20px] md:text-[24px] font-jakarta leading-[48px]">
          Redo att bli nästa framgång?
        </h2>

        {/* Subtext */}
        <p className="max-w-[304px] md:max-w-[590px] font-medium text-white text-xs md:text-base leading-[25px] mb-[14px] md:mb-[33px] font-inter">
          Vår mentorskapstjänst hjälper dig att ta kontroll över din framtid. Få
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          personligt stöd från experter som vet vad som krävs för att lyckas.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="flex justify-center items-center bg-white text-gray-600 px-[24px] py-2 rounded-xl font-semibold text-sm font-jakarta"
        >
          <p className="font-inter font-semibold text-[#151E3A] text-[10px]">
            Starta din resa idag
          </p>{" "}
          <ArrowRightIcon className="w-3 h-3 ml-1" />
        </button>
      </div>
    </div>
  )
}

export default MentorshipStaticImage
