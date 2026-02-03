import React, { useEffect, useState } from "react"
import Image from "next/image"
import { HiOutlineClock } from "react-icons/hi"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import axios from "axios"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

const BlurCircle = dynamic(() => import("@/components/graphic/BlurCircle"), {
  ssr: false,
})
const LineGraphic = dynamic(() => import("@/components/graphic/LineGraphic"), {
  ssr: false,
})
const ShieldBadge = dynamic(() => import("@/components/graphic/ShieldBadge"), {
  ssr: false,
})
const UserBadge = dynamic(() => import("@/components/graphic/UserBadge"), {
  ssr: false,
})
const CacingOne = dynamic(() => import("@/components/graphic/CacingOne"), {
  ssr: false,
})
const FadeLogo = dynamic(() => import("@/components/graphic/FadeLogo"), {
  ssr: false,
})
const ScrollReveal = dynamic(
  () => import("@/components/transition/ScrollReveal"),
  { ssr: false }
)

type BlogPost = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  date: string
  slug: string
}

export default function Blogg() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const cacheKey = `blogPosts-${locale}`
      const cacheTimestampKey = `${cacheKey}-timestamp`
      const cacheTTL = 3600 * 1000 // Cache for 1 hour

      const cachedPosts = localStorage.getItem(cacheKey)
      const cacheTimestamp = localStorage.getItem(cacheTimestampKey)

      if (cachedPosts && cacheTimestamp) {
        const currentTime = Date.now()
        if (currentTime - parseInt(cacheTimestamp) < cacheTTL) {
          setBlogPosts(JSON.parse(cachedPosts))
          return
        }
      }

      try {
        const response = await axios.get(`/api/blog?locale=${locale}`)
        setBlogPosts(response.data.data)
        localStorage.setItem(cacheKey, JSON.stringify(response.data.data))
        localStorage.setItem(cacheTimestampKey, Date.now().toString())
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      }
    }
    fetchPosts().then((r) => console.log("Fetched blog posts", r))
  }, [locale])

  return (
    <Layout headTitle={t.blogData.metaData.title}>
      <section className="relative py-8 lg:py-16">
        {/* <BlurCircle positionClassName="left-[-12rem] top-[2rem]" size="lg" />
        <LineGraphic
          positionClassname="right-[-14rem] 2xl:right-[-12rem] top-[-30px]"
          className="svg-primary"
        />
        <ShieldBadge positionClassName="left-[1rem] top-[1rem] lg:top-[6rem] lg:left-[8rem]" />
        <UserBadge positionClassName="right-[1rem] top-[1rem] lg:top-[4rem] lg:right-[16rem]" /> */}

        <ScrollReveal>
          <Title
            blackText={t.blogData.blogTitle}
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.blogData.blogSubtitle}
          </p>
        </ScrollReveal>
      </section>

      {/* Additional sections omitted for brevity */}

      {/* Dynamic Blog posts list */}
      <section className="py-16 mb-16">
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
              <div onClick={() => router.push(`/blog/${data.slug}`)}>
                <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={data.imageUrl}
                    width={600} // Adjust as needed
                    height={400} // Adjust as needed
                    alt="blog"
                    className="absolute object-cover"
                  />
                </div>
                <h1 className="font-bold font-inter text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                  {data.title}
                </h1>
                <p className="text-black font-inter mb-3">{data.subtitle}</p>
                <p className="text-black font-inter text-sm mt-auto flex items-center gap-2">
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

      <section className="relative isolate bg-primary text-white p-8 lg:py-14 lg:px-16 mb-16 lg:mb-20 rounded-[3rem]">
        {/* <LineGraphic
          positionClassname="right-[-12rem] bottom-[-6rem] lg:right-[-8rem] 2xl:right-[-10rem] lg:bottom-[-4rem]"
          className="svg-white"
        />
        <FadeLogo
          positionClassName="left-[-2rem] bottom-[-2rem]"
          svgClassname="svg-white-opacity"
          sizeClassName="w-[20rem] h-[20rem]"
          className="z-[-1]"
        /> */}
        <ScrollReveal>
          <Title
            blackText={t.blogData.keepYourselfTitle}
            className="text-left text-[24px]"
          />
          <p>{t.blogData.keepYourselfSubtitle}</p>
          <div className="mt-4 lg:mt-10">
            <input
              type="text"
              placeholder="Skriv in din e-postadress"
              className="pl-4 pr-10 py-3 rounded-lg mr-2 text-subtitle-dark focus:outline-primary"
            />
            <button className="btn bg-primary text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary">
              {t.blogData.keepYourselfButton}
            </button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
