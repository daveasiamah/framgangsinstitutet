import Image from "next/image"
export const MentorshipGuarantee = () => {
  return (
    <div className="w-full mt-14 mb-4 rounded-[20px] bg-[#FFFAF5] max-w-7xl py-[22px] lg:py-[28px] px-[22px] lg:px-[28px]">
      <div className="flex gap-2 md:gap-4 items-start align-top">
        <Image
          src={"/images/mentorship/mentorship-guarantee.svg"}
          alt="guarantee Icon"
          width={32}
          height={36}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[#DF7009] text-[12.8px] md:text-[18px] lg:text-2xl leading-tight mb-2 font-jakarta">
            En garanti som får ditt huvud att snurra
          </h2>
          <p className="font-medium max-w-[960px] text-[#DF7009] text-[12px] md:text-base leading-relaxed font-inter">
            90 dagar. Så länge är genomsnittet av att se framgång. Vi är inte
            ute efter snabba pengar. Vi är ute efter framgångshistorier. Och vi
            vet att detta mentorskap skapar dem.
          </p>
        </div>
      </div>
    </div>
  )
}
