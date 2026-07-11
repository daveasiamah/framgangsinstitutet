import Link from "next/link"
import { Document } from "@contentful/rich-text-types"

import Layout from "@/components/Layout"
import { MainFAQPricing } from "@/components/parts/MainFAQPricing"
import { getFAQs } from "@/utils/contentful"

type Plan = {
  name: string
  subtitle: string
  features: string[]
  cta: string
  highlight?: boolean
}

const annualPlans: Plan[] = [
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
    highlight: true,
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

type PricingPageProps = {
  faqs: {
    id: string | number
    question: string
    answer: string | Document
  }[]
}

export default function Prisplaner({ faqs }: PricingPageProps) {
  const stripeLink = "https://buy.stripe.com/aFa7sKfnNcGJ9sAdQaf7i00"

  const plans = annualPlans

  return (
    <Layout
      headTitle="Prisplaner - Studera på distans via Framgångsinstitutet"
      useExactHeadTitle={true}
      isFullWidth
    >
      <main className="bg-white font-inter text-[#121212]">
        <section className="mx-auto w-full max-w-[1240px] px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="mx-auto mb-8 flex max-w-xl flex-col items-center text-center">
            <img
              src="/icons/university.png"
              alt="University icon"
              className="mb-4 h-[56px] w-[56px]"
            />
            <h1 className="font-jakarta text-4xl font-bold tracking-tight sm:text-5xl">
              Välj prenumeration
            </h1>
            <p className="text-lg font-inter font-medium text-[#4a556d] mt-4 md:mt-6">
              Alla priser är inklusive moms
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[816px] gap-8 lg:h-[620px] lg:grid-cols-2 lg:gap-8">
            {plans.map((plan) => (
              <article
                key={`${plan.name}-${plan.subtitle}`}
                className={`mx-auto flex h-full w-full max-w-[360px] flex-col overflow-hidden rounded-3xl border shadow-sm md:max-w-[593px] lg:max-w-[392px] ${
                  plan.highlight
                    ? "border-[#2b5de7] bg-white"
                    : "border-[#eceef3] bg-[#f9fafb]"
                }`}
              >
                <div
                  className={`px-8 py-5 lg:py-4 text-center ${
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
                      plan.highlight ? "text-white" : "text-[#000000]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>
                <div className="flex h-full flex-col px-8 pb-6 pt-4 lg:pt-3">
                  <ul className="space-y-0.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-b border-[#d5dceb] py-2.5 lg:py-2 text-sm leading-[1.35] text-[#000000] last:border-b-0"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 text-center">
                    {plan.cta === "Kontakta oss" ? (
                      <Link
                        href="/kontakta-oss"
                        className="inline-block rounded-full bg-[#2b5de7] px-10 py-2 text-sm font-poppins font-medium text-white transition hover:bg-[#1e49bf]"
                      >
                        {plan.cta}
                      </Link>
                    ) : (
                      <a
                        href={stripeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-[#2b5de7] px-10 py-2 text-sm font-poppins font-medium text-white transition hover:bg-[#1e49bf]"
                      >
                        {plan.cta}
                      </a>
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
          <MainFAQPricing faqData={faqs} />
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const faqs = await getFAQs("sv")

  return {
    props: {
      faqs,
    },
  }
}
