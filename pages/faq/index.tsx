import React from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import ScrollReveal from "@/components/transition/ScrollReveal"
import { Accordion, AccordionItem } from "@/components/parts/Accordion_FAQ"
import { getFAQs } from "@/utils/contentful"

import { Document } from "@contentful/rich-text-types"
import { format } from "date-fns"
import { sv } from "date-fns/locale"
import RichTextRenderer from "@/utils/RichTextRenderer"

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
        <div className="w-full md:container md:mx-auto px-4 py-10">
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
      {/* Full width on mobile, container centered on md and above */}
      <div className="w-full md:container md:mx-auto md:px-4 py-8">
        <section className="mx-auto max-w-7xl px-0 md:px-4">
          <div className="relative py-10">
            <ScrollReveal>
              <h1 className="text-center font-jakarta text-[1.3rem] md:text-[3rem] lg:text-[3.5rem] md:leading-[40px] leading-[22px] font-[700] mb-6 mt-2 px-4 md:px-0">
                Vanliga frågor och svar
              </h1>
              <h2 className="text-center leading-2 text-[14px] font-inter font-medium md:text-[22px] text-[#707BA0] mb-9 px-4 md:px-0">
                {finalOutput}
              </h2>
            </ScrollReveal>

            <div className="w-full bg-[#F5F9FF] rounded-none md:rounded-[20px] py-4 px-2 md:px-3 mb-16">
              <Accordion>
                {faqs.map((item) => (
                  <AccordionItem key={item.id} title={item.question}>
                    <RichTextRenderer richText={item.answer} />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex justify-between items-center border border-gray px-[18px] py-[12px] rounded-[20px] mt-14 mx-4 md:mx-0">
              <p className="font-inter font-medium text-[11px] md:text-sm">
                Har vi missat något?
              </p>
              <div
                onClick={() => router.push("/contact-us")}
                className="rounded-[12px] border border-gray text-center py-2 px-3 hover:cursor-pointer"
              >
                <p className="font-inter font-medium text-[10px] md:text-xs">
                  Ta kontakt med oss
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const allFAQs = (await getFAQs()) || []
    return {
      props: { faqs: allFAQs },
      revalidate: 120,
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
