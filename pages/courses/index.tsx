import CourseCard from "@/components/blocks/courses-blocks/CourseCard"
import CoursesHeroBlock from "@/components/blocks/courses-blocks/CoursesHeroBlock"
import CoursesList from "@/components/blocks/courses-blocks/CoursesList"
import { CoursesOverview } from "@/components/blocks/courses-blocks/CoursesOverview"
import CourseTestimonials from "@/components/blocks/courses-blocks/CourseTestimonials"
import { WhoCanJoin } from "@/components/blocks/courses-blocks/WhoCanJoin"
import { WhoCanJoinBottomSection } from "@/components/blocks/courses-blocks/WhoCanJoinBottom"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

export const Title = ({
  blackText,
  blueText,
}: {
  blackText: string
  blueText: string
}) => (
  <h1 className="leading-[2rem] font-jakarta text-[22px] mb-4 md:text-[48px] md:leading-[3rem] font-bold">
    <p>
      {blackText} <span className="text-primary">{blueText}</span>
    </p>
  </h1>
)

type Props = {}
export default function Courses({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={"Courses"}>
      <section>
        {/* Courses Hero Section */}
        <CoursesHeroBlock />
        {/* Popular Courses List Section */}
        <CoursesList />
        <CourseCard />
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
