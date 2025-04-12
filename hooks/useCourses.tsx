import { Course } from "@/components/blocks/courses-blocks/types"
import { getCourses } from "@/utils/contentful"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  return { courses, isLoading, error }
}
