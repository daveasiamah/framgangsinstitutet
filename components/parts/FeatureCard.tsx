import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../transition/ScrollReveal'

export default function FeatureCard({data}: any) {
  return (
    <div
      className="bg-white p-10 rounded-[2rem] text-center"
    >
      <div className="bg-base-200 p-6 rounded-full inline-flex place-content-center mb-3 relative">
        <Image
          src={data.imageUrl}
          alt={data.title}
          height={60}
          width={60}
          className="object-contain"
        />
      </div>
      <ScrollReveal>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-primary text-xl font-bold mb-3">{data.title}</h3>
          <h3 className="text-xl font-bold mb-3">{data.blueTitle}</h3>
        </div>
        <p className="text-subtitle">{data.subtitle}</p>
      </ScrollReveal>
    </div>
  )
}
