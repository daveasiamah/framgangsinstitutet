import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import CoachingCourseWhoCanJoin from "@/components/blocks/coaching-course-blocks/CoachingCourseWhoCanJoin"
import CoachingCourseWhoCanJoinBottomSection from "@/components/blocks/coaching-course-blocks/CoachingCourseWhoCanJoinBottom"
import CoachingCourseCourseTestimonials from "@/components/blocks/coaching-course-blocks/CoachingCourseTestimonials"
import CoachingCoursesList from "@/components/blocks/coaching-course-blocks/CoachingCoursesList"
import CoachingCourseHeroBlock from "@/components/blocks/coaching-course-blocks/CoachingCourseHeroBlock"
import CoachingCoursesOverview from "@/components/blocks/coaching-course-blocks/CoachingCoursesOverview"

type Props = {}
export default function Courses({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={"Utbildningar"}>
      <section className="w-full">
        <CoachingCourseHeroBlock />
        <CoachingCoursesList />
        <CoachingCourseWhoCanJoin />
        <CoachingCourseWhoCanJoinBottomSection />
        <CoachingCourseCourseTestimonials />
        <CoachingCoursesOverview />
      </section>
    </Layout>
  )
}
