import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactPlayer from 'react-player';
import Layout from "@/components/Layout";
import Title from "@/components/parts/Title";
import ButtonArrow from "@/components/parts/ButtonArrow";
import ShieldBadge from "@/components/graphic/ShieldBadge";
import UserBadge from "@/components/graphic/UserBadge";
import BlurCircle from "@/components/graphic/BlurCircle";
import LineGraphic from "@/components/graphic/LineGraphic";
import CacingOne from "@/components/graphic/CacingOne";
import CacingTwo from "@/components/graphic/CacingTwo";
import FadeLogo from "@/components/graphic/FadeLogo";
import ScrollReveal from "@/components/transition/ScrollReveal";

import {
    getcourseMiniSteps,
    getVideoSizeInMB,
    getVideoDuration
} from "../../service/Apis/api";

import en from "@/locales/en";
import sv from "@/locales/sv";
import Link from "next/link";


type PlayerState = {
    isPlaying: boolean;
    progress: number;
    speed: number;
    isMuted: boolean;
};

type Props = {};

const useVideoPlayer = (videoElement: React.RefObject<HTMLVideoElement>) => {
  
    const [playerState, setPlayerState] = useState<PlayerState>({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
            ? videoElement.current?.play()
            : videoElement.current?.pause();
    }, [playerState.isPlaying, videoElement]);

    const handleOnTimeUpdate = () => {
        const progress =
            (videoElement.current!.currentTime / videoElement.current!.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        });
    };

    const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
        const manualChange = Number(event.target.value);
        videoElement.current!.currentTime =
            (videoElement.current!.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const speed = Number(event.target.value);
        videoElement.current!.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        });
    };

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    useEffect(() => {
        playerState.isMuted
            ? (videoElement.current!.muted = true)
            : (videoElement.current!.muted = false);
    }, [playerState.isMuted, videoElement]);

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    };
};

const Courseplayer: React.FC<Props> = () => {
    const router = useRouter();

    const { locale } = router;
    const t = locale === "en" ? en : sv;

    var edit_course_id_array = router.asPath.split('=');
    var edit_course_id = '';
    if (edit_course_id_array.length == 2) {
        edit_course_id = edit_course_id_array[1];
    }
    const [payment, setpayment] = useState(false);
    const [issign, setissign] = useState(false);
    useEffect(() => {
    //   if (typeof window !== "undefined") {
    //     const role = localStorage.getItem("paymentvalidationId");
    //     // console.log("role found :- " + role);
    //     if (role !== 'null') {
    //       setpayment(true);
    //     } else {
    //       setpayment(false);
    //     }
    //   }
      if (typeof window !== "undefined") {
        const role = localStorage.getItem("id");
        // console.log("role found :- " + role);
        if (role) {
          setissign(true);
        } 
      }
    }, []);
    const [EditCourseMiniStpeID, setEditCourseMiniStpeID] = useState(edit_course_id);
    const [EditCourseID, setEditCourseID] = useState('');
    const [Step2ID, setStep2ID] = useState('');
    const [CoursesVideoData, setCoursesVideoData] = useState([]);
    const [DefaultVideoPath, setDefaultVideoPath] = useState('');
    const [NextVideo, setNextVideo] = useState('');
    const [NextVideoURL, setNextVideoURL] = useState('');

    const videoElement = useRef<HTMLVideoElement>(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    } = useVideoPlayer(videoElement);
    const toggleFullScreen = () => {
        const element = videoElement.current;
        if (element) {
            if ((element as any).requestFullscreen) {
                (element as any).requestFullscreen();
            } else if ((element as any).mozRequestFullScreen) {
                (element as any).mozRequestFullScreen();
            } else if ((element as any).webkitRequestFullscreen) {
                (element as any).webkitRequestFullscreen();
            } else if ((element as any).msRequestFullscreen) {
                (element as any).msRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const edit_course = async () => {
            const res1: any = await getcourseMiniSteps(localStorage.getItem("courseid"), localStorage.getItem("step_2_id"));
            var data1 = res1.data.rows;
            var isopennexturl = 0;
            await Promise.all(data1.map(async (data1single: any, IndexNumber: number) => {
                var CurrentgetVideoSizeInMB = await getVideoSizeInMB(process.env.FILE_BASE + 'courses/videos/' + data1single.file.name);
                data1[IndexNumber].fileSize = CurrentgetVideoSizeInMB;
                if (isopennexturl == 1) {
                    setNextVideo(data1single.name)
                    console.log(data1single.name)
                    setNextVideoURL('/video?video=' + data1single.id);
                    isopennexturl = 0;
                }
                if (data1single.id == EditCourseMiniStpeID) {
                    // alert('sdfv');
                    setDefaultVideoPath('https://api.checkified.se/public/uploads/courses/videos/' + data1single.file.name)
                    isopennexturl = 1;
                }
            }));
            setCoursesVideoData(data1);
        };
       edit_course();
    }, []);
    const handleLinkClick = (url:string) => {
        const newUrl = url;
        window.location.href = newUrl; 
      };
    // console.log(NextVideo);

    return (
        <Layout headTitle="University Detail">
            <section className="relative mt-10">
                <div>
                    <ScrollReveal className="  mb-8 rounded-[3rem]">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="video_player col-span-7">
                                <div className="relative  h-[26vw] rounded-[1rem] overflow-hidden">
                                    <div className="video-wrapper">

                                        <video controls
                                            src={DefaultVideoPath} // Replace 'video' with your video source
                                            ref={videoElement}
                                            onTimeUpdate={handleOnTimeUpdate}
                                        //   controls
                                        />
                                        
                                    </div>
                                    {!playerState.isPlaying ? (
                                        <div onClick={togglePlay} className="cursor-pointer absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[4vw] h-[4vw] flex justify-center items-center rounded-full opacity-[70%]"><img src="/play.png" className="w-[1.25vw]" /></div>
                                    ) : (
                                        <></>
                                    )}

                                </div>
                                {/* <p className="font-semibold font_size_24 mt-10 mb-5">Welcome</p> */}
                                {CoursesVideoData.map((file: any, VideoItemIndex) => (
                                    (file.id == EditCourseMiniStpeID ?
                                        <>
                                            <p className="font-semibold font_size_24 mt-10 mb-5">{file.name}</p>
                                            <p className="mb-6 text-subtitle">
                                                {file.content}
                                            </p>
                                        </>
                                        :
                                        <></>
                                    )
                                ))}
                                <hr />
                                {NextVideo ?
                                    <>
                                        <p className="font-bold font_size_24 mt-5 mb-5">Strax</p>
                                        <div className="grid grid-cols-1 gap-6 mb-6 w-full">
                                            <ScrollReveal
                                                className="flex justify-start items-center gap-5 bg-base-200 rounded-[0.75rem] overflow-hidden"
                                            >
                                                <div className="relative  h-[7vw]  overflow-hidden">
                                                    <img src="/card-1.png" className=" w-[100%] object-contain" />
                                                    <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[3vw] h-[3vw] flex justify-center items-center rounded-full opacity-[70%]"><img src="/play.png" className="w-[1vw]" /></div>
                                                </div>
                                                <p className="font-bold font_size_24"><Link href={NextVideoURL}>{NextVideo}</Link></p>
                                            </ScrollReveal>
                                        </div>
                                    </>
                                    :
                                    <></>
                                }
                            </div>
                            <div className="flex flex-col col-span-5 justify-start items-start">
                                <Title
                                    blackText='Kurs'
                                    blueText='Avsnitt'
                                    className="text-left mb-2_cmargin"
                                />
                                {/* <p className="mb-6 text-subtitle">Introduction</p> */}
                                {CoursesVideoData.map((file: any, VideoItemIndex) => (
                                    <div className="grid grid-cols-1 gap-6 mb-6 w-full" key={VideoItemIndex}>
                                        <ScrollReveal
                                            className="flex justify-between items-center bg-base-200 py-6 px-8 rounded-[0.75rem]"
                                        >
                                            <p className="font-bold font_size_24" style={{ fontSize: '18px' }}>
                                                {
                                                
                                                payment || VideoItemIndex < 2 ?
                                                <Link href={"/video?video=" + file.id} onClick={()=> handleLinkClick("/video?video=" + file.id)}> {file.name} </Link>
                                                :
                                                <Link href={issign ? "/coursecheckout" : "/signin"}> {file.name} </Link>
                                                }
                                            </p>
                                        </ScrollReveal>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </Layout>
    );
};

export default Courseplayer;
