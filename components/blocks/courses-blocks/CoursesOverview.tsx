import React from "react"

export const CoursesOverview: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 py-10 bg-gray-50 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold font-jakarta text-[#151e3a] mb-6">
        Lär dig digital marknadsföring och e-handel hos Checkified
      </h1>

      <p className="text-md md:text-lg text-gray-700 text-[#151E3A] leading-relaxed mb-8 max-w-5xl">
        Sedan 2022 har Checkified varit en ledande aktör inom
        onlineutbildningar. Med innovativa kurser, trygg och flexibel inlärning
        och en engagerande utbildningsplattform hjälper vi dig att utveckla din
        kompetens och nå dina karriärmål. Här hittar du ett brett utbud av
        kurser inom områden som digital marknadsföring, e-handel, dropshipping,
        sociala medier och SEO. Våra utbildningar är utformade för både
        nybörjare och yrkesverksamma som vill vässa sina färdigheter.
      </p>

      {/* Course Highlights */}
      <p className="text-md md:text-lg text-gray-700 text-[#151E3A] leading-relaxed mb-8 max-w-5xl">
        Upptäck populära kurser som Digital Marknadsföring, E-commerce Manager,
        Marknadsföring i TikTok, och Skapa en egen hemsida (Shopify). Med vår
        expertis och erfarenhet får du verktygen att lyckas online.
        <br />
        Börja din resa mot en framgångsrik karriär inom den digitala världen.
      </p>

      {/* Call to Action */}
      <p className="text-md md:text-lg text-gray-700 text-[#151E3A] leading-relaxed mb-6 max-w-5xl">
        Handla kurser online hos Checkified
      </p>
    </section>
  )
}
