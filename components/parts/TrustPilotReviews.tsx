import React from "react"

type Review = {
  title: string
  text: string
  reviewer: string
  date: string
  verified?: boolean
}

const reviews: Review[] = [
  {
    title: "Jätte bra utbildningar",
    text: "Jätte bra utbildningar man får lära sig allt med digitala världen, direkt stöd och flera kurser i en och samma bindningstid. Rekommenderar verkligen.",
    reviewer: "Stina Lindberg",
    date: "3 dagar sedan",
    verified: true,
  },
  {
    title: "Kan inte beskriva hur bra",
    text: "Kan inte beskriva med ord hur bra service Framgångsinstitutet erbjuder. Köpt flera utbildningar och fick resultat och support varje dag. Rekommenderas.",
    reviewer: "Joel",
    date: "11 November",
    verified: true,
  },
  {
    title: "Bästa investering!",
    text: "Var skeptisk till en början men valde att ge det en chans och gå med. Fick direkt tillgång till ett stort bibliotek av digitala kurser inom olika branscher.",
    reviewer: "Max",
    date: "5 dagar sedan",
    verified: true,
  },
  {
    title: "Grymma utbildningar",
    text: "Grymma utbildningar och man får valuta för pengarna, det känns kanske för lite av vad man betalar för och fick även ett diplom efter avslutad kurs.",
    reviewer: "Lukas Pettersson",
    date: "13 Oktober",
    verified: true,
  },
  {
    title: "Jag rekommenderar starkt",
    text: "Jag rekommenderar Framgångsinstitutet, man får tillgång till ett stort urval kurser. Man får även träffa likasinnade personer i ett community.",
    reviewer: "Karl Bogren",
    date: "3 November",
    verified: true,
  },
]

const secondRowReviews: Review[] = [
  {
    title: "Ta din kunskap till nästa nivå",
    text: "För dig som vill ta din kunskap till nästa nivå är vad som krävs. Många olika kurser inom flertalet olika områden där det verkligen finns något för alla.",
    reviewer: "Eleanor Gärdin",
    date: "3 dagar sedan",
    verified: true,
  },
  {
    title: "Väldigt bra service",
    text: "Väldigt fint bemötande och engagerad service från alla jag haft kontakt med. Det är så många företag som är omöjliga att komma i kontakt med.",
    reviewer: "Noah Ackered",
    date: "11 November",
    verified: true,
  },
  {
    title: "Intressanta kurser",
    text: "Jag har kollat på många intressanta kurser hos Framgångsinstitutet, som är upplagda på plattformen. och där man får bra stöd och hjälp.",
    reviewer: "Joakim Hellströmer",
    date: "5 dagar sedan",
    verified: true,
  },
  {
    title: "Blandad utbud av kurser",
    text: "Har en blandad utbud av online kurser inom AI, marknadsföring, e-handel, bygg och ledarskap. Det är användbart för både privatpersoner och för företag.",
    reviewer: "Hans Hemmingsson",
    date: "13 Oktober",
    verified: true,
  },
  {
    title: "Har förändrat liv",
    text: "Framgångsinstitutet har förändrat mitt liv helt med deras kunskapsbank och tillgång till flera utbildningar. Jag rekommenderar verkligen.",
    reviewer: "Henrietta Svenstam",
    date: "3 November",
    verified: true,
  },
]

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-[#F8F9FA] p-3 md:p-4 flex flex-col w-full md:min-w-[280px] md:h-full md:snap-center lg:min-w-0 shadow-sm">
    <div className="flex gap-[18.9px] md:gap-[12px] mb-2 items-center w-full md:w-auto">
      <img
        src="/images/home/trustpilot-stars.png"
        alt="stars"
        width={180}
        height={10}
        className="object-contain w-[158px] md:w-[62px] lg:w-[99px] h-auto"
      />
      {review.verified && (
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
      )}
    </div>
    <h3 className="font-jakarta font-bold text-[16px] md:text-[14px] leading-tight mb-2">
      {review.title}
    </h3>
    <p className="font-inter text-[14px] md:text-[12px] lg:text-[10px] text-[#27272A] leading-[1.4] md:leading-relaxed flex-grow line-clamp-5 md:line-clamp-none">
      {review.text}
    </p>
    <div className="text-[14px] md:text-[12px] text-[#7c7c7c] font-inter mt-3 whitespace-nowrap overflow-hidden text-ellipsis">
      <span className="font-semibold">{review.reviewer}</span>, {review.date}
    </div>
  </div>
)

const TrustPilotReviews: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full">
        {/* Mobile: Stack, Tablet: Carousel, Desktop: Grid */}
        <div className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide lg:grid lg:grid-cols-5 gap-3 md:gap-4 items-stretch py-2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {reviews.map((review, idx) => (
            <ReviewCard key={`${review.reviewer}-${idx}`} review={review} />
          ))}
        </div>

        {/* Extra row requested */}
        <div className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-hide lg:grid lg:grid-cols-5 gap-3 md:gap-4 items-stretch py-2 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-2">
          {secondRowReviews.map((review, idx) => (
            <ReviewCard
              key={`${review.reviewer}-${idx + 100}`}
              review={review}
            />
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
        className="object-contain w-[140px] xs:w-[140px] sm:w-[180px] h-[26px] sm:mt-2"
      />
    </section>
  )
}

export default TrustPilotReviews
