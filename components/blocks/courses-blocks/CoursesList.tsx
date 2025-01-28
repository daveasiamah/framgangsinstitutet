import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import CourseCard from "./CourseCard"
import CoursePageTitle from "@/components/parts/CoursePageTitle"
import { getCourses } from "@/utils/contentful"
import { Course } from "./types"

const CoursesList = () => {
  const [courses, setCourses] = useState<Course[]>([])
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
          setCourses(allCourses)
        } else {
          setError("No courses found.")
        }
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <section className="w-full">
      <CoursePageTitle blackText="Populära" blueText="utbildningar" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 place-items-center mt-8 mb-8">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col max-w-[345px] min-w-[345px] max-h-[365px] md:max-h-[433px] lg:min-w-[396px] lg:min-h-[433px] xl:min-w-[396px] xl:min-h-[433px] 2xl:min-w-[463px] 2xl:min-h-[443px] px-4 pt-5 pb-5 border rounded-[29px]"
              style={{ borderColor: "#BBBBBF" }}
            >
              <Skeleton height="170px" className="rounded-[20px]" />
              <div className="mt-3">
                <Skeleton width="60%" height="20px" />
                <Skeleton width="40%" height="20px" className="mt-1" />
              </div>
              <Skeleton height="24px" width="80%" className="mt-4 mb-2" />
              <Skeleton height="16px" width="90%" className="mb-1" />
              <Skeleton height="16px" width="85%" />
              <Skeleton
                height="40px"
                width="100%"
                className="mt-3 rounded-xl"
              />
            </div>
          ))}

        {!isLoading &&
          !error &&
          courses.map((course: Course) => (
            <div
              key={course.id}
              onClick={() => router.push(`/utbildningar/${course.slug}`)}
              className="cursor-pointer"
            >
              <CourseCard course={course} />
            </div>
          ))}

        {!isLoading && error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}
      </div>
    </section>
  )
}

export default CoursesList
