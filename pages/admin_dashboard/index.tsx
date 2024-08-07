import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Admin_layout from "@/components/AdminLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import { FaBook, FaClipboardList } from "react-icons/fa";
import HalfCircle from "@/components/graphic/HalfCircle";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import AdminList from "@/components/parts/Admin_list";
import { AiOutlinePlus } from "react-icons/ai";

import en from "@/locales/en";
import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";
import { get_courses } from "../../service/Apis/api";

type Props = {};
//change static data to api data
export default function Profile_setting_pop({}: Props) {
  interface CourseStep {
    id: string;
    courseId: string;
    name: string;
    isFree: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  interface Course {
    id: string;
    name: string;
    image: string | null;
    course_status: string;
    courseSteps: CourseStep[];
  }
  const [itemsToShow, setItemsToShow] = useState(5);
  
  const [totalAllData, settotalAllData] = useState({});
  const [totalRows, settotalRows] = useState(0);
  const [AllCourses, setAllCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handlesearch = (search: string) => {
      setSearchQuery(search);
  }
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
  const t = locale === "en" ? en : sv;
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    // console.log("role found :- " + role);
    if (role === "USER") {
      router.push("/dashboard");
    }
    if (role === null) {
      router.push("/signin");
    }
  } else {
    // console.log("role not found");
  }
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
    if (!localStorage.getItem('token')) {
      router.push('/signin');
    }
  }, 50);
  return () => clearInterval(interval);
  }, []);

  

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   return () => {
  //     get_course();
  //   };
  // }, []);
  interface Course {
    name: string;
    imageUrl: string;
    date: string;
    
    // Add any other properties here as needed
  }

  // const [adminItems, setAdminItems] = useState<Course[]>([]);
  const get_course = async (itemsToShow:number, searchQuery: string) => {
    const res: any = await get_courses(itemsToShow, searchQuery);
    if (res.status == 200) {
      var data = res.data;
      settotalAllData(data.totalAllData);
      settotalRows(data.totalRows);
      setAllCourses(data.rows);
    } else {
      // if (
        
      //   res.response.status == 401 ||
      //   res.response.statusText == "Unauthorized"
      // ) {
      //   // localStorage.clear();
      //   // router.push('/signin')
      // }
    }
  };
  useEffect(() => {
    // Fetch the course data when the component mounts
    get_course(itemsToShow, searchQuery);
  }, [itemsToShow, searchQuery]);
  // useEffect(() => {
  //   // console.log(AllCourses);
  // }, [AllCourses]);

  const adminItems = React.useMemo(() => {
    const items = [
      // {
      //   title: "Checkified - Key To Success ---------- static",
      //   count: 250,
      //   date: "Jan 7, 2023",
      //   imageUrl: "/images/../card_list4.png",
      // },
    ];

    for (const course of AllCourses) {
      const {id, name, courseSteps, course_status, image } = course;
      const count = courseSteps.length;
      const date = courseSteps.length > 0 ? new Date(courseSteps[0].createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }): '';

      items.push({
        id,
        title: name,
        count,
        image,
        date,
        imageUrl: "/images/../card_list4.png", // You can change this image URL as needed
        course_status : course_status
      });
    }

    return items;
  }, [AllCourses]);

  // console.log(adminItems);
  const itemsToLoad = 5;
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight - (scrollTop + clientHeight) < 10) {
      // When the user reaches near the bottom of the list, load more items
      setItemsToShow((prevItems) => prevItems + itemsToLoad);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className='admin_section mb-14'>
        <div className='flex flex-wrap pl-8 pr-8 mt-14'>
          <div className='w-full max-w-full flex flex-0'>
            <section className='bg-primary rounded-[28px] py-12 lg:py-5 text-white relative mb-10 isolate lg:w-8/12 z-10'>
              <div className='w-full lg:w-8/12   p-8 lg:px-8 lg:py-[29px] lg:mr-auto mt-40 lg:mt-0'>
                <FadeLogo
                  positionClassName='left-[-2rem] bottom-[-2rem] absolute'
                  svgClassname='svg-white-opacity'
                  sizeClassName='w-[12rem] h-[12rem]'
                  className='z-[-1]'
                />

                <ScrollReveal>
                  <h2 className='text-[35px] lg:text-[35px] mb-2 font-medium'>
                  Välkommen Dominic 👋
                  </h2>

                  <p className='mb-8 font-normal text-sm'>
                    Checkified University
                  </p>

                  <div className='form-control'>
                    <div className='relative'>
                      <div className='bg-base-100 w-full flex items-center rounded-corner justify-between'>
                        <div className='search_svg rounded-full flex item-center justify-center ml-2.5'>
                          <Image
                            src='/images/Adminimg/search-normal.svg'
                            width={20}
                            height={20}
                            alt='avatar'
                            className='rounded-corner'
                          />
                        </div>

                        <input
                          type='text'
                          placeholder='Try to find...'
                          className='input admin-outline-none bg-base-100 w-[17.9rem] mr-4'
                          value={searchQuery}
                                                onChange={(e) => handlesearch(e.target.value)}
                        />
                        <button className='btn hover-none bg-primary btn-shadow rounded-full text-white border-2 border-white px-6 mr-2'>
                          <Image
                            src='/images/Adminimg/arrow-right.svg'
                            width={25}
                            height={25}
                            alt='avatar'
                            className='rounded-corner'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className='absolute bottom-14 -right-16 bg-glass p-3 rounded-full circle-shadow w-[125px]'>
                <div className='bg-white h-26 flex items-center gap-2 py-5 px-5 rounded-full text-sm p-5'>
                  <div className='bg-primary text-white p-3 rounded-full'>
                    <Image
                      src='/images/Adminimg/Group.svg'
                      width={50}
                      height={50}
                      alt='avatar'
                      className='rounded-corner'
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='bg-base-100 rounded-r-[28px] py-12 lg:py-5 text-white relative mb-10 isolate z-0 ml-[-3rem]'>
              <div className='w-[470px] p-8 lg:px-8 lg:py-[29px] lg:mr-auto mt-40 lg:mt-0'>
                <Image
                  src='/images/Adminimg/admin_calender.svg'
                  fill
                  alt='avatar'
                  className='calender-img'
                />
              </div>
            </section>
          </div>
        </div>

        <div className='pl-8 pr-8'>
          <div className='flex flex-wrap p-8 bg-base-100 rounded-[24px]'>
            <div className='w-full max-w-full flex flex-0'>
              <section className='text-white relative isolate lg:w-4/12 z-10 pr-8 flex flex-col justify-between'>
                <div className='w-full  lg:mr-auto mt-40 lg:mt-0'>
                  <ScrollReveal>
                    <h2 className='text-[28px] lg:text-[28px] mb-2 font-bold text-151E3A'>
                    Senaste kursen
                    </h2>

                    <p className='mb-6 font-medium text-sm text-707BA0'>
                    Ladda upp din kurs
                    </p>
                  </ScrollReveal>
                </div>
                <div>
                  <div className='bg-EDF5FE rounded-[25px] p-4 latest-course'>
                    <div className='rounded-[25px] p-4 border-img'>
                      <div className='flex flex-col'>
                        <div className='mb-2'>
                          <svg
                            width='30'
                            height='31'
                            viewBox='0 0 30 31'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M15.8471 25.7373C16.1905 25.8172 16.222 26.267 15.8875 26.3785V26.3785L13.9125 27.0285C8.95 28.6285 6.3375 27.291 4.725 22.3285L3.125 17.391C1.525 12.4285 2.85 9.80351 7.8125 8.20351L8.7215 7.90248C9.12436 7.76906 9.51292 8.17178 9.39223 8.57864C9.29432 8.90866 9.20199 9.25862 9.1125 9.62851L7.8875 14.866C6.5125 20.7535 8.525 24.0035 14.4125 25.4035L15.8471 25.7373Z'
                              fill='#0083FF'
                            />
                            <path
                              d='M21.4625 4.80351L19.375 4.31601C15.2 3.32851 12.7125 4.14101 11.25 7.16601C10.875 7.92851 10.575 8.85351 10.325 9.91601L9.1 15.1535C7.875 20.3785 9.4875 22.9535 14.7 24.191L16.8 24.691C17.525 24.866 18.2 24.9785 18.825 25.0285C22.725 25.4035 24.8 23.5785 25.85 19.066L27.075 13.841C28.3 8.61601 26.7 6.02851 21.4625 4.80351ZM19.1125 17.4535C19 17.8785 18.625 18.1535 18.2 18.1535C18.125 18.1535 18.05 18.141 17.9625 18.1285L14.325 17.2035C13.825 17.0785 13.525 16.566 13.65 16.066C13.775 15.566 14.2875 15.266 14.7875 15.391L18.425 16.316C18.9375 16.441 19.2375 16.9535 19.1125 17.4535ZM22.775 13.2285C22.6625 13.6535 22.2875 13.9285 21.8625 13.9285C21.7875 13.9285 21.7125 13.916 21.625 13.9035L15.5625 12.366C15.0625 12.241 14.7625 11.7285 14.8875 11.2285C15.0125 10.7285 15.525 10.4285 16.025 10.5535L22.0875 12.091C22.6 12.2035 22.9 12.716 22.775 13.2285Z'
                              fill='#0083FF'
                            />
                          </svg>
                        </div>
                        <div className='mb-14'>
                          <h4 className='form-text-color text-lg font-semibold'>
                          Komma igång

                          </h4>
                        </div>
                        <div className='mb-2'>
                          <button className='btn btn-primary text-sm font-semibold btn-shadow w-full pt-5 pb-10'>
                            <AiOutlinePlus className='text-2xl mr-2 opacity-90' />{" "}
                            Lägg till kurs

                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className='w-full'>
                <div className='bg-base-200 p-1 px-4 rounded-[24px]'>
                  <div>
                  {adminItems.slice(0, itemsToShow).map((item, index) => (
                    <AdminList
                      key={index}
                      title={item.title}
                      count={item.count}
                      date={item.date}
                      imageUrl={item.image}
                      courseId={item.id}
                                                course_status={item.course_status}
                    />
                  ))}
                  </div>
                  {adminItems.length > itemsToShow && (
                  <div className="mt-4 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setItemsToShow((prevItems) => prevItems + itemsToLoad)
                      }
                    >
                      Läser in....
                    </button>
                  </div>
                )}
                  {/* {AllCourses.map(({ name, index }) => (
                    <AdminList
                      key={index}
                      title={name}
                      count={250}
                      date={"Jan 7, 2023"}
                      imageUrl={name.imageUrl}
                    />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Admin_layout>
  );
}
