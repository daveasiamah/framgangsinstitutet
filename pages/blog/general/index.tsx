import React, { useEffect, useState } from "react"
import Image from "next/image"
import { HiOutlineClock } from "react-icons/hi"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal";
import axios from 'axios';

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {}

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export default function Blog({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  // Fetch Blog List
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/blog?locale=${locale}&nolimit=true`);
        setBlogPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Layout headTitle={t.blogData.blogNav.general}>
      {/* Dynamic Blog posts list */}
      <section className="py-16 mb-16">
      <nav className="text-sm mb-3" aria-label="Breadcrumb">
          <ol className="flex">
            <li className="mr-2">
              <a href={`../blog`} className="text-gray-400 hover:text-gray-700">{`${t.blogData.blogTitle}`}</a>
            </li>
            <li className="mr-2">
              <span aria-hidden="true" className="text-gray-400">{">"}</span>
            </li>
            <li>
              <span className="text-gray-700">{`${t.blogData.blogNav.general}`}</span>
            </li>
          </ol>
        </nav>    

        <ScrollReveal>
          <Title
            blackText={t.blogData.articleBlackTitle}
            blueText={t.blogData.articleBlueTitle}
            className="text-left"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {blogPosts.map((data) => (
            <ScrollReveal
              key={data.id}
              className="bg-white grid justify-between hover:bg-base-200 p-4 cursor-pointer transition-all duration-150"
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
      </section>
    </Layout>
  )
}
