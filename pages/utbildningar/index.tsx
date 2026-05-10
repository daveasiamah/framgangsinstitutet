import Layout from "@/components/Layout"
import HomePageCourseCard from "@/components/blocks/home-blocks/HomePageCourseCard"
import TrustPilotReviews from "@/components/parts/TrustPilotReviews"
import { MainFAQ } from "@/components/parts/MainFAQ"
import { getCoursesPaginated, getFAQs } from "@/utils/contentful"
import Link from "next/link"
import { ArrowRightIcon, Loader2 } from "lucide-react"
import { useState } from "react"
import { Document } from "@contentful/rich-text-types"

const PAGE_SIZE = 6

type CourseListItem = {
  id: string
  title: string
  shortDescription: string
  slug: string
}

type Props = {
  initialCourses?: CourseListItem[]
  totalCourses?: number
  locale?: string
  faqs?: {
    id: string | number
    question: string
    answer: string | Document
  }[]
}

function CourseCardSkeleton() {
  return (
    <article className="w-full overflow-hidden rounded-t-[18px]">
      <div className="h-[171px] animate-pulse rounded-t-[18px] bg-[#DDE7FF]" />
      <div className="space-y-3 bg-[#F8F8F8] p-4">
        <div className="h-6 w-[72%] animate-pulse rounded bg-[#E4E9F3]" />
        <div className="h-4 w-[48%] animate-pulse rounded bg-[#E4E9F3]" />
        <div className="h-4 w-[38%] animate-pulse rounded bg-[#E4E9F3]" />
        <div className="h-4 w-full animate-pulse rounded bg-[#E4E9F3]" />
        <div className="h-4 w-[88%] animate-pulse rounded bg-[#E4E9F3]" />
        <div className="h-5 w-[30%] animate-pulse rounded bg-[#E4E9F3]" />
      </div>
    </article>
  )
}

export default function Courses({
  initialCourses = [],
  totalCourses = 0,
  locale = "sv",
  faqs = [],
}: Props) {
  const [courseItems, setCourseItems] = useState<CourseListItem[]>(
    Array.isArray(initialCourses) ? initialCourses : [],
  )
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [loadMoreError, setLoadMoreError] = useState("")

  const hasMore = courseItems.length < totalCourses

  const handleLoadMore = async () => {
    if (!hasMore || isLoadingMore) {
      return
    }

    setIsLoadingMore(true)
    setLoadMoreError("")

    try {
      console.info("[utbildningar] load-more request", {
        skip: courseItems.length,
        limit: PAGE_SIZE,
        locale,
      })

      const response = await fetch(
        `/api/courses?skip=${courseItems.length}&limit=${PAGE_SIZE}&locale=${locale}`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch more courses")
      }

      const data = await response.json()
      const newCourses = (data?.courses || []) as CourseListItem[]

      console.info("[utbildningar] load-more response", {
        returned: newCourses.length,
        total: Number(data?.total || 0),
      })

      setCourseItems((prev) => [...prev, ...newCourses])
    } catch (error) {
      console.error("[utbildningar] load-more error", error)
      setLoadMoreError("Kunde inte ladda fler utbildningar just nu.")
    } finally {
      setIsLoadingMore(false)
    }
  }
  return (
    <Layout headTitle="Alla utbildningar" isFullWidth={true}>
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1336px] px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10 lg:px-10 lg:pt-14">
          <div className="mx-auto max-w-[760px] text-center">
            <h1 className="font-jakarta text-[25px] font-bold leading-[1.05] text-[#000000] md:text-[44px] lg:text-[48px]">
              Alla utbildningar
            </h1>
            <p className="mx-auto mt-3 max-w-[327px] md:max-w-[552px] lg:max-w-[715px] font-inter text-[12px] font-medium leading-[1.35] text-[#000000] md:mt-4 md:text-[16px] md:leading-[1.4]">
              Framgångsinstitutet är en av Sveriges äldsta och främsta
              utbildningsaktörer. Våra utbildningar utformas av efterfrågan på
              arbetsmarknaden och i nära samarbete med ledande företag - för att
              på bästa sätt förbereda dig för framtidsjobb inom olika branscher.
            </p>
          </div>
        </div>

        <div className="w-full bg-[#225AEA]">
          <div className="mx-auto grid w-full max-w-[1336px] grid-cols-1 gap-1 px-4 py-2 text-center md:grid-cols-3 md:gap-2 md:px-8 md:py-3 lg:px-10">
            <p className="font-inter font-medium text-[11px] text-white md:text-[12px]">
              Onlineutbildningar sedan år 2019
            </p>
            <p className="font-inter font-medium text-[11px] text-white md:text-[12px]">
              Goda möjligheter till framtidsjobb
            </p>
            <p className="font-inter font-medium text-[11px] text-white md:text-[12px]">
              Yrkesverksamma föreläsare
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1336px] px-4 pb-12 pt-7 md:px-8 md:pb-16 md:pt-9 lg:px-10">
          <h2 className="font-jakarta text-[22px] md:text-[32px] lg:text-[48px] font-bold leading-[1.05] text-[#000000]">
            Alla utbildningar
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-6 md:mt-7 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
            {courseItems.map((course) => (
              <HomePageCourseCard
                key={course.id}
                title={course.title}
                description={course.shortDescription}
                credential="Diplom & certifikat"
                format="Distans"
                href={`/utbildningar/${course.slug}`}
              />
            ))}

            {isLoadingMore &&
              Array.from({ length: 3 }).map((_, index) => (
                <CourseCardSkeleton key={`course-skeleton-${index}`} />
              ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="inline-flex items-center gap-2 font-jakarta font-bold text-[#225AEA] text-[14px] md:text-[16px] uppercase tracking-[0.02em] disabled:opacity-60"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Laddar...
                  </>
                ) : (
                  <>
                    LADDA IN FLER
                    <span className="flex items-center justify-center text-2xl">
                      &gt;
                    </span>
                  </>
                )}
              </button>
            </div>
          )}

          {loadMoreError && (
            <p className="mt-4 text-center font-inter text-[14px] text-red-600">
              {loadMoreError}
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-[1336px] px-4 pb-8 md:px-8 lg:px-10">
          <h2 className="font-jakarta text-[22px] md:text-[32px] lg:text-[48px] font-bold text-center leading-[1.05] text-[#000000] mb-4 md:mb-6">
            Recensioner
          </h2>
          <TrustPilotReviews />
        </div>

        <div className="mx-auto w-full max-w-[1336px] px-4 pb-12 md:px-8 md:pb-16 lg:px-10">
          <section className="w-full overflow-hidden bg-[#225AEA]">
            <div className="grid grid-cols-1 gap-8 px-5 py-8 md:px-10 md:py-10 lg:grid-cols-[1fr,420px] lg:items-center lg:gap-12 lg:px-12 lg:py-12">
              <div className="order-2 lg:order-1">
                <h2 className="font-jakarta text-white text-[18px] md:text-[28px] lg:text-[40px] font-extrabold leading-[1.05] mb-4 md:mb-5">
                  Varför välja Framgångsinstitutet?
                </h2>
                <p className="font-poppins text-white text-sm lg:text-[16px] max-w-[760px]">
                  Framgångsinstitutet grundades år 2019 och är en av Sveriges
                  främsta utbildningsaktörer. Vårt goda rykte inom näringslivet
                  och breda nätverk ger dig fördelar, hela vägen från studier
                  till arbete. Alla våra utbildningar sker på distans. I
                  studierna ingår även diplom och certifikat som ger dig
                  möjlighet att söka jobb efter dina studier till en verklig
                  arbetsplats. Alla lektioner spelas dessutom in, så att du kan
                  repetera och se innehållet i efterhand.
                </p>
              </div>

              <div className="order-1 mx-auto w-full max-w-[320px] md:max-w-[400px] lg:order-2 lg:max-w-[420px]">
                <img
                  src="/images/home/home-banner.jpg"
                  alt="Studenter"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="w-full bg-white px-5 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <h3 className="font-jakarta text-[22px] md:text-[40px] font-extrabold leading-[1.08] text-black max-w-[685px]">
              Vill du ta del av nyheter och tips om våra kurser och
              utbildningar?
            </h3>
            <Link
              href="/kontakta-oss"
              className="mt-5 md:mt-8 inline-flex items-center gap-2 font-poppins font-medium text-[#3E6FED] text-base uppercase tracking-[0.02em]"
            >
              Fyll i en intresseanmälan här
              <span className="flex items-center justify-center text-2xl">
                &gt;
              </span>
            </Link>
          </section>
        </div>

        <div className="mx-auto w-full max-w-[1336px] px-4 pb-12 md:px-8 md:pb-16 lg:px-10">
          <MainFAQ faqData={faqs} />
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps = async ({ locale }: { locale?: string }) => {
  const resolvedLocale = locale || "sv"

  const { courses, total } = await getCoursesPaginated({
    skip: 0,
    limit: PAGE_SIZE,
    locale: resolvedLocale,
  })
  const faqs = await getFAQs(resolvedLocale)

  const initialCourses: CourseListItem[] = (courses || []).map(
    (course: any) => ({
      id: String(course.id),
      title: course.title || "",
      shortDescription: course.shortDescription || "",
      slug: course.slug || "",
    }),
  )

  return {
    props: {
      initialCourses,
      totalCourses: total || 0,
      locale: resolvedLocale,
      faqs,
    },
  }
}
