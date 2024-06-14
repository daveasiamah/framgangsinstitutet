import en from "@/locales/en";
import sv from "@/locales/sv";
import {useRouter} from "next/router";
import BlurCircle from "@/components/graphic/BlurCircle";
import LineGraphic from "@/components/graphic/LineGraphic";
import ScrollReveal from "@/components/transition/ScrollReveal";
import Image from "next/image";

export default function PricingHeroBlock({
                                             openModal
                                         }: {
    openModal: () => void
}) {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    return (
        <section className="relative hero-height pt-8 flex flex-col lg:flex-row jsutify-between items-center gap-10">
            <BlurCircle positionClassName="left-0 top-20" size="lg"/>
            <LineGraphic
                positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
                className="svg-primary"
            />

            <div className="w-full text-center mb-6 lg:mb-0 flex flex-col items-center">
                <ScrollReveal className="flex justify-center">
                    <h1 className="lg:text-[64px] text-[22px] lg:leading-[75px] font-bold max-w-[1159px] w-full lg:mb-4">
                        {t.pricingData.hero.title}
                    </h1>
                </ScrollReveal>

                <svg
                    viewBox="0 0 821 63" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={"lg:w-[821px] lg:h-[63px] w-[270px] h-[30px] mt-4 lg:mt-6"}
                >
                    <path d="M3 3H820C759.712 6.69444 616.062 23.2667 523.76 60" stroke="#3E6FED" strokeWidth="6"
                          strokeLinecap="round"/>
                </svg>

                <div
                    className="mb-2 lg:mb-14 relative lg:w-[706px] w-full px-4 mx-auto flex flex-col items-center justify-center gap-1 lg:mt-12 mt-4">

                    <div className="video-container">
                        <iframe
                            width="706"
                            height="397"
                            src="https://www.youtube.com/embed/NvX3Tb-2HwI?si=dWRmYQ7LpTsqnCPi"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full mt-0 lg:mt-8 flex flex-col items-center">
                        <button
                            style={{
                                boxShadow: '0 0 0 0.2rem rgba(78, 115, 223, 0.25)'
                            }}
                            className="bg-primary hover:bg-[#244ec9] w-full rounded-[12px] flex flex-col items-center lg:py-3 py-2"
                                onClick={openModal}>
                            <div className="flex items-center space-x-2">
                                <img
                                    alt={'arrow'}
                                    className={'lg:w-[32px] w-[23px]'}
                                    src={'/arrow-right.svg'}
                                />
                                <p className="text-white font-bold lg:text-[32px] text-[16px]">
                                    {t.pricingData.hero.button}
                                </p>
                            </div>
                            <p className="text-gray lg:text-[20px] text-[11px] lg:ml-0 ml-6 lg:-mt-2">
                                {t.pricingData.hero.buttonDesc}
                            </p>
                        </button>
                        <div className="flex items-center mt-4">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8863 20.0655L19.0431 18.9481C19.0431 18.9481 17.183 6.35754 17.1677 6.27416C17.1523 6.19174 17.0852 6.13616 17.0162 6.13616C16.9472 6.13616 15.6372 6.03937 15.6372 6.03937C15.6372 6.03937 14.7277 5.12991 14.6175 5.03312C14.5917 5.00533 14.5629 4.99191 14.5351 4.97754L13.8863 20.0655ZM14.3137 4.9507C14.2984 4.9507 14.2725 4.96412 14.2591 4.96412C14.2438 4.96412 14.0512 5.02066 13.7483 5.11554C13.4436 4.23483 12.9059 3.4212 11.9553 3.4212H11.8729C11.5959 3.07524 11.2662 2.92383 10.9759 2.92383C8.75636 2.92383 7.69261 5.69533 7.36295 7.1012C6.50811 7.36474 5.88903 7.55737 5.81716 7.58516C5.33416 7.73658 5.3217 7.74999 5.26707 8.20616C5.21245 8.53583 3.95703 18.2581 3.95703 18.2581L13.6525 20.078L14.3137 4.9507ZM11.7885 5.62537V5.72312C11.2528 5.88891 10.6596 6.06812 10.0798 6.24733C10.4114 4.97945 11.0305 4.35749 11.5681 4.1227C11.708 4.48208 11.7885 4.96412 11.7885 5.62537ZM10.9069 3.51704C11.0027 3.51704 11.0995 3.54387 11.1972 3.61479C10.4957 3.94445 9.72236 4.78587 9.4042 6.4687C8.9552 6.61232 8.50443 6.75033 8.05199 6.8827C8.42478 5.5995 9.32178 3.51704 10.9069 3.51704ZM11.2921 11.0035C11.2921 11.0035 10.7133 10.7017 10.0252 10.7017C8.9902 10.7017 8.94899 11.3495 8.94899 11.5153C8.94899 12.3979 11.2662 12.742 11.2662 14.8244C11.2662 16.4651 10.2312 17.5135 8.82536 17.5135C7.14253 17.5135 6.2877 16.4651 6.2877 16.4651L6.74291 14.9758C6.74291 14.9758 7.62649 15.7348 8.3692 15.7348C8.4584 15.7384 8.54742 15.724 8.63092 15.6924C8.71443 15.6609 8.79071 15.6128 8.85521 15.5511C8.91971 15.4893 8.97111 15.4152 9.00632 15.3332C9.04153 15.2512 9.05984 15.1629 9.06016 15.0736C9.06016 13.915 7.15691 13.8584 7.15691 11.9571C7.15691 10.3576 8.30211 8.79937 10.6328 8.79937C11.5298 8.79937 11.9697 9.06004 11.9697 9.06004L11.2921 11.0035ZM12.1757 4.02591C12.6721 4.08341 12.9903 4.64691 13.1954 5.28229C12.9481 5.36566 12.6712 5.44808 12.3683 5.54391V5.3647C12.3683 4.82708 12.2993 4.38529 12.1757 4.02591Z"
                                    fill="#3E6FED"/>
                            </svg>
                            <p className="lg:text-[25px] text-[16px] text-[#707BA0] font-bold">{t.pricingData.hero.descTitle}</p>
                        </div>
                        <p className="lg:text-[25px] text-[16px] text-[#707BA0] mt-4">{t.pricingData.hero.desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}