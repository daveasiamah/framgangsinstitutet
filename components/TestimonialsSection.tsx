import React from "react"
import Image from "next/image"

type Testimonial = {
  name: string
  earnings: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Johan Eriksson",
    earnings: "750 000 kr på 45 dagar",
    image: "/images/home-hero-image.png",
  },
  {
    name: "Emma Andersson",
    earnings: "500 000 kr på 30 dagar",
    image: "/images/home-hero-image.png",
  },
  {
    name: "Sofia Karlsson",
    earnings: "450 000 kr på 35 dagar",
    image: "/images/home-hero-image.png",
  },
  {
    name: "Niklas Åsén",
    earnings: "700 000 kr på 60 dagar",
    image: "/images/home-hero-image.png",
  },
  {
    name: "Sebastian Blomgren",
    earnings: "200 000 kr på 14 dagar",
    image: "/images/home-hero-image.png",
  },
  {
    name: "Alex Rodriguez",
    earnings: "Omsatt över 1 200 000 kr",
    image: "/images/home-hero-image.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#151E3A] text-[32px] md:text-[40px] lg:text-[48px] font-bold font-jakarta mb-4">
            Förändra ditt liv med Checkified
          </h2>
          <p className="text-[#434C69] text-[14px] md:text-[16px] font-inter max-w-[700px] mx-auto">
            Alla som lyckats började med ett första steg, ett klick, en ansökan.
            Är du vår nästa succé?
          </p>
        </div>

        {/* Masonry Grid Layout - Max 1276x930 with 20px gaps */}
        <div className="max-w-[1276px] mx-auto space-y-5">
          {/* First Row - 3 columns: Johan (2 cols), Emma, Sofia */}
          <div className="grid grid-cols-1 md:grid-cols-[46.2%_26.2%_26.2%] lg:grid-cols-[590px_324px_324px] gap-5">
            {/* Johan - spans 2 visual columns on desktop */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                  {testimonials[0].name}
                </h3>
                <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                  {testimonials[0].earnings}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                    fill="#151E3A"
                  />
                </svg>
              </div>
            </div>

            {/* Emma */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                  {testimonials[1].name}
                </h3>
                <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                  {testimonials[1].earnings}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                    fill="#151E3A"
                  />
                </svg>
              </div>
            </div>

            {/* Sofia */}
            <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[260px] lg:h-[332px] group cursor-pointer">
              <Image
                src={testimonials[2].image}
                alt={testimonials[2].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                  {testimonials[2].name}
                </h3>
                <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                  {testimonials[2].earnings}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                    fill="#151E3A"
                  />
                </svg>
              </div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                      {testimonials[3].name}
                    </h3>
                    <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                      {testimonials[3].earnings}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                        fill="#151E3A"
                      />
                    </svg>
                  </div>
                </div>

                {/* Sebastian */}
                <div className="relative rounded-[20px] overflow-hidden w-full h-[180px] lg:h-[210px] group cursor-pointer">
                  <Image
                    src={testimonials[4].image}
                    alt={testimonials[4].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                      {testimonials[4].name}
                    </h3>
                    <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                      {testimonials[4].earnings}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                        fill="#151E3A"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2: Laptop image */}
              <div className="relative rounded-[20px] overflow-hidden w-full h-[280px] lg:h-[347px]">
                <Image
                  src="/images/home-hero-image.png"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h3 className="font-jakarta font-bold text-[18px] md:text-[20px] mb-1">
                    {testimonials[5].name}
                  </h3>
                  <p className="font-inter text-[12px] md:text-[14px] opacity-90">
                    {testimonials[5].earnings}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center z-10">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 6L0.5 11.1962L0.5 0.803848L9.5 6Z"
                      fill="#151E3A"
                    />
                  </svg>
                </div>
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
