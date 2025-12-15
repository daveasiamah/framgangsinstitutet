import React from "react"
import Image from "next/image"
import { useModal } from "./ModalContext"

type Testimonial = {
  name: string
  earnings: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Johan Eriksson",
    earnings: "750 000 kr på 45 dagar",
    image: "/images/home/testimonial/johan.jpg",
  },
  {
    name: "Emma Andersson",
    earnings: "500 000 kr på 30 dagar",
    image: "/images/home/testimonial/blondie.jpg",
  },
  {
    name: "Sofia Karlsson",
    earnings: "450 000 kr på 35 dagar",
    image: "/images/home/testimonial/brunette.jpg",
  },
  {
    name: "Niklas Åsén",
    earnings: "700 000 kr på 60 dagar",
    image: "/images/home/testimonial/niklas.jpg",
  },
  {
    name: "Sebastian Blomgren",
    earnings: "200 000 kr på 14 dagar",
    image: "/images/home/testimonial/sebastian.jpg",
  },
  {
    name: "Alex Rodriguez",
    earnings: "Omsatt över 1 200 000 kr",
    image: "/images/home/testimonial/alex.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-4 mb-0 md:mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[8px] md:mb-[14px]">
          <h2 className="text-[#151E3A] text-[32px] md:text-[40px] lg:text-[48px] font-bold font-jakarta mb-2 mt-[24px] md:mt-[38px] lg:mt-[50px] leading-[36px] md:leading-[44px] lg:leading-[52px]">
            Förändra ditt liv med Checkified
          </h2>
          <p className="text-[#434C69] text-[14px] md:text-[16px] font-inter max-w-[700px] mx-auto">
            Alla som lyckats började med ett första steg, ett klick, en ansökan.
            Är du vår nästa succé?
          </p>
        </div>
        {/* Masonry Grid Layout - Max 1276x930 with 20px gaps */}
        <div className="max-w-[1276px] mx-auto">
          {/* Mobile - Full width testimonial image */}
          <div className="md:hidden relative rounded-[20px] mt-2 mb-5 overflow-hidden w-full h-[320px] sm:h-[320px]">
            <Image
              src="/images/home/testimonials-mobile.svg"
              alt="Testimonials"
              fill
              className="object-cover"
            />
          </div>

          {/* First Row - 3 columns: Johan (2 cols), Emma, Sofia - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-[40%_28%_28%] lg:grid-cols-[590px_324px_324px] gap-4 mb-4">
            {/* Johan - spans 2 visual columns on desktop */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
            </div>
            {/* Emma */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Sofia */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[2].image}
                alt={testimonials[2].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Second Row - 2 main columns with nested grids */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_38.4%] lg:grid-cols-[766px_490px] gap-5">
            {/* Left Column - 766px wide, 2 rows */}
            <div className="hidden md:block space-y-5">
              {/* Row 1: Niklas and Sebastian side by side */}
              <div className="grid grid-cols-2 gap-5">
                {/* Niklas */}
                <div className="relative rounded-[20px] overflow-hidden w-full h-[180px] lg:h-[210px] group cursor-pointer">
                  <Image
                    src={testimonials[3].image}
                    alt={testimonials[3].name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Sebastian */}
                <div className="relative rounded-[20px] overflow-hidden w-full h-[180px] lg:h-[210px] group cursor-pointer">
                  <Image
                    src={testimonials[4].image}
                    alt={testimonials[4].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Row 2: Laptop image */}
              <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] lg:h-[347px]">
                <Image
                  src="/images/home/testimonial/laptop-shopify.jpg"
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Right Column - 490px wide, 2 rows */}
            <div className="hidden md:block space-y-5">
              {/* Row 1: Alex Rodriguez */}
              <div className="relative rounded-[20px] overflow-hidden w-full h-[225px] lg:h-[278px] group cursor-pointer">
                <Image
                  src={testimonials[5].image}
                  alt={testimonials[5].name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Row 2: Trustpilot Section */}
              <div className="bg-[#F8F9FA] rounded-[20px] px-4 pt-5 md:px-5 md:py-6 lg:py-10 flex flex-col justify-between h-[225px] lg:h-[279px]">
                <h3 className="text-[#151E3A] text-[20px] md:text-[24px] lg:text-[36px] font-bold font-jakarta mb-4 md:mb-4 lg:mb-6">
                  300+ 5 stjärniga Trustpilot recensioner.
                </h3>
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/trustpilot-badge.svg"
                    alt="Trustpilot"
                    width={255}
                    height={33}
                    className="object-contain w-[180px] md:w-[200px] lg:w-[255px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
