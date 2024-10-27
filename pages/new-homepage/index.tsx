import Image from "next/image"
import dynamic from 'next/dynamic';
import { FaCheckCircle } from "react-icons/fa"
import { useRouter } from "next/router"
import SwiperType, { Autoplay, EffectCards, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from 'next/link';

import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import ScrollReveal from "@/components/transition/ScrollReveal"
import { medsosData, platformData } from "@/assets/data/homeData"
import "swiper/css"
import "swiper/css/effect-cards"

import en from "@/locales/en"
import sv from "@/locales/sv"
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Marquee from "react-fast-marquee";
import VideoTrainingCard from "@/components/parts/VideoTrainingCard"
const FeatureCard = dynamic(() => import('@/components/parts/FeatureCard'), {
    loading: () => <p>Loading...</p>,
})
const Accordion = dynamic(() => import('@/components/parts/Accordion_Home'), {
    loading: () => <p>Loading...</p>,
})
const ContractForm = dynamic(() => import('@/components/ContractForm'), {
    loading: () => <p>Loading...</p>,
});
import { useMediaQuery } from "usehooks-ts"


type Props = {}

type BlogPost = {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    date: string;
    slug: string;
    author: string;
    authorProfile: string;
}

export default function Home() {
    const router = useRouter()
    const { locale } = router
    const t = locale === "en" ? en : sv
    // if (typeof window !== "undefined") {
    //   const role = localStorage.getItem("role");
    //   console.log("role found :- " + role);
    // if (role === "USER") {
    //     router.push("/dashboard");
    //   } else if (role === "ADMIN") {
    //     router.push("/admin_dashboard");
    //   }
    // } else {
    //   console.log("role not found");
    // }
    // mobile view close auto play
    const matches = useMediaQuery('(max-width: 1024px)')
    const [showModal, setShowModal] = useState(false)
    const swiperRef1 = useRef<SwiperType>();
    const swiperRef2 = useRef<SwiperType>();
    const swiperRef3 = useRef<SwiperType>();
    // Fetch Blog List
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`/api/blog/?locale=${locale}`);

          console.log('response.data.data:', response.data.data);

          setBlogPosts(response.data.data);
        } catch (error) {
         // console.error('Error fetching blog posts:', error);
        }
      };
      fetchPosts();
    }, [locale]);

    useEffect(() => {
        if (matches) {
            // swiperRef1.current?.autoplay.stop()
            // swiperRef2.current?.autoplay.stop()
            swiperRef3.current?.autoplay.stop()
        } else {
            swiperRef1.current?.autoplay.start()
            swiperRef2.current?.autoplay.start()
            swiperRef3.current?.autoplay.start()
        }
    }, [matches])

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const faqData = [
        {
            id: 1,
            question: "Hur mycket kapital behövs för att starta dropshipping?",
            answer: "Dropshipping innebär kostnader som Shopify och marknadsföring. Hur mycket du investerar avgör hur snabbt du kan testa och skala produkter. Vi rekommenderar minst 3 000 SEK per månad, men mer investering ger snabbare resultat."
        },
        {
            id: 2,
            question:"Jag har ingen erfarenhet, är det ändå något för mig?",
            answer: "Om du inte har någon tidigare erfarenhet av dropshipping eller e-handel så är Checkified rätt ställe för dig. Vår utbildning är utformad för att hjälpa både nybörjare och de med viss erfarenhet att lyckas. Med vårt steg-för-steg system, vår gemenskap och vår support kommer du att lära dig allt du behöver för att komma igång och skala din verksamhet."
        },
        {
            id: 3,
            question: "Hur mycket tid behöver man lägga ner på dropshipping?",
            answer: "Det krävs ingen stor tidsinsats för att starta med dropshipping. Vi rekommenderar att du avsätter runt 30 minuter om dagen för att arbeta med din butik och lära dig nya strategier. För de som vill satsa seriöst kan det krävas mer tid för produktforskning och att skala upp marknadsföringen."
        },
        {
            id: 4,
            question: "Hur lång tid tar det att göra sin första försäljning?",
            answer: "Enligt vår senaste community-undersökning tar det i genomsnitt 22 dagar för deltagare att göra sin första försäljning efter att ha börjat programmet. Resultatet kan dock variera beroende på hur mycket tid och energi du investerar."
        },
        {
            id: 5,
            question: "Hur kan Checkified säkerställa resultat?",
            answer: "Vi är övertygade om vårt program och garanterar resultat, så länge du gör din del. Vi har flera studenter som når minst 100 000 SEK i omsättning inom 12 månader, efter vår dropshipping utbildning."
        },
        {
            id: 6,
            question: "Varför grundade jag Checkified?",
            answer: "Jag grundade Checkified för att förenkla och effektivisera lärandet av dropshipping. Jag upptäckte att många andra utbildningar saknade den nödvändiga supporten och strukturen för långsiktig framgång, så vi valde att förändra det."
        },
        {
            id: 7,
            question: "Är allt kostnadsfritt?",
            answer: "Checkified är helt gratis och erbjuder en kostnadsfri kurs inom dropshipping. Utöver det finns tjänster som Checkified E-butiker, Checkified Ads, Platinum-kursen och Checkified Mentorskap. För att överleva som organisation samarbetar Checkified med flera partners"
        }
    ]

    const testimonyData = [
        {
            id: 1,
            imageUrl: "/images/home/testimonial/1.svg",
            name: "Elias Bergqvist",
            job: "Checkified Student",
            message:
                "Easy to follow, you will learn while meeting other like-minded people. Checkified is the future and this is how learning should be!"
        },
        {
            id: 2,
            imageUrl: "/images/home/testimonial/2.svg",
            name: "Simon Gustafsson",
            job: "Checkified Student",
            message:
                "Great platform. Thanks to Checkified's tools I have learned about e-commerce and increased my mindset."
        },
        {
            id: 3,
            imageUrl: "/images/home/testimonial/3.svg",
            name: "Linnea Östling",
            job: "Checkified Student",
            message:
                "Absolutely the best decision I've made in starting my own online business. You can hardly believe it when you get several sales."
        },
        {
            id: 4,
            imageUrl: "/images/home/testimonial/4.svg",
            name: "Linnea Östling",
            job: "Checkified Student",
            message:
                "Absolutely the best decision I've made in starting my own online business. You can hardly believe it when you get several sales."
        },
        {
            id: 5,
            imageUrl: "/images/home/testimonial/5.svg",
            name: "Linnea Östling",
            job: "Checkified Student",
            message:
                "Absolutely the best decision I've made in starting my own online business. You can hardly believe it when you get several sales."
        },
        {
            id:6,
            imageUrl: "/images/home/testimonial/6.svg",
            name: "Linnea Östling",
            job: "Checkified Student",
            message:
                "Absolutely the best decision I've made in starting my own online business. You can hardly believe it when you get several sales."
        }
    ]

    return (
        <>
            <div
                data-theme="light"
                className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${showModal ? "flex" : "hidden"}`}
                onClick={() => setShowModal(false)}
            >
                <ContractForm onClose={closeModal} />
            </div>
            <Layout headTitle={t.homeData.metaData.title}>
                <section className="relative hero-height pt-8 flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="w-full text-center mb-6 lg:mb-0">
                        <p className="ad-container_ann">
              <span>
                <img src="/img/ad.svg" className="ad-svg_ann" alt="adsvg"/>
              </span>
                            Shopify <span className="andsign_ann">&</span> Meta officiell partners
                        </p>
                        <ScrollReveal>
                            <div className=" gap-1 mb-1">
                                <h1 className="text-[22px] leading-[24px] md:leading-[48px] lg:leading-[48px] md:text-[48px] lg:text-[48px] font-[700] font-jakarta">
                                    Är du redo att ta kontroll
                                </h1>
                                <h1 className="text-[22px] leading-[24px] md:leading-[48px] lg:leading-[48px] md:text-[48px] lg:text-[48px] font-[700] font-jakarta text-primary">
                                    över ditt liv?
                                </h1>
                            </div>
                        </ScrollReveal>
                        <div className="flex justify-center items-center gap-1 mt-3">
                            <Image
                                src="/icons/home/users-pics.png"
                                alt="user pics"
                                width={90}
                                height={48}
                            />
                            <span className=" text-[6px] lg:text-sm text-gray-500 font-inter">Gå med 750+ aktiva studenter</span>
                        </div>

                        <div className="mt-4">
                            <div className="flex flex-col items-center justify-center gap-1 bg-[#EDF5FED9] pt-2 pl-2 pr-2 pb-2 rounded-[10px] relative  max-w-[706px] mx-auto">
                                <div className="lg:flex flex top-0 w-full items-center justify-center gap-1 mb-[-5px] bg-primary text-white">
                                    <Image
                                        src="/icons/home/video-play-sm.svg"
                                        alt="play video"
                                        width={16}
                                        height={16}
                                    />
                                    <h3 className="text-[6px] lg:text-sm">{t.homeData.heroVideoDesc}</h3>
                                </div>

                                <div className="video-container">
                                    <iframe
                                        width="706"
                                        height="397"
                                        src="https://www.youtube.com/embed/V2PqDLwVNgA"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <div className="w-50 mt-2 lg:mt-8 flex items-center justify-center ">
                                <button onClick={openModal} className="text-[#fff] bg-[#225AEA] text-[14px] font-jakarta font-[600px] w-full h-[33px] md:w-1/4 rounded button-shadow">
                                    Se gratis dropshipping kurs
                                </button>
                            </div>

                            <div className="icons-container_ann mt-2">
                                <div className="icon-section_ann font-inter">
                                        <span className="font-inter">
                                          <img src="/img/calender.svg" alt="svg"/>
                                          Prova gratis idag
                                        </span>
                                         <span className="font-inter">
                                          <img src="/img/hand.svg" alt="svg"/>
                                          100% riskfritt
                                        </span>
                                         <span className="font-inter">
                                          <img src="/img/check.svg" alt="svg"/>
                                          Verifierade partners
                                        </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="md:p-8 lg:py-14 lg:px-16 text-center  lg:my-18 rounded-2xl">
                    <div className="flex justify-between items-center">
                        <hr className="w-[40%]  border-t-1 border-[#555A7733]"/>
                        <span className="font-[600] tex-[14px] md:text-[20px] md:w-[20%] w-full md:ml-4 md:mr-4 text-[#434C69 font-jakarta">KUNSKAP INOM</span>
                        <hr className="w-[40%] border-t-1 border-[#555A7733]"/>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between">
                        {platformData.map((data) => (
                            <div
                                key={data.id}
                                className="relative w-[45%] lg:w-1/6 2xl:w-[15%] h-[50px] lg:h-[100px]"
                            >
                                <Image
                                    src={data.imageUrl}
                                    alt="platform"
                                    className="object-contain w-[97px] h-[31px]"
                                    fill
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <hr className="border-[#555A7733] mt-4"/>
                </section>

                <section className="">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        {/* Globe Container */}
                        <div className="w-full lg:w-1/2 md:mb-8 lg:mb-0 order-0 lg:order-1 mt-6 mb-4">
                            <img
                                src="/images/home/globe_new.gif"
                                alt="globe"
                                className="object-contain mx-auto md:mb-16 h-[198px] md:h-[341px] w-auto"
                            />

                        </div>

                        {/* Text Container */}
                        <div className="w-full lg:w-1/2 lg:mr-20 md:mb-8 lg:mb-0 order-0 lg:order-0">
                            <div className="hidden lg:block">
                                <span className="flex flex-col lg:flex-row md:flex-row ">
                                <h1 className="text-[20px] lg:text-[24px] font-[700] font-jakarta text-primary mr-2 mb-[-20px]">
                                    Steg-för-steg guide
                                </h1>
                                <h1 className="text-[20px] lg:text-[24px] font-jakarta font-[700]">
                                    till att bygga ett
                                </h1>
                            </span>
                                <h1 className="text-[20px] lg:text-[24px] font-[700] font-jakarta">dropshipping
                                    företag</h1>
                            </div>

                            <h1 className="lg:hidden md:hidden text-[20px] leading-[22px] font-jakarta font-[700]"><span className="text-[#2E56F5]">Steg-för-steg guide</span> till att <br/> bygga dropshipping företag</h1>

                            <p onClick={openModal} className="mt-4 text-[#434C69] text-[12px]  lg:text-[14px] leading-[22px] font-[500] font-inter">
                                Lär dig hur du bygger, skalar och drar nytta av e-handelsbutiker. Från din första miljon
                                i intäkter till en potentiell exit. Det närmaste du kommer en doktorsexamen i e-handel
                                och digital
                                marknadsföring.
                            </p>
                            <button
                                className="h-[30px] text-white rounded w-[161px]  pl-2 pr-2 border-0 bg-[#225AEA] md:w-[161px] text-[10px] md:text-[10px] md:leading-[22px] mt-5 button-shadow font-inter">
                                Se Gratis Dropshipping Kurs
                            </button>
                        </div>
                    </div>

                </section>

                <section className="md:p-4 lg:px-16 lg:my-18 mt-10 md:mt-20 lg:mt-20">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 lg:mr-20 flex justify-center lg:justify-start mb-8 lg:mb-0">
                            <img
                                src="/images/home/channel.svg"
                                alt="globe"
                                className="h-[221px] w-[243px] md:h-[401px] md:w-[423px] object-contain mb-4 mt-4"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-1/2  lg:mb-20 text-left lg:text-left">
                                <span className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                                  <h1 className="hidden lg:block text-[24px] font-[700] font-jakarta">
                                    Är du redo för en
                                  </h1>
                                  <h1 className="hidden lg:block text-[24px] font-[700] text-primary lg:ml-2 font-jakarta">
                                    förändring?
                                  </h1>
                                </span>
                            <p className="text-[20px] leading-[26px] font-[700]  lg:ml-2 lg:hidden md:hidden text-left font-jakarta">
                                Är du redo för en <span className="text-[#225AEA]">förändring?</span>
                            </p>

                            <p className=" text-[#434C69] text-[14px] leading-[22px] text-left font-[500px] font-inter mt-4">
                                Se om dropshipping kan vara din väg till frihet. Kolla igenom våran gratis kurs för att
                                se hur
                                dropshipping gjorde Dominic till en e-handelsmiljonär och förändra sitt liv.
                            </p>

                            <ul className="mt-4">
                                <li className="flex items-center text-[#434C69] text-[14px] leading-[32px] font-[500px] font-inter mt-4">
                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="mr-2">
                                        <path d="M1 6.89474L6.05263 11.9474L17 1" stroke="#1BC057" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                    Steg för steg video utbildning
                                </li>
                                <li className="flex items-center text-[#434C69] text-[14px] leading-[32px] font-[500px] font-inter ">
                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="mr-2">
                                        <path d="M1 6.89474L6.05263 11.9474L17 1" stroke="#1BC057" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                    Exklusiv Community
                                </li>
                                <li className="flex items-center text-[#434C69] text-[14px] leading-[32px] font-[500px] font-inter ">
                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         className="mr-2">
                                        <path d="M1 6.89474L6.05263 11.9474L17 1" stroke="#1BC057" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                    Senaste strategier inom e-handel
                                </li>
                            </ul>

                            <button onClick={openModal}
                                className="h-[26px] w-[161px] md:h-[36px] lg:[36px] text-white rounded pl-2 pr-2 border-0 bg-[#225AEA] md:w-50 text-[10px] leading-[10px] md:text-[12px] md:leading-[13px] mt-3 button-shadow">
                                Gå med gratis idag
                            </button>
                        </div>
                    </div>
                </section>


                <section className="relative text-center mb-16 mt-8 lg:mb-20 md:mt-20">

                    <ScrollReveal>
                        <h1 className="lg:block text-left text-[22px] leading-[29px] lg:text-[32px] lg:leading-[55px] font-bold mb-[-7]">
                            Checkified Tjänster
                        </h1>
                        <p className="lg:block text-left text-[14px] lg:text-[16px] text-[#434C69] leading-[20px] font-normal mb-5">
                            Utforska våra tjänster för att ge dig superkraft i din dropshipping resa
                        </p>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified Premium</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">I kursen kommer du lära dig om
                                    dropshipping e-handel och marknadsföring. Gå med idag gratis👇</p>
                            </div>
                            <button
                                onClick={() => window.open("https://skool.com/dropshipping-sverige-2012", "_blank")}
                                className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                TESTA GRATIS
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Engångskostnad
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">0 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">Nybörjare inom dropshipping</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">Grundläggande kunskap</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Supportnivå
                                            </div>
                                           <small className="lg:text-[11px] text-[9px]"> Grundläggande support</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified
                                    Platinum</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">Gå från 0-100k/mån med
                                    dropshipping. Över 45+ avsnitt. Tryck på knappen nedan för att gå med👇</p>
                            </div>
                            <button onClick={() => window.open("https://checkified.se/platinum", "_blank")} className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                LÄGG TILL I KUNDVAGN
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2  rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Månadskostnad
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">150 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2  rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">De som vill tjäna över 100k/mån</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2  rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">Avancerade strategier, över 45+ avsnitt</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2  rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Supportnivå
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">Premium support, mer personlig hjälp</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified
                                    E-butik</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">Köp din e-butik med 20 vinnande
                                    produkter, logotyp, leverantör, och e-bok här👇</p>
                            </div>
                            <button onClick={() => window.open("https://buy.stripe.com/eVaeW80Mmckx34YdQT", "_blank")} className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                LÄGG TILL I KUNDVAGN
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Engångskostnad
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">499 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">De som vill tjäna över 10k/mån</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">20 produkter, logotyp, och leverantör</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Leverans
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">24 - 48 timmar</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified
                                    Ads</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">Köp videoannonser för att
                                    marknadsföra innehåll för endast 499 SEK här👇</p>
                            </div>
                            <button onClick={() => window.open("https://buy.stripe.com/8wM15i52CfwJ492148", "_blank")} className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                LÄGG TILL I KUNDVAGN
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Engångskostnad
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">699 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[10px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>
                                           <small className="lg:text-[10px] text-[9px]"> De som vill marknadsföra sin dropshipping</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>
                                           <small className="lg:text-[11px] text-[9px]"> Annonseringsmaterial för att driva trafik</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Strategi
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">Förbättra CTR & konverteringar</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified
                                    Mentorskap</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">Köp
                                    1-on-1 mentorskap med
                                    e-handelsmiljonären Dominic för att lära dig allt om dropshipping här👇</p>
                            </div>
                            <button onClick={() => window.open("https://checkout.revolut.com/pay/c1874ce2-0c58-4e4b-8b47-413171d61ec5", "_blank")}
                                    className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                LÄGG TILL I KUNDVAGN
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Engångskostnad
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">15 000 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]"> De som vill tjäna över
                                                1MSEK</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[10px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>
                                            <small className="lg:text-[11px] text-[9px]">1-on-1 mentorskap, individuell
                                                vägledning</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[10px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Expertisnivå
                                            </div>
                                            <small className="lg:text-[10px] text-[9px]">Lär från en erfaren
                                                dropshipping-expert</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="p-3 pt-5 pb-5 lg:p-5 rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img
                                src="/images/home/logo.svg"
                                alt="card"
                                className="object-contain h-[43px] w-[46px]"
                            />

                            <div className="text-left">
                                <h1 className="font-[700] text-[16px]  lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Checkified
                                    Shopify</h1>
                                <p className="font-[500] font-inter text-[13px] text-[#434C69] leading-[22px]">Checkified
                                    är stolt partner med
                                    Shopify – börja med Shopify för bara 10 kr första månaden👇</p>
                            </div>
                            <button onClick={() => window.open("https://shopify.pxf.io/checkified", "_blank")}
                                    className="h-[36px] md:h-[40px] text-white rounded-[7px] bg-[#225AEA] border-0 w-full  text-[14px] mt-5 mb-5">
                                FÅ DIN BUTIK
                            </button>
                            <div className="text-left">
                                <ul>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Engångskostnad
                                            </div>

                                            <small className="lg:text-[11px] text-[9px]"> 10 kr</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Målgrupp
                                            </div>

                                            <small className="lg:text-[11px] text-[9px]">Nybörjare inom
                                                dropshipping</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Innehåll
                                            </div>

                                            <small className="lg:text-[11px] text-[9px]">Shopify prenumeration</small>
                                        </div>
                                    </li>
                                    <li className="mt-4 text-[11px] lg:text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                        <span
                            className="border border-1 border-[#BBBBBF] flex justify-center items-center p-1 lg:p-2 mr-1 lg:mr-2 rounded-lg ">
                        <Image
                            src="/images/home/check.svg"
                            alt="card"
                            height={13}
                            width={13}
                            className="object-contain"
                            loading="lazy"
                        />
                      </span>
                                                Format
                                            </div>

                                            <small className="lg:text-[11px] text-[9px]">Digital butik</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="relative flex flex-col justify-center md:mb-16 lg:mb-20">
                    <div className="lg:mt-8 py-8 bg-base-200 rounded-2xl  justify-center">
                        <div>
                            <h1 className="lg:w-50 text-[18px] leading-[18px] text-center lg:text-[32px] lg:leading-[40px] mb-4 font-bold">Uppdelning
                                av Dominics
                                resultat <br/> och finansiella poster</h1>
                        </div>
                        <div className="flex justify-center mt-4">
                            <iframe
                                width="705"
                                height="423"
                                src="https://www.youtube.com/embed/qsiKbthUaGE"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </section>

                <section className="relative text-center lg:mb-[16px] lg:[mb-20px] lg:mt-20">

                    <ScrollReveal>
                        <h1 className="lg:block text-left text-[22px] leading-[55px] lg:text-[32px] lg:leading-[55px] font-bold lg:mb-[-7]">
                            Fördelar med Checkified
                        </h1>
                        <p className="lg:block text-left text-[14px] lg:text-[16px] text-[#434C69] leading-[20px] font-normal mb-5">
                            Byggd av e-handlare för e-handlare med uppdraget att hjälpa entreprenörer att starta och växa
                            framgångsrika företag.
                        </p>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="rounded-[2rem] border border-1 border-[#BBBBBF] ">
                            <img

                                src="/images/home/number.svg"
                                alt="card"

                                className="p-2 border-b border-1 border-[#E5E6EA] w-full h-[235px] object-cover"
                                loading="lazy"
                            />

                            <div className="text-left pl-4 pb-4">
                                <h1 className="font-[700] font-jakarta text-[16px] lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">En sälj, pengarna tillbaka</h1>
                                <p className="font-[500] font-inter text-[12px] lg:text-[13px] text-[#434C69] leading-[22px]">Ungefär en sälj är allt du
                                    behöver för att täcka kostnaden för ett abonnemang hos oss. Å andra sidan skulle en vinnare göra
                                    underverk. Du är en dropshipping produkt ifrån framgång</p>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-1 border-[#BBBBBF]">
                            <img

                                src="/images/home/graph.svg"
                                alt="card"

                                className="p-2 border-b border-1 border-[#E5E6EA] w-[100%] h-[235px] object-cover"
                                loading="lazy"
                            />

                            <div className="text-left  pl-4 pb-4">
                                <h1 className="font-[700] font-jakarta text-[16px] lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Omfattande strategier</h1>
                                <p className="font-[500] font-inter text-[12px] lg:text-[13px] text-[#434C69] leading-[22px]">Ge dig själv en utmärkt framgång
                                    med stora mängder strategiinsikter som ingår i Checkified Dropshipping Sverige. Du lär dig allt om
                                    e-handel.</p>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-1 border-[#BBBBBF] ">
                            <img

                                src="/images/home/locker.svg"
                                alt="card"

                                className="p-2 border-b border-1 border-[#E5E6EA] w-full h-[235px] object-cover"
                                loading="lazy"
                            />

                            <div className="text-left pl-4 pb-4">
                                <h1 className="font-[700] font-jakarta text-[16px] lg:text-[22px] text-[#151E3A] leading-[28px] mt-2">Spara tid och pengar</h1>
                                <p className="font-[500] font-inter text-[12px] lg:text-[13px] text-[#434C69] leading-[22px]">Håll dig informerad om
                                    dropshipping, e-handel, marknadsföring eller potentiella möjligheter som kan hjälpa ditt företag. Allt
                                    för att spara tid och pengar.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="mt-10 lg:mb-20 testimonial-section lg:h-[620px] h-[420px] mb-[80px]">

                    <div className="absolute left-0 right-0 bg-base-200 h-[480px] lg:h-[600px]">
                        <ScrollReveal className="lg:mt-20 mt-7">
                            <h1 className="hidden lg:block lg:text-[32px] lg:leading-[40px] font-[700] font-jakarta text-center">
                                Vad Våra Studenter Säger
                            </h1>
                            <h1 className="text-[22px] lg:hidden leading-[22px] font-[700] font-jakarta text-center">
                                Vad Våra <br/> Studenter Säger
                            </h1>
                        </ScrollReveal>
                    </div>
                    <div className="relative lg:pt-48 pt-20  items-center justify-center testimonial-slider-container">
                        <div className="absolute" style={{}}>
                        <div className="items-center left-0 gap-2 justify-around testimonial-slider">
                                <Marquee style={{width: "1300px", overflow: "visible"}} speed={30}>
                                    {testimonyData.map((data) => (
                                        <div
                                            key={`${data.id} ${Math.random()}`}
                                            className="rounded-2xl h-full grid place-content-center"
                                            style={{paddingRight: "30px"}}
                                        >
                                            <img
                                                src={data.imageUrl}
                                                alt="testimonial"
                                                sizes="100vw"
                                                style={{width: '300px', height: '100%'}}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="lg:bg-[#225AEA] bg-[#3E6FED] p-4 lg:pl-10 mb-16 lg:mb-20 rounded-3xl text-white text-left flex flex-col items-center lg:flex-row lg:gap-20">
                    <ScrollReveal className="w-full lg:w-2/3 pl-12 mr-12 pt-4">
                        <h2 className="lg:text-[24px] lg:leading-[28px] md:text-[24px] md:leading-[28px]  text-[18px] leading-[22px]  font-[700] mb-2 font-jakarta">
                            Gå med i 750+ studenter som använder Checkified
                        </h2>
                        <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[22px] font-[500] font-inter mt-4">Allt du behöver göra är att hitta din första
                            framgångsrika produkt. Vi på Checkified finns
                            här för att guida dig på vägen till framgång!</p>

                        <div>
                            <button onClick={openModal} className=" h-[23px] lg:h-[38px] rounded-[5px] btn-white mt-5 font-inter font-[500] text-[10px] md:text-[14px] w-full lg:w-[120px] text-[#151E3A] ">
                                Gå med gratis
                            </button>
                        </div>
                    </ScrollReveal>
                    <div className="lg:mx-auto md:w-[418px] lg:w-1/2 ">
                        <img
                            src="/images/home/connect.svg"
                            alt="checkified university"
                            className="lg:h-[400px] lg:w-[500px]"

                        />
                    </div>
                </section>

                <section>
                    <div className="relative py-10 full-bg">
                        <ScrollReveal>
                            <h1  className="text-center font-jakarta text-[22px] md:text-[36px] md:leading-[40px] leading-[22px] font-[700] mb-10 mt-5">
                                Vanliga Frågor
                            </h1>
                        </ScrollReveal>
                        <Accordion
                            data={faqData}
                        />
                    </div>
                </section>

                <section className="lg:h-80 md:h-80 lg:px-20 lg:py-10 md:px-20 md:py-10 mb-16 text-white ">
                    <div className="relative left-0 right-0 flex flex-col items-center justify-center bg-[#2E56F5] rounded-[20px] md:px-4 lg:px-20 md:py-5 lg:py-5 back-background">
                        <div className="text-center ">
                            <div className="pl-10 pr-10">
                                <h1 className="text-white text-center text-[20px] leading-[48px] md:text-[24px] font-[500] font-jakarta mb-2 mt-4">
                                    Testa Checkified gratis
                                </h1>
                                <p className="mb-4 max-w-3xl mx-auto text-center lg:text-[16px] text-[12px] font-inter">Perfekt
                                    för nybörjare som vill dyka in i dropshipping!
                                    Utforska vår kurs gratis, <br/>
                                    utan förpliktelse – för alltid.</p>
                                <div className="lg:pl-8 lg:pr-8 mt-4">
                                    <div className="flex justify-center flex-wrap lg:flex lg:justify-between">
                                            <span className="flex justify-center   align-items-center mr-5  text-[8px] lg:text-[14px] text-white font-inter font-[500px]">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                       className="mr-2 ">
                                                    <path
                                                        d="M7.3308 7.61447H17.4496M6.87467 2.0001V3.8317M6.87467 3.8317L17.4994 3.8315M6.87467 3.8317C5.11425 3.8317 3.68732 5.28333 3.68741 7.07419L3.6879 17.8826C3.68798 19.6734 5.11501 21.125 6.87531 21.125H17.5C19.2604 21.125 20.6875 19.6732 20.6874 17.8823L20.6869 7.07389C20.6868 5.28314 19.2597 3.8315 17.4994 3.8315M17.4994 2V3.8315M10.0629 17.342V10.8569L7.93792 12.4782M15.9064 17.342V10.8569L13.7815 12.4782"
                                                        stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                      <span className="mt-1">Prova idag</span>
                                                    </span>
                                            <span className="flex  align-items-center mb-2  text-[8px] lg:text-[14px] text-white font-inter font-[500px]">
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="mr-2">
                        <path
                            d="M5.72937 18.512C5.20498 18.6853 4.92036 19.2509 5.09367 19.7753C5.26697 20.2997 5.83256 20.5843 6.35695 20.411L5.72937 18.512ZM11.8622 19.8462L11.7722 18.8502L11.8622 19.8462ZM15.3536 19.0769L15.7891 19.9771H15.7891L15.3536 19.0769ZM18.6897 16.0681L17.9153 15.4354L18.6897 16.0681ZM16.408 14.1854L17.1121 14.8955L16.408 14.1854ZM14.8715 15.7087L15.5756 16.4188L14.8715 15.7087ZM10.6984 15.3846C10.1461 15.3846 9.69838 15.8323 9.69838 16.3846C9.69838 16.9369 10.1461 17.3846 10.6984 17.3846V15.3846ZM18.335 13.9962L17.7836 14.8305L18.335 13.9962ZM7.22402 13.4915L7.66816 14.3875H7.66816L7.22402 13.4915ZM11.4001 13.1128L11.6611 12.1475H11.6611L11.4001 13.1128ZM13.0309 13.5538L12.7699 14.5191H12.7699L13.0309 13.5538ZM13.5476 15.4829L12.8435 14.7727L13.5476 15.4829ZM11.934 15.6745C11.5418 16.0633 11.5391 16.6965 11.9279 17.0887C12.3168 17.4809 12.9499 17.4836 13.3421 17.0948L11.934 15.6745ZM6.35695 20.411C6.4545 20.3788 6.67974 20.3518 7.10006 20.3815C7.50005 20.4098 7.96832 20.4794 8.50785 20.5634C9.52864 20.7224 10.8321 20.9433 11.9521 20.8421L11.7722 18.8502C10.9526 18.9242 9.92845 18.7605 8.81559 18.5872C8.2883 18.5051 7.73824 18.4216 7.24113 18.3865C6.76435 18.3528 6.21371 18.352 5.72937 18.512L6.35695 20.411ZM11.9521 20.8421C13.4538 20.7065 14.2079 20.7421 15.7891 19.9771L14.9181 18.1767C13.7223 18.7553 13.3478 18.7079 11.7722 18.8502L11.9521 20.8421ZM15.7891 19.9771C17.219 19.2853 18.6284 17.7238 19.4642 16.7007L17.9153 15.4354C17.0698 16.4704 15.9056 17.699 14.9181 18.1767L15.7891 19.9771ZM15.7039 13.4753L14.1675 14.9986L15.5756 16.4188L17.1121 14.8955L15.7039 13.4753ZM13.2257 15.3846H10.6984V17.3846H13.2257V15.3846ZM14.1675 14.9986C13.9191 15.2448 13.5805 15.3846 13.2257 15.3846V17.3846C14.1054 17.3846 14.9509 17.0382 15.5756 16.4188L14.1675 14.9986ZM18.8864 13.162C17.8866 12.5011 16.5558 12.6307 15.7039 13.4753L17.1121 14.8955C17.2897 14.7194 17.572 14.6906 17.7836 14.8305L18.8864 13.162ZM19.4642 16.7007C20.4053 15.5487 20.046 13.9284 18.8864 13.162L17.7836 14.8305C18.0394 14.9995 18.0448 15.2769 17.9153 15.4354L19.4642 16.7007ZM1.77587 13.5385H4.87935V11.5385H1.77587V13.5385ZM4.65522 13.3077V20.2308H6.65522V13.3077H4.65522ZM4.87935 20H1.77587V22H4.87935V20ZM2 20.2308V13.3077H0V20.2308H2ZM1.77587 20C1.89153 20 2 20.0952 2 20.2308H0C0 21.216 0.803209 22 1.77587 22V20ZM4.65522 20.2308C4.65522 20.0952 4.76369 20 4.87935 20V22C5.85201 22 6.65522 21.216 6.65522 20.2308H4.65522ZM4.87935 13.5385C4.76369 13.5385 4.65522 13.4432 4.65522 13.3077H6.65522C6.65522 12.3225 5.85202 11.5385 4.87935 11.5385V13.5385ZM1.77587 11.5385C0.803205 11.5385 0 12.3225 0 13.3077H2C2 13.4432 1.89153 13.5385 1.77587 13.5385V11.5385ZM6.4873 14.9729L7.66816 14.3875L6.77987 12.5956L5.59901 13.181L6.4873 14.9729ZM9.65288 13.9231H9.97106V11.9231H9.65288V13.9231ZM11.1391 14.0781L12.7699 14.5191L13.2919 12.5884L11.6611 12.1475L11.1391 14.0781ZM12.8435 14.7727L11.934 15.6745L13.3421 17.0948L14.2517 16.193L12.8435 14.7727ZM12.7699 14.5191C12.8963 14.5533 12.922 14.6949 12.8435 14.7727L14.2517 16.193C15.4369 15.0179 14.8897 13.0205 13.2919 12.5884L12.7699 14.5191ZM9.97106 13.9231C10.3657 13.9231 10.7585 13.9752 11.1391 14.0781L11.6611 12.1475C11.1102 11.9985 10.5419 11.9231 9.97106 11.9231V13.9231ZM7.66816 14.3875C8.284 14.0822 8.96354 13.9231 9.65288 13.9231V11.9231C8.65591 11.9231 7.67231 12.1532 6.77987 12.5956L7.66816 14.3875ZM14.7415 7.15385C14.7415 8.29281 13.8079 9.23077 12.6381 9.23077V11.2308C14.8962 11.2308 16.7415 9.41355 16.7415 7.15385H14.7415ZM12.6381 9.23077C11.4682 9.23077 10.5346 8.29281 10.5346 7.15385H8.53457C8.53457 9.41355 10.3799 11.2308 12.6381 11.2308V9.23077ZM10.5346 7.15385C10.5346 6.01488 11.4682 5.07692 12.6381 5.07692V3.07692C10.3799 3.07692 8.53457 4.89414 8.53457 7.15385H10.5346ZM12.6381 5.07692C13.8079 5.07692 14.7415 6.01488 14.7415 7.15385H16.7415C16.7415 4.89414 14.8962 3.07692 12.6381 3.07692V5.07692ZM9.53458 6.15385C8.36473 6.15385 7.43109 5.21589 7.43109 4.07692H5.43109C5.43109 6.33663 7.2764 8.15385 9.53458 8.15385V6.15385ZM7.43109 4.07692C7.43109 2.93796 8.36473 2 9.53458 2V0C7.2764 0 5.43109 1.81722 5.43109 4.07692H7.43109ZM9.53458 2C10.7044 2 11.6381 2.93796 11.6381 4.07692H13.6381C13.6381 1.81722 11.7927 0 9.53458 0V2Z"
                            fill="white"/>
                        </svg>
                                  <span className="mt-1">100% riskfritt </span>
                    </span>
                                        <span
                                            className="flex  align-items-center  text-[8px] lg:text-[14px] text-white font-inter font-[500px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="mr-2">
                        <path
                            d="M15.142 9.98299L10.875 14.25L9.42049 12.7955M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                            stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>

                     <span className="mt-1"> Verifierade partners </span>
                    </span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={openModal} className="h-[28px] md:h-[38px] rounded-[5px] w-[300px] md:w-[150px] text-[10px] md:text-[14px] btn-white mb-6 lg:mt-10 mt-5 font-normal text-[#15133A]">
                                Gå med gratis
                            </button>
                        </div>
                    </div>
                </section>


                <section className="relative text-center lg:mb-20 lg:mt-40">

                    <ScrollReveal className="flex justify-between items-center mb-4">
                        <h1 className="hidden lg:block text-left text-[32px] leading-[55px] font-[700] font-jakarta">
                            Bläddra bland våra senaste artiklar
                        </h1>
                        <h1 className="lg:hidden text-left text-[18px] leading-[28px] font-[700] font-jakarta">
                            Bläddra bland våra senaste artiklar
                        </h1>
                        <button onClick={() => window.location.href = "https://checkified.se/blog"}
                                className="hidden lg:block text-left text-[16px] text-[#434C69] leading-[20px] font-normal mb-5 border border-1 border-[#BBBBBF] p-2 rounded-md">
                            Visa blogg
                        </button>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-5">
                        {blogPosts?.map((blog) => {
                            return (
                                <Link
                                    href={`/blog/${blog?.slug}`}
                                    key={blog?.id}
                                    className="rounded-[2rem] border border-1 border-[#BBBBBF] p-5 flex flex-col"
                                >
                                    <img
                                        src={blog?.imageUrl}
                                        alt="card"
                                        className="border-b border-1 border-[#E5E6EA] w-full h-[192px] rounded-[20px] mb-5"
                                        loading="lazy"
                                    />

                                    <div className="text-left flex flex-col flex-grow">
                                        <p className="text-[#686870] text-[12px] lg:text-[14px] font-inter mb-2 lg:mb-[20px] mt-4">
                                            {blog?.date}
                                        </p>
                                        <p className="font-inter font-[500] text-[14px] lg:text-[18px] text-[#434C69] leading-[25px] mb-4">
                                            {blog?.title}
                                        </p>

                                        <div className="flex items-center gap-2 mt-auto">
                                            <img
                                                src={blog?.authorProfile}
                                                alt="author"
                                                className="w-[34px] h-[34px] object-cover rounded-full"
                                                loading="lazy"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "https://via.placeholder.com/34";
                                                }}
                                            />
                                            <p className="font-inter font-[500] text-[14px] lg:text-[14px] text-[#434C69] leading-[25px] ml-2">
                                                {blog?.author || 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                </section>


            </Layout>
        </>

    )
}
