import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { testimonials } from "./testimonials"
import { ThankYouVideoBanner } from "./thank-you-video-banner"
import { listItems } from "./listItems"
import { ThankYouButton } from "./thank-you-button"

export default function ThankYou() {
  return (
    <Layout headTitle={"Thank you"}>
      <div
        className="flex flex-col justify-center items-center gap-2 pt-5 bg-[url(/images/thank-you/bgnet.svg)] bg-bg-no-repeat bg-cover pb-6"
        style={{
          backgroundImage: `url('/images/pricing/store-hero-bg.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center bottom",
        }}
      >
        <div className="flex items-end gap-2">
          <p className="font-inter font-medium text-[#434c69] text-xs md:text-base">
            Vad säger våra kunder: Utmärkt
          </p>
          <Image
            src="/images/thank-you/trustpilot.png"
            alt="trustpilot"
            width={140}
            height={33}
            className="object-contain"
          />
          <Image
            src="/images/thank-you/trustpilot-stars.png"
            alt="trustpilot-stars"
            width={88}
            height={16}
            className="object-contain w-[44px] h-[9px] md:w-[88px] md:h-[16px]"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-[1.125rem] md:text-[3rem] text-[#151E3A] max-w-[310px] max-h-[80px] md:max-w-[1260px] md:max-h-[90px] text-center md:leading-[55px] font-extrabold font-jakarta">
            Lär dig bygga ett framgångsrikt e-handelsföretag från 0 till 100k+ i
            månaden, utan tidigare erfarenhet!
          </h1>
        </div>
        <ThankYouVideoBanner />
        <ThankYouButton />
      </div>

      <section className="flex flex-col justify-center items-center mt-[52px] mb-[52px]">
        <h2 className="font-jakarta font-bold leading-10 text-[1.3rem] md:text-[2.875rem]">
          Du kommer att lära dig:
        </h2>
        <ul className="mt-5 space-y-1">
          {listItems.map((item) => (
            <li key={item.id} className="flex items-center gap-2.5">
              <Image src={item.icon} alt="checkmark" width={16} height={10.5} />
              <span className="text-base font-inter font-medium text-[#434C69]">
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
        <h2 className="font-inter font-bold text-[20px] md:text-[45px] text-transparent from-white to-[#225AEA] bg-clip-text [background-image:linear-gradient(45deg,#FFFFFF,#225AEA)]">
          Vad finns i Checkified
        </h2>

        <div className="max-w-[297px] md:max-w-[697px] mt-[38px]">
          <p className="font-inter text-[12px] md:text-[16.5px] text-white font-medium text-center">
            Checkified är uppdelad i 4 moduler. Du kan se vad som finns inuti
            var och en nedan. När du går med idag får du en färdig dropshipping
            butik (Värde 16 000 SEK).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-auto max-w-[1030px] gap-10 justify-center items-center mt-10">
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
            <p className="font-inter text-base text-[#ffffffc7] text-start mt-3.5">
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
            <p className="font-inter text-base text-[#ffffffc7] text-start mt-3.5">
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
            <p className="font-inter text-base text-[#ffffffc7] text-start mt-3.5">
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
            <p className="font-inter text-base text-[#ffffffc7] text-start mt-3.5">
              Få guide för marknadsföring, sociala medier och annonser.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col bg-[#EDF5FE] py-10 justify-center items-center">
        <h2 className="font-jakarta font-bold text-[20px] md:text-[3rem] text-center">
          1000 + studenter...
        </h2>
        <h4 className="font-inter font-medium text-xs md:text-base text-center text-[#37354ase] mb-3 max-w-[622px]">
          Vi har hjälp över 1000+ studenter att förändra deras liv med våra
          utbildningar och den siffran växer dagligen. Vill du förändra ditt liv
          till det bästa så ska du se vad våra studenter har uppnått för
          resultat.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[1030px] items-center w-full justify-items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white max-w-[325px] shadow-lg rounded-2xl p-10 mt-2"
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
