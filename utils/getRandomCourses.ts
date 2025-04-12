import { useCourses } from "@/hooks/useCourses"
import { useMemo } from "react"

export const randomCourses = useMemo(() => {
  const { courses, isLoading, error } = useCourses()

  const shuffled = [...courses].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
}, [useCourses])
