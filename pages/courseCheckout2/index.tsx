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
// import { profiledata } from "@/locales/sv/profilesetting";
import CheckoutForm2 from "@/components/parts/checkoutform2";
import ProfilePayForm from "@/components/parts/ProfilePayment";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profilepaymentdata } from "@/locales/sv/profilepayment";
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
const Checkoutcourse2: React.FC<Props> = () => {



    return (
        <Layout headTitle="University Detail" >
            <section className="relative checkoutcourse">
                <div>
                    <ScrollReveal className="  mb-8 rounded-[3rem]">
                        <div className="grid grid-cols-12 gap-6">
                            <div className=" col-span-7 pt-10 checkout_step_2">
                                <Title
                                    blackText='Start'
                                    blueText='Trial'

                                    className="text-left mb-2_cmargin"
                                />
                                <p className="mb-6 text-subtitle">
                                    Fill the forms to start your free trial
                                </p>
                                <div className="flex custom_border_checkout rounded-t-[8px] justify-between py-[0.48vw] px-[1.38vw]">
                                    <div className="flex gap-4"><div className="leading-[2.36vw] text-[1.04vw] text-subtitle">Contact</div><div className="leading-[2.36vw] text-[1.04vw] text-black font-normal">info@checkified.se</div></div>
                                    <div className=""><button className="text-[1.04vw] text-subtitle">Change</button></div>
                                </div>
                                <div className="mb-8 flex custom_border_checkout custom_border_checkout2 rounded-b-[8px] justify-between py-[0.48vw] px-[1.38vw]">
                                    <div className="flex gap-4"><div className="leading-[2.36vw] text-[1.04vw] text-subtitle">Contact</div><div className="leading-[2.36vw] text-[1.04vw] text-black font-normal">info@checkified.se</div></div>
                                    <div className=""><button className="text-[1.04vw] text-primary">Change</button></div>
                                </div>
                                <p className="font-bold mb-4 text-[24px]">Contact Information</p>
                                <p className="mb-2 text-subtitle">
                                All transactions are secure and encrypted
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-[1.25vw]">Credit / Debit Card</p><img src="/card_list33.png"/>
                                </div>
                                <ProfilePayForm profilepayData={profilepaymentdata.profilePayment} />
                                <Link href="/coursecheckout"><p className="text-primary  mt-[-3.5vw] text-[1.38vw]">&lt; Return To Billing</p></Link>
                            </div>
                            <div className="flex flex-col col-span-5 justify-start items-start bg-EDF5FE mr-[-7vw] pt-10 pl-[2.63vw] pr-[9vw] mb-[-20vw]">
                                <p className="font-bold mb-2 text-[1.38vw]">Join 45,000+ Merchants Using Checkified</p>
                                <p className="mb-6 text-subtitle">
                                    An excellent resource for researching products based on data
                                </p>
                                {/* <p className="mb-6 text-subtitle">Introduction</p> */}
                                <div className="p-8 lg:p-8 bg-white rounded-t-[28px] gap-8 profile_grid_inner_set_2 w-[451px]">
                                    <ScrollReveal>
                                        <Title
                                            blackText={"Summary"}
                                            blueText=""
                                            className="text-left text-26  title-font-size"
                                        />
                                    </ScrollReveal>
                                    <section className="relative ">
                                        <div className="grid grid-cols-1 gap-4 ">
                                            <div className="bg-glass-light rounded-2xl">
                                                <div className="flex justify-between items-center py-3 px-4 border_checkout rounded-[6px] job-openings-shadow">
                                                    
                                                        <div className="mega-menu-list items-center flex gap-4 items-start justify-between rounded-lg w-full">
                                                            <div className="list-icon rounded-lg flex items-center">
                                                                <Image
                                                                    src="/icons/pricing/2-premium.png"
                                                                    alt="Mega menu icon"
                                                                    className="object-contain"
                                                                    width={55}
                                                                    height={55}
                                                                    priority
                                                                />
                                                            <div className="menu-content">
                                                                <h2 className="font-semibold text-left text-[14px] mb-1">
                                                                    Checkified
                                                                </h2>
                                                                <h3 className="text-left text-xs font-semibold text-151E3A">
                                                                    14 997 :-
                                                                </h3>
                                                            </div>
                                                            </div>


                                                            <div className="ml-8">
                                                                <button
                                                                    type="button"
                                                                    className="btn  w-full btn-white items-center px-3 py-1 relative overflow-hidden"
                                                                >

                                                                    <div className="flex justify-center items-center w-full">
                                                                        <div className="ml-2 text-primary font-semibold font-sans relative text-sm">
                                                                            Premium
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                            </div>

                                            <div className="bg-glass rounded-[10px]">
                                                <div key="" className="py-2 px-4 border_checkout rounded-[6px]">
                                                    <div className=" flex relative justify-between">
                                                        <input
                                                            type="text"
                                                            placeholder="Code"
                                                            className="py-2 px-2 rounded-lg text-subtitle-dark focus:outline-primary bg-transparent placeholder-subtitle text-sm"
                                                        />
                                                        <button className="btn !bg-base-200 border-none pr-8 pl-8 pt-0 pb-0 right-0 text-primary hover:bg-primary hover:text-primary hover:border-primary text-xs text-semibold">
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-glass-border px-2 rounded-[10px]">
                                                <div
                                                    key=""
                                                    className="flex justify-between items-center  px-2 rounded-2xl"
                                                >
                                                    <div className="list-icon rounded-lg bg-transparent">
                                                        <h2 className="font-semibold  text-xs">
                                                            Total
                                                        </h2>
                                                    </div>

                                                    <div>
                                                        <h2 className=" font-bold text-xs">
                                                            $997
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-glass-border px-2 rounded-[10px]">
                                                <div
                                                    key=""
                                                    className="flex justify-between items-center px-2 rounded-2xl "
                                                >
                                                    <div className="list-icon rounded-lg bg-transparent">
                                                        <h2 className="font-semibold  text-xs">
                                                            Discount
                                                        </h2>
                                                    </div>

                                                    <div>
                                                        <h2 className=" font-bold text-xs">
                                                            -
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="p-8 lg:p-8 bg-primary rounded-b-[28px] gap-8 profile_grid_inner_set_2 w-[451px]">
                                    <section className="relative ">
                                        <div className="grid grid-cols-1 gap-4 ">
                                            <div className=" px-2 rounded-[10px]">
                                                <div
                                                    key=""
                                                    className="flex justify-between items-center  px-2 rounded-2xl"
                                                >
                                                    <div className="list-icon rounded-lg bg-transparent">
                                                        <h2 className=" text-white font-medium  text-md">
                                                        Subtotal
                                                        </h2>
                                                    </div>

                                                    <div>
                                                        <h2 className="text-white font-medium text-md">
                                                            $997
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
          positionClassName="left-[79.5vw] 2xl:left-[84vw] rotate-[-89deg] top-[37rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[1]"
        />
        </Layout>
    );
};

export default Checkoutcourse2;
