import Title from "@/components/parts/Title";
import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";
import Image from "next/image";
import ScrollReveal from "@/components/transition/ScrollReveal";

export default function HowItWorkBlock({
                                           openModal
                                       }: {
    openModal: () => void
}) {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    return (
        <section className="flex items-center flex-col py-20 px-3">
            <div className="flex items-center flex-col lg:mb-10 mb-6">
                <img
                    src="/setting.png"
                    alt="arrow"
                    className="lg:w-[144px] lg:h-[144px] w-[76px] h-[76px] mb-6"
                />
                <Title blackText={t.pricingData.howItWorkData.title}/>
                <p className="text-center text-707BA0 lg:text-[22px] text-[16px] font-500 -mt-6">
                    {t.pricingData.howItWorkData.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {t.pricingData.howItWorkData.items.map((data) => (
                    <div
                        key={data.id}
                        className="h-[560px] w-full feature-card bg-white p-10 rounded-[2rem] feature-card-shadow flex flex-col items-center group"
                    >
                        <div
                            className="icon-container bg-base-200 p-6 rounded-full inline-flex place-content-center mb-4">
                            <Image
                                src={data.imageUrl}
                                alt={'logo'}
                                height={87}
                                width={87}
                                className="object-contain"
                            />
                        </div>
                        <button
                            className="py-1 w-full bg-primary text-white font-bold text-[24px] rounded-[20px] mb-8 group-hover:text-primary group-hover:bg-white">
                            {locale === "en" ? `Step ${data.id}` : `Steg ${data.id}`}
                        </button>
                        <ScrollReveal className="flex flex-col items-center">
                            <p className="text-center mb-6 w-[275px]">{data.desc1}</p>
                            <p className="text-center w-[230px]">{data.desc2}</p>
                        </ScrollReveal>
                    </div>
                ))}
            </div>
            <button onClick={openModal}
                    className="btn lg:text-[34px] text-[21px] px-10 font-bold btn-primary btn-lg mt-10 mb-12 flex items-center">
                <img
                    alt={'arrow'}
                    src="/images/home/graphics/arrow.png"
                    className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] mr-2"
                />
                {t.pricingData.howItWorkData.button}
            </button>

        </section>
    )
}