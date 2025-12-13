import React, { useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useModal } from "./ModalContext"
import Script from "next/script"

type Props = {
  title?: string
  description?: string
  buttonText?: string
  imageSrc?: string
  videoId?: string
  showTrustpilot?: boolean
}

export default function HeroSection({
  title = "Ta kontroll över ditt liv med Checkified",
  description = "Få mer frihet i vardagen genom att starta ditt eget e-handelsföretag. Följ över 1000 svenskar som redan upptäckt friheten med digitalt arbete. Ta det smarta steget, utbilda dig via framtidens skola och börja se resultat samtidigt som du lär dig.",
  buttonText = "Se intro guide här",
  showTrustpilot = true,
}: Props) {
  const { openContractForm } = useModal()
  return (
    <section className="relative bg-white py-12 px-4 bg-[url('/images/hero-mesh.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        {/* Trustpilot */}
        {showTrustpilot && (
          <div className="flex justify-center mb-4">
            <Image
              src="/icons/trustpilot-badge.svg"
              alt="Trustpilot"
              width={255}
              height={33}
              className="object-contain"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-[#151E3A] text-[32px] md:text-[48px] lg:text-[56px] font-bold font-jakarta text-center mb-6 leading-[36px] md:leading-[52px] lg:leading-[60px] max-w-[700px] mx-auto">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[#434C69] text-[11px] md:text-[14px] lg:text-[14px] font-inter font-medium text-center mb-8 leading-relaxed max-w-[733px] mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-12">
          <button
            onClick={() => openContractForm()}
            className="px-6 py-3 bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm inline-flex items-center gap-2"
          >
            {buttonText} <ArrowRight size={16} />
          </button>
        </div>

        {/* Video/Image Section */}
        <div className="relative max-w-[960px] mx-auto">
          <div className="relative rounded-[20px] overflow-hidden shadow-xl">
            <div
              id="vidalytics_embed_QrsjsMAYL8q2HZuP"
              style={{
                width: "100%",
                position: "relative",
                paddingTop: "56.25%",
              }}
              data-autoplay="true"
              data-muted="true"
            ></div>
            <Script
              id="vidalytics-embed-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}\
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){
        var vec=v[d][ve];t=new vec();
        t.config = t.config || {};
        t.config.autoplay = true;
        t.config.muted = true;
        t.run(a);
        
        // Try to autoplay after initialization
        setTimeout(function() {
            if (window.vidalytics_embed_QrsjsMAYL8q2HZuP && typeof window.vidalytics_embed_QrsjsMAYL8q2HZuP.play === 'function') {
                window.vidalytics_embed_QrsjsMAYL8q2HZuP.muted = true;
                window.vidalytics_embed_QrsjsMAYL8q2HZuP.play().catch(function(e) {
                    console.log('Autoplay prevented:', e);
                });
            }
        }, 1000);
    });});
})(window, document, 'Vidalytics', 'vidalytics_embed_QrsjsMAYL8q2HZuP', 'https://fast.vidalytics.com/embeds/P54EXqAT/QrsjsMAYL8q2HZuP/');
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
