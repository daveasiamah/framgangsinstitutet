import React from "react"
import Layout from "@/components/Layout"
import { ArrowRight, ArrowRightIcon } from "lucide-react"
import { useModal } from "@/components/ModalContext"
import Script from "next/script"
import TestimonialsSection from "@/components/TestimonialsSection"
import TrustPilotReviews from "@/components/parts/TrustPilotReviews"

function VSL() {
  const { openContractForm } = useModal()

  return (
    <Layout headTitle="VSL - Video Sales Letter" isFullWidth={true}>
      <section className="relative bg-white py-8 px-4 pt-[36px] md:pt-[28px] flex flex-col items-center">
        <div className="max-w-7xl mx-auto">
          {/* Trustpilot */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-4 max-w-[833px] mx-auto px-4">
            <p className="text-[#434C69] text-[12px] md:text-[14px] font-inter font-medium text-center">
              Våra kunder säger Utmärkt
            </p>
            <img
              src="/images/home/trustpilot-5stars.png"
              alt="Trustpilot"
              width={127}
              height={24}
              className="object-contain h-[20px] w-[105px] md:h-[16px] md:w-[84px]"
            />
            <p className="text-[#434C69] text-[12px] md:text-[14px] font-inter font-medium text-center">
              4.5 av 5 baserat på flera omdömen
            </p>
            <img
              src="/icons/home/trustpilot-with-star.png"
              alt="Trustpilot with star"
              width={170}
              height={24}
              className="object-contain h-[20px] w-[80px] md:h-[16px] md:w-[64px]"
            />
          </div>

          {/* Title */}
          <h1 className="text-[#151E3A] text-[17px] md:text-[30px] lg:text-[40px] font-bold font-jakarta text-center mb-6 leading-[28px] md:leading-[38px] lg:leading-[46px] max-w-[343px] md:max-w-[681px] lg:max-w-[933px] mx-auto">
            Så bygger vanliga svenskar lönsam e-handel på 22 dagar - med ett
            system bakom över 300 miljoner kr i omsättning
          </h1>

          {/* Video/Image Section */}
          <div className="relative max-w-[960px] mt-[21px] mx-auto">
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
        {/* Typeform Embed */}
        <div
          data-tf-live="01KFTQXD3D2JN1J1D775SYGA4S"
          data-tf-opacity="100"
          data-tf-hide-headers
          data-tf-hide-footer
          data-tf-medium="snippet"
          className="mt-10 mb-4 w-full max-w-[960px] mx-auto"
          style={{ minHeight: "500px", height: "100%" }}
        ></div>
        <Script
          src="//embed.typeform.com/next/embed.js"
          strategy="afterInteractive"
        />

        <div className="flex justify-center">
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
        </div>

        <TestimonialsSection />
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
        </div>
      </section>
    </Layout>
  )
}

export default VSL
