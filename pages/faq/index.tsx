import React, { useState } from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/locales/en"
import sv from "@/locales/sv"
import ScrollReveal from "@/components/transition/ScrollReveal"
import Accordion from "@/components/parts/Accordion_FAQ"

const FAQ = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle="FAQ">
      <Head>
        <title>FAQ | Dropship</title>
        <meta
          name="description"
          content="Frequently asked questions about our platform and services."
        />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <section>
          <div className="relative py-10 full-bg">
            <ScrollReveal>
              <h1 className="text-center font-jakarta text-[22px] md:text-[36px] md:leading-[40px] leading-[22px] font-[700] mb-10 mt-5">
                Vanliga Frågor
              </h1>
            </ScrollReveal>
            <Accordion data={t.faqData} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FAQ
