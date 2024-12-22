import { useStars } from "@/hooks/useStarRating"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

export function TopReviewBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const { topReview } = t.pricingData
  const getStars = useStars()

  return (
    <section
      className="flex flex-col items-start justify-start relative rounded-3xl p-10 mt-6 mb-10"
      style={{
        background: "#F9FAFE",
        border: "#9B9B9B40",
        boxShadow: "0px 0.5px 15px 0.5px #9B9B9B40",
      }}
    >
      <div
        className="px-4 py-[11px] text-center rounded-[10px]"
        style={{
          boxShadow: "0px 2px 5px 0px #235AE940",
          border: "#E1E2E5",
          backgroundColor: "#F9FAFE",
          position: "absolute",
          top: -17,
          right: "36px",
        }}
      >
        <p className="text-[10px] text-[#235AE9] font-semibold font-jakarta">
          {topReview.title}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="avatar bg-[#f2f6ff] rounded-full  w-[38px] h-[38px] flex items-center justify-center">
          <p className="avatar-text text-[#225AEA] text-base font-jakarta">
            {topReview.avatar}
          </p>
        </div>
      </div>
      <hr className="w-full border-spacing-x-0.5 border-[#888A9180] mt-[23px] mb-4" />

      <div className="flex flex-col [@media(min-width:412px)]:flex-row justify-between items-start [@media(min-width:412px)]:items-center mb-6 w-full">
        <div className="max-w-[176px] flex items-center">
          {getStars(topReview.stars)}
          <div className="flex items-center gap-1 ml-3">
            <img
              src="/images/pricing/verified-check.png"
              className="w-[12.5px] h-full mr-[0.25px]"
              alt="Verified"
            />
            <p className="text-[10px]">{topReview.verified}</p>
          </div>
        </div>

        <p className="text-[10px] [@media(min-width:412px)]:text-[12px] mt-2 [@media(min-width:412px)]:mt-0">
          {topReview.time}
        </p>
      </div>

      <p className="text-xs md:text-base">{topReview.description}</p>
    </section>
  )
}
