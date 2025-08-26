import React from "react"
import Image from "next/image"
import Link from "next/link"

const MentorshipStaticImage = () => {
  return (
    <div className="w-full max-w-[1258px] mx-auto px-4 sm:px-6 lg:px-4 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10">
      <div className="relative w-full max-w-[1170px] mx-auto min-h-[280px] sm:min-h-[300px] lg:h-[314px] bg-[url(/images/mentorship/next-success.svg)] bg-cover bg-center sm:bg-[100%_100%] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-6 py-6 sm:py-8">
        {/* Icon placeholder */}
        <div className="w-6 h-7 sm:w-8 sm:h-9 mb-3 sm:mb-4 text-white">
          <Image
            src={"/images/mentorship/question-icon.svg"}
            alt="Payout Icon"
            width={32}
            height={36}
            className="w-full h-full"
          />
        </div>

        {/* Main heading */}
        <h2 className="max-w-[320px] sm:max-w-[412px] font-bold text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-tight mb-4 sm:mb-6 font-jakarta">
          Redo att bli nästa framgång?
        </h2>

        {/* Subtext */}
        <p className="max-w-[280px] sm:max-w-[450px] lg:max-w-[590px] font-medium text-white text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-inter">
          Vår mentorskapstjänst hjälper dig att ta kontroll över din framtid. Få
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          personligt stöd från experter som vet vad som krävs för att lyckas.
        </p>

        {/* CTA Button */}
        <Link
          href="https://checkout.revolut.com/payment-link/d3eb03dc-e14d-4695-a085-a01903b02e54"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#151e3a] hover:cursor-pointer font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg hover:bg-gray-100 transition-colors duration-200 font-jakarta min-w-[120px] sm:min-w-auto"
        >
          Börja Din Resa Här {""} {">"}
        </Link>
      </div>
    </div>
  )
}

export default MentorshipStaticImage
