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
      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 min-w-[900px] items-center justify-center py-1 px-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#F8F9FA] p-4 flex flex-col w-[250px]">
              <div className="flex mb-2">
                <Image
                  src="/icons/trustpilot-review-top.svg"
                  alt="stars"
                  width={190}
                  height={16}
                  className="object-contain w-[190px] h-[16px]"
                />
              </div>
              <h3 className="font-jakarta font-bold text-[15px] leading-tight mb-2">
                {review.title}
              </h3>
              <p
                className={clsx(
                  "text-xs text-[#222] font-inter mb-0 leading-snug",
                  "overflow-hidden",
                  "[display:-webkit-box]",
                  "[WebkitLineClamp:4]",
                  "[WebkitBoxOrient:vertical]",
                  "min-h-[4.8em]" // 4 lines at 1.2em line height (default for text-xs/leading-snug)
                )}
                style={{ lineHeight: "1.2em", maxHeight: "4.8em" }}
              >
                {review.text}
              </p>
              <div className="text-xs text-[#7c7c7c] font-inter mt-[14px]">
                <span className="font-semibold">{review.reviewer}</span>,{" "}
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-[#27272A] text-[14px] md:text-[14px] font-inter">
        Har fått betyget{" "}
        <span className="font-semibold font-inter">4.5 / 5</span> baserat på 127
        omdömen. Visar våra 5-stjärniga omdömen.
      </div>
      <Image
        src="/images/trustpilot-badge-small.svg"
        alt="Trustpilot badge"
        width={180}
        height={58}
        className="object-contain w-[180px] h-[58px]"
      />
    </section>
  )
}

export default TrustPilotReviews
