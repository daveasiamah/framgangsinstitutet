import Layout from "@/components/Layout"
import WhoCanJoin from "@/components/blocks/courses-blocks/WhoCanJoin"
import WhoCanJoinBottomSection from "@/components/blocks/courses-blocks/WhoCanJoinBottom"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import EbooksHeroBlock from "@/components/blocks/ebooks-blocks/EbooksHeroBlock"
import EbooksList from "@/components/blocks/ebooks-blocks/EbooksList"
import EbookTestimonials from "@/components/blocks/ebooks-blocks/EbookTestimonials"
import EbookOverview from "@/components/blocks/ebooks-blocks/EbookOverview"
import { EasyWayToBuy } from "@/components/blocks/ebooks-blocks/EasyWayToBuy"

type Props = {}
export default function Ebooks({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={"Eböcker"}>
      <section className="w-full">
        {/* Ebooks Hero Section */}
        <EbooksHeroBlock />
        {/* Popular Courses List Section */}
        <EbooksList />
        {/* Easy way to buy E-books Section */}
        <EasyWayToBuy />
        {/* Testimonials Section */}
        <EbookTestimonials />
        {/* Learn Digital Courses Section */}
        <EbookOverview />
      </section>
    </Layout>
  )
}
