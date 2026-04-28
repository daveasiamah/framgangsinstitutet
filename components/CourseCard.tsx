import { BadgeCheck, MapPin } from "lucide-react"
import Link from "next/link"

{
  /* Course Cards Section  */
}
;<section className="w-full max-w-[1336px] mx-auto px-4 md:px-0 mb-8 md:mb-12 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <article className="w-full md:w-[396px] md:h-[424px] rounded-t-[18px] overflow-hidden">
      <div className="relative h-[171px] bg-[#2F5CE9] border border-[#2dc2ed] rounded-t-[18px]">
        <h3 className="font-jakarta font-bold text-white text-[24px] md:text-[30px] leading-[1.08] px-5 md:px-8 pt-12 md:pt-14 whitespace-nowrap">
          Digital Marknadsföring
        </h3>

        <svg
          viewBox="0 0 596 99"
          className="absolute -bottom-[9px] left-0 w-full h-[84px]"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0 67C28 45 57 77 86 58C115 39 143 67 172 68C201 69 230 42 259 42C287 42 316 66 345 66C374 66 402 53 431 60C460 68 488 71 517 56C546 42 567 20 596 22V99H0V67Z"
            fill="#1F45B8"
          />
        </svg>
      </div>

      <div className="flex flex-col h-[calc(100%-171px)] bg-[#F8F8F8] p-4">
        <h4 className="font-jakarta font-bold text-[#1E1E1E] text-[26px] md:text-[22px] leading-[1.15] mb-3">
          Digital Marknadsföring
        </h4>

        <div className="space-y-2 mb-4">
          <p className="flex items-center gap-2 font-inter text-[#2B2B2B] text-[18px] md:text-[14px] leading-[1.2]">
            <BadgeCheck className="w-5 h-5 md:w-[15px] md:h-[15px]" />
            Diplom & certifikat
          </p>
          <p className="flex items-center gap-2 font-inter text-[#2B2B2B] text-[18px] md:text-[14px] leading-[1.2]">
            <MapPin className="w-5 h-5 md:w-[15px] md:h-[15px]" />
            Distans
          </p>
        </div>

        <p className="font-inter font-medium text-[#1E1E1E] text-[18px] md:text-[14px] leading-[1.35] md:leading-[1.4]">
          En kurs för dig som vill öka din förståelse för hur handel med aktier,
          andra värdepapper och finansiella instrument behandlas.
        </p>

        <Link
          href="/utbildningar"
          className="inline-flex items-center gap-2 mt-[40px] font-jakarta font-bold text-[#1E1E1E] text-[18px] md:text-[14px] tracking-[0.02em] uppercase transition-colors hover:text-[#225AEA]"
        >
          LÄS MER
          <span
            aria-hidden="true"
            className="inline-block text-[26px] md:text-[22px] leading-none"
          >
            &gt;
          </span>
        </Link>
      </div>
    </article>
  </div>
</section>
