import { fetchCourseBySlug } from "@/utils/contentful"
import { Course } from "@/components/blocks/courses-blocks/types"
import Image from "next/image"
import ScrollReveal from "@/components/transition/ScrollReveal"
import Breadcrumbs from "@/components/blocks/courses-blocks/CourseBreadcrumbs"
import Layout from "@/components/Layout"
import RichTextRenderer from "@/utils/RichTextRenderer"
import Link from "next/link"

const CourseDetailPage = ({ course }: { course: Course[] }) => {
  if (!course) {
    return <div>Course not found</div>
  }

  const { title, price, purchaseLink, longDescription, imageUrl } = course[0]

  return (
    <Layout headTitle={`Utbilningar - ${title}`}>
      <section className="flex flex-col lg:flex-row py-10 mb-16">
        {/* Left Column */}
        <div className="w-full lg:flex-1 lg:min-w-0 px-1 md:px-1 order-1">
          <Breadcrumbs courseTitle={title} />
          <ScrollReveal>
            <div className="flex flex-col pl-4">
              <h1 className="font-jakarta text-left font-bold text-[32px] md:text-[48px] text-wrap leading-[40px] md:leading-[55px]">
                {title}
              </h1>
              <div className="flex flex-col items-center">
                <Image
                  alt="course image"
                  src={imageUrl}
                  width={680}
                  height={360}
                  style={{ objectFit: "contain" }}
                  className="rounded-[20px] mt-[24px] md:mt-[48px] mb-6 md:mb-9"
                />
                <button
                  onClick={() => window.open(purchaseLink)}
                  className="w-full max-w-[318px] py-3 md:py-2 bg-[#225AEA] text-white font-semibold rounded-xl"
                >
                  <p className="uppercase">{price} SEK</p>
                </button>
              </div>
            </div>
          </ScrollReveal>
          {longDescription && (
            <div
              className="prose font-inter mt-6 md:mt-8 pl-4"
              style={{ maxWidth: "100%" }}
            >
              <RichTextRenderer richText={longDescription} />
            </div>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-full lg:w-auto lg:min-w-[386px] mt-12 lg:mt-0 lg:pl-6 order-2">
          <div className="flex flex-col items-center lg:sticky lg:top-[600px]">
            <h2 className="font-jakarta text-lg font-bold mb-4 text-center">
              Checkified Erbjudanden
            </h2>
            <div className="max-w-full md:max-w-[386px] rounded-[30px] border-2 border-[#DCE2F8] p-[20px] md:p-[28px]">
              <div className="flex flex-col px-4 md:px-8 py-4 rounded-[25px] bg-[#225aea] mb-4">
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/icons/courses/side-bar-logo.svg"
                    width={48}
                    height={49}
                    alt="checkified-logo"
                  />
                  <div className="flex flex-col gap-2 max-h-[61px] text-white">
                    <h4 className="font-jakarta font-bold text-sm">
                      Din Framtid Börjar Här
                    </h4>
                    <p className="font-jakarta font-semibold text-xs">
                      Utforska över 30+ utbildningar inom Tech, Finans och
                      Kommunikation
                    </p>
                  </div>
                </div>
                <Link
                  href="https://checkified.se/utbildningar/"
                  className="w-full text-center py-3 bg-white text-[#151e3a] font-semibold rounded-[10px]"
                >
                  <p className="text-xs">Utforska Utbildningar</p>
                </Link>
              </div>
              <div className="flex flex-col px-4 md:px-8 py-4 rounded-[25px] bg-[#95BF47] mb-4">
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/icons/courses/sidebar-shopify-icon.svg"
                    width={48}
                    height={53}
                    alt="shopify-logo"
                  />
                  <div className="flex flex-col gap-2 max-h-[61px] text-white">
                    <h4 className="font-jakarta font-bold text-sm">
                      Shopify Erbjudande
                    </h4>
                    <p className="font-jakarta font-semibold text-xs">
                      Börja och sälja med Shopify 10kr/mån i 3 månader
                    </p>
                  </div>
                </div>
                <Link
                  href="https://shopify.pxf.io/checkified"
                  className="w-full text-center py-3 bg-white text-[#151e3a] font-semibold rounded-[10px]"
                >
                  <p className="text-xs">Få Erbjudande</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Get a single course by slug
export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params as { slug: string }
  try {
    const course = await fetchCourseBySlug(slug) // Fetch course data by slug
    return {
      props: {
        course,
      },
    }
  } catch (error) {
    return {
      notFound: true, // If course not found, return a 404 page
    }
  }
}

export default CourseDetailPage
