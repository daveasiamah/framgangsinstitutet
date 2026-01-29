import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useModal } from "./ModalContext"
import { useMediaQuery } from "usehooks-ts"

type Testimonial = {
  name: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "johan",
    image: "/images/home/testimonial/johan.jpg",
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

const testimonialsAlternate: Testimonial[] = [
  {
    name: "johan",
    image: "/images/home/testimonial/johan.jpg",
  },
  {
    name: "blonde",
    image: "/images/home/testimonial/blonde.png",
  },
  {
    name: "sebastian",
    image: "/images/home/testimonial/brunette.png",
  },
  {
    name: "niklas",
    image: "/images/home/testimonial/niklas.jpg",
  },
  {
    name: "sebastian",
    image: "/images/home/testimonial/sebastian.jpg",
  },
  {
    name: "Laptop",
    image: "/images/home/testimonial/laptop.png",
  },
  {
    name: "alex",
    image: "/images/home/testimonial/alex.png",
  },
]

export default function TestimonialsSection() {
  const isTablet = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  const activeTestimonials = isTablet ? testimonialsAlternate : testimonials

  console.log({ activeTestimonials })
  return (
    <section className="bg-white w-full mx-auto px-0 md:px-4 mb-0 md:mb-10">
      <div className="max-w-[1440px] w-full mx-auto">
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

        {/* Mobile Layout - Stack all 6 images */}
        <div className="block md:hidden px-4">
          <div className="flex flex-col gap-[7px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[20px] w-full h-[200px]"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={360}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            {/* Trustpilot Section for mobile */}
            <div className="bg-[#F8F9FA] rounded-[20px] px-5 py-6 flex flex-col justify-between h-[200px]">
              <h3 className="text-[#151E3A] text-[25px] font-bold font-jakarta mb-4 leading-tight">
                300+ 5 stjärniga Trustpilot recensioner.
              </h3>
              <div className="flex items-center gap-3 pb-1">
                <img
                  src="/images/home/trustpilot-bottom-small.png"
                  alt="Trustpilot"
                  width={255}
                  height={44}
                  className="object-contain w-[200px] md:w-[200px] lg:w-[255px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet/Desktop Layout - Masonry Grid */}
        <div className="hidden md:block">
          {/* Masonry Grid Layout - Max 1276x930 with 20px gaps */}
          <div className="max-w-[7xl] mx-auto px-0 md:px-0">
            {/* First Row - 3 columns: Johan, Blondie, Brunette */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr_0.6fr] gap-[7px] px-4 md:gap-5 mb-[7px] md:mb-5">
              {/* Johan */}
              <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[170px] lg:h-[332px]">
                <img
                  src={testimonialsAlternate[0].image}
                  alt={testimonialsAlternate[0].name}
                  width={360}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Blondie */}
              <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[170px] lg:h-[332px]">
                <img
                  src={testimonialsAlternate[1].image}
                  alt={testimonialsAlternate[1].name}
                  width={360}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Brunette */}
              <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[170px] lg:h-[332px]">
                <img
                  src={testimonialsAlternate[2].image}
                  alt={testimonialsAlternate[2].name}
                  width={360}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Second Row - 2 main columns with nested grids */}
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-[7px] md:gap-5 px-4">
              {/* Left Column - 766px wide, 2 rows */}
              <div className="space-y-[7px] md:space-y-5">
                {/* Row 1: Niklas and Sebastian side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[7px] md:gap-5">
                  {/* Niklas */}
                  <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[130px] lg:h-[210px]">
                    <img
                      src={testimonialsAlternate[3].image}
                      alt={testimonialsAlternate[3].name}
                      width={360}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Sebastian */}
                  <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[130px] lg:h-[210px]">
                    <img
                      src={testimonialsAlternate[4].image}
                      alt={testimonialsAlternate[4].name}
                      width={360}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Row 2: Laptop image */}
                <div className="relative overflow-hidden rounded-[25px] w-full h-[220px] md:h-[153px] lg:h-[347px]">
                  <img
                    src={testimonialsAlternate[5].image}
                    alt="Dashboard"
                    width={760}
                    height={347}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Right Column - 490px wide, 2 rows */}
              <div className="space-y-[7px] md:space-y-[10px] lg:space-y-5">
                {/* Row 1: Alex */}
                <div className="relative overflow-hidden rounded-[25px] w-full h-full md:h-[180px] lg:h-[278px]">
                  <img
                    src={testimonialsAlternate[6].image}
                    alt={testimonialsAlternate[6].name}
                    width={760}
                    height={347}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Row 2: Trustpilot Section */}
                <div className="bg-[#F8F9FA] rounded-[25px] px-5 py-6 md:px-3 md:py-4 lg:py-10 flex flex-col justify-between h-[200px] md:h-[153px] lg:h-[279px]">
                  <h3 className="text-[#151E3A] text-[25px] md:text-[16px] lg:text-[36px] font-bold font-jakarta mb-4 md:mb-2 lg:mb-6 md:leading-snug lg:leading-tight">
                    300+ 5 stjärniga Trustpilot recensioner.
                  </h3>
                  <div className="flex items-center gap-3 pb-1">
                    <img
                      src="/images/home/trustpilot-bottom-small.png"
                      alt="Trustpilot"
                      width={255}
                      height={44}
                      className="object-contain w-[180px] md:w-[200px] lg:w-[255px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
