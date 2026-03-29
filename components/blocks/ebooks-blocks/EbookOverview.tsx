import React from "react"

export default function EbookOverview() {
  return (
    <section className="flex flex-col items-center justify-center md:px-2 mt-14 bg-gray-50 text-center">
      <h1 className="text-[1.4rem] md:text-[1.4rem] lg:text-3xl font-extrabold font-jakarta text-[#151e3a] mb-6">
        Handla kursböcker och studiematerial hos framgångsinstitutet
      </h1>

      <p className="text-sm md:text-base text-gray-700 text-[#151E3A] leading-relaxed mb-8 max-w-5xl">
        Våra e-böcker och kursmaterial är skapade för dig som vill utvecklas
        inom digital marknadsföring, e-handel, artificiell intelligens och
        entreprenörskap. Lär dig i din egen takt med nedladdningsbart material
        fyllt med experttips, strategier och praktiska guider som hjälper dig
        att applicera din kunskap direkt i verkliga projekt.
      </p>

      {/* Course Highlights */}
      <p className="text-sm md:text-base text-gray-700 text-[#151E3A] leading-relaxed mb-8 max-w-5xl">
        Utforska våra resurser inom entreprenörskap, Matematik, Digital
        Marknadsföring, Aktier, SEO, E-handel och Webbutveckling. Oavsett om du
        vill starta och driva ett framgångsrikt företag eller förbättra dina
        digitala färdigheter, har vi materialet du behöver för att lyckas.
      </p>

      {/* Call to Action */}
      <p className="text-md md:text-lg text-gray-700 text-[#151E3A] leading-relaxed mb-6 max-w-5xl">
        Börja din resa mot digital framgång redan idag – ladda ner dina e-böcker
        och kursmaterial hos framgångsinstitutet!
      </p>
    </section>
  )
}
