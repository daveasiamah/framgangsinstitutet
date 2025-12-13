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
        <div className="flex flex-col md:grid md:grid-cols-5 gap-3 md:gap-4 items-stretch py-2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] p-3 md:p-4 flex flex-col w-full shadow-sm"
            >
              <div className="flex mb-2">
                <Image
                  src="/images/home/trustpilot-top.svg"
                  alt="stars"
                  width={302}
                  height={26}
                  className="object-contain w-full max-w-[302px] md:max-w-[150px] h-auto"
                />
              </div>
              <h3 className="font-jakarta font-bold text-[16px] md:text-[8px] lg:text-[14px] leading-tight mb-2">
                {review.title}
              </h3>
              <p className="font-inter text-[14px] md:text-[6px] lg:text-[10px] xl:text-[12px] text-[#27272A] leading-[1.4] md:leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                {review.text}
              </p>
              <div className="text-[11px] md:text-[8px] lg:text-[10px] xl:text-[12px] text-[#7c7c7c] font-inter mt-3 whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-semibold">{review.reviewer}</span>,{" "}
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 sm:mt-6 text-center text-[#27272A] text-[12px] xs:text-[13px] sm:text-[14px] font-inter px-2">
        Har fått betyget{" "}
        <span className="font-semibold font-inter">4.5 / 5</span> baserat på 127
        omdömen. Visar våra 5-stjärniga omdömen.
      </div>
      <Image
        src="/images/trustpilot-badge-small.svg"
        alt="Trustpilot badge"
        width={140}
        height={45}
        className="object-contain w-[120px] xs:w-[140px] sm:w-[180px] h-[38px] xs:h-[45px] sm:h-[58px] mt-2"
      />
    </section>
  )
}

export default TrustPilotReviews
