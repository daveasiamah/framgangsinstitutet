import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function Admin_sidebar({ }: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const isActive = (pathname: string) => {
    return router.pathname === pathname ? "active" : "";
  };

  return (
    <>
      <div className='sidebar top-20 bottom-0 lg:left-0 pt-12  overflow-y-auto text-center bg-base-100 pl-8 flex flex-col justify-between w-[270px] h-full'>
        <div className='sidebar_menu'>
          <Link href='/admin_dashboard'>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle side_hover ${isActive(
                "/admin_dashboard"
              )}`}
              id='side_hover_div'>
              <svg
                width='22'
                height='22'
                id='side_hover_div_svg'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.02 1.84016L2.63 6.04016C1.73 6.74016 1 8.23016 1 9.36016V16.7702C1 19.0902 2.89 20.9902 5.21 20.9902H16.79C19.11 20.9902 21 19.0902 21 16.7802V9.50016C21 8.29016 20.19 6.74016 19.2 6.05016L13.02 1.72016C11.62 0.740163 9.37 0.790163 8.02 1.84016Z'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11 16.9902V13.9902'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='text-[14px] ml-4  font-semibold'>Hem</span>
            </div>
          </Link>
          <Link href='/admin_courses'>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle ${isActive(
                "/admin_courses"
              )}`}
              id='side_hover_div'>
              <svg
                width='26'
                height='26'
                id='side_hover_div_svg'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.25 11.0498C11.03 11.6998 12.97 11.6998 14.75 11.0498'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.8201 4H7.18007C5.05007 4 3.32007 5.74 3.32007 7.86V21.95C3.32007 23.75 4.61007 24.51 6.19007 23.64L11.0701 20.93C11.5901 20.64 12.4301 20.64 12.9401 20.93L17.8201 23.64C19.4001 24.52 20.6901 23.76 20.6901 21.95V7.86C20.6801 5.74 18.9501 4 16.8201 4Z'
                  stroke-width='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.8201 4H7.18007C5.05007 4 3.32007 5.74 3.32007 7.86V21.95C3.32007 23.75 4.61007 24.51 6.19007 23.64L11.0701 20.93C11.5901 20.64 12.4301 20.64 12.9401 20.93L17.8201 23.64C19.4001 24.52 20.6901 23.76 20.6901 21.95V7.86C20.6801 5.74 18.9501 4 16.8201 4Z'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <circle
                  cx='20.6901'
                  cy='5.28335'
                  r='4.00015'
                  fill='#0083FF'
                  stroke='white'
                />
              </svg>

              <span className='text-[14px] ml-4  font-semibold'>Kurser</span>
            </div>
          </Link>
          <Link href='/admin_users'>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle ${isActive(
                "/admin_users"
              )}`}
              id='side_hover_div'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.595 7.16C18.5331 7.15 18.4607 7.15 18.3988 7.16C16.9731 7.11 15.8368 5.98 15.8368 4.58C15.8368 3.15 17.0248 2 18.5021 2C19.9793 2 21.1674 3.16 21.1674 4.58C21.157 5.98 20.0207 7.11 18.595 7.16Z" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.531 14.44C18.9463 14.67 20.5062 14.43 21.6012 13.72C23.0579 12.78 23.0579 11.24 21.6012 10.3C20.4959 9.59001 18.9153 9.35 17.5 9.59" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.16736 7.16C6.22934 7.15 6.30165 7.15 6.36364 7.16C7.78926 7.11 8.92562 5.98 8.92562 4.58C8.92562 3.15 7.7376 2 6.26033 2C4.78306 2 3.59504 3.16 3.59504 4.58C3.60537 5.98 4.74174 7.11 6.16736 7.16Z" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.23141 14.44C5.81612 14.67 4.2562 14.43 3.16116 13.72C1.70455 12.78 1.70455 11.24 3.16116 10.3C4.26653 9.59001 5.84711 9.35 7.2624 9.59" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3967 14.63C12.3347 14.62 12.2624 14.62 12.2004 14.63C10.7748 14.58 9.63843 13.45 9.63843 12.05C9.63843 10.62 10.8264 9.47 12.3037 9.47C13.781 9.47 14.969 10.63 14.969 12.05C14.9587 13.45 13.8223 14.59 12.3967 14.63Z" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.3905 17.78C7.93389 18.72 7.93389 20.26 9.3905 21.2C11.0434 22.27 13.75 22.27 15.4029 21.2C16.8595 20.26 16.8595 18.72 15.4029 17.78C13.7603 16.72 11.0434 16.72 9.3905 17.78Z" stroke="#707BA0" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>


              <span className='text-[14px] ml-4  font-semibold'>Användare</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
