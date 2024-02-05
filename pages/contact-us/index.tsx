import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import Title from "@/components/parts/Title";

import { stringToJsx } from "@/utils/stringToJsx";
import BlurCircle from "@/components/graphic/BlurCircle";
import LineGraphic from "@/components/graphic/LineGraphic";
import ShieldBadge from "@/components/graphic/ShieldBadge";
import UserBadge from "@/components/graphic/UserBadge";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import TiltParallax from "@/components/transition/TiltParallax";
import ContactForm from "@/components/parts/ContactForm";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function ContactUs({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;
  // if (typeof window !== "undefined") {
  //   const role = localStorage.getItem("role");
  //   console.log("role found :- " + role);
  //   if (role === "ADMIN") {
  //     router.push("/admin_dashboard");
  //   }
  // } else {
  //   console.log("role not found");
  // }
  return (
    <Layout headTitle={t.contactdata.metaData.title}>
      <section className='relative py-8 lg:py-12 mb-12 lg:mb-16'>
        <BlurCircle positionClassName='left-[-12rem] top-20' size='lg' />
        <LineGraphic
          positionClassname='right-[-15rem] lg:right-[-14rem] 2xl:right-[-12rem] top-[1rem] lg:top-[-30px]'
          className='svg-primary'
        />
        <ShieldBadge positionClassName='top-[1rem] left-[-1rem] lg:top-[6rem] lg:left-[8rem]' />
        <UserBadge positionClassName='top-[1rem] right-[-1rem] lg:top-[4rem] lg:right-[16rem]' />

        <ScrollReveal>
          <Title
            blackText={t.contactdata.contactBlackTitle}
            blueText={t.contactdata.contactBlueTitle}
            className='mx-auto text-center'
          />
          <p className='text-subtitle text-center max-w-xl mx-auto'>
            {t.contactdata.contactSubtitle}
          </p>
        </ScrollReveal>
      </section>

      <section className='relative flex flex-col lg:flex-row gap-10 justify-between mb-12 lg:mb-16'>
        <CacingOne
          positionClassName='right-[-16rem] 2xl:right-[-12rem] rotate-[-40deg] bottom-[-20rem]'
          sizeClassName='w-[24rem] h-[24rem]'
          className='z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]'
        />

        <div className='w-full lg:w-1/2'>
          <ScrollReveal>
            <Title
              blackText={t.contactdata.formBlackTitle}
              blueText={t.contactdata.formBlueTitle}
              className='text-[2rem]'
            />
            <p className='text-subtitle text-left'>
              {t.contactdata.formSubtitle}
            </p>
          </ScrollReveal>
          <TiltParallax>
            <Image
              src='/images/contact-us/dance.png'
              alt='dance'
              width={480}
              height={480}
            />
          </TiltParallax>
        </div>
        <div className='w-full lg:w-1/2'>
          <ContactForm contactData={t.contactdata.contactForm} />
        </div>
      </section>

      <section className='relative py-8 lg:py-12 mb-12 lg:mb-16'>
        <CacingOne
          positionClassName='left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[20rem] lg:top-[-13rem]'
          sizeClassName='w-[24rem] h-[24rem]'
          className='z-[-1] drop-shadow-[0_46px_70px_rgba(0,131,255,0.5)]'
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {t.contactdata.supportData.map((data) => (
            <div
              key={data.id}
              className='bg-white p-10 rounded-[2rem] feature-card-shadow text-left flex flex-col'>
              <ScrollReveal>
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  height={80}
                  width={80}
                  className='object-contain mb-4'
                />
                <h3 className='text-lg font-bold mb-6'>{data.title}</h3>

                <div className='text-subtitle mb-4'>
                  {stringToJsx(data.subtitle)}
                </div>
                <p className='text-subtitle mb-6'>{data.action}</p>
                <Link
                  href={`mailto:${
                    data.subtitle.includes("info@checkified.se")
                      ? "info@checkified.se"
                      : "billing@checkified.se"
                  }`}
                  className='btn btn-link p-0 text-primary hover:text-primary/80 mt-auto self-start normal-case'>
                  {locale === "en" ? "Send us an email" : "Skicka oss ett mail"}
                  {">"}
                </Link>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
