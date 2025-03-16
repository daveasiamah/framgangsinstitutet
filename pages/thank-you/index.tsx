import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { testimonials } from "./testimonials"
import { ThankYouVideoBanner } from "./thank-you-video-banner"
import { listItems } from "./listItems"
import { ThankYouButton } from "./thank-you-button"

export default function ThankYou() {
  return (
    <Layout headTitle={"Thank you"} isFullWidth>
      <div
        className="flex flex-col items-center w-full justify-center"
        style={{
          backgroundImage: `url('/images/pricing/store-hero-bg.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="flex items-end gap-2">
          <p className="font-inter font-medium text-[#434c69] text-[10px] md:text-base">
            Vad säger våra kunder: Utmärkt
          </p>
          <Image
            src="/images/thank-you/trustpilot.png"
            alt="trustpilot"
            width={140}
            height={33}
            className="object-contain w-[70px] h-[16px] md:w-[140px] md:h-[33px]"
          />
          <Image
            src="/images/thank-you/trustpilot-stars.png"
            alt="trustpilot-stars"
            width={88}
            height={16}
            className="object-contain w-[44px] h-[9px] md:w-[88px] md:h-[16px]"
          />
        </div>
        <div className="mt-5 md:mt-10 flex justify-center px-4 md:px-8">
          <h1 className="text-[1.125rem] md:text-[2rem] lg:text-[3rem] text-[#151E3A] md:max-w-[800px] lg:max-w-[1260px] text-center leading-[1.4] md:leading-[1.5] lg:leading-[55px] font-extrabold font-jakarta">
            Lär dig bygga ett framgångsrikt e-handelsföretag från 0 till 100k+
            <br className="lg:hidden" />i månaden, utan tidigare erfarenhet!
          </h1>
        </div>
        <ThankYouVideoBanner />
        <div className="md:mb-10">
          <ThankYouButton />
        </div>
      </div>

      <section className="flex flex-col justify-center items-center md:mt-[33px] mt-[23px] mb-[14px] md:mb-[52px]">
        <h2 className="font-jakarta font-bold leading-5 text-[1.25rem] md:text-[2.875rem]">
          Du kommer att lära dig:
        </h2>
        <ul className="mt-5 md:mt-10 max-w-[647px]">
          {listItems.map((item) => (
            <li key={item.id} className="flex items-center gap-2.5">
              <Image src={item.icon} alt="checkmark" width={16} height={10.5} />
              <span className="text-[10px] md:text-base font-inter font-medium text-[#434C69]">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col py-10 items-center bg-gradient-to-br from-[#225AEA] to-[#020103]">
        <h2 className="text-white font-inter text-[18px]">
          HÄR ÄR VAD DU FÅR...
        </h2>
        <div className="flex gap-2">
          <h2 className="font-inter font-bold text-[20px] md:text-[45px] text-white">
            Vad finns i
          </h2>
          <h2 className="font-inter font-bold text-[20px] md:text-[45px] text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-white">
            Checkified
          </h2>
        </div>

        <div className="max-w-[297px] md:max-w-[697px] mt-[38px]">
          <p className="font-inter text-[12px] md:text-[14px] lg:text-base text-white font-medium text-center">
            Checkified är uppdelad i 4 moduler. Du kan se vad som finns inuti
            var och en nedan.
            <br /> När du går med idag får du en färdig dropshipping butik
            (Värde 16 000 SEK).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-auto max-w-[1030px] gap-10 p-10 justify-center items-center mt-10">
          <div className="flex flex-col  max-w-[318px] justify-start">
            <div className="flex text-center items-center gap-2">
              <Image
                src="/images/thank-you/gauge1.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Modul 1: Lansera
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Grunden till affärsmodellen, mindset, och hur man skalar till 100k
              inom e-handel.
            </p>
          </div>
          <div className="flex flex-col max-w-[265px] justify-start">
            <div className="flex text-center items-center gap-2">
              <Image
                src="/images/thank-you/chart-line.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Modul 2: Bygga
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Bygg din e-handelsverksamhet med e-handelsplattform Shopify.
            </p>
          </div>
          <div className="flex flex-col max-w-[259px] justify-start">
            <div className="flex text-center items-center gap-2">
              <Image
                src="/images/thank-you/list-checks.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">Modul 3: Sälj</h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Lär dig försäljning, e-postlistor, och optimering.
            </p>
          </div>
          <div className="flex flex-col max-w-[276px] justify-start">
            <div className="flex text-center items-center gap-2">
              <Image
                src="/images/thank-you/cursor-click.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Modul 4: Skala
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Få guide för marknadsföring, sociala medier och annonser.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col mx-auto md:container bg-[#EDF5FE] py-10 justify-center items-center">
        <div className="flex flex-col container text-center items-center">
          <h2 className="font-jakarta font-bold text-[20px] md:text-[3rem] text-center">
            1000 + studenter...
          </h2>
          <p className="font-inter font-medium text-xs md:text-base text-center text-[#37354ase] mb-3 max-w-[622px]">
            Vi har hjälp över 1000+ studenter att förändra deras liv med våra
            utbildningar och den siffran växer dagligen. Vill du förändra ditt
            liv till det bästa så ska du se vad våra studenter har uppnått för
            resultat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1030px] items-center w-full justify-items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white max-w-[325px] gap-5 shadow-lg rounded-2xl p-10 mt-2"
            >
              <p className="font-inter text-base text-start">
                {testimonial.text}
              </p>
              <div className="flex flex-row items-center gap-2 mt-5">
                <Image
                  src={testimonial.avatar}
                  alt="avatar"
                  width={42}
                  height={42}
                />
                <div className="flex flex-col">
                  <h4 className="font-inter font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-base">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
