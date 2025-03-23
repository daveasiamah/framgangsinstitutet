import Image from "next/image"

export function ThankYouVideoBanner() {
  return (
    <div className="relative w-[80%] max-w-4xl mt-4 mb-5 md:mt-8">
      <iframe
        width="1024px"
        height="590px"
        src="https://www.youtube.com/embed/kIpxmKhidVE"
        title="Ansök till Checkified"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-[590px] rounded-[40px] my-5 md:my-6"
      ></iframe>
    </div>
  )
}
