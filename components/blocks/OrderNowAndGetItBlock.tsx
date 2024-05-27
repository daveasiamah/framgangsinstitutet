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

export default function OrderNowAndGetItBlock() {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en" ? en : sv

    const bg = (
        <svg width="1170" height="795" viewBox="0 0 1170 795" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.673828" width="1170" height="794" rx="45" fill="#3E6FED"/>
            <mask id="mask0_7807_4486" maskUnits="userSpaceOnUse" x="0" y="0"
                  width="1170" height="294">
                <rect y="0.673828" width="1170" height="292.459" rx="45" fill="#3E6FED"/>
            </mask>
            <g mask="url(#mask0_7807_4486)">
                <path
                    d="M1278.65 -42.9381C1278.65 68.1772 1208.44 158.098 1122 158.098C1035.56 158.098 965.35 68.1772 965.35 -42.9381C965.35 -154.053 1035.56 -243.974 1122 -243.974C1208.44 -243.974 1278.65 -154.053 1278.65 -42.9381Z"
                    stroke="white" strokeWidth="0.7"/>
                <path
                    d="M1365.69 -16.6415C1365.69 107.591 1287.18 208.161 1190.5 208.161C1093.82 208.161 1015.31 107.591 1015.31 -16.6415C1015.31 -140.874 1093.82 -241.444 1190.5 -241.444C1287.18 -241.444 1365.69 -140.874 1365.69 -16.6415Z"
                    stroke="white" strokeWidth="0.627451"/>
            </g>
            <mask id="mask1_7807_4486" maskUnits="userSpaceOnUse" x="0" y="0"
                  width="921" height="795">
                <rect y="0.673828" width="921" height="794" rx="45" fill="#3E6FED"/>
            </mask>
            <g mask="url(#mask1_7807_4486)">
                <g opacity="0.5" filter="url(#filter0_f_7807_4486)">
                    <ellipse cx="890" cy="647.162" rx="211" ry="270.653" fill="#3E6FED"/>
                </g>
                <g opacity="0.2" filter="url(#filter1_f_7807_4486)">
                    <ellipse cx="-40.5" cy="52.6236" rx="232.5" ry="298.231" fill="#3E6FED"/>
                </g>
                <g opacity="0.2" filter="url(#filter2_f_7807_4486)">
                    <ellipse cx="535.5" cy="879.975" rx="232.5" ry="298.231" fill="#3E6FED"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_f_7807_4486" x="557" y="254.51" width="666" height="785.305"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="61" result="effect1_foregroundBlur_7807_4486"/>
                </filter>
                <filter id="filter1_f_7807_4486" x="-395" y="-367.607" width="709" height="840.463"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="61" result="effect1_foregroundBlur_7807_4486"/>
                </filter>
                <filter id="filter2_f_7807_4486" x="181" y="459.744" width="709" height="840.463"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="61" result="effect1_foregroundBlur_7807_4486"/>
                </filter>
            </defs>
        </svg>
    )

    return (
        <section className="relative">
            <div className="block lg:hidden bg-primary rounded-[45px] p-9">
                <div className="bg-[#FFFFFF33] px-4 py-6 rounded-t-[45px] w-full">
                    <h1 className="text-[32px] font-bold text-white mb-4 text-center">
                        {t.pricingData.orderNow.title}
                    </h1>
                    {t.pricingData.orderNow.items.map((item, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-white text-[16px]">
                                <span className='font-bold '>{`${item.title} `}</span>
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            <div className="w-full lg:flex items-center justify-center relative h-[800px] my-20 hidden">
                <div className="absolute">
                    {bg}
                    <div className="absolute left-0 top-24 w-[782px] h-[574px] bg-[#FFFFFF33] p-10 rounded-r-[30px]">
                       <div className="flex flex-col items-start pl-10 w-[650px]">
                           <h1 className="text-[50px] font-bold text-white mb-4 text-center">
                               {t.pricingData.orderNow.title}
                           </h1>
                           {t.pricingData.orderNow.items.map((item, index) => (
                               <div key={index} className="mb-6">
                                   <p className="text-white text-[20px]">
                                       <span className='font-bold '>{`${item.title} `}</span>
                                       {item.desc}
                                   </p>
                               </div>
                           ))}
                       </div>
                    </div>
                    <img className={'absolute -right-10 bottom-0'} alt={'coffee-man'} src={'/coffee-man.png'}/>
                </div>
            </div>
        </section>
    )
}
