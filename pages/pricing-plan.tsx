import { useState } from "react"

import Layout from "@/components/Layout"
import { MainFAQPricing } from "@/components/parts/MainFAQPricing"

type Plan = {
  name: string
  subtitle: string
  features: string[]
  cta: string
  highlight?: boolean
}

const annualPlans: Plan[] = [
  {
    name: "Prova på",
    subtitle: "Utvalda kurser",
    features: [
      "Kostnadsfritt smakprov",
      "Sveriges främsta experter",
      "Access dygnet runt, året runt",
      "Utveckla dig själv redan idag",
    ],
    cta: "Bli medlem",
  },
  {
    name: "År",
    subtitle: "9988 kr/år",
    features: [
      "Skapa din egen framgång",
      "Workbooks för faktisk inlärning",
      "Bonustips på mail varje månad",
      "Nya unika onlinekurser löpande",
      "Tillgång dygnet runt, året runt",
      "Certifikat till varje kurs",
      "Sveriges främsta experter",
      "Obegränsad tillgång",
      "Personlig utveckling on demand",
      "Spara 50% varje månad",
    ],
    cta: "Starta nu",
    highlight: true,
  },
  {
    name: "Företagspaket",
    subtitle: "Hör av dig",
    features: [
      "Allt som ingår i prenumerationen",
      "Skräddarsytt efter dina behov",
      "Anpassat antal licenser",
      "Års- eller månadsfakturering",
      "SCORM-kompatibelt",
    ],
    cta: "Kontakta oss",
  },
]

const monthlyPlans: Plan[] = [
  {
    name: "Prova på",
    subtitle: "Utvalda kurser",
    features: [
      "Kostnadsfritt smakprov",
      "Sveriges främsta experter",
      "Access dygnet runt, året runt",
      "Utveckla dig själv redan idag",
    ],
    cta: "Bli medlem",
  },
  {
    name: "Månad",
    subtitle: "899 kr/mån",
    features: [
      "Skapa din egen framgång",
      "Workbooks för faktisk inlärning",
      "Bonustips på mail varje månad",
      "Nya unika onlinekurser löpande",
      "Tillgång dygnet runt, året runt",
      "Certifikat till varje kurs",
      "Sveriges främsta experter",
      "Obegränsad tillgång",
      "Personlig utveckling on demand",
      "Ingen bindningstid",
    ],
    cta: "Starta nu",
    highlight: true,
  },
  {
    name: "Företagspaket",
    subtitle: "Hör av dig",
    features: [
      "Allt som ingår i prenumerationen",
      "Skräddarsytt efter dina behov",
      "Anpassat antal licenser",
      "Års- eller månadsfakturering",
      "SCORM-kompatibelt",
    ],
    cta: "Kontakta oss",
  },
]

const testimonials = [
  {
    title: "Fantastiskt",
    text: "Mycket lärorik och intressant utbildning. Kan varmt rekommenderas.",
    author: "Alex",
  },
  {
    title: "Förvånansvärt bra",
    text: "Intressant och viktigt innehåll som verkligen behövs belysas.",
    author: "Lisa",
  },
  {
    title: "Det förändrade mitt liv",
    text: "Framgångsinstitutet kom verkligen in i mitt liv när jag behövde det.",
    author: "Vanessa",
  },
]

const pricingFaqData = [
  {
    id: 1,
    question: "Behöver jag ha en egen dator för att studera?",
    answer:
      "Ja, du behöver en dator, surfplatta eller mobil med internetuppkoppling för att ta del av utbildningen.",
  },
  {
    id: 2,
    question: "Får jag ett diplom efter att ha genomfört en kurs?",
    answer:
      "Ja, flera av våra kurser innehåller diplom eller kursintyg när du har slutfört samtliga moment.",
  },
  {
    id: 3,
    question: "Vilket språk bedrivs onlineutbildningarna på?",
    answer:
      "Majoriteten av utbildningarna är på svenska, men vissa delar och resurser kan vara på engelska.",
  },
  {
    id: 4,
    question: "Kan jag läsa flera kurser samtidigt?",
    answer:
      "Ja, med aktiv prenumeration kan du läsa flera kurser parallellt i din egen takt.",
  },
  {
    id: 5,
    question: "Vad innebär det att studera en onlineutbildning?",
    answer:
      "Du studerar digitalt när det passar dig, med tillgång till materialet dygnet runt från valfri plats.",
  },
  {
    id: 6,
    question: "Inom vilka branscher har ni utbildningar inom?",
    answer:
      "Vi erbjuder utbildningar inom bland annat entreprenorskap, personlig utveckling, marknadsforing och e-handel.",
  },
]

export default function PricingPlanPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = isAnnual ? annualPlans : monthlyPlans

  return (
    <Layout headTitle="Välj prenumeration" isFullWidth>
      <main className="bg-white font-inter text-[#121212]">
        <section className="mx-auto w-full max-w-[1240px] px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center text-center">
            <img
              src="/icons/university-icon.png"
              alt="University icon"
              className="mb-4 h-[70px] w-[70px]"
            />
            <h1 className="font-jakarta text-4xl font-bold tracking-tight sm:text-5xl">
              Välj prenumeration
            </h1>
            <p className="mt-2 text-sm">Alla priser är inklusive moms</p>

            <div className="mt-6 inline-flex items-center gap-3">
              <button
                type="button"
                className={`rounded-full border px-6 py-2.5 text-sm font-jakarta font-semibold transition ${
                  isAnnual
                    ? "border-[#2b5de7] bg-[#2b5de7] text-white"
                    : "border-[#2b5de7] bg-white text-[#2b5de7]"
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Årsprenumeration
              </button>
              <button
                type="button"
                className={`rounded-full border px-6 py-2.5 text-sm font-jakarta font-semibold transition ${
                  isAnnual
                    ? "border-[#2b5de7] bg-white text-[#2b5de7]"
                    : "border-[#2b5de7] bg-[#2b5de7] text-white"
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Månadsprenumeration
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={`${plan.name}-${plan.subtitle}`}
                className={`mx-auto w-full max-w-[360px] min-h-[560px] overflow-hidden rounded-3xl border shadow-sm md:min-h-[620px] md:max-w-[593px] lg:min-h-[620px] lg:max-w-[396px] ${
                  plan.highlight
                    ? "border-[#2b5de7] bg-white"
                    : "border-[#eceef3] bg-[#f9fafb]"
                }`}
              >
                <div
                  className={`px-8 py-7 text-center ${
                    plan.highlight
                      ? "bg-[#2b5de7] text-white"
                      : "bg-transparent text-[#171717]"
                  }`}
                >
                  <h2
                    className={`font-inter text-[20px] font-bold leading-tight ${
                      plan.highlight ? "text-white" : "text-[#000000]"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <p
                    className={`font-inter text-[20px] font-medium leading-tight ${
                      plan.highlight ? "text-white" : "text-[#151E3A]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>
                <div className="space-y-6 px-8 pb-6">
                  <ul className="space-y-0.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-b border-[#d5dceb] py-3 text-sm text-[#24324a] last:border-b-0"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <button
                      type="button"
                      className="rounded-full bg-[#2b5de7] px-10 py-2 text-sm font-poppins font-medium text-white transition hover:bg-[#1e49bf]"
                    >
                      {plan.cta}
                    </button>
                    {index === 0 && (
                      <p className="mt-3 text-sm text-[#000000]">
                        Kom igång kostnadsfritt
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#2b5de7] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1160px]">
            <h3 className="font-jakarta text-center text-2xl font-bold text-white sm:text-4xl">
              Så säger våra medlemmar
            </h3>
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="mx-auto w-full max-w-[420px] rounded-3xl border border-[#dbe5ff] bg-white px-6 py-6 lg:max-w-none"
                >
                  <div className="flex items-center">
                    <img
                      src="/images/home/pricing-testimonial-stars.png"
                      alt="testimonial stars"
                      className="h-auto w-[120px] object-contain sm:w-[150px] md:w-[160px] lg:w-10/12"
                    />
                  </div>
                  <h4 className="font-inter mt-3 text-xl font-bold text-[#1c2440]">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-[#4a556d]">{item.text}</p>
                  <p className="mt-6 text-sm italic font-semibold text-[#1c2440]">
                    {item.author}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1160px] px-4 py-8 sm:px-6 lg:px-8">
          <MainFAQPricing faqData={pricingFaqData} />
        </section>
      </main>
    </Layout>
  )
}
