import React from "react"
import Image from "next/image"
import Link from "next/link"

function StartYourJourney() {
  return (
    <div className="w-full max-w-[1258px] bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] bg-cover rounded-[20px] sm:rounded-[32px] mx-auto px-2 sm:px-4 py-4 sm:py-4 mt-10 mb-4">
      <div className="relative w-full max-w-[1170px] mx-auto min-h-[240px] sm:min-h-[260px] md:h-[366px] flex flex-col items-center justify-center">

        <div className="flex flex-col items-center px-2">
          {/* Main heading */}
          <h3 className="max-w-[499px] font-bold text-white text-sm sm:text-base md:text-xl lg:text-3xl leading-tight mb-3 sm:mb-4 font-jakarta text-center px-2">
            Börja din resa redan idag.
          </h3>

          {/* Subtext */}
          <p className="max-w-[600px] text-center font-regular text-white text-[10px] sm:text-xs md:text-base leading-relaxed mb-3 sm:mb-4 font-inter px-1">
            Kom ihåg: Du är några klick från att leva livet som du vill...
            <br />
            Har du verkligen råd att vänta?
          </p>

          <div className="border border-white rounded-full px-2 sm:px-4 md:px-6 py-3 sm:py-4 mb-4">
            <div className="flex items-center border-1 border-white justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white font-inter overflow-hidden">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                <Image
                  src="/icons/bolt.svg"
                  width={12}
                  height={13.3}
                  alt="bolt"
                  className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                />
                <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                  Få omedelbar åtkomst
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                <Image
                  src="/icons/handshake.svg"
                  width={12}
                  height={13.3}
                  alt="handshake"
                  className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                />
                <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                  24/7 support
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                <Image
                  src="/icons/hand.svg"
                  width={12}
                  height={13.3}
                  alt="hand"
                  className="sm:w-[14px] sm:h-[15.5px] md:w-[16.5px] md:h-[18.33px] flex-shrink-0"
                />
                <span className="font-jakarta text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white whitespace-nowrap">
                  Livstids tillgång
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3">
          <p className="text-white text-[9px] sm:text-[10px] md:text-[14px] whitespace-nowrap">
            Strålande
          </p>
          <Image
            src="/images/mentorship/mentorship-products/trust-pilot-stars.svg"
            className="w-[100px] sm:w-[124px] h-[18px] sm:h-[20px] md:h-[24px] flex-shrink-0"
            alt="svg"
            width={124}
            height={24}
          />
          <p className="text-white text-[9px] sm:text-[10px] md:text-[14px] whitespace-nowrap">
            4.8 av 5.0
          </p>
        </div>
        {/* CTA Button */}
        <Link
          href="https://checkout.revolut.com/payment-link/d3eb03dc-e14d-4695-a085-a01903b02e54"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#000000] font-semibold text-xs sm:text-sm mt-3 sm:mt-4 px-5 sm:px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-jakarta whitespace-nowrap"
        >
          Starta din resa nu →
        </Link>
      </div>
    </div>
  )
}

export default StartYourJourney
