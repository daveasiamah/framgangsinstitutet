import React, { useRef, useState, useEffect, useCallback, SetStateAction } from "react";
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
import { AiOutlineCheckCircle, AiFillDelete } from 'react-icons/ai';
import {
    course_add,
    video_add,
    course_add_step_2_api,
    admin_get_course_byid,
    getcourseMiniSteps,
    getVideoSizeInMB,
    UpdateCourseStatus,
    UpdateCourse,
    updatecourseMiniSteps,
    deletecourseMiniSteps
} from "../../service/Apis/api";
import { objectType } from "@material-tailwind/react/types/components/checkbox";

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
    VideoItemIndex: number
};
type Props = {};
type CourseData = {
    courseSteps: Array<any>;
};
type FileWithThumbnail = File | null;


export default function Admin_course_detail({ }: Props) {
    const router = useRouter();

    const CourseTitleRef = useRef<HTMLInputElement | null>(null); // Specify the type as HTMLInputElement | null
    const CourseContentRef = useRef<HTMLTextAreaElement | null>(null); // Specify the type as HTMLTextAreaElement | null


    const { locale } = router;
    const t = locale === "en" ? en : sv;

    var edit_course_id_array = router.asPath.split('=');
    var edit_course_id = '';
    if (edit_course_id_array.length == 2) {
        edit_course_id = edit_course_id_array[1];
        localStorage.setItem("courseid", edit_course_id);
    }

    const [courseData, setCourseData] = useState<CourseData | null>(null);
    const [uploadedFiles, setUploadedFiles] = useState<FileWithStatus[]>([]);
    const [olduploadedFiles, setolduploadedFiles] = useState([]);
    const [olduploadedFiles2, setolduploadedFiles2] = useState([]);
    const [CourseTitle1, setCourseTitle1] = useState('');
    const [CourseID, setCourseID] = useState(0);
    const [EditCourseID, setEditCourseID] = useState(edit_course_id);
    const [VisiblePublishButton, setVisiblePublishButton] = useState(false);
    const [CourseContent, setCourseContent] = useState('');
    const [CourseCategory, setCourseCategory] = useState('1');
    const [videoThumbnail, setVideoThumbnail] = useState<FileWithThumbnail>(null);
    const [videoThumbnailURL, setVideoThumbnailURL] = useState<string | null>(null);



    const handleThumbnailDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setVideoThumbnail(file);
            const imageUrl = URL.createObjectURL(file);
            setVideoThumbnailURL(imageUrl);
        }
    }, []);

    // Use separate useDropzone instances for each dropzone

    const thumbnailDropzone = useDropzone({
        onDrop: handleThumbnailDrop, // Accept only image files
    });

    const edit_course = async () => {
        const res: any = await admin_get_course_byid(edit_course_id);
        var data = res.data;
        setVideoThumbnailURL(data.image)
        setCourseTitle1(data.name)
        setCourseContent(data.content)
        setCourseCategory(data.category);

        if (data.courseSteps) {
            if (data.courseSteps[0]) {
                localStorage.setItem("step_2_id", data.courseSteps[0].id);
                const res1: any = await getcourseMiniSteps(edit_course_id, data.courseSteps[0].id);
                var data1 = res1.data.rows;
                await Promise.all(data1.map(async (data1single: objectType, IndexNumber: number) => {
                    var CurrentgetVideoSizeInMB = await getVideoSizeInMB(process.env.FILE_BASE + 'courses/videos/' + data1single.file.name);
                    data1[IndexNumber].fileSize = CurrentgetVideoSizeInMB
                }));
                setolduploadedFiles2(data1);
                setolduploadedFiles(data1);

            }
        }
    };

    const course_add_name = async () => {
        if (CourseTitle1 == '') {
            if (CourseTitleRef.current) {
                CourseTitleRef.current.focus();
            }
            return false;
        }
        if (CourseContent == '') {
            if (CourseContentRef.current) {
                CourseContentRef.current.focus();
            }
            return false;
        }
        const res: any = await course_add(CourseTitle1, CourseContent, CourseCategory, videoThumbnail);
        var data = res.data;
        console.log(data);
        localStorage.setItem("courseid", data.id);

        const res1: any = await course_add_step_2_api(CourseTitle1);
        if (res1.status == 201) {
            var data1 = res1.data;
            localStorage.setItem("step_2_id", data1.id);
            course_add_step_2();
        } else {
            console.log("not add");
        }
    };
    const [nameerr , setnameerr] = useState('');
    const course_update_name = async () => {
        if (CourseTitle1 == '') {
            setnameerr('Kursnamn krävs');
            return false; 
        }
        await UpdateCourse(EditCourseID, CourseTitle1, CourseContent, CourseCategory, videoThumbnail);
        var old_course: any = []
        await Promise.all(olduploadedFiles.map(async (uploadedFile: any) => {
            old_course.push(uploadedFile.id);
            await updatecourseMiniSteps(EditCourseID, uploadedFile.courseStepId, uploadedFile.id, uploadedFile.name, uploadedFile.content);
        }));
        console.log('old_course');
        console.log(old_course);
        await Promise.all(olduploadedFiles2.map(async (uploadedFile: any) => {
            if (!old_course.includes(uploadedFile.id)) {
                await deletecourseMiniSteps(EditCourseID, uploadedFile.courseStepId, uploadedFile.id, uploadedFile.name, uploadedFile.content);
            }

        }));
        await course_add_step_2();
        router.push("/admin_courses");
    }

    const [loading, setLoading] = useState(false);
    // const course_add_step_2 = async () => {
    //     try {
    //         // Set loading to true before making API calls
    //         setLoading(true);
    //     await Promise.all(uploadedFiles.map(async (uploadedFile) => {
    //         try {
    //             const resp = await video_add(uploadedFile);
                
    //             console.log("Response received:", resp);
    //         } catch (error) {
    //             console.error("Error occurred:", error);
    //             await new Promise((resolve) => setTimeout(resolve, 5000));
    //         }
    //     }));
    //     if (olduploadedFiles) {

    //         setVisiblePublishButton(false);
    //     } else {
    //         setVisiblePublishButton(true);
    //     }
    // }finally {
    //     // Set loading to false after API calls are done (whether they succeed or fail)
    //     setLoading(false);
    //   }
    // };

    const course_add_step_2 = async () => {
        try {
            // Set loading to true before making API calls
            setLoading(true);
    
            for (const uploadedFile of uploadedFiles) {
                try {
                    const resp : any = await video_add(uploadedFile);
                    console.log("Response received:", resp);
                    if (resp.status == 201){
                        setVisiblePublishButton(true);
                    }
                } catch (error) {
                    console.error("Error occurred:", error);
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                }
            }
            // if (olduploadedFiles) {
            //     setVisiblePublishButton(false);
            //     alert(1);
            // } else {
            //     alert(0);
                
            // }
        } finally {
            setLoading(false);
        }
    };
    
    

    const backhandle = () => {
    }

    const course_publish = async () => {
        await UpdateCourseStatus(localStorage.getItem("courseid"), 'ACTIVE');
        router.push("/admin_courses");
    }


    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        const filesToAdd: FileWithStatus[] = acceptedFiles.map((file: FileWithPath, index) => ({
            id: index,
            file: file as File,
            status: 'uploading',
            title: file.name,
            content: '',
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
    // console.log(uploadedFiles[0].file.path);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    // const { getRootProps, getInputProps2, isDragActive2 } = useDropzone({ onDrop });

    const handleTitleChanges = (IndexNumber: number, NewTitlte: any) => {
        const uploadedFilesold: any = [...uploadedFiles];
        uploadedFilesold[IndexNumber].title = NewTitlte;
        setUploadedFiles(uploadedFilesold);
    };

    const handleTitleContent = (IndexNumber: number, NewTitlte: any) => {
        const uploadedFilesold: any = [...uploadedFiles];
        uploadedFilesold[IndexNumber].content = NewTitlte;
        setUploadedFiles(uploadedFilesold);
    };

    const handleTitleDelete = (IndexNumber: number) => {
        const uploadedFilesold = [...uploadedFiles];
        uploadedFilesold.splice(IndexNumber, 1);
        setUploadedFiles(uploadedFilesold);
    };



    const handleTitleChanges2 = (IndexNumber: number, NewTitlte: any) => {
        const uploadedFilesold: any = [...olduploadedFiles];
        uploadedFilesold[IndexNumber].name = NewTitlte;
        setolduploadedFiles(uploadedFilesold);
    };

    const handleTitleContent2 = (IndexNumber: number, NewTitlte: any) => {
        const uploadedFilesold: any = [...olduploadedFiles];
        uploadedFilesold[IndexNumber].content = NewTitlte;
        setolduploadedFiles(uploadedFilesold);
    };



    const handleTitleDelete2 = (IndexNumber: number) => {
        const uploadedFilesold: any = [...olduploadedFiles];
        uploadedFilesold.splice(IndexNumber, 1);
        setolduploadedFiles(uploadedFilesold);

    };

    useEffect(() => {
        if (edit_course_id != '') {
            edit_course();
        }
    }, []);
    return (
        <div>
   {loading ? (
  <div className="loader_bg flex items-center justify-center z-[99]">
    <div className="loader6 z-[99]"></div>
  </div>
) : null}
      <Admin_layout headTitle={t.pressData.metaData.title}>
            <div className="course_detail_head mt-14 ml-8 mr-8">
                <button className="back_button" onClick={backhandle} style={{ opacity: '0' }}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0491 20.7109L8.52914 14.1909C7.75914 13.4209 7.75914 12.1609 8.52914 11.3909L15.0491 4.87093" stroke="#0083FF" stroke-width="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="course_detail_head_right">
                    {VisiblePublishButton ?
                        <button className="btn btn-primary text-sm font-semibold shadow-none" onClick={course_publish} id="step_1_add_btn">Publicera</button>
                        :
                        (edit_course_id != '' ?
                            <button className="btn btn-primary text-sm font-semibold shadow-none" onClick={course_update_name} id="step_1_add_btn">Uppdatering</button>
                            :
                            <button className="btn btn-primary text-sm font-semibold shadow-none" onClick={course_add_name} id="step_1_add_btn">Spara</button>
                        )
                    }
                    {/* <button className="btn btn-primary text-sm font-semibold shadow-none" onClick={course_add_name} id="step_1_add_btn">
                            Continue</button>
                    <button className="btn btn-primary text-sm font-semibold shadow-none none_display" id="step_2_add_btn" onClick={course_add_step_2}  >
                        Continue</button>

                    <button
                        className="btn btn-primary text-sm font-semibold shadow-none" onClick={updateCourseData} >
                        Update
                    </button> */}
                </div>
            </div>

            <section className='grid auto-rows-max grid-flow-col gap-6 pl-8 pr-8'>
                <div className='p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 row-end-3 row-span-2'>
                    <ScrollReveal>
                        <div className='place-content-between flex items-baseline'>
                            <Titlespan
                                blackText='Lägg till ny kurs'
                                blueText=''
                                className='text-left mb-4 text-xl font-extrabold'
                            />
                        </div>
                    </ScrollReveal>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>
                        <ScrollReveal className='bg-white cursor-pointer transition-all duration-150'>
                            <div className="course_Name" id="course_Name">
                                <div className="flex gap-3">
                                <div className="flex w-[100%] flex-col">
                                <input
                                    type="text"
                                    placeholder="Type the Course name here...."
                                    className="input_add_title course_Name pl-3 mb-4 "
                                    name="Coursename"
                                    onChange={(e) => setCourseTitle1(e.target.value)}
                                    value={CourseTitle1}
                                    style={{ width: '100%', marginRight: '0.5%' }}
                                    ref={CourseTitleRef}
                                    />
                                    <span className="text-red-600 text-[0.93vw] font-regular pl-[0.5vw]">{nameerr}</span>
                                    </div>
                                <select
                                    className="input_add_title course_Name pl-3 mb-4 "
                                    style={{ width: '100%', marginLeft: '0.5%' }}
                                    onChange={(e) => setCourseCategory(e.target.value)}
                                    value={CourseCategory}
                                >
                                    <option value="1" >Introduktion</option>
                                    <option value="2">Produktforskning</option>
                                    <option value="3">E-handels Infrastruktur</option>
                                    <option value="4">Marknadsföring</option>
                                    <option value="5">Affärsverksamhet</option>
                                    <option value="6">Avslutning</option>
                                </select>
                                </div>
                                <textarea
                                    className="input_add_content course_Name pl-3 mb-4"
                                    onChange={(e) => setCourseContent(e.target.value)}
                                    placeholder="Type the Course content here...."
                                    name="Coursename"
                                    value={CourseContent}
                                    ref={CourseContentRef}
                                ></textarea>

                            </div>

                            {/* <div id="act" className="none_display"> */}
                            <div>
                                <div className='w-full h-[250px] flex flex-col items-center justify-center rounded-[20px] overflow-hidden mb-6 bg-EDF5FE p-5'>
                                    <div {...thumbnailDropzone.getRootProps()} className="border_dased h-full w-full py-8">
                                        <input {...thumbnailDropzone.getInputProps()} />
                                        <div className="flex flex-col items-center justify-center">
                                            {videoThumbnail || videoThumbnailURL ? (
                                                <img
                                                    src={videoThumbnailURL || '/icons/course-detail/upload.svg'}
                                                    alt='video thumbnail'
                                                    width={100}
                                                    height={100}
                                                    className='object-contain'
                                                />
                                            ) : (
                                                <div className='bg-opacity-90 rounded-full h-full '>
                                                    <Image
                                                        src='/icons/course-detail/upload.svg'
                                                        alt='blog'
                                                        width={100}
                                                        height={100}
                                                        className='object-contain'
                                                    />
                                                </div>
                                            )}
                                            <p className="h-auto">
                                                {videoThumbnail || videoThumbnailURL ? (
                                                    <>Dra och släpp för att börja ändra din videominiatyr eller bläddra</>
                                                ) : (
                                                    isDragActive ? "Släpp videominiatyren här..."
                                                        : "Dra och släpp för att börja ladda upp din videominiatyr, eller bläddra"
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                    {olduploadedFiles.map((file: objectType, VideoItemIndex) => (
                                        <li key={file.id} id="li_video">
                                            <div className="li_add" >
                                                <AiFillDelete className="icon_add_course" style={{ color: 'red' }} onClick={(e) => handleTitleDelete2(VideoItemIndex)} />
                                                <div className="admin_list_img overflow-hidden rounded-[16px]">
                                                    <Image src='/images/../card_list4.png' alt="Admin Image" width="100" height="100" />
                                                </div>
                                                {/* <video autoPlay controls className="h-[10vw] w-[15vw] rounded-[1rem] object-cover mt-3 mr-3 mb-3" src={`https://api.checkified.se/public/uploads/courses/videos/${file.file.name}`} /> */}
                                                <div className="video">

                                                    <div className="video_title">
                                                        {file.name}
                                                    </div>
                                                    <div className="video_detail">
                                                        <p>
                                                            {file.fileSize} MB - 100% laddat upp
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                value={file.name}
                                                onChange={(e) => handleTitleChanges2(VideoItemIndex, e.target.value)}
                                                className="course_Name pl-3"
                                                style={{ background: '#ECF4FD', borderRadius: '5px', width: '100%', height: '25px', marginTop: '10px', marginLeft: '30px' }}
                                            />
                                            <textarea
                                                className="input_add_content course_Name pl-3 mb-4"
                                                onChange={(e) => handleTitleContent2(VideoItemIndex, e.target.value)}
                                                placeholder="Type the Course content here...."
                                                name="Coursename"
                                                style={{ background: '#ECF4FD', borderRadius: '5px', marginTop: '10px', marginLeft: '30px' }}
                                                value={file.content}
                                            ></textarea>
                                        </li>

                                    ))}
                                </ul>

                                <ul className="uploaded_video_list">
                                    {uploadedFiles.map((file: any, VideoItemIndex) => (
                                        <li key={file.id} id="li_video">
                                            <div className="li_add" >
                                                <AiFillDelete className="icon_add_course" style={{ color: 'red' }} onClick={(e) => handleTitleDelete(VideoItemIndex)} />
                                                {/* <video autoPlay controls src={URL.createObjectURL(file.file)}/> */}
                                                {/* <video  controls autoPlay muted><source src={URL.createObjectURL(file.file)}/></video> */}
                                                <div className="admin_list_img overflow-hidden rounded-[16px]">
                                                    <Image src='/images/../card_list4.png' alt="Admin Image" width="100" height="100" />
                                                </div>
                                                <div className="video">

                                                    <div className="video_title">
                                                        {file.title}
                                                    </div>
                                                    <div className="video_detail">
                                                        <p>
                                                            {Math.round(file.file.size / 1048576)} MB - 100% laddat upp
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                value={file.title}
                                                onChange={(e) => handleTitleChanges(VideoItemIndex, e.target.value)}
                                                className="course_Name pl-3"
                                                style={{ background: '#ECF4FD', borderRadius: '5px', width: '100%', height: '25px', marginTop: '10px', marginLeft: '30px' }}
                                            />
                                            <textarea
                                                className="input_add_content course_Name pl-3 mb-4"
                                                onChange={(e) => handleTitleContent(VideoItemIndex, e.target.value)}
                                                placeholder="Type the Course content here...."
                                                name="Coursename"
                                                style={{ background: '#ECF4FD', borderRadius: '5px', marginTop: '10px', marginLeft: '30px' }}
                                                value={file.content}
                                            ></textarea>
                                        </li>

                                    ))}
                                </ul>

                            </div>

                        </ScrollReveal>
                    </div>
                </div>
            </section>

        </Admin_layout>
  </div>
        
    );
}
