import { fetchCourseBySlug } from "@/utils/contentful"
import { Course } from "@/components/blocks/courses-blocks/types"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/Layout"
import RichTextRenderer from "@/utils/RichTextRenderer"
import Skeleton from "react-loading-skeleton"
import { useState } from "react"

type CoursePageProps = {
  course: Course[] | null
}

type SidebarCardProps = {
  totalTime: string
  priceExVat: number | null
  priceIncVat: number | null
  price: string | number | undefined
  purchaseLink: string | undefined
}

const SidebarCard = ({
  totalTime,
  priceExVat,
  priceIncVat,
  price,
  purchaseLink,
}: SidebarCardProps) => (
  <div className="rounded-[20px] border border-[#626C8E]/50 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:p-8 lg:min-h-[423px]">
    <h2 className="font-jakarta text-[22px] font-extrabold leading-[1.05] text-[#1D2750] md:text-[28px]">
      Kursöversikt
    </h2>

    <div className="mt-6 space-y-5">
      <div>
        <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.08em] text-[#2F5CE9]">
          VART
        </p>
        <p className="mt-1 font-inter text-[16px] font-medium text-[#1E1E1E]">
          Distans
        </p>
      </div>

      <div>
        <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.08em] text-[#2F5CE9]">
          OMFATTNING
        </p>
        <p className="mt-1 font-inter text-[16px] font-medium text-[#1E1E1E]">
          {totalTime}
        </p>
      </div>

      <div>
        <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.08em] text-[#2F5CE9]">
          AVGIFT
        </p>
        <p className="mt-1 font-inter text-[16px] font-medium text-[#1E1E1E]">
          {priceExVat ? `${priceExVat} kr` : `${price} kr`}
          {priceIncVat && (
            <span className="ml-2 text-[13px] text-[#8D8D8D]">
              ({priceIncVat} kr inkl. moms)
            </span>
          )}
        </p>
      </div>
    </div>

    <a
      href={purchaseLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#2F5CE9] px-4 font-jakarta text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-opacity hover:opacity-90"
    >
      Lägg i varukorgen
    </a>

    <p className="mt-4 text-center font-inter text-[12px] leading-[1.5] text-[#6B7280]">
      Frågor? Kontakta{" "}
      <a
        href="mailto:info@framgangsinstitutet.se"
        className="underline underline-offset-4"
      >
        info@framgangsinstitutet.se
      </a>
      .{" "}
      <Link href="/terms-of-service" className="underline underline-offset-4">
        Se villkor.
      </Link>
    </p>
  </div>
)

const CourseDetailPage = ({ course }: CoursePageProps) => {
  const [isCourseImageLoaded, setIsCourseImageLoaded] = useState(false)

  if (!course || course.length === 0) {
    return (
      <Layout headTitle="Utbildningar">
        <section className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-8">
          <h1 className="font-jakarta text-[28px] font-bold text-[#151E3A] md:text-[36px]">
            Kursen kunde inte hittas
          </h1>
          <p className="mt-3 font-inter text-[15px] text-[#2F2F2F]">
            Vi kunde inte ladda den valda kursen just nu.
          </p>
        </section>
      </Layout>
    )
  }

  const {
    title,
    shortDescription,
    longDescription,
    imageUrl,
    price,
    purchaseLink,
    videoInfo,
  } = course[0]

  const totalTime = videoInfo?.totalTime
    ? `${videoInfo.totalTime} timmar`
    : "7 dagar - 5 veckor"
  const numericPrice = Number(String(price || "").replace(/[^\d]/g, ""))
  const priceExVat =
    Number.isFinite(numericPrice) && numericPrice > 0 ? numericPrice : null
  const priceIncVat = priceExVat ? Math.round(priceExVat * 1.25) : null

  return (
    <Layout headTitle={`Utbildningar - ${title}`}>
      <section className="w-full pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-[1280px] px-4 pt-8 md:px-8 md:pt-10">
          <header className="mx-auto max-w-[980px] px-1 text-center sm:px-0">
            <h1
              className="mx-auto max-w-[18ch] font-jakarta text-[28px] font-bold leading-[1.12] text-[#151E3A] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[52px] break-words"
              style={{ textWrap: "balance" }}
            >
              {title}
            </h1>
            <p
              className="mx-auto mt-3 max-w-[62ch] font-inter text-[14px] leading-[1.6] text-[#2F2F2F] sm:text-[15px] md:text-[16px] lg:text-[17px]"
              style={{ textWrap: "balance" }}
            >
              {shortDescription ||
                "Få förståelse för juridiken som styr företagens verksamhet."}
            </p>
          </header>
        </div>

        {/* Sidebar — mobile/tablet only: appears after title+subtitle */}
        <div className="mx-auto mt-6 w-full max-w-[1280px] px-4 md:px-8 lg:hidden">
          <SidebarCard
            totalTime={totalTime}
            priceExVat={priceExVat}
            priceIncVat={priceIncVat}
            price={price}
            purchaseLink={purchaseLink}
          />
        </div>

        <div className="mt-6 w-full bg-[#225AEA] lg:mt-10">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
            <nav className="flex items-center gap-6 overflow-x-auto py-3 text-white md:gap-10">
              <a
                href="#oversikt"
                className="shrink-0 font-jakarta text-[11px] font-semibold uppercase tracking-[0.05em]"
              >
                Översikt
              </a>
              <a
                href="#kursinnehall"
                className="shrink-0 font-jakarta text-[11px] font-semibold uppercase tracking-[0.05em]"
              >
                Kursinnehåll
              </a>
              <a
                href="#genomforande"
                className="shrink-0 font-jakarta text-[11px] font-semibold uppercase tracking-[0.05em]"
              >
                Genomförande
              </a>
            </nav>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 pt-6 md:px-8 md:pt-8 lg:grid-cols-[minmax(0,1fr),456px] lg:gap-10">
          {/* Sidebar — desktop only: right column, sticky */}
          <aside className="hidden lg:block lg:order-2">
            <div className="lg:sticky lg:top-[110px]">
              <SidebarCard
                totalTime={totalTime}
                priceExVat={priceExVat}
                priceIncVat={priceIncVat}
                price={price}
                purchaseLink={purchaseLink}
              />
            </div>
          </aside>
          <article className="lg:order-1">
            <section id="oversikt">
              <div className="relative mt-5 h-[260px] w-full overflow-hidden rounded-[8px] md:h-[340px]">
                {!isCourseImageLoaded && (
                  <Skeleton className="absolute inset-0 h-full w-full" />
                )}
                <Image
                  alt={title}
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className={`object-cover transition-opacity duration-300 ${
                    isCourseImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() => setIsCourseImageLoaded(true)}
                />
              </div>
            </section>

            <section id="kursinnehall" className="mt-7 md:mt-8">
              <h3 className="font-jakarta text-[24px] font-bold leading-[1.15] text-[#151E3A] sm:text-[28px] md:text-[34px] lg:text-[38px] break-words">
                Om kursen {title}
              </h3>
              <p className="mt-3 max-w-[900px] font-inter text-[14px] leading-[1.65] text-[#252525] sm:text-[15px] md:text-[16px]">
                {shortDescription ||
                  "Kursen är utformad för dig som vill utveckla praktiska färdigheter och relevant kompetens för arbetsmarknaden."}
              </p>

              {longDescription && (
                <div className="mt-5 rounded-[8px] bg-white">
                  <RichTextRenderer richText={longDescription} />
                </div>
              )}
            </section>

            <section
              id="genomforande"
              className="mt-8 w-full rounded-[32px] bg-[#F8F8F8] px-6 py-8 md:px-10 lg:px-12 lg:py-10"
            >
              <h3 className="font-jakarta font-extrabold md:text-[28px]">
                Utbildningens{" "}
                <span className="text-[#2F5CE9] font-jakarta">expert.</span>
              </h3>
              <ul className="mt-4 space-y-2 list-disc font-inter text-[12px] md:text-[14px] text-[#151515] leading-[20px]">
                <li>
                  Över 9 års erfarenhet av kommunikation, reklam och
                  marknadsföring.
                </li>
                <li>
                  Föreläsare på Folkuniversitetet och IHM Business school.
                </li>
                <li>Författare till boken i den här utbildningen.</li>
                <li>Drivit egen byrå sedan 2019.</li>
              </ul>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  const { slug } = params as { slug: string }

  try {
    const course = await fetchCourseBySlug(slug)

    if (!course || course.length === 0) {
      return { notFound: true }
    }

    return {
      props: {
        course,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default CourseDetailPage
