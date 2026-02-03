import { HiOutlineClock, HiArrowLeft } from "react-icons/hi"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import ScrollReveal from "@/components/transition/ScrollReveal"
import { fetchBlogPostBySlug } from "@/utils/contentful"
import ContentfulRichText from "@/utils/contentfulCustomRenderer"
import Image from "next/image"

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {
  blogPost: BlogPost
  locale: string
}

type BlogPost = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  date: string
  slug: string
  blogContent: any
  author: string
  authorProfile: string
}

export default function Blog({ blogPost, locale }: Props) {
  const t = locale === "en" ? en : sv
  console.log("Rendering blog post:", blogPost)
  return (
    <Layout headTitle={`${t.blogData.blogTitle} - ${blogPost.title}`}>
      {/* Blog Details */}
      <section className="py-10 mb-16">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex">
            <li className="mr-2">
              <Link
                href={`../../${locale}/`}
                className="text-gray-900 hover:text-gray-700"
              >{`${t.blogData.blogNav.home}`}</Link>
            </li>
            <li className="mr-2">
              <span aria-hidden="true" className="text-gray-400">
                {">"}
              </span>
            </li>
            <li className="mr-2">
              <Link
                href={`../../${locale}/blog`}
                className="text-gray-900 hover:text-gray-700"
              >{`${t.blogData.blogTitle}`}</Link>
            </li>
            <li className="mr-2">
              <span aria-hidden="true" className="text-gray-400">
                {">"}
              </span>
            </li>
            <li>
              <span className="text-gray-700">{`${t.blogData.blogNav.general}`}</span>
            </li>
          </ol>
        </nav>

        <ScrollReveal>
          <h1 className="font-geist font-bold text-[26px] lg:text-[40px] leading-[2rem] lg:leading-[3rem] mb-8">
            {blogPost.title}
          </h1>
          <div
            className="grid md:grid-cols-2 sm:grid-cols-1 mt-4"
            style={{ width: "max-content" }}
          >
            {blogPost.authorProfile && (
              <div className="flex items-center justify-center gap-4">
                <div className="rounded-full border overflow-hidden w-16 h-16 flex-shrink-0">
                  <Image
                    src={blogPost.authorProfile}
                    alt="Author"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-inter text-sm flex items-center">
                    {blogPost.author}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center gap-4">
              <p className="text-black text-sm font-inter flex items-center gap-2 ml-2">
                <HiOutlineClock size={20} />
                {blogPost.date}
              </p>
            </div>
          </div>
        </ScrollReveal>
        {blogPost.blogContent && (
          <div
            className="prose prose-headings:font-geist prose-p:font-geist prose-li:font-geist prose-strong:font-geist prose-a:font-geist max-w-none"
            style={{ maxWidth: "100%" }}
          >
            <ContentfulRichText content={[blogPost.blogContent]} />
          </div>
        )}
      </section>
    </Layout>
  )
}

export const getServerSideProps = async ({ params, req, locale }: any) => {
  try {
    const { slug } = params
    const blogPost: BlogPost = await fetchBlogPostBySlug(slug as string, locale)

    if (!blogPost) {
      return { notFound: true }
    }
    console.log("Fetched blog post:", blogPost)
    return {
      props: {
        blogPost,
        locale,
      },
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return {
      notFound: true,
    }
  }
}
