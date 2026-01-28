import Image from "next/image"
export const MentorshipGuarantee = () => {
  return (
    <div className="w-full rounded-[20px] bg-[#FFFAF5] max-w-7xl py-[22px] lg:py-[28px] px-[22px] lg:px-[28px]">
      <div className="flex flex-col gap-2 md:gap-4 items-start align-top">
        <div className="flex gap-2 w-full">
          <Image
            src={"/images/mentorship/mentorship-guarantee.svg"}
            alt="guarantee Icon"
            width={22}
            height={26}
            className="w-[22px] h-[26px]"
          />
          <h2 className="font-bold text-[#DF7009] text-[14px] md:text-[18px] leading-tight mb-2 font-inter">
            En garanti som får ditt huvud att snurra
          </h2>
        </div>
        <p className="font-medium lg:ml-[30px] text-[#DF7009] lg:max-w-[968px] text-[13px] md:text-[15px] lg:text-[16px] font-inter">
          90 dagar. Så länge är genomsnittet av att se framgång. Vi är inte ute
          efter snabba pengar. Vi är ute efter framgångshistorier. Och vi vet
          att detta mentorskap skapar dem.
        </p>
      </div>
    </div>
  )
}
