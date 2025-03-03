import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"

const listItems = [
  {
    id: 1,
    icon: "/images/thank-you/green-checkmark.svg",
    text: "Gå från 0 till 100k i vinst/månad utan erfarenhet.",
  },
  {
    id: 2,
    icon: "/images/thank-you/green-checkmark.svg",
    text: "Få ekonomisk och geografisk frihet, arbeta när och var du vill.",
  },
  {
    id: 3,
    icon: "/images/thank-you/green-checkmark.svg",
    text: "Bli din egen chef och bygg ditt e-handelsföretag från A till Ö.",
  },
  {
    id: 4,
    icon: "/images/thank-you/green-checkmark.svg",
    text: "Omsätt 100.000:- på 12 månader eller pengarna tillbaka* – Allmänna villkor gäller.",
  },
]

const testimonials = [
  {
    id: 1,
    text: "Jag skapade och lanserade min kurs snabbt med hjälp av Vendum Masterclass och såg snabbt resultat!",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Anna L",
    role: "Checkified student",
  },
  {
    id: 2,
    text: "Checkified hjälpte mig att bygga en framgångsrik kurs och en växande community.",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Erik S",
    role: "Checkified student",
  },
  {
    id: 3,
    text: "Min kurs är nu online och jag ser ökad försäljning, tack vare Checkified Akademi.",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Douglas K",
    role: "Checkified student",
  },
  {
    id: 4,
    text: "Jag hittade min nisch och lärde mig allt för att bygga och sälja min kurs!",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Linda W",
    role: "Checkified student",
  },
  {
    id: 5,
    text: "Tydlig, praktisk och effektiv utbildning. Min kurs är nu live och säljer bra!",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Jonas T",
    role: "Checkified student",
  },
  {
    id: 6,
    text: "Jag var skeptisk i början, men kursen gav mig all kunskap jag behövde för att starta mitt eget företag.",
    avatar: "/images/thank-you/avatar-4.png",
    name: "Sara D",
    role: "Checkified student",
  },
]

export default function ThankYou() {
  return (
    <Layout headTitle={"Thank you"}>
      <div className="flex flex-col justify-center items-center gap-2">
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
            className="object-contain"
          />
        </div>

        <div className="mt-10">
          <h1 className="font-jakarta text-center leading-11 text-[#151E3A] font-extrabold text-[3rem]">
            Lär dig bygga ett framgångsrikt e-handelsföretag
          </h1>
          <h1 className="font-jakarta text-center leading-11 text-[#151E3A] font-extrabold text-[3rem] mt-[-20px]">
            från 0 till 100k+ i månaden, utan tidigare erfarenhet!
          </h1>
        </div>

        <div className="flex items-center justify-center mt-[52px] relative">
          <Image
            src="/images/thank-you/video-banner.png"
            alt="banner-image"
            width={1020}
            height={590}
            className="relative"
          />
          <Image
            src="/images/thank-you/video-play-button.png"
            alt="play-button"
            width={143}
            height={143}
            className="absolute inset-0 m-auto"
          />
        </div>

        <button className="bg-[#225AEA] font-extrabold font-jakarta mt-[17px] flex mx-auto justify-center text-white text-[8px] md:text-[1.5rem] rounded-[20px] min-w-[115px] px-[48px] py-[21px]">
          Skicka din ansökan idag!
        </button>
      </div>

      <section className="flex flex-col justify-center items-center mt-[52px]">
        <h2 className="font-jakarta font-bold leading-10 text-[2.875rem]">
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

      <section className="flex flex-col py-10 my-12 items-center bg-gradient-to-br from-[#225AEA] to-[#020103]">
        <h2 className="text-white font-inter text-[18px]">
          HÄR ÄR VAD DU FÅR...
        </h2>
        <h2 className="font-inter font-bold text-[45px] text-transparent from-white to-[#225AEA] bg-clip-text [background-image:linear-gradient(45deg,#FFFFFF,#225AEA)]">
          Vad finns i Checkified
        </h2>

        <div className="max-w-[697px] mt-[38px] border-2 border-red-500">
          <p className="font-inter text-[16.5px] text-white font-medium text-center">
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

      <section className="flex flex-col bg-[#EDF5FE] border-2 border-red-500 py-10 justify-center items-center">
        <h2 className="font-jakarta font-bold text-[3rem] text-center">
          1000 + studenter...
        </h2>
        <h4 className="font-inter font-medium text-base text-center text-[#37354ase] max-w-[622px]">
          Vi har hjälp över 1000+ studenter att förändra deras liv med våra
          utbildningar och den siffran växer dagligen. Vill du förändra ditt liv
          till det bästa så ska du se vad våra studenter har uppnått för
          resultat.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1030px] items-center w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col bg-white max-w-[325px] shadow-lg rounded-2xl p-10 mt-6"
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
