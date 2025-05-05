import Image from "next/image"

export function ThankYouVideoBanner() {
  return (
    <div className="relative w-[302px] md:w-[80%] max-w-4xl mt-4 mb-5 md:mt-8">
      <iframe
        width="1024"
        height="590"
        src="https://www.youtube.com/embed/axerunSyAkQ?si=Stsiqc3g7Mxh_g1l"
        title="Ansök till Checkified"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-[230px] md:h-[590px] rounded-2xl md:rounded-[40px] md:my-6"
      ></iframe>
    </div>
  )
}
