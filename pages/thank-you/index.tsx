import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { testimonials } from "../../components/blocks/thank-you/testimonials"
import { ThankYouVideoBanner } from "../../components/blocks/thank-you/thank-you-video-banner"
import { listItems } from "../../components/blocks/thank-you/listItems"
import { ThankYouButton } from "../../components/blocks/thank-you/thank-you-button"
// import ThankyouVidGrid from "@/components/parts/Thankyou_VidGrid"

export default function ThankYou() {
  return (
    <Layout headTitle={"Thank you"}>
      <div
        className="flex flex-col items-center w-full justify-center"
        style={{
          backgroundImage: `url('/images/bg-lines.png')`,
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
          <h1 className="text-[1.125rem] md:text-[1.4rem] lg:text-[2.5rem] text-[#151E3A] max-w-[332px] md:max-w-[1172px] text-center leading-[1.4] md:leading-[1.5] lg:leading-[55px] font-extrabold font-jakarta">
            Lär dig hur du kan bygga ett framgångsrikt e-handelsföretag och ta
            kontroll över ditt liv.
          </h1>
        </div>
        <p className="text-[14px] md:text-[13px] lg:text-base text-[#434C69] font-inter font-medium text-center mt-4 md:mt-6 lg:mt-8 max-w-[347px] md:max-w-[642px]">
          Se hur vi har hjälpt över 1000 svenskar att förändra sina liv – nu är
          det din tur att lyckas med e-handel!
        </p>
        <ThankYouVideoBanner />
        <div className="md:mb-10">
          <ThankYouButton />
        </div>
      </div>

      <section className="flex flex-col justify-center items-center md:mt-[33px] mt-[23px] mb-[14px] md:mb-[52px]">
        <div className="mt-8 md:mt-8">
          <div className="flex items-center justify-center bg-[#225AEA] px-3 py-1 rounded-[74px]">
            <Image
              src="/images/thank-you/medals.png"
              alt="medals"
              width={52}
              height={26}
              className="object-cover self-center"
            />
            <Image
              src="/images/thank-you/student-stars.png"
              alt="student-stars"
              width={152}
              height={56}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[347px] md:max-w-[700px]">
          <p className="text-[14px] md:text-[14px] lg:text-base text-[#434C69] font-inter text-center mt-2 md:mt-2 lg:mt-4 max-w-[347px] md:max-w-[600px] lg:max-w-[700px]">
            Över 1000+ nöjda studenter som har omsatt miljontals kronor
            tillsammans i akademin.
          </p>
        </div>
        <h2 className="font-jakarta font-bold leading-5 text-[1.25rem] md:text-[2.875rem] mt-10 md:mt-16">
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

      {/* <ThankyouVidGrid /> */}

      <section className="flex flex-col py-10 items-center bg-gradient-to-br from-[#225AEA] to-[#020103] mt-8">
        <h2 className="text-white font-inter font-semibold text-[14px] md:[text-[18px]">
          HÄR ÄR VAD DU FÅR...
        </h2>
        <h2 className="font-inter font-bold text-center text-[16px] md:text-[32px] lg:text-[45px] mt-8 text-white">
          Vad finns i framgångsinstitutet Mentorskap?
        </h2>

        <div className="md:max-w-[800px] mt-[38px] px-4">
          <p className="font-inter text-[12px] md:text-[14px] lg:text-[18px] text-center text-white">
            Få allt du behöver för att lyckas med e-handel – en färdig
            dropshippingbutik, onlinekurs och 10 veckors mentorskap med Dominic.
            Perfekt för både nybörjare och dig som vill växa. Allt ingår,
            inklusive framtida uppdateringar (värde över 100 000 kr).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-auto max-w-[1230px] gap-10 p-10 justify-center items-center mt-2">
          <div className="flex flex-col  max-w-[318px] justify-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/thank-you/gauge1.png"
                width={16}
                height={16}
                alt="icon"
              />
              <h4 className="text-white font-inter font-bold">
                Mentorskap inom E-handel
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffbb] text-start mt-3.5 max-w-[332px]">
              Få veckovis stöd av en e-handelsmentor - från idé till färdig
              butik.
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
                Marknadsföring på TikTok & Facebook
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffbb] text-start mt-3.5 max-w-[332px]">
              Lär dig skapa kampanjer som konverterar genom smart annonsering
              och content.
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
                Färdig Dropshippingbutik
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffbb] text-start mt-3.5 max-w-[332px]">
              Du får en komplett, professionellt designad butik som är redo att
              lanseras direkt.
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
              <h4 className="text-white font-inter font-bold">
                AI & Hemliga Verktyg
              </h4>
            </div>
            <p className="font-inter text-[12px] md:text-[14px] text-[#ffffffbb] text-start mt-3.5 max-w-[332px]">
              Använd verktyg som ChatGPT och Midjourney för att spara tid och
              bli effektiv.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:container bg-[#EDF5FE] py-10 justify-center items-center">
        <div className="flex flex-col container text-center items-center">
          <h2 className="font-jakarta font-bold text-[20px] md:text-[3rem] text-center">
            framgångsinstitutet förändrar liv...
          </h2>
          <p className="font-inter font-medium text-xs md:text-base text-center text-[#242323] mb-3 max-w-[622px]">
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
