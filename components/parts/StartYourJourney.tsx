import React, { use } from "react"
import Image from "next/image"
import { useModal } from "../ModalContext"
import { ArrowRightIcon } from "lucide-react"

function StartYourJourney({ onCtaClick }: { onCtaClick: () => void }) {
  const { openContractForm } = useModal()

  return (
    <section className="w-[calc(100%-12px)] max-w-7xl mx-auto bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] bg-cover rounded-[16px] sm:rounded-[32px] px-4 sm:px-6 py-6 sm:py-8 md:py-10 mt-8 sm:mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full px-2 sm:px-4">
          {/* Main heading */}
          <h3 className="max-w-[280px] sm:max-w-[380px] md:max-w-[500px] text-[16px] sm:text-[24px] md:text-[32px] font-bold sm:font-semibold text-white leading-[1.3] sm:leading-tight mb-2 sm:mb-3 md:mb-4 font-jakarta text-center">
            Börja din resa redan idag.
          </h3>

          {/* Subtext */}
          <p className="max-w-[300px] sm:max-w-[450px] md:max-w-[600px] text-center font-inter text-[10px] sm:text-[12px] md:text-[14px] font-normal text-white leading-[1.5] sm:leading-relaxed mb-4 sm:mb-5 md:mb-6">
            Kom ihåg: Du är några klick från att leva livet som du vill...
            <br />
            Har du verkligen råd att vänta?
          </p>

          <div className="border border-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-white font-inter">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0">
                <img
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
                <img
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
                <img
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

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-[8.6px] md:mt-[22px]">
          <p className="text-white text-[10px] sm:text-[12px] md:text-[14px] whitespace-nowrap">
            Strålande
          </p>
          <img
            src="/images/mentorship/mentorship-products/trust-pilot-stars.svg"
            className="w-[100px] sm:w-[124px] h-[18px] sm:h-[20px] md:h-[24px] flex-shrink-0"
            alt="trustpilot-stars"
            width={124}
            height={24}
          />
          <p className="text-white text-[10px] sm:text-[12px] md:text-[14px] whitespace-nowrap">
            4.8 av 5.0  
          </p>
        </div>
        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="flex justify-center items-center bg-white text-gray-600 px-[24px] w-40 py-4 rounded-xl font-semibold text-sm font-jakarta mt-[16px] md:mt-[28px]"
        >
          <p className="font-inter font-semibold text-[#151E3A] text-[14px] md:text-[16px]">
            Börja nu
          </p>{" "}
          <ArrowRightIcon className="w-4 h-4 ml-1" size={34} />
        </button>
      </div>
    </section>
  )
}

export default StartYourJourney
