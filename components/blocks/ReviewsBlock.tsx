import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";
import Title from "@/components/parts/Title";
import "swiper/css"
import "swiper/css/effect-cards"
import 'swiper/css/pagination'
import {Pagination, Autoplay} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import styles from "./ReviewsBlock.module.scss"

export default function ReviewsBlock() {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    return (
        <section className="relative flex flex-col items-center py-5 lg:py-10 bg-[#EDF5FE] px-4">
            <img
                className="lg:w-[138px] w-[100px] lg:h-[138px] h-[100px] mb-4"
                alt={'star'}
                src={'/star.png'}
            />
            <Title blackText={t.pricingData.reviews.title}/>
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
                className={`lg:w-[1080px] w-full ${styles.swiper}`}
            >
                {t.pricingData.reviews.items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <p className="text-center lg:text-[25px] text-[18px] text-[#707BA0] max-h-min">{item}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
