import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import Title from "@/components/parts/Title"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./ReviewsBlock.module.scss"

export default function ReviewsBlock() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <section className="relative flex flex-col items-center py-5 lg:py-10 px-4">
      <img
        className="lg:w-[46px] w-[46px] lg:h-[46px] h-[46px] mb-1"
        alt={"star"}
        src={"/recensioner_icon.svg"}
      />
      <h1 className="m-0 mb-8 text-[22px] md:text-[32px]">
        {t.pricingData.reviews.title}
      </h1>
      <hr className="w-full border-spacing-x-0.5 border-[#888A9180] mb-4" />

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className={`p-2 w-full ${styles.swiper}`}
      >
        {t.pricingData.reviews.items.map((item, index) => (
          <SwiperSlide key={index}>
            <p className="text-center text-[12px] lg:text-[18px] font-jakarta  text-[#434C69] max-h-min">
              {item}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="w-full border-spacing-x-0.5 border-[#888A9180] mt-8" />
    </section>
  )
}
