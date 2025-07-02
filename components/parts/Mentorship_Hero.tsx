import Image from "next/image"
import ScrollReveal from "../transition/ScrollReveal"

const MentorshipHero = () => {
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

          {/* Description */}
          <p
            className="w-full font-inter font-medium text-black text-[10px] md:text-[14px] lg:text-[18px] text-center
         leading-relaxed mb-4 md:max-w-[844px] mx-auto"
          >
            Alla framgångsrika e-handelsresor börjar med ett första steg. Hos
            Checkified får du mentorskap inom e-handel som hjälper dig att
            starta, växa och ta din e-handelsverksamhet till nästa nivå. Våra
            erfarna e-handelsmentorer ger dig personlig vägledning, tydliga
            strategier och verktyg för att lyckas. Oavsett om du är ny eller
            vill skala upp – vi visar vägen till en lönsam e-handel.
          </p>
        </div>
      </div>
      <div className="relative w-[154px] sm:w-[180px] md:w-[154px] lg:w-[154px] h-[43px] sm:h-[48px] md:h-[52px] lg:h-[56px] mt-5 ">
        <div className="w-full h-full">
          <div className="relative w-full h-full bg-[#225aea] rounded-[9px] flex items-center justify-center py-4">
            <div className="font-semibold font-jakarta text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-none whitespace-nowrap cursor-pointer">
              Ansök Här &gt;
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/mentorship/hero-mentorship.svg"
        className="w-full h-auto mt-3 "
        width={800}
        height={600}
        alt="Mentorship Hero Image"
      />
    </div>
  )
}

export default MentorshipHero
