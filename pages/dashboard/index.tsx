import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Titleh6 from "@/components/parts/Titleh6";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import HalfCircle from "@/components/graphic/HalfCircle";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";
import ProgressBarComponent from "@/components/parts/progress_bar";
import { dashboardData } from "@/locales/sv/dashboard";
import { get_user_courses } from "../../service/Apis/api";

type Props = {};

export default function Dashboard({ }: Props) {
  const [totalAllData, settotalAllData] = useState(0);
  const [totalRows, settotalRows] = useState(0);
  const [AllCourses, setAllCourses] = useState<any[]>([]);
  const router = useRouter();
  const { locale } = router;
  // if (typeof window !== "undefined") {
  //   const role = localStorage.getItem("role");
  //   console.log("role found :- " + role);
  //   if (role === "ADMIN") {
  //     router.push("/admin_dashboard");
  //   }
  //   if(role === null){
  //     router.push("/signin");
  //   }
  // } else {
  //   console.log("role not found");
  // }
  const t = locale === "en" ? en : sv;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title");
      localStorage.setItem("blue_Title", "Hem");
    }
  }, []);
  const [page, setPage] = useState(1); // Track the current page
  const limit = 3;
  const fetching = useRef(false);
  interface CourseData {
    name: string;
    progress: number;
  }
  const get_course = async () => {
    if (fetching.current) return; // If already fetching, exit
    fetching.current = true; // Mark that we are currently fetching
    try {
    const res: any = await get_user_courses(limit, page);
    console.log(res);
    if (res.status == 200) {
      var data = res.data;
      console.log(data);
      settotalAllData(data.totalAllData);
      settotalRows(data.totalRows);
      setAllCourses((prevdata : any) => [...prevdata, ...data.rows]);
      //setAllCourses(data.rows);
      // const coursesWithProgress = data.rows.map((course: { course: { name: any; }; progress: any; }) => ({
        //   name: course.course.name,
        //   progress: course.progress,
        // }));
        // setAllCourses(coursesWithProgress);
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  } finally {
    fetching.current = false; // Mark that we have finished fetching
  }
  };
  const handleScroll = () => {
    if (fetching.current) return;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    // alert(documentHeight);
    // alert(scrollTop);
    if (windowHeight + scrollTop >= documentHeight - 300) {
      // alert(windowHeight);
      // if (AllCourses.length < totalRows) {
        setPage(page + 1);
      // }
    }
  };
  // Add an event listener to track scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [AllCourses]);
  useEffect(() => {
    // return () => {
      get_course();
      // const getcourses = localStorage.getItem("token");
      // console.log(getcourses);
    // };
  }, [page]);
  

  return (
    <Layout headTitle={dashboardData.metaData.title}>
      <div className='flex flex-wrap'>
        <div className='w-full max-w-full flex-0 lg:w-9/12'>
          <section className='bg-primary rounded-[28px] py-12 lg:py-5 text-white relative mb-6 mt-5 isolate'>
            <div className='w-full lg:w-1/2  p-8 lg:px-8 lg:py-[29px] lg:mr-auto mt-40 lg:mt-0'>
              <FadeLogo
                positionClassName='left-[-2rem] bottom-[-2rem] absolute'
                svgClassname='svg-white-opacity'
                sizeClassName='w-[12rem] h-[12rem]'
                className='z-[-1]'
              />

              <ScrollReveal>
                <h2 className='text-[35px] lg:text-[35px] mb-4 font-semibold'>
                  Välkommen 👋
                </h2>

                <p className='mb-6 font-medium text-sm'>
                  Du är bara en produkt ifrån oändlig framgång.{" "}
                </p>
              </ScrollReveal>

              <HalfCircle
                positionClassName='right-[-2rem] bottom-[1rem] absolute'
                sizeClassName='w-[14rem] h-[14rem]'
                className='z-[-1]'
              />
            </div>

            <div className='absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] xl:w-[370px] xl:h-[259px] -top-10 -right-2 lg:top-[1rem] xl:top-[-3rem] lg:-right-10 xl:right-[1rem] z-[-1]'>
              <Image
                src='/images/dashboard/man-ask.png'
                alt='stats'
                fill
                className='absolute object-contain'
              />
            </div>
          </section>

          <section className='p-8 lg:p-8 bg-base-100 rounded-[28px] items-center lg:flex-row gap-8 '>
            <ScrollReveal>
              <div className='grid grid-cols-2 place-content-between flex items-baseline'>
                <Titleh6
                  blackText='Mina'
                  blueText='Kurser'
                  className='text-left text-lg font-bold mb-4'
                />
                <Link href='/library'>
                  <h1 className='font-medium text-l mb-2 text-primary transition-all duration-200 text-right cursor-pointer flex items-center justify-end gap-1'>
                    Visa alla
                    <MdOutlineKeyboardArrowRight
                      size={28}
                      className={`transform`}
                    />
                  </h1>
                </Link>
              </div>
            </ScrollReveal>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>

              {AllCourses ? (
                AllCourses.length > 0 ? (
                  AllCourses.map(({ name, image, id }, index) => (

                    <ScrollReveal
                      key={index} // Use a unique key for each item, typically an ID or index
                      className='bg-white justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box'>
                      
                        <div>
                          <div className='w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg'>
                            <img
                              src={image}
                              alt='blog'
                              className='h-[100%] object-cover'
                            />
                          </div>
                          {/* <div className='w-full'> <ProgressBarComponent progress={progress} /> </div> */}
                          <h1 className='font-semibold text-sm mb-2 hover:text-primary hover:underline transition-all duration-200'>
                          <Link href={"course/" + name}>{name}</Link>
                          </h1>
                        </div>
                      
                    </ScrollReveal>
    
                  ))
                ) : (
                  <p className="col-span-3 text-center">No Course Purchased</p>
                )
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
