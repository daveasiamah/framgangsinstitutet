import Image from "next/image";
import ScrollReveal from "../transition/ScrollReveal";

const MentorshipHero = () => {
    return (
        <div className="mx-auto w-full max-w-4xl flex flex-col items-center ">
            <ScrollReveal className="flex justify-center mt-6">
                <Image
                    src="/prebuilt-store-icon.png"
                    className="w-[38px] h-[38px] md:w-[70px] md:h-[70px] "
                    width={70}
                    height={70}
                    alt="store-icon"
                />
            </ScrollReveal>
            <div className="relative w-full max-w-4xl mx-auto mt-6 md:mt-10 px-4 sm:px-6">
                <div className="w-full">
                    {/* Warning Badge */}
                    <div className="relative max-w-xs sm:max-w-sm bg-[#2050c7] rounded-full border-[0.5px] border-solid border-[#a1a1a1]  py-1.5 px-3 mx-auto sm:mb-8 ">
                        <p className="font-normal text-white text-xs sm:text-sm text-center tracking-[0] leading-relaxed">
                            <span className="font-semibold">Varning:</span>
                            <span className="font-medium">
                                {" "}Anmälan stänger snart
                            </span>
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h1 className="w-full font-jakarta font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight sm:leading-snug md:leading-[51px] mb-6 sm:mb-8">
                        Snabbspår till onlineinkomst med bara din telefon &amp;
                        AI
                    </h1>

                    {/* Description */}
                    <p className="w-full font-inter font-medium text-black text-base sm:text-lg text-center tracking-[0] leading-relaxed sm:leading-[25px] max-w-5xl mx-auto">
                        Alla framgångsrika e-handelsresor börjar med ett första
                        steg. Hos Checkified får du mentorskap inom e-handel som
                        hjälper dig att starta, växa och ta din
                        e-handelsverksamhet till nästa nivå. Våra erfarna
                        e-handelsmentorer ger dig personlig vägledning, tydliga
                        strategier och verktyg för att lyckas. Oavsett om du är
                        ny eller vill skala upp – vi visar vägen till en lönsam
                        e-handel.
                    </p>
                </div>
            </div>
            <div className="relative w-[154px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[43px] sm:h-[48px] md:h-[52px] lg:h-[56px] mt-5 ">
                <div className="w-full h-full">
                    <div className="relative w-full h-full bg-[#225aea] rounded-[9px] flex items-center justify-center py-4">
                        <div className="font-semibold font-jakarta text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-none whitespace-nowrap">
                            Ansök Här  &gt;
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src="/images/mentorship/mentorImage.png"
                className="w-full h-auto mt-8 sm:mt-10 md:mt-12 lg:mt-14"
                width={800}
                height={600}
                alt="Mentorship Hero Image"
            />
        </div>
    );
};

export default MentorshipHero;
