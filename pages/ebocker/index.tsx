import Layout from "@/components/Layout"
import CoursesHeroBlock from "@/components/blocks/courses-blocks/CoursesHeroBlock"
import CoursesList from "@/components/blocks/courses-blocks/CoursesList"
import CourseTestimonials from "@/components/blocks/courses-blocks/CourseTestimonials"
import WhoCanJoin from "@/components/blocks/courses-blocks/WhoCanJoin"
import WhoCanJoinBottomSection from "@/components/blocks/courses-blocks/WhoCanJoinBottom"
import CoursesOverview from "@/components/blocks/courses-blocks/CoursesOverview"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

type Props = {}
export default function Ebooks({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={"Eböcker"}>
      <section className="w-full">
        {/* Courses Hero Section */}
        <CoursesHeroBlock />
        {/* Popular Courses List Section */}
        <CoursesList />
        {/* Who Is This For Section */}
        <WhoCanJoin />
        <WhoCanJoinBottomSection />
        {/* Testimonials Section */}
        <CourseTestimonials />
        {/* Learn Digital Courses Section */}
        <CoursesOverview />
      </section>
    </Layout>
  )
}
