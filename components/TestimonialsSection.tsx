import React from "react"
import Image from "next/image"
import { useModal } from "./ModalContext"

type Testimonial = {
  name: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "johan",
    image: "/images/home/testimonial/johan.png",
  },
  {
    name: "josephine",
    image: "/images/home/testimonial/josephine.png",
  },
  {
    name: "sebastian",
    image: "/images/home/testimonial/sebastian.png",
  },
  {
    name: "alex",
    image: "/images/home/testimonial/alex.png",
  },
  {
    name: "niklas",
    image: "/images/home/testimonial/niklas.png",
  },
  {
    name: "Laptop",
    image: "/images/home/testimonial/laptop.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-0 md:px-4 mb-0 md:mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-[8px] md:mb-[14px] px-4 md:px-0">
          <h2 className="text-[#151E3A] text-[28px] md:text-[40px] lg:text-[48px] font-bold font-jakarta mb-2 mt-[24px] md:mt-[38px] lg:mt-[50px] leading-[36px] md:leading-[44px] lg:leading-[52px]">
            Förändra ditt liv med Checkified
          </h2>
          <p className="text-[#434C69] text-[16px] font-inter max-w-[700px] mx-auto">
            Alla som lyckats började med ett första steg, ett klick, en ansökan.
            Är du vår nästa succé?
          </p>
        </div>
        {/* Masonry Grid Layout - Max 1276x930 with 20px gaps */}
        <div className="max-w-[1276px] mx-auto px-0 md:px-0">
          {/* First Row - 3 columns: Johan (2 cols), Emma, Sofia */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_28%_28%] lg:grid-cols-[590px_324px_324px] gap-[7px] px-4 md:gap-4 mb-[7px] md:mb-4">
            {/* Johan - spans 2 columns on all screens */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-full md:h-[260px] lg:h-[332px]">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                width={360}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Emma */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-full md:h-[260px] lg:h-[332px]">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                width={360}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Sofia */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-full md:h-[260px] lg:h-[332px]">
              <Image
                src={testimonials[2].image}
                alt={testimonials[2].name}
                width={360}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Second Row - 2 main columns with nested grids */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_38.4%] lg:grid-cols-[766px_490px] gap-[7px] md:gap-5 px-4">
            {/* Left Column - 766px wide, 2 rows */}
            <div className="space-y-[7px] md:space-y-5">
              {/* Row 1: Niklas and Sebastian side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[7px] md:gap-5">
                {/* Niklas */}
                <div className="relative rounded-[20px] overflow-hidden w-full h-full md:h-[180px] lg:h-[210px]">
                  <Image
                    src={testimonials[3].image}
                    alt={testimonials[3].name}
                    width={360}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Sebastian */}
                <div className="relative rounded-[20px] overflow-hidden w-full h-full md:h-[180px] lg:h-[210px]">
                  <Image
                    src={testimonials[4].image}
                    alt={testimonials[4].name}
                    width={360}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Row 2: Laptop image */}
              <div className="relative rounded-[20px] overflow-hidden w-full h-[220px] md:h-[280px] lg:h-[347px]">
                <Image
                  src="/images/home/testimonial/laptop.png"
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Right Column - 490px wide, 2 rows */}
            <div className="space-y-[7px] md:space-y-5">
              {/* Row 1: Alex Rodriguez */}
              <div className="relative rounded-[20px] overflow-hidden w-full h-[170px] md:h-[225px] lg:h-[278px]">
                <Image
                  src={testimonials[5].image}
                  alt={testimonials[5].name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Row 2: Trustpilot Section */}
              <div className="bg-[#F8F9FA] rounded-[20px] px-5 py-6 md:px-5 md:py-6 lg:py-10 flex flex-col justify-between h-[200px] md:h-[225px] lg:h-[279px]">
                <h3 className="text-[#151E3A] text-[25px] md:text-[24px] lg:text-[36px] font-bold font-jakarta mb-4 md:mb-4 lg:mb-6 leading-tight">
                  300+ 5 stjärniga Trustpilot recensioner.
                </h3>
                <div className="flex items-center gap-3 pb-1">
                  <img
                    src="/images/home/trustpilot-home.png"
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
