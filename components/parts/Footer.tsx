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
          <div className='w-full lg:w-1/3'>
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
                 className=" md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                 src='/shopifypartner.svg'
                 alt='checkified'
             />
             <img
                 src='/stripe.svg'
                 alt='checkified'
                 className=" md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
             />
             <img
                 className=" md:h-[51px] md:w-[167px] w-[155px] h-[51px]"
                 src='/google.svg'
                 alt='checkified'
                 height={27}
                 width={167}
             />
           </div>

          </div>
          <div className='w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[90px] footer-links mt-10 lg:mt-0'>
            <div>
              <h4 className='text-xl'>Produkter</h4>
              <ul>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/skool'>
                    Dropshipping Kurs
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/butiker'>
                    Färdig E-butik
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/annonser'>
                    Dropshipping Ads
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/mentorskap'>
                    Mentorskap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl'>Företag</h4>
              <ul>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/about'>
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/butiker'>
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/contact-us'>
                    Karriär
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/contact-us'>
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl'>Resurser</h4>
              <ul>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/blog'>
                    Blogg
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/press'>
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/university'>
                    University
                  </Link>
                </li>
                <li>
                  <Link
                      className='hover:underline underline-offset-4 md:text-[16px] font-[500] font-inter'
                      href='/annonser'>
                    Kundcase
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='my-12'/>

        <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between items-center'>
          <p className='mb-4 lg:mb-0 text-[12px] md:text-[14px] font-[500] font-inter order-3 md:order-1'>
            Copyright © {currentYear} Checkified. All rights reserved.
          </p>
          <div className='flex justify-center flex-wrap lg:justify-start items-center gap-5 order-0 md:order-2'>
            {socialMedia(24).map((data) => (
                <Link key={data.id} href={data.url} target='_blank'>
                  <div className='rounded-lg hover:bg-white hover:text-primary text-primary bg-[#225AEA]'>
                    {data.logo}
                  </div>
                </Link>
            ))}
          </div>
          <ul className='flex flex-wrap items-center justify-center gap-5 order-1 md:order-3'>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter'
                  href='/terms-of-service'>
                Cookiepolicy
              </Link>
            </li>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter'
                  href='/terms-of-service'>
                Allmänna villkor
              </Link>
            </li>
            <li>
              <Link
                  className='hover:underline underline-offset-4 text-[12px] md:text-[14px] font-[500] font-inter'
                  href='/terms-of-service'>
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
