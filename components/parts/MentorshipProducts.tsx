import React from "react"
import MentorshipButton from "./Mentorship_Button"
import { ArrowRight } from "lucide-react"

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
    image: "/images/mentorship/mentorship-products/facebook-ads.png",
    title: "Annonsering På Facebook Ads",
    description:
      "Du får en komplett lektion och vägledning hur du ska sätta upp kampanjer och annonser via Meta Ads.",
  },
  {
    id: 3,
    image: "/images/mentorship/mentorship-products/dropshipping-produkt.png",
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
    image: "/images/mentorship/mentorship-products/mentorship-support.png",
    title: "Varje Dag Support",
    description:
      "Aktiv och ständig support för att hjälpa dig växa din e-handel till en nivå som kan förändra ditt liv och mer.",
  },
]
function MentorshipProducts({ openModal }: { openModal: () => void }) {
  return (
    <>
      <h2 className="text-[#000000] max-w-[272px] md:max-w-full font-jakarta text-center leading-[18px] text-[20px] md:text-[24px] lg:text-[36px] font-bold mt-8 mb-4 md:mb-6">
        6 Bonusar När Du Går Med Dropshiping Mentorskap:
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[27px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center bg-[#F5F9FF] rounded-[24px] px-[20px] py-[12px] md:px-[27px] md:pt-[24px] md:pb-[27px] lg:pt-[13px] lg:pb-[20px] lg:px-[20px] shadow-sm"
          >
            <div className="overflow-hidden rounded-[16px] w-full">
              <img
                width={502}
                height={170}
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-[350px] md:max-w-[533px] lg:max-w-full">
              <h3 className="font-jakarta text-sm md:text-[24px] lg:text-[14px] text-[#000000] font-semibold leading-[38px] md:leading-[48px] lg:leading-[32px]  text-center">
                {product.title}
              </h3>
              <p className="font-inter text-xs md:text-[18px] lg:text-xs font-medium leading-[12px] md:leading-[18px] text-[#235AE9]">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center self-center mt-6 mb-10 justify-center w-full">
        <button
          type="button"
          onClick={openModal}
          className="bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] font-bold text-center font-jakarta tracking-[0] leading-none rounded-[7px] shadow-inner flex items-center justify-center gap-2 w-[184px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[39px] sm:h-[42px] md:h-[45px] lg:h-[48px] text-xs sm:text-sm md:text-[14px] px-6 py-3"
          style={{
            boxShadow: `
              inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
              inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)
            `,
          }}
        >
          Ansök till Mentorskap
          <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </>
  )
}

export default MentorshipProducts
