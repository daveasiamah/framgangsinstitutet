import MentorshipButton from "./Mentorship_Button"

const MentorshipSubEhandler = () => {
  return (
    <div className="relative w-full max-w-[572px] md:max-w-[652px] lg:max-w-[872px] mx-auto px-0 mt-[34px] md:mt-[43px] lg:mt-[67px] mb-4">
      <div className="w-full">
        <div className="flex flex-col">
          {/* Header text */}
          <div className="w-full max-w-[200px] lg:mx-0 text-center md:text-start mb-2 mx-auto">
            <p className="font-semibold text-[#9B9B9B] font-inter text-xs sm:text-sm tracking-[0] leading-[23px]">
              Med Checkified Mentorskap™
            </p>
          </div>

          {/* Main headline */}
          <h2 className="max-w-[386px] md:max-w-[608px] text-xl md:text-2xl font-jakarta text-center md:text-start font-extrabold">
            <span className="text-black font-jakarta font-extrabold">
              Det är som att ha
            </span>{" "}
            <span className="text-[#1e5aea] font-jakarta font-extrabold">
              personlig tränare för E-handel{", "}
            </span>
            <span className="text-black font-jakarta font-extrabold">
              utan den höga månadsavgiften.
            </span>
          </h2>
          <p className="py-1 leading-[32px] text-[16px]"></p>
          {/* Description */}
          <div className="w-full max-w-[772px] font-inter">
            <p className="font-medium font-jakarta text-[#434C69] text-[12px] md:text-base tracking-[0] leading-normal">
              Till skillnad från ditt typiska "coachingprogram", community eller
              föråldrad kurs...
            </p>
            <p className="py-1 leading-[16px] text-[16px]"></p>
            <p className="font-medium font-jakarta text-[#434C69]  text-[12px] md:text-base tracking-[0] leading-normal">
              Checkified Mentorskap™ är det enda stället som erbjuder utbildning
              i världsklass med praktiskt stöd och vägledning till ett
              användarvänligt e-handelsystem.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-start">
        <MentorshipButton
          className="mt-7 text-sm"
          text="Ansök Här"
          size="small"
          arrow={true}
        />
      </div>
    </div>
  )
}

export default MentorshipSubEhandler
