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
                className="text-lg lg:text-4xl"
              />
              <Image
                src="/icons/home/arrow-right.svg"
                alt="arrow-right"
                fill
                className="mt-4 lg:mt-10 px-4 object-contain"
              />
            </div>
          </div>
          <h4 className="mt-4 lg:mt-14 h-24 lg:h-20 text-gray-500 text-[12px] lg:text-sm">{subTitle}</h4>
        </div>
      </ScrollReveal>
      <Image
        src={imageUrl}
        alt={blackText}
        width={785}
        height={412}
        className="mt-4"
      />
    </div>
    
  )
}
