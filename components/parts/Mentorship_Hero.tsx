import Image from "next/image"
import ScrollReveal from "../transition/ScrollReveal"
import { useEffect, useRef } from "react"

type MentorshipHeroProps = { onOpenModal?: () => void }

const MentorshipHero = ({ onOpenModal }: MentorshipHeroProps) => {
  const vidalyticsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Remove any existing script to avoid duplicates
    const existing = document.getElementById("vidalytics-embed-script")
    if (existing) existing.remove()
    // Create script
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
      })(window, document, 'Vidalytics', 'vidalytics_embed_QrsjsMAYL8q2HZuP', 'https://fast.vidalytics.com/embeds/P54EXqAT/QrsjsMAYL8q2HZuP/');
    `
    if (vidalyticsRef.current) {
      vidalyticsRef.current.appendChild(script)
    }
  }, [vidalyticsRef])

  return (
    <div className="mx-auto w-full max-w-4xl flex flex-col items-center h-auto">
      <ScrollReveal className="flex justify-center mt-6">
        <Image
          src="/prebuilt-store-icon.png"
          className="w-[38px] h-[38px] md:w-[70px] md:h-[70px]"
          width={70}
          height={70}
          alt="store-icon"
        />
      </ScrollReveal>
      <div className="relative w-full max-w-4xl mx-auto mt-6 md:mt-10 px-0">
        <div className="w-full">
          {/* Warning Badge */}
          <div className="relative max-w-[230px] sm:max-w-[265px] bg-[#2050c7] rounded-full border-[0.5px] border-solid border-[#a1a1a1]  py-1.5 px-3 mx-auto mb-4">
            <p className="font-normal font-inter text-white text-xs sm:text-sm text-center tracking-[0] leading-relaxed">
              <span className="font-semibold">Varning:</span>
              <span className="font-medium"> Anmälan stänger snart</span>
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="relative w-full max-w-[320px] md:max-w-[600px] lg:max-w-[749px] font-jakarta font-extrabold text-black 
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 sm:mb-6 lg:mb-4 mx-auto px-4 sm:px-6 lg:px-0 leading-tight sm:leading-snug lg:leading-normal "
          >
            Snabbspår till onlineinkomst med bara din telefon &amp; AI
          </h1>
          <p
            className="w-full font-inter font-medium text-black text-[10px] md:text-[14px] lg:text-[18px] text-center
         leading-relaxed mb-4 md:max-w-[844px] mx-auto"
          >
            Alla framgångsrika e-handelsresor börjar med ett första steg. Hos
            Checkified får du mentorskap inom e-handel som hjälper dig att
            starta, växa och ta din e-handelsverksamhet till nästa nivå. Våra
            erfarna e-handelsmentorer ger dig personlig vägledning, tydliga
            strategier och verktyg för att lyckas. Oavsett om du är ny eller
            vill skala upp - vi visar vägen till en lönsam e-handel.
          </p>
        </div>
      </div>
      <div className="relative mt-5 px-8">
        <button
          type="button"
          onClick={onOpenModal}
          className="relative w-full h-full bg-[#225aea] font-jakarta rounded-[9px] text-white flex items-center justify-center py-2 px-10"
        >
          Ansök Här{" "}
          <span className="ml-2 text-lg font-jakarta font bold text-white">
            {">"}
          </span>
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
