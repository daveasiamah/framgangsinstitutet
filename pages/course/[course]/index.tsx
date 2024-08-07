import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { MdKeyboardArrowRight } from "react-icons/md"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import ButtonArrow from "@/components/parts/ButtonArrow"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import CacingTwo from "@/components/graphic/CacingTwo"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal"

import {
  admin_get_course_byid,
  getcourseMiniSteps,
  getVideoSizeInMB,
  getVideoDuration
} from "../../../service/Apis/api";

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {}
interface CourseData {
  image: string;
  name: string;
  content: string;
  courseSteps: {
    id: string;
  }[];
}
export default function University_Detail({ }: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const [edit_course_id2, setedit_courseid] = useState('');

  var edit_course_id = '';
  useEffect(() => {
    const { course } = router.query;
    // console.log(course);
    var edit_course_id_array = router.asPath.split('/');
    // console.log(edit_course_id_array);
    if (edit_course_id_array.length === 3) {
         edit_course_id = edit_course_id_array[2];
      setedit_courseid(edit_course_id);
      // console.log(edit_course_id);
    }
  }, [router.asPath]);
  const [EditCourseID, setEditCourseID] = useState(edit_course_id);
  const [Step2ID, setStep2ID] = useState();
  const [payment, setpayment] = useState(true);
  const [issign, setissign] = useState(false);
  const [CoursesData, setCoursesData] = useState<CourseData | null>(null);
  const [CoursesVideoData, setCoursesVideoData] = useState([]);
  const [VideoLength, setVideoLength] = useState(0);
  useEffect(() => {
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === 'null') {
      setpayment(false);
    }

    if(!role) {
      setpayment(false);
    }
  }
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("id");
    // console.log("role found :- " + role);
    if (role) {
      setissign(true);
    } 
  }
}, []);
const [videoduration, setvideoduration] = useState(0);
  const edit_course = async () => {
    const res: any = await admin_get_course_byid(edit_course_id2);
    if (res) {
      if (res.status == 200){
      console.log(typeof(res.data.id));
      if (!localStorage.getItem("id")) {
      if ("22956f6b-991b-4ac6-947d-3fd5d69738d1" !== res.data.id){
        router.push("/signup");
      }
      }
    }
    }
    if (res.data){
    var data = res.data;
    let time = 0;
    data.courseSteps[0].courseMiniSteps.map((video:any)=> (
      time = time + Number(video.file.durationInSeconds)
    ));
    if (time > 0) {
      setvideoduration(time);
    }
    console.log(time);
    console.log(data.courseSteps[0].courseMiniSteps);
    setEditCourseID(data.id);
    setCoursesData(data);
    if (data.courseSteps) {
      if (data.courseSteps[0]) {
        localStorage.setItem("step_2_id", data.courseSteps[0].id);
        setStep2ID(data.courseSteps[0].id);
        const res1: any = await getcourseMiniSteps(edit_course_id2, data.courseSteps[0].id);
        if (res1.data) {
        var data1 = res1.data.rows;
        var SumVideoLength = 0;
        await Promise.all(data1.map(async (data1single: any, IndexNumber: number) => {
          var CurrentgetVideoSizeInMB = await getVideoSizeInMB('https://api.checkified.se/public/uploads/courses/videos/' + data1single.file.name);
          SumVideoLength = SumVideoLength + await getVideoDuration('https://api.checkified.se/public/uploads/courses/videos/' + data1single.file.name);
          data1[IndexNumber].fileSize = CurrentgetVideoSizeInMB
        }));
        SumVideoLength = SumVideoLength;
        setCoursesVideoData(data1);
        console.log(data1);
        setVideoLength(SumVideoLength);
        }
      }
    }
  }
  };
  const videoredirection = async (CourseID:any, Step2ID:any, MiniStepID:any, filename:any) => {
    localStorage.setItem("courseid", CourseID);
    localStorage.setItem("step_2_id", Step2ID);
    localStorage.setItem("MiniStepID", MiniStepID);
    router.push('/video/' + filename)
    // router.push('/signup');
  };
  useEffect(() => {
      // console.log(edit_course_id2);
    if (edit_course_id2 != '' && edit_course_id2 != '[course]') {
      edit_course();
    } else {
    //   router.push('/')
    }
  }, [edit_course_id2]);

    console.log(edit_course_id2);

  // console.log(CoursesData);

  return (
    <Layout headTitle="University Detail">
      <section className="relative mt-10">
        <div>
          <ScrollReveal className="bg-base-200 p-8 lg:p-10 mb-8 rounded-[3rem]">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-12">
              <div className="relative  h-[26vw] max-sm:h-[47vw]  rounded-[3rem] overflow-hidden">
                {CoursesData && (
                  <>
                    {CoursesData.image ? (
                      <img src={CoursesData.image} className=" w-[100%] h-[100%] object-cover" />
                    ) : (
                      <img src="/card-1.png" className=" w-[100%] h-[100%] object-cover" />
                    )}
                    {/* Rest of your code that uses CoursesData */}
                  </>
                )}
                <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[4vw] h-[4vw] max-sm:w-[12vw] max-sm:h-[12vw] flex justify-center items-center rounded-full opacity-[70%]"><img src="/play.png" className="w-[1.25vw] max-sm:w-[4vw]" /></div>
              </div>
              <div className="flex flex-col justify-center items-start">
                {CoursesData && (
                  <>
                    {CoursesData.name ? (
                      <Title
                        blackText='Checkified'
                        blueText={CoursesData.name}
                        isBlock
                        className="text-left"
                      />
                    ) : (
                      <span>Ingen kurs tillgänglig</span>
                    )}
                  </>
                )}
                <p className="mb-6 text-subtitle">
                  {CoursesData && (
                    <>
                      {CoursesData.content}
                    </>
                  )}
                </p>
                {CoursesVideoData.map((file: any, VideoItemIndex) => (
                  (VideoItemIndex == 0 ?
                    <button
                      onClick={() => videoredirection(EditCourseID, Step2ID, file.id, file.name)}
                      className="mt btn btn-primary w-full lg:w-auto"
                      key={VideoItemIndex}
                    >
                      Titta Kurs
                    </button>
                    :
                    <></>
                  )
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative mt-10">
        <ScrollReveal className="pt-8 lg:pt-10 rounded-[3rem]">
          <div className="grid max-sm:grid-cols-1 grid-cols-11  gap-12 ">
            <div className="p-4 lg:p-6 bg-base-200 rounded-[1rem]  col-span-3 max-sm:col-span-1 h-fit">
              <p className="font-bold mb-4">Summering</p>
              <div className="flex justify-between">
                <p className="mb-3 text-subtitle">
                  Video
                </p>
                <p className="mb-3 text-subtitle">{CoursesVideoData.length}</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-6 text-subtitle">
                Längd
                </p>
                <p className="mb-6 text-subtitle">{(videoduration / 60 / 60).toFixed(0)}hr {(videoduration / 60).toFixed(0)}min </p>
              </div>
              <div>
                {CoursesVideoData.map((file: any, VideoItemIndex) => (
                  (VideoItemIndex == 0 ?
                    <button
                      onClick={() => videoredirection(EditCourseID, Step2ID, file.id, file.name)}
                      className="mt btn btn-primary w-full"
                      key={VideoItemIndex}
                    >
                      Titta på kurs
                    </button>
                    :
                    <></>
                  )
                ))}
              </div>
            </div>
            <div className="col-span-8 max-sm:col-span-1">
              <section className="relative ">

                <ScrollReveal>
                  <Title blackText="" blueText={t.universityData.courseoutline} className="mb-2_cmargin" />
                  <p className="mb-6 text-subtitle">
                    {/* Introduction */}
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-1  gap-6 mb-6">
                  {CoursesVideoData.map((file: any, VideoItemIndex) => (
                    (VideoItemIndex < 3 ?
                      <ScrollReveal

                        className="flex justify-between items-center bg-base-200 py-4 px-8 rounded-2xl" key={VideoItemIndex}
                      >
                        <p className="font-bold">{file.name}</p>
                        {/* <Link href={"/video?video="+file.id}> */}
                        <button
                          className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-6`}
                          onClick={() => videoredirection(EditCourseID, Step2ID, file.id, file.name)}
                        >
                          <span className="hidden lg:inline">Kolla Nu</span>
                          <MdKeyboardArrowRight
                            className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
                            size={34}
                          />
                        </button>
                        {/* </Link> */}
                      </ScrollReveal>
                      :
                      <></>
                    )
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6">
                {CoursesVideoData.map((file: any, VideoItemIndex) => (
  // Check if VideoItemIndex is greater than 2
  VideoItemIndex > 2 ? (
    <ScrollReveal
      className="flex justify-between items-center bg-base-200 py-4 px-8 rounded-2xl"
      key={VideoItemIndex} // Added a unique key prop
    >
      <p className="font-bold">{file.name}</p>
      {payment ? (
        <button
          className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-6`}
          onClick={() => videoredirection(EditCourseID, Step2ID, file.id, file.name)}
        >
          <span className="hidden lg:inline">Kolla Nu
</span>
          <MdKeyboardArrowRight
            className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2 `}
            size={34}
          />
        </button>
      ) : (<div className="text-end text-xs">
          Avsnittet är låst,  
        <Link href={issign == true   ? "/coursecheckout" : "/signup"}>
          {/* <button
            className={`btn btn-outline btn-icon border-2 border-primary text-primary px-2 lg:pr-2 lg:pl-4`}
          > */}
            <span className=" text-primary inline font-medium ">&nbsp;{issign == true   ? "prenumerera" : "registrera dig"}&nbsp;
</span>
            {/* <MdKeyboardArrowRight
              className={`bg-primary text-white lg:p-1 rounded-lg lg:ml-2`}
              size={34}
            /> */}
          {/* </button> */}
        </Link>
          för att komma åt det
        </div>
      )}
    </ScrollReveal>
  ) : (
    <React.Fragment key={VideoItemIndex} /> // Use React.Fragment to return nothing
  )
))}

                </div>
              </section>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
