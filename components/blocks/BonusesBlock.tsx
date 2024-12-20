import en from "@/locales/en";
import sv from "@/locales/sv";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ReviewsBlock.module.scss";

export default function BonusesBlock() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <section className="flex flex-col items-center justify-center pb-[70px] mt-6">
      <div className="flex flex-col">
        <h1 className="font-bold text-[22px] md:text-[32px] lg:text-[32px] mb-5 md:mb-10 lg:mb-10 text-center">
          {t.pricingData.bonuses.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap10">
          {t.pricingData.bonuses.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-[373px] md:w-[413px] md:h-[426px] lg:w-[413px] lg:h-[426px] shadow-[0px_0.5px_15px_0.5px_rgba(155,155,155,0.25)] rounded-[25px] p-6 md:p-8"
            >
              <div className="flex flex-col items-center">
                <p className="font-[16px] text-[#c5cce3]">{item.id}</p>
                <img
                  src={item.image}
                  alt="bonuses image"
                  className="w-[172px] h-[172px] object-contain mt-5"
                />
                <h4 className="font-bold text-base lg:text-xl mb-4 mt-3 text-center">
                  {item.title}
                </h4>
                <p className="font-[500] text-xs lg:text-base text-center text-[#464c69] mb-4">
                  {item.description}
                </p>
                <p className="font-[700] text-base lg:text-xl text-center text-[#16895a] font-jakarta">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
