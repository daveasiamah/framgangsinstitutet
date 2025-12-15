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
    image: "/images/mentorship/mentorship-products/facebook-ads1.svg",
    title: "Annonsering På Facebook Ads",
    description:
      "Du får en komplett lektion och vägledning hur du ska sätta upp kampanjer och annonser via Meta Ads.",
  },
  {
    id: 3,
    image: "/images/mentorship/mentorship-products/dropshipping-product.svg",
    title: "Vinnande Dropshipping Produkt",
    description:
      "Vi kommer rekommendera en vinnande produkt som har sålts för miljonbelopp.",
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
      <h2 className="text-[#000000] max-w-[272px] md:max-w-full font-jakarta text-center text-[20px] md:text-[24px] lg:text-[36px] font-bold mt-10 mb-4 md:mb-6">
        6 Bonusar När Du Går Med Dropshiping Mentorskap:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col items-center text-center bg-[#F5F9FF] rounded-[24px] px-[20px] py-[12px] shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
          >
            <div className="overflow-hidden rounded-[16px] mb-4 w-full">
              <Image
                width={502}
                height={170}
                src={product.image}
                alt={product.title}
                className="mb-4"
              />
            </div>
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
