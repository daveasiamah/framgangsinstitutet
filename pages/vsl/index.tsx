import React from "react"
import Layout from "@/components/Layout"
import { ArrowRightIcon } from "lucide-react"
import { useModal } from "@/components/ModalContext"
import Script from "next/script"
import Footer from "@/components/parts/Footer"

function VSL() {
  const { openContractForm } = useModal()

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-8 px-4 pt-[36px] md:pt-[108px] flex flex-col items-center bg-gradient-to-b from-[#225AEA] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto rounded-3xl w-full">
          <div className="rounded-t-3xl bg-white px-4 md:px-[57px] pt-[28px] pb-8">
            <div className="flex justify-center items-center mb-3 md:mb-6">
              <img
                src="/images/home/logo-main.png"
                alt="Checkified Logo"
                width={200}
                height={50}
                className="object-contain h-[60px] w-auto md:h-[85px]"
              />
            </div>
            <div className="flex justify-center gap-[10px] md:gap-[20px] items-center mb-3 md:mb-6">
              <p className="font-jakarta text-[#000000] text-xs md:text-sm lg:text-xl font-medium">
                Utmärkt
              </p>
              <img
                src="/images/home/trustpilot-5stars.png"
                alt="Trustpilot"
                width={127}
                height={24}
                className="object-contain h-[44px] w-[105px] md:h-[24px] md:w-[124px]"
              />
              <img
                src="/icons/home/trustpilot-with-star.png"
                alt="Trustpilot with star"
                width={170}
                height={24}
                className="object-contain h-[24px] w-[100px] md:h-[28px] md:w-[100px]"
              />
            </div>
            {/* Title */}
            <h1 className="mt-3 md:mt-6 text-[20px] md:text-[30px] lg:text-[40px] font-bold font-jakarta text-center mb-6 leading-[28px] md:leading-[38px] lg:leading-[46px] max-w-[343px] md:max-w-[681px] lg:max-w-[933px] mx-auto">
              Så bygger vanliga svenskar lönsam e-handel på{" "}
              <span className="font-jakarta font-bold text-[#225AEA]">
                22 dagar
              </span>{" "}
              - med ett system bakom{" "}
              <span className="font-jakarta font-bold text-[#225AEA]">
                över 300
              </span>{" "}
              miljoner kr i omsättning
            </h1>

            <p className="text-center text-[#000000] text-sm md:text-[20px] font-inter font-regular md:font-medium max-w-[843px] mx-auto mb-6 px-2 leading-[21px] md:leading-[30px]">
              Checkified Mentorskap är en av Sveriges främsta
              e-handelsutbildningar och visar steg för steg hur du kan starta
              och växa en lönsam webbutik vid sidan av jobb eller studier, även
              om du saknar tidigare erfarenhet.
            </p>

            {/* Video/Image Section */}
            <div className="relative w-full md:max-w-[960px] mt-[21px] mx-auto">
              <div className="relative rounded-[20px] overflow-hidden shadow-md">
                <div
                  id="vidalytics_embed_IHhXMFlDYTPRnTcQ"
                  style={{
                    width: "100%",
                    position: "relative",
                    paddingTop: "56.25%",
                  }}
                ></div>
              </div>
            </div>
            <Script
              id="vidalytics-embed-script-vsl"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_IHhXMFlDYTPRnTcQ', 'https://fast.vidalytics.com/embeds/P54EXqAT/IHhXMFlDYTPRnTcQ/');

              `,
              }}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-white w-full py-2 md:py-3 px-4 flex flex-col items-center">
        {/* Typeform Embed */}
        <h2 className="font-jakarta font-bold text-[22px] leading-[24px] text-[#000000] text-center max-w-[343px] md:text-[32px] md:max-w-[522px] md:leading-[40px] lg:text-[42px] lg:max-w-[961px] mb-4">
          Ansök nedan till <br />
          Checkified Mentorskap nu
        </h2>
        <p className="font-inter font-regular text-center text-[#000000] text-[16px] max-w-[317px] md:max-w-[651px] lg:max-w-[843px] mx-auto mb-4 leading-[22px]">
          Lär dig vår beprövade metod som har hjälpt tusentals svenskar att
          skapa mer frihet och kontroll i vardagen.
        </p>
        <div
          data-tf-live="01KFTQXD3D2JN1J1D775SYGA4S"
          className="mt-10 mb-4 w-full max-w-[960px] mx-auto"
        ></div>
        <Script
          src="//embed.typeform.com/next/embed.js"
          strategy="afterInteractive"
        />

        {/* <div className="flex justify-center">
          <button
            type="button"
            onClick={() => openContractForm()}
            className="px-4 py-3 md:px-5 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner flex items-center justify-center gap-1"
          >
            <span className="font-jakarta font-bold text-xs md:text-sm">
              Slutför din ansökan här!
            </span>
            <ArrowRightIcon className="w-[14px] h-[14px]" color="white" />
          </button>
        </div> */}

        {/* <TestimonialsSection />
        <TrustPilotReviews />
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => openContractForm()}
            className="px-4 py-3 md:px-5 md:py-3 bg-[#225AEA] text-white hover:bg-[#1e52d1] active:bg-[#1a47b8] rounded-[7px] shadow-inner flex items-center justify-center gap-1"
          >
            <span className="font-jakarta font-bold text-xs md:text-sm">
              Slutför din ansökan här!
            </span>
            <ArrowRightIcon className="w-[14px] h-[14px]" color="white" />
          </button>
        </div> */}
      </section>
      <Footer/>
    </div>
  )
}

export default VSL
