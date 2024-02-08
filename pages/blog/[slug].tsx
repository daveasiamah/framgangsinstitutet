import { HiOutlineClock, HiArrowLeft } from "react-icons/hi"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"

import ScrollReveal from "@/components/transition/ScrollReveal";
import { fetchBlogPostBySlug } from "@/utils/contentful";
import ContentfulRichText from '@/utils/contentfulCustomRenderer';

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
}

export default function Blog({ blogPost, locale }: Props) {
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={`${t.blogData.blogTitle} - ${blogPost.title}`}>
      {/* Blog Details */}
      <section className="py-10 mb-16">
        <a className="mt-auto flex items-center gap-2 my-3" href="/blog">
              <HiArrowLeft size={15} />
              {`${t.blogData.blogTitle}`}
        </a>
        <ScrollReveal>
          <Title
            blackText={blogPost.title}
            className="text-left"
          >
            <p className="text-subtitle text-sm mt-auto flex items-center gap-2">
            <HiOutlineClock size={20} />
            {blogPost.date}
            </p>     
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