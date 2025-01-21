import React from "react"
import CourseCard from "./CourseCard"
import CoursePageTitle from "@/components/parts/CoursePageTitle"
import { useEffect, useState } from "react"
import { getCourses } from "@/utils/contentful"
import { CourseProps } from "./types"

function CoursesList() {
  const [courses, setCourses] = useState<CourseProps[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getCourses()
        if (allCourses) {
          setCourses(allCourses)
        } else {
          console.error("Failed to fetch courses")
        }
      } catch (error) {
        console.error("Error fetching courses:", error)
      }
    }

    fetchCourses()
  }, [])

  return (
    <section className="w-full">
      {/* Section Title */}
      <CoursePageTitle blackText="Populära" blueText="utbildningar" />

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 place-items-center mt-8 mb-8">
        {courses.map((course: CourseProps) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  )
}

export default CoursesList
