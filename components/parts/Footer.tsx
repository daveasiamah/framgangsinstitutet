import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { socialMedia } from "@/assets/data/socialMedia"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {}

export default function Footer({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#fff] text-[#434C69] py-14 relative mt-12 lg:mt-20'>
      <div className='container mx-auto'>
        {/* <Image
          src='/graphics/footer/wave.png'
          alt='wave'
          width={900}
          height={30}
          className='absolute w-full 2xl:max-h-[10rem] left-0 top-[-20px] sm:top-[-40px] md:top-[-50px] lg:top-[-60px] 2xl:top-[-8rem]'
          priority
        /> */}
        <div className='flex flex-col lg:flex-row justify-between items-center text-left md:text-center lg:text-left lg:items-end gap-10 lg:gap-[120px]'>
          <div className='w-full lg:w-1/2'>
           <div className="flex align-items-center">
             <img
                 className="mt-4 md:h-[60px] md:w-[60px] w-[47px] h-[51px]"
                 src='/logonew.svg'
                 alt='checkified'
             />

             <h3 className='my-3 text-[28px] font-[700] font-jakarta'>
               Checkified
             </h3>
           </div>
            <p className="text-[#434C69] text-[14px] leading-[22px] md:text-[16px] font-[600] font-inter md:leading-[32px]">Börja Med Dropshipping Sverige</p>
           <div>
             <img
                 className="mt-4 md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                 src='/shopifypartner.svg'
                 alt='checkified'
             />
             <img
                 src='/stripe.svg'
                 alt='checkified'
                 className="mt-2 md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
             />
             <img
                 className="mt-2 md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                 src='/google.svg'
                 alt='checkified'
                 height={27}
                 width={167}
             />
           </div>

          </div>
          <div className='w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[110px] footer-links mt-10 lg:mt-0'>
            <div>
              <h4 className='text-xl'>{t.footerData.product.title}</h4>
              <ul>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/annonser'>
                    Checkified Ads
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/affiliate'>
                    {t.footerData.product.linkTwo}
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/careers'>
                    {t.footerData.product.linkThree}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl'>{t.footerData.company.title}</h4>
              <ul>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/butiker'>
                    {t.footerData.company.linkOne}
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/about'>
                    {t.footerData.company.linkTwo}
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/contact-us'>
                    {t.footerData.company.linkThree}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl'>{t.footerData.resources.title}</h4>
              <ul>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/blog'>
                    {t.footerData.resources.linkOne}
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/press'>
                    {t.footerData.resources.linkTwo}
                  </Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/university'>
                    {t.footerData.resources.linkThree}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='my-12' />

        <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between items-center'>
          <p className='mb-4 lg:mb-0 text-[14px]'>
            Copyright © {currentYear} Checkified. All rights reserved.
          </p>
          <div className='flex justify-center flex-wrap lg:justify-start items-center gap-5 '>
            {socialMedia(24).map((data) => (
                <Link key={data.id} href={data.url} target='_blank'>
                  <div className='rounded-lg hover:bg-white hover:text-primary text-primary'>
                    {data.logo}
                  </div>
                </Link>
            ))}
          </div>
          <ul className='flex flex-wrap items-center justify-center gap-5'>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[14px]'
                  href='/terms-of-service'>
                Cookiepolicy
              </Link>
            </li>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[14px]'
                  href='/privacy-policy'>
                Allmänna villkor
              </Link>
            </li>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[14px]'
                  href='/cookie-policy'>
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
