import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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

import { activecourse, get_user } from "../../service/Apis/api";

import en from "@/locales/en";
import sv from "@/locales/sv";
import Link from "next/link";

type Props = {};
interface Course {
  id: string; // or whatever type 'id' should be
  // Other properties of the course object
}

export default function University({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const [AllCourses, setAllCourses] = useState([]);
  const [Signin, setSignin] = useState(false);
  const [payment, setpayment] = useState(false);
  const [AllCourses2, setAllCourses2] = useState<Course[]>([]);
  const [AllCourses3, setAllCourses3] = useState<Course[]>([]);

  const get_course = async () => {
    var res: any = [];
    res = await activecourse(7, 1);
    if (res.status == 200) {
      var data = res.data;
      setAllCourses(data.rows.splice(6));
      setAllCourses3(data.rows);
    } 
  };
  useEffect(() => {
    if (localStorage.getItem("id")) {
      setSignin(true);
    } else {
      setSignin(false);
    }
    const get_check = async () => {
      const res : any = await get_user(); 
      if (!res.data.paymentvalidationId && res.data.role == 'USER') {
        // router.push("/coursecheckout");
        setpayment(false);
      } else {

        setpayment(true);
      }
    }
    // if (localStorage.getItem("paymentvalidationId")) {
    // } else {
    // }
    get_check();
  }, []);

  const get_course2 = async () => {
    var res: any = [];
    res = await activecourse(7, 1);
    if (res.status == 200) {
      var data = res.data;
      setAllCourses2(data.rows);
    }
  };

  useEffect(() => {
    get_course();
    get_course2();
    console.log(AllCourses3);
  }, []);

  return (
    <Layout headTitle={t.universityData.metaData.title}>
      <section className="relative py-6 lg:py-12 mb-16">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-12rem] 2xl:right-[-10rem] top-[-30px]"
          className="svg-white"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[-1rem] lg:left-[8rem]" />
        <UserBadge
          positionClassName="top-0 lg:top-[1rem] right-[-1rem] lg:right-[12rem]"
          colorClassName="bg-white text-primary"
        />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[20rem] lg:top-[14rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.universityData.superiorBlackTitle}
            blueText={t.universityData.superiorBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.universityData.superiorSubtitle}
          </p>
        </ScrollReveal>
        <div className="relative mt-[260px] lg:mt-[400px] mastery-ecommerce-container">
          <Image
            src="/images/university/flying-men.png"
            alt="flying men"
            height={520}
            width={520}
            className="absolute object-contain mx-auto top-[-16rem] md:top-[-18rem] lg:-top-[20rem] md:scale-[0.7] lg:scale-100 left-1/2 transform -translate-x-1/2 z-[1]"
          />
          <div className="bg-primary flex flex-col gap-2 md:gap-10 lg:flex-row text-white p-8 lg:pt-20 lg:pb-10 lg:px-10 rounded-3xl lg:rounded-[3rem] isolate">
            <ScrollReveal className="w-full lg:w-3/5">
              <Title
                blackText={t.universityData.masteringTitle}
                className="text-left"
              />
              <p className="text-left mb-4">
                {t.universityData.masteringSubtitleFirst}
              </p>
              <p className="text-left">
                {t.universityData.masteringSubtitleSecond}
              </p>
              <ButtonArrow href="/signup" isReverse className="mt-10 z-10">
                {t.universityData.masteringButton}
              </ButtonArrow>
            </ScrollReveal>

            <div className="h-[300px] lg:mt-0 w-full lg:w-2/5 relative">
              <Image
                src="/images/university/whatever-men.png"
                alt="checkified university"
                width={500}
                height={600}
                className="absolute max-h-full object-contain left-1/2 transform -translate-x-1/2 bottom-0 md:-bottom-2 lg:-bottom-10 xl:bottom-0 scale-[1.5] lg:scale-[1.5]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div>
          <ScrollReveal className="w-full lg:w-3/5">
            <Title
              blackText={t.universityData.coursetitle}
              className="text-left mb-2_cmargin"
            />
            <p className="mb-6 text-subtitle">
              {t.universityData.coursesubtitle}
            </p>
          </ScrollReveal>
          {AllCourses.map((file: any, VideoItemIndex) => (
            <ScrollReveal
              className="bg-base-200 p-8 lg:p-10 mb-16 rounded-[3rem]"
              key={VideoItemIndex}
            >
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-12">
                <div className="relative  h-[26vw] max-sm:h-[47vw] rounded-[3rem] overflow-hidden">
                  {file.image ? (
                    <img
                      src={file.image}
                      className=" w-[100%] object-cover h-[100%]"
                    />
                  ) : (
                    <img src="/card-1.png" className=" w-[100%] object-cover" />
                  )}

                  <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-sm:w-[12vw] max-sm:h-[12vw] w-[4vw] h-[4vw] flex justify-center items-center rounded-full opacity-[70%]">
                    <img src="/play.png" className="max-sm:w-[4vw] w-[1vw]" />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <Title
                    blackText="Checkified -"
                    // blueText={file.name}

                    className="text-left"
                  >
                    {file.name.split(" ").map((word: any, index: any) => {
                      if (word === "Frihet") {
                        return (
                          <span key={index} style={{ color: "#0083ff" }}>
                            {word + " "}
                          </span>
                        );
                      }
                      return <span key={index}>{word + " "}</span>;
                    })}
                  </Title>

                  <p className="mb-6 text-subtitle">{file.content}</p>
                  <Link
                    href={"/course/" + file.name}
                    className="mt btn btn-primary w-full lg:w-auto"
                  >
                    {t.universityData.btntext}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative ">
        <div>
          <ScrollReveal className="w-full lg:w-3/5">
            <Title
              blackText={t.universityData.tutorialsTitle}
              className="text-left mb-2_cmargin"
            />
            <p className="mb-6 text-subtitle">
              {t.universityData.tutorialssubTitle}
            </p>
          </ScrollReveal>
          <ScrollReveal className="mb-16 rounded-[3rem]">
            <div className="tutorial_list grid max-sm:grid-cols-1 grid-cols-3 gap-12 mb-12">
              {AllCourses3.map((file: any, VideoItemIndex) => (
                <Link key={VideoItemIndex}
                  href={
                    VideoItemIndex < 1
                      ? `/course/${file.name}`                      
                      : Signin
                      ? payment
                        ?
                        `/course/${file.name}`
                        : "/coursecheckout"
                      : "/signup"
                  }
                >
                  <div className="grid grid-cols-1 rounded-[3rem] bg-base-200 overflow-hidden">
                    <div className="relative overflow-hidden z-[0]">
                      <img
                        src={file.image}
                        className={`w-[100%] max-sm:h-[53vw] h-[16vw] object-cover `+ 
                        
                        (VideoItemIndex < 1
                            ? ``
                            
                            : Signin
                            ? payment
                              ?
                              ``
                              : "lock_img_img"
                            : "lock_img_img"
              )}
                      />
                      {
                    VideoItemIndex < 1
                      ? ""
                      : Signin
                      ? payment
                        ?
                        ""
                        : <div className="top-[50%] left-[50%] translate-[50%] absolute lock_img"><img
                        src="/cover/padlock.png"
                        className=" w-[100%]  object-cover"/></div>
                      : <div className="top-[50%] left-[50%] translate-[50%] absolute lock_img"><img
                      src="/cover/padlock.png"
                      className=" w-[100%]  object-cover"
                    /></div>
                  }
                      
                    </div>
                    <div className="z-[0] max-sm:mt-[-6.75vw] mt-[-1.75vw] bg-white max-sm:w-[13.5vw] max-sm:h-[13.5vw] w-[3.5vw] h-[3.5vw] flex justify-center items-center rounded-full ml-10">
                      <img src="/play.png" className="max-sm:w-[4vw] w-[1vw]" />
                    </div>
                    <div className="pt-3 max-sm:pl-[9vw] pl-[3vw] pb-4">
                      <p className="mb-2 text-mainsubtitle max-sm:text-[4.85vw] text-[1.85vw]">
                        {file.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-6 lg:py-12 mb-16">
        <CacingTwo
          positionClassName="right-[-16rem] rotate-[10deg] top-[18rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[1] hidden lg:block"
        />

        <ScrollReveal className="bg-base-200 p-8 lg:p-10 mb-16 rounded-[3rem]">
          <Title
            blackText={t.universityData.joinBlackTitle}
            blueText={t.universityData.joinBlueTitle}
            isBlock
            className="text-left"
          />

          <p className="mb-6 text-subtitle">
            {t.universityData.joinSubtitleFirst}
          </p>
          <p className="text-subtitle">{t.universityData.joinSubtitleSecond}</p>
          <Link
            href="/signup"
            className="mt-10 btn btn-primary w-full lg:w-auto"
          >
            {t.universityData.joinButton}
          </Link>
        </ScrollReveal>
      </section>

      <section className="our-culture-container obj_fix bg-primary rounded-[2rem] p-6 lg:p-12 text-white relative mb-16 lg:mb-20">
        <div className="absolute w-full inset-0 h-[300px] lg:w-[500px] lg:h-[500px] -top-16 lg:-top-6 xl:-top-20">
          <Image
            src="/images/university/glass-men.png"
            alt="stats"
            fill
            className="absolute object-contain"
          />
        </div>

        <ScrollReveal className="w-full lg:w-3/5 bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:ml-auto mt-52 lg:mt-0">
          <h2 className="text-[32px] leading-[1.1] lg:text-[40px] mb-4 font-bold">
            {t.universityData.cultureTitle}
          </h2>
          <p className="mb-6">{t.universityData.cultureSubtitleFirst}</p>
          <p>{t.universityData.cultureSubtitleSecond}</p>
        </ScrollReveal>
      </section>

      <section className="relative z-[1] flex flex-col lg:flex-row items-center bg-base-200 rounded-3xl p-6 lg:p-10 mb-16 lg:mb-20">
        <ScrollReveal className="w-full lg:w-2/3">
          <Title
            blackText={t.universityData.modernBlackTitle}
            blueText={t.universityData.modernBlueTitle}
            className="mx-auto"
          />

          <p className="text-subtitle">
            {t.universityData.modernSubtitleFirst}
          </p>
          <p className="text-subtitle mt-4 mb-10">
            {t.universityData.modernSubtitleSecond}
          </p>
          {/* <ButtonArrow> {t.universityData.modernButton}</ButtonArrow> */}
        </ScrollReveal>
        <div className="h-[340px] w-full lg:w-2/5 relative">
          <div className="w-[280px] h-[280px] lg:w-[500px] lg:h-full absolute bottom-10 lg:bottom-[5%] left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/university/thinking-men.png"
              alt="stats"
              fill
              className="object-contain mx-auto mt-4"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate bg-primary text-white p-6 lg:px-10 lg:py-20 mb-16 lg:mb-20 rounded-[3rem] text-center lg:text-left">
        <LineGraphic
          positionClassname="right-[-12rem] lg:right-[-8rem] 2xl:right-[-10rem] bottom-[-4rem]"
          className="svg-white"
        />
        <FadeLogo
          positionClassName="left-[-2rem] bottom-[-2rem]"
          svgClassname="svg-white-opacity"
          sizeClassName="w-[20rem] h-[20rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.universityData.takeYourTitle}
            isBlock
            className="text-[24px]"
          />
          <ButtonArrow href="/signup" isReverse className="mt-0 lg:mt-4">
            {t.universityData.takeYourButton}
          </ButtonArrow>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
