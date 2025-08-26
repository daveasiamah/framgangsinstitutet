import MentorshipButton from "./Mentorship_Button"

const MentorshipSubEhandler = () => {
  return (
    <div className="relative w-full max-w-[572px] md:max-w-[652px] lg:max-w-[872px] mx-auto px-0 mt-10 mb-10">
      <div className="w-full">
        <div className="space-y-4 sm:space-y-6">
          {/* Header text */}
          <div className="w-full max-w-[200px] lg:mx-0 text-center mx-auto">
            <p className="font-semibold text-[#9b9b9b] font-inter text-xs sm:text-sm tracking-[0] leading-normal">
              Med Checkified Mentorskap™
            </p>
          </div>

          {/* Main headline */}
          <div className="w-full max-w-[390px] md:max-w-[598px] lg:max-w-[598px] font-jakarta">
            <h2 className="font-bold sm:text-xl md:text-2xl font-jakarta">
              <span className="text-black font-jakarta">Det är som att ha</span>
              <span className="text-[#1e5aea] font-jakarta">
                {" "}
                personlig tränare för E-handel{" "}
              </span>
              <span className="text-black font-jakarta">
                utan den höga månadsavgiften.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[772px] mt-6 sm:mt-8 font-inter">
            <p className="font-medium font-jakarta text-[#9b9b9b] text-base md:text-base tracking-[0] leading-normal">
              Till skillnad från ditt typiska "coachingprogram", community eller
              föråldrad kurs...
            </p>
            <br />
            <p className="font-medium font-jakarta text-[#9b9b9b] text-base md:text-base tracking-[0] leading-normal">
              Checkified Mentorskap™ är det enda stället som erbjuder utbildning
              i världsklass med praktiskt stöd och vägledning till ett
              användarvänligt e-handelsystem.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-left">
        <MentorshipButton
          className="mt-7 text-sm"
          text="Börja Din Resa Idag"
          size="small"
        />
      </div>
    </div>
  )
}

export default MentorshipSubEhandler
