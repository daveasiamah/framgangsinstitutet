import Image from "next/image"

export function ThankYouVideoBanner() {
  return (
    <div className="flex items-center justify-center mt-[52px] relative">
      <Image
        src="/images/thank-you/video-banner.png"
        alt="banner-image"
        width={1020}
        height={590}
        className="relative"
      />
      <Image
        src="/images/thank-you/video-play-button.png"
        alt="play-button"
        width={143}
        height={143}
        className="absolute inset-0 m-auto"
      />
    </div>
  )
}
