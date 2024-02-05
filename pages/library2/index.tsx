import React, {useEffect} from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

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

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title");
      localStorage.setItem("blue_Title", "Kursur");
    }
  }, []);
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === 'null') {
      router.push("/coursecheckout");
    } 
  }

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-0 lg:w-9/12">
          <section className="p-8 lg:p-10 bg-base-100 rounded-[28px] items-center lg:flex-row gap-8 ">
            <ScrollReveal>
              <div className="grid grid-cols-2 place-content-between flex items-baseline">
                <Titleh6
                  blackText="Kursplaner"
                  blueText=" "
                  className="text-left text-lg font-bold mb-8"
                />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
              <ScrollReveal
                key=""
                className="bg-white grid rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box"
              >
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-md mb-2 hover:text-primary hover:underline transition-all duration-200">
                    1. Introduktion
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal className="bg-white grid rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box">
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-md mb-2 hover:text-primary hover:underline transition-all duration-200 ">
                    2. Produktforskning
                  </h1>
                </div>
              </ScrollReveal>
              <ScrollReveal className="bg-white grid rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box">
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-md mb-2 hover:text-primary hover:underline transition-all duration-200">
                    3. E-handels Infrastruktur
                  </h1>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
