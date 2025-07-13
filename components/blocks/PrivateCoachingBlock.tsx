import React from "react"
import Image from "next/image"

export default function PrivateCoachingBlock() {
  return (
    <section className="w-full flex flex-col items-center mt-10">
      <h2 className="text-center font-jakarta font-extrabold text-[#151e3a] text-3xl max-w-[300px] md:max-w-full md:text-[38px]">
        Uppgradera med Privat Coachning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto mt-8">
        {/* Top Left */}
        <div className="flex flex-col items-start justify-center py-6 px-6 md:px-10">
          <Image
            src="/images/pricing/private-coaching1.png"
            alt="Direkt mentorskap"
            width={80}
            height={80}
            className="mb-3"
          />
          <h2
            className="text-[#151e3a] font-inter"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            Direkt mentorskap
          </h2>
          <p className="text-[#151e3a] font-inter text-sm">
            Låt vårt team av 7-siffriga coacher guida dig genom varje aspekt av
            att skala din e-handelsverksamhet.
          </p>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-start justify-center py-6 px-6 md:px-10 md:border-l-[2px] border-dashed border-[#97a3b6]">
          <Image
            src="/images/pricing/private-coaching2.png"
            alt="Klart-for-dig-butik"
            width={80}
            height={80}
            className="mb-3"
          />
          <h2
            className="text-[#151e3a] font-inter"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            Klart-for-dig-butik
          </h2>
          <p className="text-[#151e3a] font-inter text-sm">
            Vi skapar en färdig dropshipping butik med 30 vinnande produkter för
            att slippa den krångliga inlärningsprocessen.
          </p>
        </div>

        {/* Bottom Left */}
        <div className="flex flex-col items-start justify-start py-6 px-6 md:px-10 gap-3 md:border-t-[2px] border-dashed border-[#97a3b6]">
          <h2
            className="text-[#151e3a] font-inter"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            Privat nätverk
          </h2>
          <p className="text-[#151e3a] font-inter font-normal text-sm">
            Med “fuskkoder” får du tillgång till saker du inte hittar någon
            annanstans (som annonskonton, leverantörer och annat).
          </p>
          <Image
            src="/images/pricing/private-coaching3.png"
            alt="Privat nätverk"
            width={518}
            height={424}
            className="mb-3 object-contain border-2 border-white"
          />
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-start justify-start py-6 px-6 md:px-10 gap-3 md:border-l-[2px] md:border-t-[2px] border-dashed border-[#97a3b6]">
          <h2
            className="text-[#151e3a] font-inter"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            Dagligt ansvar
          </h2>
          <p className="text-[#151e3a] font-inter font-normal text-sm">
            Aktiv och ständig support för att hjälpa dig växa din e-handel till
            en nivå som kan förändra ditt liv (och mer). Du kommer få 10 privata
            lektioner.
          </p>
          <Image
            src="/images/pricing/private-coaching4.png"
            alt="Dagligt ansvar"
            width={510}
            height={430}
            className="mb-3 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
