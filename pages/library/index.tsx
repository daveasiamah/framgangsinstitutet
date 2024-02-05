import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";
import Link from "next/link";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Titleh6 from "@/components/parts/Titleh6";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";
import ProgressBarComponent from "@/components/parts/progress_bar";
import { get_user_courses } from "../../service/Apis/api";

type Props = {};

export default function Dashboard({ }: Props) {
  const [totalAllData, settotalAllData] = useState(0);
  const [totalRows, settotalRows] = useState(0);
  const [AllCourses, setAllCourses] = useState<any[]>([]);
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const limit = 6;
  const fetching = useRef(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const [activeButton, setActiveButton] = useState("all");
  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const active1 =
    "btn !btn-primary w-full lg:w-fit mb-8 ml-2 mr-2 text-sm font-medium pt-0 pb-0 btn-height-rem";
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title");
      localStorage.setItem("blue_Title", "Kursur");
    }
  }, []);
  useEffect(() => {
    // return () => {
      get_course();
    // };
  }, [page]);
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    if (role === 'null') {
      router.push("/coursecheckout");
    }
  }
  const get_course = async () => {
    if (fetching.current) return; // If already fetching, exit
    fetching.current = true;
    try {
    const res: any = await get_user_courses(limit, page);
    if (res.status == 200) {
      var data = res.data;

      settotalAllData(data.totalAllData);
      settotalRows(data.totalRows);
      setAllCourses((prevdata : any) => [...prevdata, ...data.rows]);


      // console.log('data',data.rows)

      //setAllCourses(data.rows);

      // data.map(({ name:any, progress }) => (

      // ));

      // const coursesWithProgress = data.rows.map((course: { course: { name: any; }; progress: any; }) => ({
      //   name: course.name,
      //   progress: course.progress,

      // }));
      // console.log('coursesWithProgress',coursesWithProgress)
      /*
      setAllCourses(coursesWithProgress);
      // Filter the courses based on their progress and set them in respective state variables
      const ongoing = coursesWithProgress.filter((course: { progress: number; }) => course.progress < 100);
      setOngoingCourses(ongoing);

      const completed = coursesWithProgress.filter((course: { progress: number; }) => course.progress === 100);
      setCompletedCourses(completed);*/
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

  return (
    <Layout headTitle={t.libraryData.metaData.title}>
      <section className='p-8 lg:p-10 bg-base-100 rounded-[28px] items-center lg:flex-row gap-8 '>
        <ScrollReveal>
          <div className='grid grid-cols-2 place-content-between flex items-baseline'>
            <Titleh6
              blackText='Mina'
              blueText='Kurser'
              className='text-left text-lg font-bold mb-4'
            />
            {/* <Link href='/library'> */}
            <h1 className='font-medium text-l mb-2 text-primary transition-all duration-200 text-right cursor-pointer flex items-center justify-end gap-1'>
              Visa alla
              <MdOutlineKeyboardArrowRight size={28} className={`transform`} />
            </h1>
            {/* </Link> */}
          </div>
        </ScrollReveal>
        <ScrollReveal className=''>
          <button
            className={`btn hover:bg-base-200 bg-base-200 w-full lg:w-fit mb-8 ml-2 mr-2 text-subtitle border-none font-medium text-sm pt-0 pb-0 btn-height-rem ${activeButton === "all" ? `${active1}` : ""
              }`}
            onClick={() => handleClick("all")}>
            all
          </button>
        </ScrollReveal>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 '>

          {
          // activeButton === "all" && 
          AllCourses ? (
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
              <p className="col-span-4 text-center">No Course Purchased</p>
            )
          ) : null}

          {/* {activeButton === "Ongoing" &&
            ongoingCourses.map(({ name, progress }) => (
              <ScrollReveal
                key=''  
                className='bg-white justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box'>
                <div>
                  <div className='w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg'>
                    <Image
                      src='/images/dashboard/image-1.png'
                      fill
                      alt='blog'
                      className='absolute object-cover'
                    />
                  </div>
                  <div className='w-full'>
                    <ProgressBarComponent progress={progress} />
                  </div>
                  <h1 className='font-semibold text-sm mb-2 hover:text-primary hover:underline transition-all duration-200'>
                    {name}
                  </h1>
                </div>
              </ScrollReveal>
            ))}

          {activeButton === "Completed" &&
            completedCourses.map(({ name, progress }) => (
              <ScrollReveal
                key=''
                className='bg-white justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box'>
                <div>
                  <div className='w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg'>
                    <Image
                      src='/images/dashboard/image-1.png'
                      fill
                      alt='blog'
                      className='absolute object-cover'
                    />
                  </div>
                  <div className='w-full'>
                    <ProgressBarComponent progress={progress} />
                  </div>
                  <h1 className='font-semibold text-sm mb-2 hover:text-primary hover:underline transition-all duration-200'>
                    {name}
                  </h1>
                </div>
              </ScrollReveal>
            ))} */}
        </div>
      </section>
    </Layout>
  );
}
