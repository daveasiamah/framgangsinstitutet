import React, { useState, useEffect, useCallback, SetStateAction } from "react";
import { useDropzone, FileWithPath } from 'react-dropzone';
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
import { AiOutlineCheckCircle, AiOutlineMenu } from 'react-icons/ai';
import { course_add, update_course_byid } from "../../service/Apis/api";
import { course_add_step_2_api } from "../../service/Apis/api";
import { video_add, admin_get_course_byid } from "../../service/Apis/api";
type FileWithStatus = {
    id: number;
    file?: File;
    status: 'uploading' | 'done' | 'error';
    title: string;
};
var video: any;
type VideoItemProps = FileWithStatus & {
    onTitleChange: (id: number, newTitle: string) => void;
    videoTitle: string;
    setVideoTitle: (id: number, newTitle: string) => void; // Updated type
    isEditable?: boolean; // New property
};
const VideoItem: React.FC<VideoItemProps> = ({
    id,
    file,
    status,
    title,
    onTitleChange,
    videoTitle,
    setVideoTitle,
}) => {

    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [videoTitles, setVideoTitles] = useState(title);

    const handleTitleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        setVideoTitles(newTitle);
        onTitleChange(id, newTitle); // Call the parent component's onTitleChange function
    };

    const handleVideoClick = () => {
        setIsActive(!isActive);
        setEditMode(!editMode);
    };

    localStorage.setItem("step_2", videoTitle);

    const fileSize = file ? Math.floor(file.size / 1048576) : 0; // Convert bytes to MB

    return (
        <li key={id} id="li_video">
            <div className="li_add" onClick={handleVideoClick}>
                {editMode ? (
                    <AiOutlineCheckCircle className="icon_edit" />
                ) : (
                    <AiOutlineMenu className="icon_add_course" />
                )}
                <img src="/images/../card_list4.png" />
                <div className="video">
                    <div className="video_title">
                        <p>{videoTitle}</p>
                    </div>
                    <div className="video_detail">
                        <p>
                            {fileSize} MB - {status === 'done' ? '100% uploaded' : 'Uploading...'}
                        </p>
                    </div>
                </div>
            </div>
            {editMode ? (
                <input
                    type="text"
                    value={videoTitle}
                    onChange={handleTitleChanges}
                />
            ) : (
                <p>{videoTitle}</p>
            )}
        </li>
    );
};

async function processVideos(video: any[]) {
    for (let i = 0; i < video.length; i++) {
        const multivideo = video[i];

        try {
            const resp = await video_add(multivideo);
            console.log("Response received:", resp);
        } catch (error) {
            console.error("Error occurred:", error);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            i--;
        }
    }

}
type Props = {};

type CourseData = {
    courseSteps: Array<any>;
};

export default function Admin_course_detail({ }: Props) {


    const [videoTitles, setVideoTitles] = useState<{ [key: number]: string }>({});
    const [uploadedFiless, setUploadedFiless] = useState<FileWithStatus[]>([]);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleTitleChanges = (id: number, newTitle: string) => {
        setVideoTitles((prevTitles) => ({
            ...prevTitles,
            [id]: newTitle,
        }));
    };
    console.log(videoTitles);


    const router = useRouter();
    const { locale } = router;
    const { courseId } = router.query;
    const t = locale === "en" ? en : sv;

    const [courseData, setCourseData] = useState<CourseData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (courseId) {
            // Fetch course data here
            fetchCourseData();
        }
    }, [courseId]);

    const fetchCourseData = async () => {
        try {
            const storedCourseId = localStorage.getItem("courseId");

            if (!storedCourseId) {
                console.error('CourseId not found in localStorage');
                return;
            }

            const response: any = await admin_get_course_byid(storedCourseId); // Pass storedCourseId to the API function

            console.log('API response:', response);

            if (response.status === 200) {
                setCourseData(response.data); // Set the fetched course data
            } else {
                // Handle error case
                console.error('Error fetching course data');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching course data', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localStorage = window.localStorage;
            localStorage.removeItem("blue_Title");
            localStorage.removeItem("black_Title1");
            localStorage.setItem("blue_Title", "Kurser");
        }
    }, []);

    const [CourseTitle1, setCourseTitle1] = useState('Course name');
    const CourseTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newcourse = event.target.value;
        setCourseTitle1(newcourse);
    }
    useEffect(() => {
        console.log(CourseTitle1);
    }, [CourseTitle1]);

    const course_add_name = async () => {
        const res: any = await course_add(CourseTitle1);
        if (res.status == 201) {
            console.log("oh yeeeeeeeeeee");
            const coursename = CourseTitle1;
            localStorage.setItem("coursename", coursename);
            var data = res.data;
            
            console.log(data[0].id);
        } else {
            console.log("not pro");
        }
    };

    const updateCourseData = async () => {
        try {
            const storedCourseId = localStorage.getItem("courseId");

            if (!storedCourseId) {
                console.error('CourseId not found in localStorage');
                return;
            }

            const response: any = await update_course_byid(storedCourseId);

            console.log('API response:', response);

            if (response.status === 200) {
                setCourseData((prevCourseData) => {
                    if (prevCourseData) {
                        const updatedCourseData = {
                            ...prevCourseData,
                            name: response.data.name, // Update the course name
                        };
                        return updatedCourseData;
                    }
                    return prevCourseData;
                });
            } else {
                console.error('Error updating course data');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error updating course data', error);
            setIsLoading(false);
        }
    };


    const backhandle = () => {
        const courseid = localStorage.getItem('courseid'); // Get the value from local storage

        if (courseid) {
            localStorage.removeItem('courseid'); // Remove the value from local storage
        } else {
            router.push("/admin_courses"); // Navigate to the specified route
        }
    }

    useEffect(() => {
        const checkCourseIdInLocalStorage = () => {
            const courseId = localStorage.getItem('courseid');
            const step_2_add_btn = document.getElementById('step_2_add_btn');
            const step_1_add_btn = document.getElementById('step_1_add_btn');
            if (courseId) {
                const rdDiv = document.getElementById('act');
                const course_Name = document.getElementById('course_Name');
                if (rdDiv) {
                    rdDiv.classList.remove('none_display');
                }
                if (step_2_add_btn) {
                    step_2_add_btn.classList.remove('none_display');
                }
                if (course_Name) {
                    course_Name.classList.add('none_display');
                }
                if (step_1_add_btn) {
                    step_1_add_btn.classList.add('none_display');
                }
            }
            else {
                const rdeDiv = document.getElementById('act');
                const course_Name = document.getElementById('course_Name');
                if (rdeDiv) {
                    rdeDiv.classList.add('none_display');
                }
                if (course_Name) {
                    course_Name.classList.remove('none_display');
                }
                if (step_2_add_btn) {
                    step_2_add_btn.classList.add('none_display');
                }
                if (step_1_add_btn) {
                    step_1_add_btn.classList.remove('none_display');
                }
            }
        };

        checkCourseIdInLocalStorage();
        const interval = setInterval(checkCourseIdInLocalStorage, 100);

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);
    const [uploadedFiles, setUploadedFiles] = useState<FileWithStatus[]>([]);
    video = uploadedFiles;
    // const firstVideoTitle = uploadedFiles.length > 0 ? uploadedFiles[0].title : '';

    const handleTitleChange = (id: number, newTitle: string) => {
        setUploadedFiles((prevFiles) =>
            prevFiles.map((fileObj) => (fileObj.id === id ? { ...fileObj, title: newTitle } : fileObj))
        );
    };
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        const filesToAdd: FileWithStatus[] = acceptedFiles.map((file: FileWithPath, index) => ({
            id: index,
            file: file as File,
            status: 'uploading',
            title: file.name,
        }));

        setUploadedFiles((prevFiles) => [...prevFiles, ...filesToAdd]);


        setTimeout(() => {
            setUploadedFiles((prevFiles) =>
                prevFiles.map((fileObj) =>
                    filesToAdd.some((newFile) => newFile.file === fileObj.file)
                        ? { ...fileObj, status: 'done' }
                        : fileObj
                )
            );
        }, 5000); // Simulating a 2-second upload delay
    }, []);

    // console.log(titles); 
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const course_add_step_2 = async () => {
        const step_2 = localStorage.getItem("step_2");
        console.log(step_2);
        const res: any = await course_add_step_2_api(step_2);
        if (res.status == 201) {
            var data = res.data;
            localStorage.setItem("step_2_id", data.id);
            localStorage.setItem("step_1_id", data.courseId);

            // Example usage // Replace this with your list of videos
            processVideos(video);

        } else {
            console.log("not add");
        }
    };

    return (
        <Admin_layout headTitle={t.pressData.metaData.title}>
            <div className="course_detail_head mt-14 ml-8 mr-8">
                <button className="back_button" onClick={backhandle}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0491 20.7109L8.52914 14.1909C7.75914 13.4209 7.75914 12.1609 8.52914 11.3909L15.0491 4.87093" stroke="#0083FF" stroke-width="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
                <div className="course_detail_head_right">
                    {!courseData && (
                        <button className="btn btn-primary text-sm font-semibold shadow-none" onClick={course_add_name} id="step_1_add_btn">
                            Continue</button>
                    )}
                    <button className="btn btn-primary text-sm font-semibold shadow-none none_display" id="step_2_add_btn" onClick={course_add_step_2}  >
                        Continue</button>

                    <button
                        className="btn btn-primary text-sm font-semibold shadow-none" onClick={updateCourseData} >
                        {isUpdating ? 'Updating...' : 'Update'}
                    </button>
                </div>
            </div>

            <section className='grid auto-rows-max grid-flow-col gap-6 pl-8 pr-8'>
                <div className='p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 row-end-3 row-span-2'>
                    <ScrollReveal>
                        <div className='place-content-between flex items-baseline'>
                            <Titlespan
                                blackText='Add New Course'
                                blueText=''
                                className='text-left mb-4 text-xl font-extrabold'
                            />
                        </div>
                    </ScrollReveal>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>
                        <ScrollReveal className='bg-white cursor-pointer transition-all duration-150'>
                            {!courseData && (
                                <div className="course_Name" id="course_Name">
                                    <input
                                        type="text"
                                        placeholder="Type the Course name here...."
                                        className="input_add_title course_Name pl-3"
                                        name="Coursename"
                                        onChange={CourseTitle}
                                    />
                                </div>
                            )}

                            {/* <div id="act" className="none_display"> */}
                            <div>
                                <div className='w-full h-[250px] flex flex-col items-center justify-center rounded-[20px] overflow-hidden mb-6 bg-EDF5FE p-5'>
                                    <div {...getRootProps()} className="border_dased h-full w-full py-8">
                                        <input {...getInputProps()} />
                                        <div className="flex flex-col items-center justify-center">
                                            <div className='bg-opacity-90 rounded-full h-full '>
                                                <Image
                                                    src='/icons/course-detail/upload.svg'
                                                    alt='blog'
                                                    width={100}
                                                    height={100}
                                                    className='object-contain'
                                                />
                                            </div>
                                            <p className="h-auto">
                                                {isDragActive
                                                    ? "Drop the files here..."
                                                    : "Drag and drop, Press CTRL+V to start uploading your video file, or browse"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Render uploaded videos here */}
                                <ul className="uploaded_video_list">
                                    {courseData &&
                                        courseData.courseSteps.map((step) => (
                                            <VideoItem
                                                key={step.id}
                                                id={step.id}
                                                status="done"
                                                title={step.name}
                                                onTitleChange={handleTitleChanges}
                                                setVideoTitle={(id: number, newTitle: string) =>
                                                    handleTitleChanges(id, newTitle)
                                                }
                                                videoTitle={step.name}
                                                isEditable={true} // Make the title editable for course steps
                                            />
                                        ))}

                                    {uploadedFiles.map((file) => (
                                        <VideoItem
                                            key={file.id}
                                            id={file.id}
                                            file={file.file}
                                            status={file.status}
                                            title={file.title}
                                            onTitleChange={handleTitleChanges}
                                            setVideoTitle={(id: number, newTitle: string) =>
                                                handleTitleChanges(id, newTitle)
                                            }
                                            videoTitle={videoTitles[file.id] || ''}
                                            isEditable={true} // Make the title editable for uploaded files
                                        />
                                    ))}
                                </ul>

                            </div>

                        </ScrollReveal>
                    </div>
                </div>
            </section>


        </Admin_layout>
    );
}
