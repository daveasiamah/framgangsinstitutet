import Image from "next/image"

export function ThankYouVideoBanner() {
  return (
    <div className="relative w-[80%] max-w-4xl mt-4 mb-5 md:mt-8">
      <Image
        src="/images/thank-you/video-banner.png"
        alt="banner-image"
        width={920}
        height={590}
        className="w-full h-auto rounded-xl mt-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/thank-you/video-play-button.png"
          alt="play-button"
          width={111}
          height={111}
          className="w-[39px] h-[39px] md:w-[80px] md:h-[80px] lg:w-[111px] lg:h-[111px]"
        />
      </div>
    </div>
  )
}
