import { HiOutlineClock, HiArrowLeft } from "react-icons/hi"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import ScrollReveal from "@/components/transition/ScrollReveal";
import { fetchBlogPostBySlug } from "@/utils/contentful";
import ContentfulRichText from '@/utils/contentfulCustomRenderer';
import Image from "next/image"

import en from "@/locales/en"
import sv from "@/locales/sv"

type Props = {
  blogPost: BlogPost
  locale: string
}

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  slug: string;
  blogContent: any;
  author: string;
  authorProfile: string;
}

export default function Blog({ blogPost, locale }: Props) {
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={`${t.blogData.blogTitle} - ${blogPost.title}`}>
      {/* Blog Details */}
      <section className="py-10 mb-16">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex">
            <li className="mr-2">
              <a href={`../../${locale}/`} className="text-gray-400 hover:text-gray-700">{`${t.blogData.blogNav.home}`}</a>
            </li>
            <li className="mr-2">
              <span aria-hidden="true" className="text-gray-400">{">"}</span>
            </li>
            <li className="mr-2">
              <a href={`../../${locale}/blog`} className="text-gray-400 hover:text-gray-700">{`${t.blogData.blogTitle}`}</a>
            </li>
            <li className="mr-2">
              <span aria-hidden="true" className="text-gray-400">{">"}</span>
            </li>
            <li>
              <span className="text-gray-700">{`${t.blogData.blogNav.general}`}</span>
            </li>
          </ol>
        </nav>        
        {/* <a className="mt-auto flex items-center gap-2 my-3" href="/blog">
              <HiArrowLeft size={15} />
              {`${t.blogData.blogTitle}`}
        </a> */}
        <ScrollReveal>
          <Title
            blackText={blogPost.title}
            className="text-left"
          >
          <div className="grid md:grid-cols-2 sm:grid-cols-1" style={{ width: "max-content" }}>
          { blogPost.authorProfile && <div className="flex items-center">
            <Image src={blogPost.authorProfile} alt="Author" width={15} height={15} className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-subtitle text-sm mt-auto flex items-center">{blogPost.author}</p>
            </div>
          </div> }
            <div style={{ marginTop: "10px" }}><p className="text-subtitle text-sm mt-auto flex items-center gap-2 ml-2">
            <HiOutlineClock size={20} />
            {blogPost.date}
            </p></div>
            </div> 
          </Title> 
        </ScrollReveal>
        { blogPost.blogContent && <div className="prose" style={{ maxWidth: "100%" }}>
           <ContentfulRichText content={[blogPost.blogContent]} />
        </div> }
      </section>
    </Layout>
  )
}

export const getServerSideProps = async ({ params, req, locale }: any) => {

  try {
    const { slug } = params;
    const blogPost: BlogPost = await fetchBlogPostBySlug(slug as string, locale);
    
    if(!blogPost) {
      return { notFound: true }
    }
    return {
      props: {
        blogPost,
        locale
      }
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      notFound: true
    }
  }
}