import Image from "next/image"
import ScrollReveal from "../transition/ScrollReveal"
import { useEffect, useRef } from "react"
import Link from "next/link"

interface MentorshipHeroProps {
  onCtaClick?: () => void
}

import MentorshipButton from "./Mentorship_Button"
import { ArrowRightIcon } from "lucide-react"

const MentorshipHero = ({ onCtaClick }: MentorshipHeroProps) => {
  const vidalyticsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existing = document.getElementById("vidalytics-embed-script")
    if (existing) existing.remove()
    const script = document.createElement("script")
    script.id = "vidalytics-embed-script"
    script.type = "text/javascript"
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
          y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
          if (!vsl){vsl=function(u,cb){
              if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
              if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
              i.getElementsByTagName("head")[0].appendChild(s);
          };}
          vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_QrsjsMAYL8q2HZuP', 'https://preview.vidalytics.com/vid/bBDswucyILsvdYDQ/');
    `
    if (vidalyticsRef.current) {
      vidalyticsRef.current.appendChild(script)
    }
  }, [vidalyticsRef])

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col items-center h-auto">
      <ScrollReveal className="flex justify-center mt-6">
        <img
          src="/icons/mentorship/checkified-icon-top.png"
          className="w-[33px] h-[33px] md:w-[42px] md:h-[42px]"
          // width={}
          // height={70}
          alt="store-icon"
        />
      </ScrollReveal>
      <div className="relative w-full max-w-4xl mx-auto mt-[13px] px-0">
        <div className="w-full">
          {/* Warning Badge */}
          <div className="relative max-w-[230px] sm:max-w-[265px] bg-[#2050c7] rounded-full border-[0.5px] border-solid border-[#a1a1a1]  py-1.5 px-3 mx-auto mb-[14px] md:mb-[11px]">
            <p className="font-normal font-inter text-white text-xs sm:text-sm text-center tracking-[0] leading-relaxed">
              <span className="font-semibold">Varning:</span>
              <span className="font-medium"> Anmälan stänger snart</span>
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="w-full font-jakarta font-bold text-[#000000] 
          text-[22px] md:text-[32px] lg:text-[48px] text-center max-w-[521px] md:max-w-[510px] lg:max-w-[749px] mx-auto leading-[26px] md:leading-[36px] lg:leading-[46px] mb-2"
          >
            Snabbspår till onlineinkomst med bara din telefon & AI
          </h1>
          <p
            className="w-full font-inter font-medium text-[#000000] text-[15px] md:text-[16px] lg:text-[20px] text-center
         leading:[15px] md:leading-[20px] mb-[7px] md:mb-[14px] lg:mb-[20px] md:max-w-[521px] lg:max-w-[843px] mx-auto"
          >
            Alla framgångsrika e-handelsresor börjar med ett första steg. Hos
            Checkified får du mentorskap inom e-handel som hjälper dig att
            starta, växa och ta din e-handelsverksamhet till nästa nivå.
          </p>
        </div>
      </div>

      <div className="relative px-8">
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white w-[125px] h-[25px] md:w-[141px] md:h-[41px] lg:w-[154px] lg:h-[43px] font-semibold rounded-[9px] text-xs md:text-sm lg:text-base">
          <p className="font-jakarta font-semibold">Ansök Här </p>
          <span className="ml-1"></span>
          <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
      <div
        style={{
          padding: 18,
          borderRadius: 16,
          background: "#EDF5FE",
          boxSizing: "border-box",
          maxWidth: 800,
          marginTop: 20,
        }}
        className="w-full h-auto mt-3"
      >
        <div
          ref={vidalyticsRef}
          style={{ borderRadius: 16, overflow: "hidden" }}
        >
          <div
            id="vidalytics_embed_QrsjsMAYL8q2HZuP"
            style={{
              width: "100%",
              position: "relative",
              paddingTop: "56.25%",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default MentorshipHero
