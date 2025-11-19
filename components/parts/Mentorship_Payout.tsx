import Image from "next/image"
import Link from "next/link"
import React from "react"

const MentorshipPayout = () => {
  return (
    <div className="w-full max-w-[1258px] bg-[#225AEA] bg-[url(/images/mentorship/mentorship-products/bg-mesh.svg)] bg-cover rounded-[32px] mx-auto px-4 mt-10 mb-4">
      <div className="relative w-full max-w-[1170px] mx-auto h-[300px] md:h-[366px] flex flex-col items-center justify-center">
        {/* Icon placeholder */}
        <div className="w-[156px] h-[36px] mb-4 text-white text-2xl">
          <Image
            src={
              "/images/mentorship/mentorship-products/checkified-logo-white.svg"
            }
            alt="checkified Icon"
            width={156}
            height={36}
            className="w-[156px] h-[36px]"
          />
        </div>

        <div className="flex flex-col items-center">
          {/* Main heading */}
          <h3 className="max-w-[499px] font-bold text-white text-base md:text-xl lg:text-2xl leading-tight mb-6 font-jakarta">
            Gå med Dropshipping Mentorskap idag!
          </h3>

          {/* Subtext */}
          <p className="max-w-[590px] text-center font-medium text-white text-xs md:text-base leading-relaxed mb-4 font-inter">
            Kom ihåg: Du är några klick från att leva livet som du vill...
            <br />
            Har du verkligen råd att vänta?
          </p>

          <div className="flex justify-around items-center gap-4">
            <div className="flex items-center gap-[2px] text-white">
              <Image
                src="/images/mentorship/mentorship-products/bolt.svg"
                className="w-[19px] md:w-[24px] md:h-[24px]"
                alt="svg"
                width={24}
                height={24}
              />
              <p className="text-white font-inter text-[9px] md:text-[14px]">
                Få omedelbar åtkomst
              </p>
            </div>
            <div className="flex items-center gap-[2px] text-white">
              <Image
                src="/images/mentorship/mentorship-products/handshake.svg"
                className="w-[19px] md:w-[24px] md:h-[24px]"
                alt="svg"
                width={24}
                height={24}
              />
              <p className="text-white font-inter text-[9px] md:text-[14px]">
                24/7 support
              </p>
            </div>
            <div className="flex items-center gap-[2px] text-white">
              <Image
                src="/images/mentorship/mentorship-products/hand.svg"
                className="w-[19px] md:w-[24px] md:h-[24px]"
                alt="svg"
                width={24}
                height={24}
              />
              <p className="text-white font-inter text-[9px] md:text-[14px]">
                Livstids tillgång
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center gap-4 mt-4">
          <p className="text-white text-[10px] md:text-[14px]">Strålande</p>
          <Image
            src="/images/mentorship/mentorship-products/trust-pilot-stars.svg"
            className="w-[124px] md:w-[124px] md:h-[24px]"
            alt="svg"
            width={124}
            height={24}
          />{" "}
          <p className="text-white text-[10px] md:text-[14px]">4.8 av 5</p>
        </div>
        {/* CTA Button */}
        <Link
          href="https://checkout.revolut.com/payment-link/d3eb03dc-e14d-4695-a085-a01903b02e54"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#4E7BEE] font-semibold text-sm mt-6 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-jakarta"
        >
          Börja nu →
        </Link>
      </div>
    </div>
  )
}

export default MentorshipPayout
