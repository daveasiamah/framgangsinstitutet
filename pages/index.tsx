import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa"
import { BsPatchCheckFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import ButtonArrow from "@/components/parts/ButtonArrow"
import ContactForm from "@/components/parts/ContactForm"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import ScrollReveal from "@/components/transition/ScrollReveal"
import fs from "fs";
import { medsosData, platformData } from "@/assets/data/homeData"
import TiltParallax from "@/components/transition/TiltParallax"

import en from "@/locales/en"
import sv from "@/locales/sv"
import { useEffect, useState } from "react";
import axios from 'axios';
import { HiOutlineClock } from "react-icons/hi"
import Marquee from "react-fast-marquee";

type Props = {}

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  // if (typeof window !== "undefined") {
  //   const role = localStorage.getItem("role");
  //   console.log("role found :- " + role);
  // if (role === "USER") {
  //     router.push("/dashboard");
  //   } else if (role === "ADMIN") {
  //     router.push("/admin_dashboard");
  //   }
  // } else {
  //   console.log("role not found");
  // }

  // Fetch Blog List
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/blog?locale=${locale}`);
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchPosts();
  }, [locale]);

  return (
    <Layout headTitle={t.homeData.metaData.title}>
      <section className="relative hero-height py-8 flex flex-col lg:flex-row justify-between items-center gap-10">
        <BlurCircle positionClassName="left-0 top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />

        <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
          <ScrollReveal>
            <h1 className="text-[2.75rem] lg:text-6xl font-bold lg:mb-2">
              {t.homeData.heroBlackTitle}
            </h1>
            <h1 className="text-[2.75rem] lg:text-6xl font-bold text-primary max-[480px]:mt-[-3vw]">
              {t.homeData.heroBlueTitle}
            </h1>
            <p className="my-7 text-subtitle max-w-[24rem]">
              {t.homeData.heroSubtitle}
            </p>
            <Link href="/signup">
            <button className="btn btn-primary w-full lg:w-fit">
              {t.homeData.heroButton}
            </button>
            </Link>
          </ScrollReveal>

          <div className="flex items-center gap-1 mt-12">
            <Image
              src="/icons/home/users-pics.png"
              alt="user pics"
              width={90}
              height={48}
            />
            <Link className="btn btn-link" href="/" style={{ paddingLeft: "5px" }}>
              {t.homeData.heroJoinText}
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-7/12 h-full lg:h-[480px] xl:h-[500px] relative">
          <div className="aspect-square h-full mx-auto rounded-full overflow-hidden">
            <motion.div
              initial={{ x: -40, y: 0 }}
              animate={{ x: 40, y: 40 }}
              transition={{
                ease: "linear",
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/home/hero-pattern.png"
                alt="Checkified"
                className="object-contain scale-125"
                fill
                priority
              />
            </motion.div>
          </div>
          <Image
            src="/images/home/hero-image.png"
            className="absolute object-contain"
            style={{ top: "-30px" }}
            alt="Checkified"
            fill
            priority
          />
          <TiltParallax className="absolute -right-10 lg:-right-10 top-1/3 flex justify-center items-center gap-3 bg-white p-[14px] rounded-[20px] hero-comp-shadow text-xs lg:text-base">
            <div className="p-2 bg-base-200 rounded-lg">
              <Image
                src="/icons/home/people.png"
                alt="people"
                height={20}
                width={20}
              />
            </div>
            <p className="w-20 lg:w-fit">{t.homeData.heroInteractiveText}</p>
          </TiltParallax>

          <TiltParallax className="absolute bottom-2 left-1/4 lg:left-1/3 flex justify-center items-center gap-3 bg-white p-[14px] rounded-[20px] hero-comp-shadow text-xs lg:text-base">
            <div className="p-3 bg-primary h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] rounded-lg relative">
              <Image
                src="/icons/home/tag-user.png"
                alt="people"
                fill
                className="p-1 lg:p-2"
              />
            </div>
            <p>{t.homeData.heroOutstandingText}</p>
          </TiltParallax>
        </div>
      </section>

      <section className="bg-base-200 p-8 lg:py-14 lg:px-16 text-center my-16 lg:my-20 rounded-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-10">
          {t.homeData.knowledgeText}
        </h2>

        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between">
          {platformData.map((data) => (
            <div
              key={data.id}
              className="relative w-[45%] lg:w-1/6 2xl:w-[15%] h-[50px] lg:h-[100px]"
            >
              <Image
                src={data.imageUrl}
                alt="platform"
                className="object-contain"
                fill
                priority
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative text-center mb-16 lg:mb-20">
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[100deg] top-[10rem] lg:top-[2rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <CacingOne
          positionClassName="right-[-16rem] 2xl:right-[-10rem] rotate-[30deg] top-[18rem] 2xl:top-[0rem]"
          sizeClassName="w-[30rem] h-[30rem]"
          className="z-[-1]"
        />

        <BlurCircle positionClassName="right-[-4rem] top-[6rem]" size="lg" />

        <ScrollReveal>
          <Title
            blackText={t.homeData.platformBlackTitle}
            blueText={t.homeData.platformBlueTitle}
          />
          <p className="max-w-xl mx-auto mb-16 text-subtitle">
            {t.homeData.platformSubtitle}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {t.homeData.featureData.map((data) => (
            <div
              key={data.id}
              className="feature-card bg-white p-10 rounded-[2rem] feature-card-shadow"
            >
              <div className="icon-container bg-base-200 p-6 rounded-full inline-flex place-content-center mb-3">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  height={60}
                  width={60}
                  className="object-contain"
                />
              </div>
              <ScrollReveal>
                <h3 className="text-lg font-bold mb-6">{data.title}</h3>
                <p>{data.desc}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="bg-base-200 py-14 px-16 text-center mb-16 lg:mb-20 rounded-[3rem]">
        <Image
          src="/icons/home/infrastructure-icon.png"
          width={80}
          height={80}
          alt="infractructure icon"
          className="mx-auto"
        />
        <Title
          blackText="E-commerce"
          blueText="Infrastructure"
          className="text-[34px] mb-[1rem]"
        />

        <div className="flex justify-center items-center text-primary gap-4">
          <p className="font-bold text-lg">Ground</p>
          <div className="bg-white p-1 rounded-full">
            <MdKeyboardArrowRight size={20} />
          </div>
          <p className="font-bold text-lg">Growth</p>
          <div className="bg-white p-1 rounded-full">
            <MdKeyboardArrowRight size={20} />
          </div>
          <p className="font-bold text-lg">Success</p>
          <div className="bg-white p-1 rounded-full">
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>

        <div className="relative h-[400px] w-full mx-auto mt-8">
          <Image
            src="/images/home/infrastructure-mix-image.png"
            alt="infractructure image"
            className="absolute object-contain"
            priority
            fill
          />
        </div>
      </section> */}

      <section className="relative py-14 text-center grid gap-10 lg:gap-24 md:mb-16 lg:mb-20">
        <CacingOne
          positionClassName="left-[-20rem] lg:left-[-12rem] rotate-[-50deg] top-[18rem] lg:top-[40rem] 2xl:top-[50rem]"
          sizeClassName="w-[30rem] h-[30rem]"
          className="z-[-1]"
        />

        {t.homeData.expertiseData.map((data) => (
          <div
            key={data.id}
            className={`flex flex-col-reverse lg:flex-row ${data.isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } justify-between item gap-10 lg:gap-24`}
          >
            <div className="w-full h-60 lg:h-full 2xl:h-[26rem] lg:w-1/2 relative">
              <Image
                src={data.imageUrl}
                alt="introduction ground"
                className="object-cover rounded-[2rem]"
                fill
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-baseline justify-start gap-4 text-left">
              <ScrollReveal>
                <p className="text-[34px] lg:text-[40px] font-bold">
                  {data.id}.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <Title
                  blackText={data.titleBlack}
                  blueText={data.titleBlue}
                  isBlock
                  className="relative mb-14"
                >
                  <Image
                    src="/icons/home/half-arrow.png"
                    alt="half arrow"
                    height={36}
                    width={160}
                    className="absolute object-contain -bottom-10 left-0"
                  />
                </Title>
                <p className="text-subtitle mt-14">{data.subtitle}<br/>{data.subtitletwo}</p>
                <ul className="mt-4 text-subtitle grid gap-3">
                  {data.lists.map((list) => (
                    <li key={list.id} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary" size={20} />{" "}
                      {list.name}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </section>

      <section className="relative md:py-14 lg:py-14 mb-16 lg:mb-20 flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2">
          <ScrollReveal>
            <Title
              blackText={t.homeData.contactBlackTitle}
              blueText={t.homeData.contactBlueTitle}
              className="mb-[6px]"
            />
            <p className="text-subtitle">{t.homeData.contactSubtitle}</p>
          </ScrollReveal>

          
            <Image
              src="/images/home/bulb.png"
              alt="acher"
              height={500}
              width={500}
              className="object-contain mx-auto mt-6"
            />
         
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm contactData={t.homeData.contactForm} />
        </div>
      </section>

      <section className="mb-16 lg:mb-20 medsos-container">
        <div className="flex items-center justify-center">
          <div className="w-[400%] lg:w-[200%] h-28 overflow-hidden relative">
            <div className="w-[400%] lg:w-[200%] h-20 flex items-center absolute left-0 top-1/2 transform -translate-y-1/2 gap-2 justify-around infinite-slide-left">
              {medsosData.slice(0, 4).map((data) => (
                <div
                  key={data.id}
                  className="bg-white p-10 rounded-2xl w-[16rem] shadow-lg h-full grid place-content-center relative"
                >
                  <Image
                    priority
                    src={data.imageUrl}
                    alt="sosmed"
                    fill
                    className="object-contain p-5"
                  />
                </div>
              ))}
              {medsosData.slice(0, 4).map((data) => (
                <div
                  key={data.id}
                  className="bg-white p-10 rounded-2xl w-[16rem] shadow-lg h-full grid place-content-center relative"
                >
                  <Image
                    priority
                    src={data.imageUrl}
                    alt="sosmed"
                    fill
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[400%] lg:w-[200%] h-28 overflow-hidden relative">
            <div className="w-[400%] lg:w-[200%] h-20 flex items-center absolute right-0 top-1/2 transform -translate-y-1/2 gap-2 justify-around infinite-slide-right">
              {medsosData.slice(4, 9).map((data) => (
                <div
                  key={data.id}
                  className="bg-white p-10 rounded-2xl w-[16rem] shadow-lg h-full grid place-content-center relative"
                >
                  <Image
                    priority
                    src={data.imageUrl}
                    alt="sosmed"
                    fill
                    className="object-contain p-5"
                  />
                </div>
              ))}
              {medsosData.slice(4, 9).map((data) => (
                <div
                  key={data.id}
                  className="bg-white p-10 rounded-2xl w-[16rem] shadow-lg h-full grid place-content-center relative"
                >
                  <Image
                    priority
                    src={data.imageUrl}
                    alt="sosmed"
                    fill
                    className="object-contain p-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 lg:mb-20">
        <BlurCircle positionClassName="right-[-4rem] top-[30rem]" size="lg" />

        <div className="relative w-fit mx-auto">
          {/* <span className="absolute top-[25%] left-[12%] pulse" />
          <span className="absolute top-[40%] left-[8%] pulse-1" />
          <span className="absolute top-[3%] left-[45%] pulse-2" />
          <span className="absolute bottom-[18%] left-[45%] pulse-3" />
          <span className="absolute bottom-[30%] left-[35%] pulse-2" />
          <span className="absolute bottom-[30%] right-[8%] pulse-1" />
          <span className="absolute bottom-[50%] right-[16%] pulse-1" />
          <span className="absolute top-[22%] right-[12%] pulse" /> */}
          <Image
            src="/images/home/globe.gif"
            alt="globe"
            height={500}
            width={500}
            className="object-contain mx-auto mb-16"
          />
        </div>

        <div className="bg-base-200 p-8 lg:py-14 lg:px-16 mb-16 rounded-[3rem]">
          <ScrollReveal>
            <Title
              blackText={t.homeData.startSellingBlackTittle}
              blueText={t.homeData.startSellingBlueTittle}
              className="text-left"
            />
            <p className="text-subtitle text-left">
              {t.homeData.startSellingSubtitle}
            </p>
            <ul className="mt-8 text-subtitle grid gap-3">
              {t.homeData.startSellingList.map((list) => (
                <li key={list.id} className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" size={20} />
                  {list.list}
                </li>
              ))}
            </ul>

            <ButtonArrow href="/signup" className="mt-10">
              {t.homeData.startSellingButton}
            </ButtonArrow>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative university-container bg-primary p-8 lg:px-16 lg:py-14 mb-16 lg:mb-20 rounded-3xl text-white text-left flex flex-col lg:flex-row gap-20">
        <ScrollReveal className="w-full lg:w-2/3 z-10">
          <h2 className="text-4xl font-bold mb-8">
            {t.homeData.checkifiedUnivTitle}
          </h2>
          <p className="mb-2">{t.homeData.checkifiedUnivListTDesc}</p>
          <ul className="mt-4 grid gap-3">
            {t.homeData.checkifiedUnivList.map((list) => (
              <li key={list.id} className="flex items-center gap-4">
                <div className="w-6">
                  <FaCheckCircle size={20} />
                </div>

                <p className="flex-1">{list.list}</p>
              </li>
            ))}
          </ul>
          <ButtonArrow href="/signup" isReverse className="mt-10">
            {t.homeData.checkifiedUnivButton}
          </ButtonArrow>
        </ScrollReveal>
        <div className="relative w-full lg:w-1/3 h-[360px] lg:h-full">
          <Image
            src="/images/home/checkified-university.png"
            alt="checkified university"
            height={500}
            width={500}
            className="absolute bottom-[-3rem] xs:bottom-[-13rem] sm:bottom-[-13rem] lg:top-[-1rem] xl:top-[-6rem] 2xl:top-[-10rem] right-0 sm:scale-[.6] lg:scale-[1.4] xl:scale-[1] 2xl:scale-75 object-contain"
            priority
          />
        </div>
      </section>

      <section className="relative mb-16 lg:mb-20">
        <BlurCircle
          positionClassName="right-[-4rem] top-[10rem] lg:top-[8rem]"
          size="lg"
        />

        <ScrollReveal>
          <Title
            blackText={t.homeData.benefitBlackTitle}
            blueText={t.homeData.benefitBlueTitle}
            isBlock
            className="text-center"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.homeData.benefitData.map((data) => (
            <div
              key={data.id}
              className="bg-white p-10 rounded-[2rem] feature-card-shadow text-center"
            >
              <div className="bg-base-200 p-6 rounded-full inline-flex place-content-center mb-3 relative">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  height={60}
                  width={60}
                  className="object-contain"
                />
              </div>
              <ScrollReveal>
                <h3 className="text-lg font-bold mb-3">{data.title}</h3>
                <p className="text-subtitle">{data.subtitle}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-14 mb-16 lg:mb-20 testimonial-section">
        <BlurCircle positionClassName="left-[-8rem] top-[12rem]" size="lg" />

        {/* <TiltParallax> */}
          <Image
            src="/images/home/acher.png"
            alt="acher"
            height={280}
            width={280}
            className="object-contain mx-auto mb-16"
          />
        {/* </TiltParallax> */}

        <ScrollReveal>
          <Title
            blackText={t.homeData.testimonyBlackTitle}
            blueText={t.homeData.testimonyBlueTitle}
            isBlock
            className="mb-16 lg:mb-20 text-center"
          />
        </ScrollReveal>
        <div className="relative items-center justify-center testimonial-slider-container">
          <div className="absolute" style={{}}>
          <div className="items-center left-0 gap-2 justify-around testimonial-slider">
          <Marquee style={{ width: "1300px", overflow: "visible" }} speed={30}>
              {[...t.homeData.testimonyData].map((data) => (
                <div
                  key={`${data.id} ${Math.random()}`}
                  className="rounded-2xl h-full grid place-content-center"
                  style={{ paddingRight: "30px" }}
                >
                  <Image
                    priority
                    src={data.imageUrl}
                    alt="testimonial"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '300px', height: '400px' }}
                    className="rounded-lg"
                  />
                </div>
              ))}
          </Marquee>
          </div>
          </div>
        </div>     
      </section>

      {/* Dynamic Blog posts list */}
      <section className="py-16 mb-16">
        <ScrollReveal>
          <Title
            blackText={t.blogData.articleBlackTitle}
            blueText={t.blogData.articleBlueTitle}
            className="text-left"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 blog-list-container">
          {blogPosts.map((data) => (
            <ScrollReveal
              key={data.id}
              className="bg-white grid justify-between hover:bg-base-200 p-4 cursor-pointer transition-all duration-150 blog-list-div"
            >
              <div onClick={()=>{
                window.location.href = `/blog/${data.slug}`;
              }}>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={data.imageUrl}
                    fill
                    alt="blog"
                    className="absolute object-cover"
                  />
                </div>
                <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                  {data.title}
                </h1>
                <p className="text-subtitle mb-3">{data.subtitle}</p>
                <p className="text-subtitle text-sm mt-auto flex items-center gap-2">
                  <HiOutlineClock size={20} />
                  {data.date}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="flex justify-center mt-10">
            <Link className="btn btn-primary btn-shadow" href="/blog/general">
                {t.blogData.blogNav.viewMore}
            </Link>
        </div>
      </section>

    </Layout>

  )
}
