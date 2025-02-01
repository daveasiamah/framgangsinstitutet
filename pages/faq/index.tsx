import React from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/locales/en"
import swedish from "@/locales/sv"
import ScrollReveal from "@/components/transition/ScrollReveal"
import { Accordion, AccordionItem } from "@/components/parts/Accordion_FAQ"
import { getFAQs } from "@/utils/contentful"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"
import { format } from "date-fns"
import { sv } from "date-fns/locale"

interface FAQ {
  id: string
  question: string
  answer: Document
  lastUpdated: string
}

interface FAQPageProps {
  faqs: FAQ[]
}

const FAQPage: React.FC<FAQPageProps> = ({ faqs }) => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : swedish

  // Defensive programming: if there are no FAQs, display a fallback message.
  if (!faqs || faqs.length === 0) {
    return (
      <Layout headTitle="FAQ">
        <Head>
          <title>FAQ</title>
          <meta
            name="description"
            content="Frequently asked questions about our platform and services."
          />
        </Head>
        <div className="container mx-auto px-4 py-10">
          <p className="text-center text-red-500">No FAQs available.</p>
        </div>
      </Layout>
    )
  }

  // Format the lastUpdated date from the first FAQ
  let finalOutput = ""
  if (faqs.length > 0) {
    const lastUpdatedDate = new Date(faqs[0].lastUpdated)
    // Format the date (e.g. "1 februari 2025")
    const formattedDate = format(lastUpdatedDate, "d MMMM yyyy", { locale: sv })
    // Split into parts and capitalize the month name if needed.
    const [day, month, year] = formattedDate.split(" ")
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)
    finalOutput = `Senast uppdaterad: ${day} ${capitalizedMonth} ${year}`
  }

  return (
    <Layout headTitle="FAQ">
      <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="Frequently asked questions about our platform and services."
        />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <section>
          <div className="relative py-10">
            <ScrollReveal>
              <h1
                className="text-center font-jakarta text-[22px] md:text-4xl md:leading-[40px] leading-[22px] font-[700] mb-10 mt-2"
                style={{
                  letterSpacing: "-1.92px",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                }}
              >
                Vanliga frågor och svar
              </h1>
              {/* Render the formatted update date */}
              <h2 className="text-center leading-5 text-lg font-inter font-medium text-[22px] text-[#707BA0] mb-9">
                {finalOutput}
              </h2>
            </ScrollReveal>

            {/* Render Accordion with FAQ Data */}
            <Accordion>
              {faqs.map((item) => (
                <AccordionItem key={item.id} title={item.question}>
                  {documentToReactComponents(item.answer)}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const allFAQs = (await getFAQs()) || [] // Ensure faqs is always an array.
    return {
      props: { faqs: allFAQs },
      // Revalidate every 60 seconds
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return {
      props: { faqs: [] },
      revalidate: 60,
    }
  }
}

export default FAQPage
