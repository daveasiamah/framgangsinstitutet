import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import CoursePageTitle from "@/components/parts/CoursePageTitle"
import { getCourses } from "@/utils/contentful"
import { Ebook } from "./types"
import EbookCard from "./EbookCard"
import { EbookCardSkeleton } from "./components/EbookCardSkeleton"

const EbooksList = () => {
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const allCourses = await getCourses()
        if (allCourses && allCourses.length > 0) {
          setEbooks(allCourses)
        } else {
          setError("No ebooks found.")
        }
      } catch (err) {
        setError("Failed to fetch ebooks. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <section className="w-full">
      <CoursePageTitle blackText="Utforska" blueText="kursböcker" />

      <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-6 place-items-center mt-8 mb-8">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => <EbookCardSkeleton />)}

        {!isLoading &&
          !error &&
          ebooks.map((ebook: Ebook) => (
            <div
              key={ebook.id}
              onClick={() => router.push(`/ebocker/${ebook.slug}`)}
              className="cursor-pointer"
            >
              <EbookCard ebook={ebook} />
            </div>
          ))}

        {!isLoading && error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}
      </div>
    </section>
  )
}

export default EbooksList
