import React, {useEffect, useState} from "react";
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
import sv from "@/locales/sv";
import { get_course_details } from "@/service/Apis/api";

type Props = {};

export default function Dashboard({}: Props) {
  const [totalAllData, settotalAllData] = useState(0);
  const [totalRows, settotalRows] = useState(0);
  const [AllCourses, setAllCourses] = useState([]);
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
  
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === 'null') {
      router.push("/coursecheckout");
    } 
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title1");
      localStorage.setItem("blue_Title", "Kurser");
    }
  }, []);

  useEffect(() => {
    const get_coursedata_detail = async () => {
      try {
        const res: any = await get_course_details();
        console.log(res);
        if (res.status == 200) {
          var data = res.data;
          console.log(data);
          settotalAllData(data.totalAllData);
          settotalRows(data.totalRows);
          setAllCourses(data.rows);
        } else {
          console.log(res);
        }
      }
      catch (error) {
        console.log('error', error);
      }
  
    };
    get_coursedata_detail();
  }, []);



  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <section className='grid auto-rows-max grid-flow-col gap-6'>
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
    </Layout>
  );
}
