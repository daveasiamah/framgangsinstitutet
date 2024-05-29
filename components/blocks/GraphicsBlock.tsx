import Title from "@/components/parts/Title";
import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";
import {Button} from "@material-tailwind/react";

export default function GraphicsBlock({
    openModal
                                      }:{
    openModal: () => void
}) {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    const images = [
        '/images/home/graphics/graphic3.png',
        '/images/home/graphics/graphic1.png',
        '/images/home/graphics/graphic6.png',
        '/images/home/graphics/graphic4.png',
        '/images/home/graphics/graphic2.png',
        '/images/home/graphics/graphic5.png',
    ];


    return (
        <section className="flex items-center flex-col lg:py-20 py-10 px-3">
            <button onClick={openModal}
                    className="btn lg:text-[34px] text-[23px] px-10 font-bold btn-primary btn-lg mb-12 flex items-center">
                <img
                    alt={'arrow'}
                    src="/images/home/graphics/arrow.png"
                    className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] mr-2"
                />

                {t.homeData.graphicsBlock.buttonTop}
            </button>
            <div className="grid grid-cols-1 gap-x-10 gap-y-2 lg:grid-cols-2 mb-6">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="store"
                        className="w-full h-full object-contain"
                    />
                ))}
            </div>
            <button onClick={openModal}
                    className="btn lg:text-[34px] text-[23px] px-10  font-bold btn-primary btn-lg mt-10 mb-12 lg:flex items-center hidden">
                <img
                    alt={'arrow'}
                    src="/images/home/graphics/arrow.png"
                    className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] mr-2"
                />

                {t.homeData.graphicsBlock.buttonBottom}
            </button>
        </section>
    )
}