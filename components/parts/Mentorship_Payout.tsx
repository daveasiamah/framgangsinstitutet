import Image from "next/image"
import React from "react"

interface MentorshipPayoutProps {
  onCtaClick?: () => void
}

import MentorshipButton from "./Mentorship_Button"
import { ArrowRightIcon } from "lucide-react"

const MentorshipPayout = ({ onCtaClick }: MentorshipPayoutProps) => {
  return (
    <div className="w-full max-w-[1258px] bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] bg-cover rounded-[20px] sm:rounded-[32px] mx-auto px-2 sm:px-4 py-4 sm:py-4 mt-10 mb-4">
      <div className="relative w-full max-w-[1170px] mx-auto min-h-[240px] sm:min-h-[260px] md:h-[366px] flex flex-col items-center justify-center">
        {/* Icon placeholder */}
        <div className="w-[120px] sm:w-[156px] h-[28px] sm:h-[36px] mb-2 sm:mb-3 text-white">
          <img
            src={
              "/images/mentorship/mentorship-products/checkified-logo-white.svg"
            }
            alt="checkified Icon"
            width={156}
            height={36}
            className="w-[120px] sm:w-[156px] h-[28px] sm:h-[36px]"
          />
        </div>

        <div className="flex flex-col items-center px-2">
          {/* Main heading */}
          <h3 className="max-w-[499px] font-bold text-white text-sm sm:text-base md:text-xl lg:text-2xl leading-tight mb-3 sm:mb-4 font-jakarta text-center px-2">
            Gå med Dropshipping Mentorskap idag!
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
        <button
          onClick={onCtaClick}
          className="flex justify-center items-center bg-white text-gray-600 px-[24px] py-2 rounded-lg font-semibold text-sm font-jakarta mt-[16px] md:mt-[28px]"
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

export default MentorshipPayout
