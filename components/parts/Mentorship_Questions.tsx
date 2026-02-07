import React from "react"
import Accordion from "./Accordion_Home"

export const MentorshipFAQ = [
  {
    id: 1,
    question: "Vem är detta mentorskap till för?",
    answer:
      "För dig som vill bli en riktig entreprenör och bygga långsiktiga varumärken inom dropshipping. Du får en privat mentor/lärare som guidar dig personligen. Inte för hobbyfolk eller de som hoppar av när det blir jobbigt.",
  },
  {
    id: 2,
    question: "Hur vet jag att detta kommer att fungera för mig?",
    answer:
      "Du får en beprövad strategi, personlig vägledning och vinnande produktrekommendationer. Fungerar det inte, är det för att du inte följer processen. Systemet funkar, frågan är om du gör det.",
  },
  {
    id: 3,
    question: "Kan jag göra detta från var som helst i världen?",
    answer:
      "Ja. Mentorskapet är 100 % online. Plats spelar ingen roll, utförande gör.",
  },
  {
    id: 4,
    question: "Vad ingår i mitt mentorskapsprogram?",
    answer:
      "Privat mentor, vinnande produktrekommendation, steg-för-steg-strategi, kontinuerlig feedback på butik och bygga annonser samt system för att bygga ett långsiktigt och skalbart varumärke.",
  },
]

function MentorshipQuestions() {
  return (
    <>
      <div className="flex items-center rounded-lg bg-[#f3f6fe] h-[26px] justify-center align-middle self-center px-3 inset-3 shadow-inner max-w-[178px] mb-4 mt-8">
        <p className="font-inter text-xs font-medium text-[#235AE9]">FAQs</p>
      </div>
      <h1 className="font-semibold font-jakarta text-[24px] md:text-[48px] mb-6 md:mb-10 lg:mb-10 text-center">
        Vanliga Frågor
      </h1>
      <div className="w-full bg-[#F5F9FF] rounded-[20px] max-w-7xl py-4 px-3 md:px-3 mb-16">
        <Accordion data={MentorshipFAQ} />
      </div>
    </>
  )
}

export default MentorshipQuestions
