import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Titlespan from "@/components/parts/Titlespan";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import en from "@/locales/en";
import Admin_layout from "@/components/AdminLayout";
import sv from "@/locales/sv";
import {admin_get_course} from "../../service/Apis/api";

type Props = {};

export default function Admin_course_detail({ }: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  // if (typeof window !== "undefined") {
  //   const role = localStorage.getItem("role");
  //   console.log("role found :- " + role);
  //   if (role === "ADMIN") {
  //     router.push("/admin_dashboard");
  //   }
  // } else {
  //   console.log("role not found");
  // }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title1");
      localStorage.setItem("blue_Title", "Kurser");
    }
  }, []);
  const course_detail = async () => {
    const res: any = await admin_get_course();
    console.log(res);
  if (res.status == 200) {
    console.log("oh yeeeeeeeeeee");
    var data = res.data;
    console.log(data);
  } else {
    console.log("not pro");
    console.log(res.status);
  }
};
course_detail();
  return (
    <Admin_layout headTitle={t.pressData.metaData.title}>
      <div className="course_detail_head mt-14 ml-8 mr-8">
        <button className="back_button"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0491 20.7109L8.52914 14.1909C7.75914 13.4209 7.75914 12.1609 8.52914 11.3909L15.0491 4.87093" stroke="#0083FF" stroke-width="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </button>
        <div className="course_detail_head_right">
          <button className="course_detail_edit"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/linear/edit">
              <g id="vuesax/linear/edit_2">
                <g id="edit">
                  <path id="Vector" d="M9.1665 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V10.8332" stroke="#707BA0" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Vector_2" d="M13.3666 2.51688L6.7999 9.08354C6.5499 9.33354 6.2999 9.82521 6.2499 10.1835L5.89157 12.6919C5.75823 13.6002 6.3999 14.2335 7.30823 14.1085L9.81657 13.7502C10.1666 13.7002 10.6582 13.4502 10.9166 13.2002L17.4832 6.63354C18.6166 5.50021 19.1499 4.18354 17.4832 2.51688C15.8166 0.850211 14.4999 1.38354 13.3666 2.51688Z" stroke="#707BA0" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Vector_3" d="M12.4248 3.4585C12.9831 5.45016 14.5415 7.0085 16.5415 7.57516" stroke="#707BA0" stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </g>
          </svg>
            Edit Course</button>
          <button className="course_detail_add"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 25592">
              <path id="Vector 71" d="M9 1.29102V17.291" stroke="white" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path id="Vector 72" d="M1 9.29102L17 9.29101" stroke="white" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
            Add Course</button>
        </div>
      </div>
      <section className='grid auto-rows-max grid-flow-col gap-6 pl-8 pr-8'>
        <div className='p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 row-end-3 row-span-2'>
          <ScrollReveal>
            <div className='place-content-between flex items-baseline'>
              <Titlespan
                blackText='Checkified - Nyckeln till Framgång'
                blueText=''
                className='text-left mb-4 text-xl font-extrabold'
              />
            </div>
          </ScrollReveal>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>
            <ScrollReveal className='bg-white grid justify-between cursor-pointer transition-all duration-150'>
              <div>
                <div className='w-full h-[400px] relative rounded-[20px] overflow-hidden mb-6 shadow-lg'>
                  <Image
                    src='/images/course-detail/video-bg.png'
                    fill
                    alt='blog'
                    className='absolute object-cover'
                  />
                  <div className='absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-90 rounded-full w-[100px] h-[100px] flex item-center justify-center'>
                    <Image
                      src='/icons/course-detail/play-svg.svg'
                      alt='blog'
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                  </div>
                </div>
                <h1 className='font-semibold text-lg mb-3 transition-all duration-200 text-151E3A'>
                  Mindset
                </h1>
                <p className='text-subtitle mb-3 text-sm font-medium text-707BA0'>
                  Du kommer att lära dig varför rätt tänkesätt är avgörande för
                  framgång i dropshippingbranschen. Utveckla ett tillväxttänk
                  som kan hjälpa dig att övervinna utmaningar, lära av
                  misslyckanden och fortsätta att förbättras över tid. Du kommer
                  också att lära dig tekniker för att hantera stressen och
                  osäkerheten som ofta följer med entreprenörskap, inklusive
                  mindfulness och målsättningsstrategier.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className='p-8 lg:p-8 bg-base-100 rounded-[28px]'>
          <ScrollReveal className='flex justify-center'>
            <Titlespan
              blackText='Modulöversikt'
              blueText=''
              className='text-center text-xl font-bold '
            />
          </ScrollReveal>
          <section className='mt-6 mb-2'>
            <div className='grid grid-cols-1 gap-4'>
              <ScrollReveal
                key=''
                className='flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl'>
                <Link key='' href=''>
                  <div className='mega-menu-list items-center flex gap-3 items-start  rounded-lg'>
                    <div className='list-icon bg-base-100 rounded-full play-video-sm'>
                      <Image
                        src='/icons/course-detail/play-svg.svg'
                        alt='Mega menu icon'
                        className='object-contain'
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className='menu-content'>
                      <h2 className='font-semibold text-left text-sm text-151E3A'>
                        Introduktion
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=''
                className='flex justify-between items-center bg-primary btn-shadow py-4 px-4 rounded-2xl play-tab-shadow'>
                <Link key='' href=''>
                  <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                    <div className='list-icon bg-base-08 rounded-full play-video-sm'>
                      <Image
                        src='/icons/course-detail/pause-svg.svg'
                        alt='Mega menu icon'
                        className='object-contain'
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className='menu-content'>
                      <h2 className='font-medium text-left text-white text-sm'>
                        Mindset
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=''
                className='flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl'>
                <Link key='' href=''>
                  <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                    <div className='list-icon bg-base-100 rounded-full play-video-sm'>
                      <Image
                        src='/icons/course-detail/play-svg.svg'
                        alt='Mega menu icon'
                        className='object-contain'
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className='menu-content'>
                      <h2 className='font-semibold text-left text-sm text-151E3A'>
                        Affärsmodell
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=''
                className='flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl'>
                <Link key='' href=''>
                  <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                    <div className='list-icon bg-base-100 rounded-full play-video-sm'>
                      <Image
                        src='/icons/course-detail/play-svg.svg'
                        alt='Mega menu icon'
                        className='object-contain'
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className='menu-content'>
                      <h2 className='font-semibold text-left text-sm text-151E3A'>
                        Avslöjar Vinnande Produkt
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </section>
    </Admin_layout>
  );
}
