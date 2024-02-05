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
    <footer className='bg-primary text-white py-14 relative mt-32 lg:mt-40'>
      <div className='container mx-auto'>
        <Image
          src='/graphics/footer/wave.png'
          alt='wave'
          width={900}
          height={30}
          className='absolute w-full 2xl:max-h-[10rem] left-0 top-[-20px] sm:top-[-40px] md:top-[-50px] lg:top-[-60px] 2xl:top-[-8rem]'
          priority
        />
        <div className='flex flex-col lg:flex-row justify-between items-center text-center lg:text-left lg:items-end gap-10 lg:gap-[120px]'>
          <div className='w-full lg:w-1/2'>
            <Image
              className='svg-white mx-auto lg:mr-auto lg:ml-0 z-[-1]'
              src='/logo.svg'
              alt='checkified'
              height={60}
              width={60}
            />
            <h3 className='my-3 text-2xl font-semibold'>
              {t.footerData.footerTitle}
            </h3>
            <p className='lg:max-w-[24rem]'>{t.footerData.footerSubtitle}</p>
            <div className='flex justify-center flex-wrap lg:justify-start items-center mt-8 gap-5'>
              {socialMedia(24).map((data) => (
                <Link key={data.id} href={data.url} target='_blank'>
                  <div className='bg-white/10 p-4 rounded-lg hover:bg-white hover:text-primary'>
                    {data.logo}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[110px] footer-links mt-10 lg:mt-0'>
            <div>
              <h4 className='text-xl'>{t.footerData.product.title}</h4>
              <ul>
                <li>
                  <Link
                    className='hover:underline underline-offset-4'
                    href='/impact'>
                    {t.footerData.product.linkOne}
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
                    href='/pricing'>
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
          <p className='mb-4 lg:mb-0'>
            Upphovsrätt © {currentYear} Checkified. Alla rättigheter förbehållna.
          </p>
          <ul className='flex flex-wrap items-center justify-center gap-5'>
            <li>
              <Link
                className='hover:underline underline-offset-4'
                href='/terms-of-service'>
                {t.footerData.terms}
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline underline-offset-4'
                href='/privacy-policy'>
                {t.footerData.privacy}
              </Link>
            </li>
            <li>
              <Link
                className='hover:underline underline-offset-4'
                href='/cookie-policy'>
                {t.footerData.cookie}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
