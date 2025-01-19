import CoursesHeroBlock from "@/components/blocks/courses-blocks/CoursesHeroBlock"
import { CoursesOverview } from "@/components/blocks/courses-blocks/CoursesOverview"
import { WhoCanJoin } from "@/components/blocks/courses-blocks/WhoCanJoin"
import Layout from "@/components/Layout"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"

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
        {/* Who Is This For Section */}
        <WhoCanJoin />
        {/* Testimonials Section */}

        {/* Learn Digital Courses Section */}
        <CoursesOverview />
      </section>
    </Layout>
  )
}
