import React from "react"
import Image from "next/image"
import MentorshipButton from "./Mentorship_Button"

const products = [
  {
    id: 1,
    image: "/images/mentorship/mentorship-products/private-mentorship.png",
    title: "Privat Mentorskap",
    description:
      "Låt vårt team av 7-siffriga coacher guida dig genom varje aspekt av att skala din e-handelsverksamhet.",
  },
  {
    id: 2,
    image: "/images/mentorship/mentorship-products/student-result.png",
    title: "Student Resultat",
    description:
      "Över 200 studenter har gått vårt privata mentorskap och skapat riktiga resultat direkt hemifrån.",
  },
  {
    id: 3,
    image: "/images/mentorship/mentorship-products/shopify-butik.png",
    title: "Klart För Dig Shopify Butik",
    description:
      "Vi bygger en färdig dropshipping-butik med vinnande produkter, utan krånglig inlärning.",
  },
  {
    id: 4,
    image: "/images/mentorship/mentorship-products/private-community.png",
    title: "Privat Community Nätverk",
    description:
      "Privat nätverk av drivna entreprenörer som delar insikter, kontakter och strategier.",
  },
  {
    id: 5,
    image: "/images/mentorship/mentorship-products/dropshipping-kurs.png",
    title: "Fullständig Dropshipping Kurs",
    description:
      "En komplett e-handelskurs som lär dig beprövade strategier och genvägar för att bygga en lönsam butik.",
  },
  {
    id: 6,
    image: "/images/mentorship/mentorship-products/support.png",
    title: "Varje Dag Support",
    description:
      "Aktiv och ständig support för att hjälpa dig växa din e-handel till en nivå som kan förändra ditt liv och mer.",
  },
]
function MentorshipProducts() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center bg-[#F5F9FF] rounded-[24px] px-[20px] py-[12px] shadow-sm"
          >
            <Image
              width={502}
              height={170}
              src={product.image}
              alt={product.title}
              className="mb-4"
            />
            <div className="max-w-[350px] md:max-w-[400px]">
              <h3 className="font-jakarta text-sm md:text-base text-[#000000] font-semibold mb-2">
                {product.title}
              </h3>
              <p className="font-inter text-xs md:text-sm text-[#235AE9]">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flext-col items-center self-center mt-2 mb-10 justify-center w-full">
        <MentorshipButton
          text="Ansök till Mentorskap →"
          style={{ fontSize: "12px", color: "red" }}
        />
      </div>
    </>
  )
}

export default MentorshipProducts
