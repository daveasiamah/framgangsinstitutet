import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";
import Title from "@/components/parts/Title";
import "swiper/css"
import "swiper/css/effect-cards"
import 'swiper/css/pagination'
import {Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import styles from "./ReviewsBlock.module.scss"

export default function BonusesBlock() {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    return (
        <section className="relative flex flex-col items-center py-5 lg:py-10 bg-[#EDF5FE] px-4">
            <img
                className="lg:w-[105px] w-[88px] lg:h-[105px] h-[88px] mb-4"
                alt={'star'}
                src={'/star-with-bg.png'}
            />
            <h1 className="text-[30px] lg:text-[50px] text-center font-bold text-[#07BE72] mb-10 underline capitalize">
                {t.pricingData.bonuses.title}
            </h1>
            <div className="flex flex-col items-center lg:space-y-10 space-x-2 lg:mb-20 mb-2">
                {t.pricingData.bonuses.cards.map((item, index) => (
                    <img
                        key={index}
                        className="lg:w-[1000px] lg:h-[300px] w-full h-[100px] mb-4"
                        alt={'bonus card'}
                        src={item}
                    />
                ))}
            </div>
            <p className="p-1 lg:w-[550px] w-[240px] px-4 text-[#D71349] font-bold lg:text-[24px] text-[10px] bg-[#FFF4F4] text-center rounded-[20px] mb-2">
                {t.pricingData.bonuses.redPrice}
            </p>
            <h1 className="text-[20px] lg:text-[80px] font-bold text-[#07BE72] mb-2">
                {t.pricingData.bonuses.greenPrice}
            </h1>
            <Title blackText={t.pricingData.bonuses.bottomDesc}/>
        </section>
    )
}
