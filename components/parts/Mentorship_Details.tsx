import { BsGlobe2, BsLaptop, BsLightningCharge } from "react-icons/bs"
import { HiGift } from "react-icons/hi"

const MentorshipDetails = () => {
  return (
    <div className="w-full max-w-[1107px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <div className="w-full">
        {/* Main title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-extrabold font-jakarta text-[#151e3a] text-xl sm:text-2xl lg:text-[28px] tracking-[0] leading-normal">
            Här är vad som finns inuti
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Direkt mentorskap */}
          <div className="relative bg-gradient-to-br  rounded-3xl p-6 sm:p-8 border border-gray shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2 mb-4">
                <HiGift className="w-6 h-6 text-[#235AE9] mr-3" />
                <h3 className="font-bold text-[#151e3a] text-sm sm:text-base font-jakarta">
                  Direkt mentorskap
                </h3>
              </div>
              <p className="font-medium text-[#151e3a] text-xs sm:text-sm leading-normal flex-grow font-inter">
                Låt vårt team av 7-siffriga coacher guida dig genom varje aspekt
                av att skala din e-handelsverksamhet.
              </p>
            </div>
          </div>

          {/* Card 2 - Klart-för-dig-butik */}
          <div className="relative bg-gradient-to-br  rounded-3xl p-6 sm:p-8 border border-gray shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2 mb-4">
                <BsLightningCharge className="w-6 h-6 text-[#235AE9] mr-3" />
                <h3 className="font-bold text-[#151e3a] text-sm sm:text-base font-jakarta">
                  Klart-för-dig-butik
                </h3>
              </div>
              <p className="font-medium text-[#151e3a] text-xs sm:text-sm leading-normal flex-grow font-inter">
                Vi skapar en färdig dropshipping butik med 5 vinnande produkter
                för att slippa den krångliga inlärningsprocessen.
              </p>
            </div>
          </div>

          {/* Card 3 - Fullständig E-handelskurs */}
          <div className="relative bg-gradient-to-br  rounded-3xl p-6 sm:p-8 border border-gray shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2 mb-4">
                <BsGlobe2 className="w-6 h-6 text-[#235AE9] mr-3" />
                <h3 className="font-bold text-[#151e3a] text-sm sm:text-base font-jakarta">
                  Fullständig E-handelskurs
                </h3>
              </div>
              <p className="font-medium text-[#151e3a] text-xs sm:text-sm leading-normal flex-grow font-inter">
                Med "fuskkoder" får du tillgång till en online utbildning inom
                e-handel som du inte hittar någon annanstans.
              </p>
            </div>
          </div>

          {/* Card 4 - Dagligt ansvar */}
          <div className="relative bg-gradient-to-br rounded-3xl p-6 sm:p-8 border border-gray shadow-sm">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2 mb-4">
                <BsLaptop className="w-6 h-6 text-[#235AE9] mr-3" />
                <h3 className="font-bold text-[#151e3a] text-sm sm:text-base font-jakarta">
                  Dagligt ansvar
                </h3>
              </div>
              <p className="font-medium text-[#151e3a] text-xs sm:text-sm leading-normal flex-grow font-inter">
                Aktiv och ständig support för att hjälpa dig växa din e-handel
                till en nivå som kan förändra ditt liv (och mer).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorshipDetails
