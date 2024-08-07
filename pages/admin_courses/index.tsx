import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Admin_layout from "@/components/AdminLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/profile_form";
import Popupform from "@/components/parts/popup_form";
import Popup from "@/components/parts/popup";
import AdminList from "@/components/parts/Admin_list";
import AdminGrid from "@/components/parts/Admin_grid";
import en from "@/locales/en";
import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";
import { Popup_form } from "@/locales/sv/popup_form";
import { AiOutlinePlus } from "react-icons/ai";
import { activecourse,draftcourse,pausecourse } from "../../service/Apis/api";
import { button } from "@material-tailwind/react/theme/components/button";

type Props = {};
let PerPageRecord = 10;
let PageNumber = 1;

export default function Profile_setting_pop({ }: Props) {
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
    const [totalAllData, settotalAllData] = useState(0);
    const [totalRows, settotalRows] = useState(0);
    const [AllCourses, setAllCourses] = useState<Course[]>([]);
    const [GetCourseid, setGetCourseid] = useState<Course[]>([]);
    const [activeButton, setActiveButton] = useState("Aktiva");
    const router = useRouter();

    const { locale } = router;
    const t = locale === "en" ? en : sv;
    if (typeof window !== "undefined") {
        const role = localStorage.getItem("role");
        if (role === "USER") {
            router.push("/dashboard");
        }
    } else {
        console.log("role not found");
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const [listViewActive, setListViewActive] = useState(true);
    const [gridViewActive, setGridViewActive] = useState(false);

    const handleListViewClick = () => {
        setListViewActive(true);
        setGridViewActive(false);
    };

    const handleGridViewClick = () => {
        setListViewActive(false);
        setGridViewActive(true);
    };
    
    const get_course = async (buttonName:any) => {
        var res: any = [];
        if(buttonName == 'Förslag'){
            res = await draftcourse(PerPageRecord,PageNumber);
        }else if(buttonName == 'Pausad'){
            res = await pausecourse(PerPageRecord,PageNumber);
        }else{
            res = await activecourse(PerPageRecord,PageNumber);
        }
        if (res.status == 200) {
            var data = res.data;
            settotalAllData(data.totalAllData);
            settotalRows(data.totalRows);
            setAllCourses(data.rows);
            console.log(data.rows);
            if(data.rows[0]){
                setGetCourseid(data.rows[0].id);
            }

        } else {
            // if (
            //     res.response.status == 401 ||
            //     res.response.statusText == "Unauthorized"
            // ) {
            //     // localStorage.clear();
            //     // router.push('/signin')
            // }
        }
    };
    useEffect(() => {
        get_course('Active');
    }, []);

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
        get_course(buttonName);
    };


    const active1 =
        "btn !btn-white w-full lg:w-fit text-primary mb-8 ml-2 mr-2 text-sm font-medium pt-0 pb-0 btn-height-rem";

    const adminItems = React.useMemo(() => {
        const items = [
        ];
        
        for (const course of AllCourses) {
            const { id, name, courseSteps, course_status, image } = course;
            const count = courseSteps.length;
            const date = courseSteps.length > 0 ? new Date(courseSteps[0].createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }) : '';
            
            console.log(image)
            items.push({
                id,
                title: name,
                count,
                date,
                image,
                imageUrl: "/images/../card_list4.png",
                course_status : course_status
            });
        }

        return items;
    }, [AllCourses]);



    const [itemsToShow, setItemsToShow] = useState(5);
    const itemsToLoad = 5;
    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if (scrollHeight - (scrollTop + clientHeight) < 10) {
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
            <section className=''>
                <div className='gap-8 col-span-3'>
                    <div className='p-8 bg-primary flex flex-col admin2_banner'>
                        <h1 className='text-4xl text-white font-semibold Admin2_title'>
                        Hantera din kurs

                        </h1>
                        <div className='admin2_nav_button'>
                            <button
                                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${activeButton === "Aktiva" ? `${active1}` : ""
                                    }`}
                                onClick={() => handleClick("Aktiva")}>
                                Aktiva
                            </button>
                            <button
                                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${activeButton === "Förslag" ? `${active1}` : ""
                                    }`}
                                onClick={() => handleClick("Förslag")}>
                                Förslag
                            </button>
                            <button
                                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${activeButton === "Pausad" ? `${active1}` : ""
                                    }`}
                                onClick={() => handleClick("Pausad")}>
                                Pausad
                            </button>
                        </div>
                    </div>
                    <div className='p-8'>
                        <div className='p-8 bg-base-100 rounded-[24px] admin2_list_wrap'>
                            <div className='admin2_content_header flex justify-between items-center  mb-6'>
                                <div className='admin2_content_title form-text-color font-bold text-lg'>
                                    <h2>
                                        <span>{totalAllData} </span>{activeButton} Kurser
                                    </h2>
                                </div>
                                <div className='admin2_content_nav'>
                                    <div className='flex gap-6 justify-between items-center'>
                                        <h3 className='text-sm text-707BA0 font-medium'>Visa efter</h3>
                                        <div className="form_benner_icon grid grid-cols-2 place-content-center rounded-lg w-fit mx-auto admin2_header_icon bg-EDF5FE">
                                            <div
                                                className={`form_inner_icon_1 ${listViewActive ? 'bg-primary' : 'bg-transparent'
                                                    } rounded-lg py-2 px-3`}
                                                onClick={handleListViewClick}
                                            >
                                                <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M10.74 17.791L13.94 17.791' stroke={listViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M9 12.791L15.68 12.791' stroke={listViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M10.74 7.79102L13.94 7.79102' stroke={listViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M22 15.791L22 9.79101C22 4.79101 20 2.79101 15 2.79102L9 2.79102C4 2.79102 2 4.79102 2 9.79102L2 15.791C2 20.791 4 22.791 9 22.791L15 22.791C20 22.791 22 20.791 22 15.791Z' stroke={listViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                </svg>
                                            </div>
                                            <div
                                                className={`form_inner_icon_2 rounded-lg ${gridViewActive ? 'bg-primary' : 'bg-transparent'
                                                    } py-2 px-3`}
                                                onClick={handleGridViewClick}
                                            >
                                                <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                    <path d='M9 22.791H15C20 22.791 22 20.791 22 15.791V9.79102C22 4.79102 20 2.79102 15 2.79102H9C4 2.79102 2 4.79102 2 9.79102V15.791C2 20.791 4 22.791 9 22.791Z' stroke={gridViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M10 17.791H14C15.65 17.791 17 16.441 17 14.791V10.791C17 9.14102 15.65 7.79102 14 7.79102H10C8.35 7.79102 7 9.14102 7 10.791V14.791C7 16.441 8.35 17.791 10 17.791Z' stroke={gridViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M12 7.79102V17.791' stroke={gridViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    <path d='M7 12.791H17' stroke={gridViewActive ? 'white' : '#AFBAD2'} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='admin2_add_btn text-sm font-semibold text-white flex items-center'>
                                            <Link href={"/admin_course_add"}>
                                                <button className='btn btn-primary text-sm font-semibold shadow-none'>
                                                    <AiOutlinePlus className='text-2xl' /> Lägg till kurs
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-base-200 p-1 px-4 rounded-[24px]">
                                <div>
                                    {listViewActive &&
                                        adminItems.slice(0, itemsToShow).map((item, index) => (
                                            <AdminList
                                                key={index}
                                                title={item.title}
                                                count={item.count}
                                                date={item.date}
                                                imageUrl={item.image}
                                                courseId={item.id}
                                                course_status={item.course_status}
                                                // Provide the courseId here
                                            />
                                        ))}

                                    {gridViewActive && (
                                        <div className="grid grid-cols-4 gap-4">
                                            {adminItems.slice(0, itemsToShow).map((item, index) => (
                                                <AdminGrid
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
                                    )}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Admin_layout>
    );
}
