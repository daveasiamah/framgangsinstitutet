import React from "react"
import Image from "next/image"
import { clsx } from "clsx"

const reviews = [
  {
    title: "Jätte bra kurs & mentorskap",
    text: "Jätte bra kurs och mentorskap man lär sig allt när det kommer till dropshipping och e-handel. Dominic kan verkligen om sitt område, och fått resultat direkt.",
    reviewer: "Stina Lindberg",
    date: "3 dagar sedan",
  },
  {
    title: "Kan inte beskriva hur bra",
    text: "Kan inte beskriva med ord hur bra service och tjänster Checkified erbjuder. Köpt mentorskap och fick resultat och support varje dag. Rekommenderar.",
    reviewer: "Joel",
    date: "11 November",
  },
  {
    title: "Bästa investering!",
    text: "Var skeptisk till en början men valde att gå med och fick träffa Dominic, med hjälp av pedagogik, bygga, skala och växa min dropshipping verksamhet.",
    reviewer: "Jesper",
    date: "5 dagar sedan",
  },
  {
    title: "Grymt mentorskap",
    text: "Grymt mentorskap av Dominic, fick en färdig dropshipping butik, dropshipping kurs och 10 lektioner som går igenom pedagogiskt, rekommenderar starkt.",
    reviewer: "Lukas Pettersson",
    date: "13 Oktober",
  },
  {
    title: "Checkified förändrar liv",
    text: "Jag rekommenderar starkt Checkified Dropshipping Mentorskap, man får träffa en kunnig e-handelsexpert och får resultat väldigt snabbt och effektivt.",
    reviewer: "Karl Bogren",
    date: "3 November",
  },
]

const TrustPilotReviews: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full">
        {/* Mobile: Stack, Tablet: Carousel, Desktop: Grid */}
        <div className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide lg:grid lg:grid-cols-5 gap-3 md:gap-4 items-stretch py-2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] p-3 md:p-4 flex flex-col w-full md:min-w-[280px] md:h-full md:snap-center lg:min-w-0 shadow-sm"
            >
              <div className="flex gap-[18.9px] md:gap-[12px] mb-2 items-center w-full md:w-auto">
                <img
                  src="/images/home/trustpilot-stars.png"
                  alt="stars"
                  width={180}
                  height={10}
                  className="object-contain w-[120px] md:w-[99px] h-auto"
                />
                <div className="flex gap-[9px] md:gap-[4px] items-center">
                  <img
                    src="/icons/gray-checkmark.svg"
                    alt="checkmark"
                    width={25}
                    height={25}
                    className="object-contain w-[23px] md:w-[13px] h-[22px] md:h-[13px] flex-shrink-0"
                  />
                  <p className="font-inter font-semibold text-[#7c7c7c] leading-[14px] text-[14px] md:text-[12px] whitespace-nowrap">
                    Verifierat
                  </p>
                </div>
              </div>
              <h3 className="font-jakarta font-bold text-[16px] md:text-[14px] leading-tight mb-2">
                {review.title}
              </h3>
              <p className="font-inter text-[14px] md:text-[12px] text-[#27272A] leading-[1.4] md:leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                {review.text}
              </p>
              <div className="text-[14px] md:text-[12px] text-[#7c7c7c] font-inter mt-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-semibold">{review.reviewer}</span>,{" "}
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-[#27272A] mt-2 text-[12px] md:text-[14px] max-w-[270px] md:max-w-none font-inter px-2">
        Har fått betyget{" "}
        <span className="font-semibold font-inter">4.5 / 5</span> baserat på 127
        omdömen. Visar våra 5-stjärniga omdömen.
      </div>
      <img
        src="/images/home/hero-trustpilot.png"
        alt="Trustpilot badge"
        width={120}
        height={26}
        className="object-contain w-[120px] xs:w-[140px] sm:w-[180px] h-[26px] sm:mt-2"
      />
    </section>
  )
}

export default TrustPilotReviews
