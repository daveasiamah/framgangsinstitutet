import React from "react"
import CourseCard from "./CourseCard"
import CoursePageTitle from "@/components/parts/CoursePageTitle"

const courses = [
  {
    id: 1,
    title: "E-commerce Manager",
    description:
      "I den här kursen lär du lära dig att starta e-handel med fördjupad kunskap för att växa försäljning.",
    price: "9995 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 18,
      totalTime: 4.5,
      level: "För nybörjare",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Lär dig att hantera sociala medier och bygga starka kampanjer som driver tillväxt.",
    price: "8495 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 20,
      totalTime: 5,
      level: "Mellanliggande",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
  {
    id: 3,
    title: "SEO Specialist",
    description:
      "Förbättra din webbplats ranking och dra in mer trafik genom SEO-strategier.",
    price: "7595 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 15,
      totalTime: 3.5,
      level: "Avancerad",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
  {
    id: 5,
    title: "SEO Specialist",
    description:
      "Förbättra din webbplats ranking och dra in mer trafik genom SEO-strategier.",
    price: "7595 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 15,
      totalTime: 3.5,
      level: "Avancerad",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
  {
    id: 6,
    title: "SEO Specialist",
    description:
      "Förbättra din webbplats ranking och dra in mer trafik genom SEO-strategier.",
    price: "7595 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 15,
      totalTime: 4.5,
      level: "Avancerad",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
  {
    id: 4,
    title: "SEO Specialist",
    description:
      "Förbättra din webbplats ranking och dra in mer trafik genom SEO-strategier.",
    price: "7595 SEK",
    imageUrl: "/images/courses/course-image-placeholder.png",
    tags: { distance: "Distans", new: "Nyhet" },
    videoInfo: {
      count: 15,
      totalTime: 3.5,
      level: "Avancerad",
      icons: {
        count: "/icons/courses/location.png",
        time: "/icons/courses/direct-right.png",
        level: "/icons/courses/shield-tick.png",
      },
    },
  },
]

function CoursesList() {
  return (
    <section className="w-full">
      {/* Section Title */}
      <CoursePageTitle blackText="Populära" blueText="utbildningar" />

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 place-items-center mt-8 mb-8">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  )
}

export default CoursesList
