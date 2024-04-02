import React from "react"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import Title from "./Title"

type Props = {
  blackText: string
  blueText?: string
  subTitle: string
  imageUrl: string
}

export default function VideoTrainingCard({
  blackText,
  blueText,
  subTitle,
  imageUrl,
}: Props) {
  return (
    <div className={`flex flex-col items-center justify-center px-4 md:px-40`}>
      <ScrollReveal>
        <div className="max-w-xl text-center">
          <div className="relative block">
            <div className="relative inline-flex items-center justify-center gap-2">
              <Title
                blackText={blackText}
                blueText={blueText}
              />
              {/* <h3 className="font-semibold text-5xl">{blackText}</h3>
              {blueText && <h3 className="font-semibold text-5xl text-primary">{blueText}</h3>} */}
              <Image
                src="/icons/home/arrow-right.svg"
                alt="arrow-right"
                fill
                className="mt-10 px-4"
              />
            </div>
          </div>
          <h4 className="mt-14 text-gray-500 text-sm">{subTitle}</h4>
        </div>
      </ScrollReveal>
      <Image
        src={imageUrl}
        alt={blackText}
        width={785}
        height={412}
        className="mt-8"
      />
    </div>
    
  )
}
