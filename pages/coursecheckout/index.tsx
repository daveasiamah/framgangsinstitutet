import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactPlayer from "react-player";
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
// import { profiledata } from "@/locales/sv/profilesetting";
import CheckoutForm2 from "@/components/parts/checkoutform2";
import {
  getcourseMiniSteps,
  getVideoSizeInMB,
  getVideoDuration,
  getUserData,
} from "../../service/Apis/api";

import en from "@/locales/en";
import sv from "@/locales/sv";
import Link from "next/link";
import { create_payment } from "@/service/Apis/api";
// import { any } from "video.js/dist/types/utils/events";
import { redirect } from "next/dist/server/api-utils";

type PlayerState = {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
};

type Props = {};

const profileForm = {
  firstName: "Förnamn",
  lastName: "Efternamn",
  streetaddress: "Gatuadress",
  zipcodeNumber: "Postnummer",
  city: "Stad",
  email: "Email",
  country: "Country",
  button: "Skicka",
};
const Checkoutcourse: React.FC<Props> = () => {
  const router = useRouter();
  const VerificationTokenRequest = async () => {
    if (localStorage.getItem("id")) {
      const res: any = await getUserData();
      console.log(res);
      if (res) {
        // var data = res.data.user;
        console.log(res.paymentvalidationId);
        if (res.paymentvalidationId != null) {
          localStorage.setItem("paymentvalidationId", res.paymentvalidationId);
          router.push("/dashboard");
        }
      }
    } else {
      router.push("/signup");
    }
  };

  useEffect(() => {
    VerificationTokenRequest();
  }, []);
  return (
    <Layout headTitle='University Detail'>
      <section className='relative checkoutcourse'>
        <div>
          <ScrollReveal className='  mb-8 rounded-[3rem]'>
            <div className='grid grid-cols-12 max-[1280px]:grid-cols-1 gap-6'>
              <div className=' col-span-7 max-[1280px]:col-span-1 pt-10'>
                <Title blackText='Kassa' blueText='' className='text-left' />
                <p className='mb-6 text-subtitle'>
                  Fyll i formulären för att starta din dropshipping resa
                </p>
                <p className='font-bold mb-4 text-[24px]'>Kontaktinformation</p>
                <CheckoutForm2 profileData={profileForm} />
              </div>
              <div className='flex flex-col col-span-5 max-[1280px]:col-span-1 justify-start items-start bg-EDF5FE mr-[-7vw] pt-10 pl-[2.63vw] pr-[9vw] mb-[-20vw] max-[1280px]:mb-[0vw] max-[1280px]:mr-[0vw] max-[1280px]:pb-[5vw] max-[1280px]:pr-[2.63vw]'>
                <p className='font-bold mb-2 text-[1.38vw] max-[780px]:text-[24px]'>
                  Gå med 150+ handlare som använder Checkified
                </p>
                <p className='mb-6 text-subtitle max-[580px]:text-[16px]'>
                  En utmärkt resurs för att undersöka produkter baserade på data
                </p>
                {/* <p className="mb-6 text-subtitle">Introduction</p> */}
                <div className='p-8 lg:p-8 max-[580px]:p-4 bg-white rounded-t-[28px] gap-8 profile_grid_inner_set_2 w-[451px] max-[1280px]:w-full max-[1280px]:self-center'>
                  <ScrollReveal>
                    <Title
                      blackText={"Summering"}
                      blueText=''
                      className='text-left text-26  title-font-size'
                    />
                  </ScrollReveal>
                  <section className='relative '>
                    <div className='grid grid-cols-1 gap-4 '>
                      <div className='bg-glass-light rounded-2xl'>
                        <div className='flex justify-between items-center py-3 px-4 max-[4800px]:px-1 border_checkout rounded-[6px] job-openings-shadow'>
                          <div className='mega-menu-list items-center flex gap-4 items-start justify-between rounded-lg w-full'>
                            <div className='list-icon rounded-lg flex items-center'>
                              <Image
                                src='/icons/pricing/2-premium.png'
                                alt='Mega menu icon'
                                className='object-contain max-[480px]:w-[12vw]'
                                width={55}
                                height={55}
                                priority
                              />
                              <div className='menu-content'>
                                <h2 className='font-semibold text-left text-[14px] mb-1'>
                                  Checkified
                                </h2>
                                <h3 className='text-left text-xs font-semibold text-151E3A'>
                                  9 997kr :-
                                </h3>
                              </div>
                            </div>

                            <div className='ml-8'>
                              <button
                                type='button'
                                className='btn  w-full btn-primary items-center px-3 py-1 relative overflow-hidden'>
                                <svg
                                  width='32'
                                  height='32'
                                  viewBox='0 0 32 32'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='absolute absolute_obje_position'>
                                  <path
                                    d='M30.1011 16.0353C30.1011 23.7779 23.7942 30.0662 15.9998 30.0662C8.20542 30.0662 1.89844 23.7779 1.89844 16.0353C1.89844 8.29263 8.20542 2.00439 15.9998 2.00439C23.7942 2.00439 30.1011 8.29263 30.1011 16.0353Z'
                                    stroke='url(#paint0_linear_1_2)'
                                    stroke-width='3'
                                  />
                                  <defs>
                                    <linearGradient
                                      id='paint0_linear_1_2'
                                      x1='15.9998'
                                      y1='-16.4602'
                                      x2='15.9998'
                                      y2='24.987'
                                      gradientUnits='userSpaceOnUse'>
                                      <stop stop-color='white' />
                                      <stop
                                        offset='1'
                                        stop-color='white'
                                        stop-opacity='0'
                                      />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <svg
                                  width='32'
                                  height='32'
                                  viewBox='0 0 32 32'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='absolute absolute_obje_position2'>
                                  <ellipse
                                    cx='15.6013'
                                    cy='15.5309'
                                    rx='15.6013'
                                    ry='15.5309'
                                    fill='url(#paint0_linear_2_3)'
                                  />
                                  <defs>
                                    <linearGradient
                                      id='paint0_linear_2_3'
                                      x1='18.2435'
                                      y1='45.5719'
                                      x2='18.2435'
                                      y2='7.36134'
                                      gradientUnits='userSpaceOnUse'>
                                      <stop stop-color='white' />
                                      <stop
                                        offset='0.935323'
                                        stop-color='white'
                                        stop-opacity='0'
                                      />
                                    </linearGradient>
                                  </defs>
                                </svg>

                                <div className='flex justify-center items-center w-full'>
                                  <div className='ml-2 text-white font-semibold font-sans relative text-sm'>
                                    Premium
                                  </div>
                                  <Image
                                    src='/icons/profile-setting/chargeicon-1.png'
                                    className='relative border buttton_img_pro_setting border-white rounded-full ml-2'
                                    width='22'
                                    height='22'
                                    alt='Facebook'
                                    priority
                                  />
                                </div>
                              </button>
                              {/* <button
                                                                    type="button"
                                                                    className="btn  w-full btn-white items-center px-3 py-1 relative overflow-hidden"
                                                                >
                                                                    <div className="flex justify-center items-center w-full">
                                                                        <div className="ml-2 text-primary font-semibold font-sans relative text-sm">
                                                                        Premium 
                                                                        </div>
                                                                    </div>
                                                                </button> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='bg-glass rounded-[10px]'>
                        <div
                          key=''
                          className='py-2 px-4 border_checkout rounded-[6px]'>
                          <div className=' flex relative justify-between'>
                            <input
                              type='text'
                              placeholder='Rabattkod'
                              className='py-2 px-2 rounded-lg text-subtitle-dark focus:outline-primary bg-transparent placeholder-subtitle text-sm'
                            />
                            <button className='btn !bg-base-200 border-none pr-8 pl-8 pt-0 pb-0 right-0 text-primary hover:bg-primary hover:text-primary hover:border-primary text-xs text-semibold max-[580px]:ml-[-30vw]'>
                              Tillämpa
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className='bg-glass-border px-2 rounded-[10px]'>
                        <div
                          key=''
                          className='flex justify-between items-center  px-2 rounded-2xl'>
                          <div className='list-icon rounded-lg bg-transparent'>
                            <h2 className='font-semibold  text-xs'>Totalt</h2>
                          </div>

                          <div>
                            <h2 className=' font-bold text-xs'>9 997kr</h2>
                          </div>
                        </div>
                      </div>
                      <div className='bg-glass-border px-2 rounded-[10px]'>
                        <div
                          key=''
                          className='flex justify-between items-center px-2 rounded-2xl '>
                          <div className='list-icon rounded-lg bg-transparent'>
                            <h2 className='font-semibold  text-xs'>Rabatt</h2>
                          </div>

                          <div>
                            <h2 className=' font-bold text-xs'>-</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className='p-8 lg:p-8 bg-primary rounded-b-[28px] gap-8 profile_grid_inner_set_2 w-[451px] max-[1280px]:w-full max-[1280px]:self-center'>
                  <section className='relative '>
                    <div className='grid grid-cols-1 gap-4 '>
                      <div className=' px-2 rounded-[10px]'>
                        <div
                          key=''
                          className='flex justify-between items-center  px-2 rounded-2xl'>
                          <div className='list-icon rounded-lg bg-transparent'>
                            <h2 className=' text-white font-medium  text-md'>
                              Delsumma
                            </h2>
                          </div>

                          <div>
                            <h2 className='text-white font-medium text-md'>
                              9 997kr
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CacingOne
        positionClassName='left-[79.5vw] 2xl:left-[84vw] rotate-[-89deg] top-[37rem]'
        sizeClassName='w-[24rem] h-[24rem]'
        className='z-[1]'
      />
    </Layout>
  );
};

export default Checkoutcourse;
