import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function SideHeader({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  const isActive = (pathname: string) => {
    return router.pathname === pathname ? "active" : "";
  };
  return (
    <>
      <section className='w-full lg:w-[275px] relative h-[360px] flex flex-col lg:flex-row min-h-screen'>
        <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer'>
          <i className='bi bi-filter-left px-2 bg-gray-900 rounded-md' />
        </span>
        <div className='sidebar fixed top-20 bottom-0 lg:left-0 pt-12 overflow-y-auto text-center bg-base-100 pl-8 flex flex-col justify-between'>
          <div className='sidebar_menu'>
            <Link href='/dashboard'>
              <div
                className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle side_hover ${isActive(
                  "/dashboard"
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
            <Link href='/library'>
              <div
                className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle side_hover ${isActive(
                  "/coursedetail"
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
            <Link href='/community'>
              <div
                className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle side_hover ${isActive(
                  "/community"
                )}`}
                id='side_hover_div'>
                <svg
                  width='25'
                  height='24'
                  id='side_hover_div_svg'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M18.595 7.16C18.5331 7.15 18.4607 7.15 18.3988 7.16C16.9731 7.11 15.8368 5.98 15.8368 4.58C15.8368 3.15 17.0248 2 18.5021 2C19.9793 2 21.1674 3.16 21.1674 4.58C21.157 5.98 20.0207 7.11 18.595 7.16Z'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.531 14.44C18.9463 14.67 20.5062 14.43 21.6012 13.72C23.0579 12.78 23.0579 11.24 21.6012 10.3C20.4959 9.59001 18.9153 9.35 17.5 9.59'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6.16736 7.16C6.22934 7.15 6.30165 7.15 6.36364 7.16C7.78926 7.11 8.92562 5.98 8.92562 4.58C8.92562 3.15 7.7376 2 6.26033 2C4.78306 2 3.59504 3.16 3.59504 4.58C3.60537 5.98 4.74174 7.11 6.16736 7.16Z'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M7.23141 14.44C5.81612 14.67 4.2562 14.43 3.16116 13.72C1.70455 12.78 1.70455 11.24 3.16116 10.3C4.26653 9.59001 5.84711 9.35 7.2624 9.59'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12.3967 14.63C12.3347 14.62 12.2624 14.62 12.2004 14.63C10.7748 14.58 9.63843 13.45 9.63843 12.05C9.63843 10.62 10.8264 9.47 12.3037 9.47C13.781 9.47 14.969 10.63 14.969 12.05C14.9587 13.45 13.8223 14.59 12.3967 14.63Z'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.3905 17.78C7.93389 18.72 7.93389 20.26 9.3905 21.2C11.0434 22.27 13.75 22.27 15.4029 21.2C16.8595 20.26 16.8595 18.72 15.4029 17.78C13.7603 16.72 11.0434 16.72 9.3905 17.78Z'
                    stroke-width='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='text-[14px] ml-4  font-semibold'>
                  Community
                </span>
              </div>
            </Link>
          </div>
          <div className=''>
            {/* <div className='p-2.5 mt-3 items-center rounded-md px-4 h-56 my-auto bg-primary side_img_wrap'>
              <Image
                src='/images/dashboard/side-img.svg'
                alt='stats'
                fill
                className='object-contain side_header_img'
              />
              <p className='text-lg leading-5 font-bold text-center text-white mb-0 mt-2 tracking-wide'>
                Checkified
                <br />
                University
              </p>
              <Link href='/checkout'>
                <button className='btn w-full btn-light-primary tracking-wider font-medium lg:w-fit mb-6 text-subtitle border-none mt-4 px-6 py-2 text-xs sidebar_img_btn'>
                  Uppgradera
                </button>
              </Link>
            </div> */}

            <div className='sidebar_bottom w-full'>
            <Link href='/'>
              <div className='setting-icon mt-4 mb-3 flex items-center rounded-md duration-300 cursor-pointer text-subtitle'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10.9907 14.75C8.92233 14.75 7.24365 13.07 7.24365 11C7.24365 8.93 8.92233 7.25 10.9907 7.25C13.0591 7.25 14.7378 8.93 14.7378 11C14.7378 13.07 13.0591 14.75 10.9907 14.75ZM10.9907 8.75C9.75168 8.75 8.74247 9.76 8.74247 11C8.74247 12.24 9.75168 13.25 10.9907 13.25C12.2297 13.25 13.2389 12.24 13.2389 11C13.2389 9.76 12.2297 8.75 10.9907 8.75Z'
                    fill='#707BA0'
                  />
                  <path
                    d='M14.1981 21.1898C13.9882 21.1898 13.7784 21.1598 13.5686 21.1098C12.949 20.9398 12.4295 20.5498 12.0997 19.9998L11.9798 19.7998C11.3903 18.7798 10.5809 18.7798 9.99137 19.7998L9.88146 19.9898C9.55172 20.5498 9.03212 20.9498 8.41261 21.1098C7.7831 21.2798 7.13361 21.1898 6.58405 20.8598L4.8654 19.8698C4.25588 19.5198 3.81622 18.9498 3.62637 18.2598C3.44651 17.5698 3.53644 16.8598 3.88617 16.2498C4.17594 15.7398 4.25588 15.2798 4.08601 14.9898C3.91614 14.6998 3.48648 14.5298 2.89694 14.5298C1.43809 14.5298 0.249023 13.3398 0.249023 11.8798V10.1198C0.249023 8.6598 1.43809 7.4698 2.89694 7.4698C3.48648 7.4698 3.91614 7.2998 4.08601 7.0098C4.25588 6.7198 4.18593 6.2598 3.88617 5.7498C3.53644 5.1398 3.44651 4.4198 3.62637 3.7398C3.80623 3.0498 4.24588 2.4798 4.8654 2.1298L6.59404 1.1398C7.72315 0.469798 9.21198 0.859798 9.89145 2.0098L10.0114 2.2098C10.6009 3.2298 11.4103 3.2298 11.9998 2.2098L12.1097 2.0198C12.7892 0.859798 14.278 0.469798 15.4171 1.1498L17.1358 2.1398C17.7453 2.4898 18.1849 3.0598 18.3748 3.7498C18.5546 4.4398 18.4647 5.1498 18.115 5.7598C17.8252 6.2698 17.7453 6.7298 17.9151 7.0198C18.085 7.3098 18.5147 7.4798 19.1042 7.4798C20.5631 7.4798 21.7521 8.6698 21.7521 10.1298V11.8898C21.7521 13.3498 20.5631 14.5398 19.1042 14.5398C18.5147 14.5398 18.085 14.7098 17.9151 14.9998C17.7453 15.2898 17.8152 15.7498 18.115 16.2598C18.4647 16.8698 18.5646 17.5898 18.3748 18.2698C18.1949 18.9598 17.7553 19.5298 17.1358 19.8798L15.4071 20.8698C15.0274 21.0798 14.6177 21.1898 14.1981 21.1898ZM10.9906 17.4898C11.8799 17.4898 12.7092 18.0498 13.2788 19.0398L13.3887 19.2298C13.5086 19.4398 13.7084 19.5898 13.9483 19.6498C14.1881 19.7098 14.4279 19.6798 14.6277 19.5598L16.3564 18.5598C16.6162 18.4098 16.816 18.1598 16.8959 17.8598C16.9759 17.5598 16.9359 17.2498 16.786 16.9898C16.2165 16.0098 16.1465 14.9998 16.5862 14.2298C17.0258 13.4598 17.9351 13.0198 19.0742 13.0198C19.7137 13.0198 20.2233 12.5098 20.2233 11.8698V10.1098C20.2233 9.4798 19.7137 8.9598 19.0742 8.9598C17.9351 8.9598 17.0258 8.5198 16.5862 7.7498C16.1465 6.9798 16.2165 5.9698 16.786 4.9898C16.9359 4.7298 16.9759 4.4198 16.8959 4.1198C16.816 3.8198 16.6262 3.5798 16.3664 3.4198L14.6377 2.4298C14.2081 2.1698 13.6385 2.3198 13.3787 2.7598L13.2688 2.9498C12.6992 3.9398 11.8699 4.4998 10.9806 4.4998C10.0913 4.4998 9.26194 3.9398 8.69239 2.9498L8.58248 2.7498C8.33267 2.3298 7.77311 2.1798 7.34345 2.4298L5.61481 3.4298C5.35501 3.5798 5.15517 3.8298 5.07523 4.1298C4.99529 4.4298 5.03526 4.7398 5.18515 4.9998C5.7547 5.9798 5.82464 6.9898 5.38499 7.7598C4.94533 8.5298 4.03605 8.9698 2.89694 8.9698C2.25745 8.9698 1.74785 9.4798 1.74785 10.1198V11.8798C1.74785 12.5098 2.25745 13.0298 2.89694 13.0298C4.03605 13.0298 4.94533 13.4698 5.38499 14.2398C5.82464 15.0098 5.7547 16.0198 5.18515 16.9998C5.03526 17.2598 4.99529 17.5698 5.07523 17.8698C5.15517 18.1698 5.34502 18.4098 5.60482 18.5698L7.33346 19.5598C7.54329 19.6898 7.7931 19.7198 8.02292 19.6598C8.26273 19.5998 8.46257 19.4398 8.59247 19.2298L8.70238 19.0398C9.27193 18.0598 10.1013 17.4898 10.9906 17.4898Z'
                    fill='#707BA0'
                  />
                </svg>
                <span className='text-xs ml-4  font-medium'>Inställningar</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
