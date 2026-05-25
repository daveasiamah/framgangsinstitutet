import Link from "next/link"
import { BadgeCheck, MapPin } from "lucide-react"

export interface HomePageCourseCardProps {
  /** Title shown in the blue header and the card body */
  title: string
  /** Short description text */
  description: string
  /** Credential label, e.g. "Diplom & certifikat" */
  credential?: string
  /** Format label, e.g. "Distans" */
  format?: string
  /** Link href for the LÄS MER button */
  href: string
}

export default function HomePageCourseCard({
  title,
  description,
  credential = "Diplom & certifikat",
  format = "Distans",
  href,
}: HomePageCourseCardProps) {
  return (
    <article className="w-full md:h-[424px] rounded-t-[18px] overflow-hidden flex flex-col">
      {/* Blue header */}
      <div className="relative h-[171px] shrink-0 overflow-hidden bg-[#2F5CE9] rounded-t-[18px]">
        <div className="flex h-full items-center justify-center px-5 md:px-6">
          <h3 className="w-full font-jakarta font-bold text-white text-[22px] md:text-[26px] leading-[1.4] text-center truncate">
            {title}
          </h3>
        </div>

        {/* Wave overlay */}
        <img
          src="/images/course-card-ripple.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full object-cover md:h-[84px]"
        />
      </div>

      {/* Gray body */}
      <div className="flex flex-col flex-1 bg-[#F8F8F8] p-4">
        <h4 className="font-jakarta font-bold text-[#1E1E1E] text-[20px] md:text-[18px] leading-[1.4] mb-3 truncate">
          {title}
        </h4>

        <div className="space-y-2 mb-4">
          <p className="flex items-center gap-2 font-inter text-[#2B2B2B] text-[14px] leading-[1.2]">
            <BadgeCheck className="w-[15px] h-[15px] shrink-0" />
            {credential}
          </p>
          <p className="flex items-center gap-2 font-inter text-[#2B2B2B] text-[14px] leading-[1.2]">
            <MapPin className="w-[15px] h-[15px] shrink-0" />
            {format}
          </p>
        </div>

        <p className="font-inter font-medium text-[#1E1E1E] text-[13px] md:text-[14px] leading-[1.4] line-clamp-3">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 mt-auto pt-[40px] font-jakarta font-bold text-[#1E1E1E] text-[14px] tracking-[0.02em] uppercase transition-colors hover:text-[#225AEA]"
        >
          LÄS MER
          <span
            aria-hidden="true"
            className="inline-block text-[22px] leading-none"
          >
            &gt;
          </span>
        </Link>
      </div>
    </article>
  )
}
