import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { testimonials } from "../../components/blocks/thank-you/testimonials"
import { ThankYouVideoBanner } from "../../components/blocks/thank-you/thank-you-video-banner"
import { listItems } from "../../components/blocks/thank-you/listItems"
import { ThankYouButton } from "../../components/blocks/thank-you/thank-you-button"
import { testimonialVideos } from "@/components/blocks/thank-you/testimonialVideos"
import { TestimonialVideo } from "@/components/blocks/thank-you/TestimonialVideo"

export default function ThankYou() {
  return (
    <Layout headTitle={"Thank you"}>
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
        <div className="mt-6 md:mt-10 flex justify-center px-4 md:px-8">
          <h1 className="text-[1.125rem] md:text-[2rem] lg:text-[3rem] text-[#151E3A] md:max-w-[800px] lg:max-w-[1060px] text-center leading-[1.4] md:leading-[1.5] lg:leading-[55px] font-extrabold font-jakarta">
            Lär dig nya färdigheter och ta kontroll över din framtid med våra
            30+ onlineutbildningar!
          </h1>
        </div>
        <p className="text-[10px] md:text-base text-[#434C69] font-inter font-medium text-center mt-4 md:mt-6 lg:mt-8 max-w-[647px]">
          Från e-handel och marknadsföring till AI och ekonomiska investeringar
          - allt på ett ställe, inga förkunskaper krävs.
        </p>
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

      <section className="flex flex-col mt-[99px] justify-center items-center">
        <h2 className="font-jakarta font-bold leading-5 text-[1.25rem] md:text-[2.875rem]">
          Studentintervjuer
        </h2>
        <p className="text-[10px] md:text-base text-[#434C69] font-inter font-medium text-center mt-4 md:mt-6 lg:mt-8 max-w-[690px]">
          Lär känna några av våra medlemmar som omsatt miljontals kronor
          tillsammans i akademin.
        </p>

        {/* Testimonial Videos */}
        <div className="w-full md:max-w-[1300px] p-8 mx-auto px-2 mt-4 mb-12 flex flex-col gap-6">
          <div className="flex flex-col gap-6 justify-center border-2 border-red-500 w-full md:grid md:grid-cols-3 md:gap-6">
            {testimonialVideos.slice(0, 3).map((video: any, idx: number) => (
              <TestimonialVideo
                key={video.id}
                source={video.source}
                width={"100%"}
                height={video.height}
                id={video.id}
                className={
                  idx === 0
                    ? "w-full md:col-span-2 md:row-span-2 md:h-full md:aspect-video"
                    : "w-full md:h-full md:aspect-video"
                }
              />
            ))}
          </div>

          <div className="flex flex-col gap-6 justify-center w-full md:flex-col md:items-center">
            <div
              className="flex flex-col gap-6 justify-center w-full border-2 border-green-500
              md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6
              md:[grid-template-areas:'a_a''b_c'] md:auto-rows-fr"
            >
              {testimonialVideos.slice(3, 6).map((video: any, idx: number) => (
                <TestimonialVideo
                  key={video.id}
                  source={video.source}
                  width={video.width}
                  height={video.height}
                  id={video.id}
                  className={
                    "w-full " +
                    (idx === 0
                      ? "md:[grid-area:a]"
                      : idx === 1
                      ? "md:[grid-area:b]"
                      : "md:col-span-2 md:[grid-area:c]")
                  }
                />
              ))}
            </div>

            <div className="flex flex-col gap-6 items-center border-2 border-yellow-500 w-full md:mt-6 md:w-full">
              {testimonialVideos.slice(6, 8).map((video: any) => (
                <TestimonialVideo
                  key={video.id}
                  source={video.source}
                  width={video.width}
                  height={video.height}
                  id={video.id}
                  // className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-10 items-center bg-gradient-to-br from-[#225AEA] to-[#020103]">
        <h2 className="text-white font-inter text-[18px]">
          HÄR ÄR VAD DU FÅR...
        </h2>
        <h2 className="font-inter font-bold text-base md:text-[35px] mt-8 text-white">
          Vad finns i Checkified utbildningar?
        </h2>

        <div className="max-w-[297px] md:max-w-[900px] mt-[38px] px-10">
          <p className="font-inter text-[12px] md:text-[14px] lg:text-base text-white font-medium text-center">
            Checkified erbjuder 30+ praktiska onlinekurser, uppdelade i olika
            kategorier så att du enkelt hittar det du vill lära dig - oavsett om
            du är nybörjare eller vill ta nästa steg i din karriär. När du går
            med får du omedelbar tillgång till alla kurser och framtida
            uppdateringar - värde över 100 000 SEK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-auto max-w-[1230px] gap-10 p-10 justify-center items-center mt-10">
          <div className="flex flex-col  max-w-[318px] justify-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/thank-you/gauge1.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                E-handel & Dropshipping
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Lär dig starta och driva en framgångsrik e-butik - från idé till
              skalning.
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/thank-you/chart-line.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Marknadsföring & Sociala Medier
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Behärska TikTok, Meta Ads, e-postmarknadsföring, funnels, och
              content creation.
            </p>
          </div>
          <div className="flex flex-col max-w-[259px] justify-start">
            <div className="flex gap-2">
              <Image
                src="/images/thank-you/list-checks.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Ekonomi & Investeringar
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Få koll på privatekonomi, investeringar och hur du bygger en
              hållbar framtid.
            </p>
          </div>
          <div className="flex flex-col max-w-[276px] justify-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/thank-you/cursor-click.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">AI & Tech</h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffc7] text-start mt-3.5">
              Lär dig använda AI-verktyg som ChatGPT, Midjourney och mer för att
              jobba smartare.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:container bg-[#EDF5FE] py-10 justify-center items-center">
        <div className="flex flex-col container text-center items-center">
          <h2 className="font-jakarta font-bold text-[20px] md:text-[3rem] text-center">
            15 000 + studenter...
          </h2>
          <p className="font-inter font-medium text-xs md:text-base text-center text-[#37354ase] mb-3 max-w-[622px]">
            Vi har hjälp över 15 000+ studenter att förändra deras liv med våra
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
