import { Title } from "@/pages/courses"
import React from "react"
import Image from "next/image"

const courses = [
  {
    id: 1,
    title: "E-commerce Manager",
    description:
      "I den här kursen lär du lära dig att starta e-handel med fördjupad kunskap för att växa försäljning.",
    price: "9995 SEK",
    imageUrl: "/images/courses/ecommerce-manager.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Lär dig att hantera sociala medier och bygga starka kampanjer som driver tillväxt.",
    price: "8495 SEK",
    imageUrl: "/images/courses/social-media-marketing.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "SEO Specialist",
    description:
      "Förbättra din webbplats ranking och dra in mer trafik genom SEO-strategier.",
    price: "7595 SEK",
    imageUrl: "/images/courses/seo-specialist.jpg", // Replace with actual image path
  },
]

function CoursesList() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <Title blackText="Populära" blueText="utbildningar" />

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-[396px] mx-auto"
          >
            {/* Course Image */}
            <Image
              src={course.imageUrl}
              alt={course.title}
              width={364}
              height={192}
              className="w-full object-cover"
            />

            {/* Course Content */}
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-[#151E3A] mb-4">
                {course.title}
              </h4>
              <p className="text-sm text-[#707BA0] mb-6">
                {course.description}
              </p>

              {/* Price Button */}
              <button className="bg-[#225AEA] text-white text-center rounded-lg py-3 px-6 font-medium hover:bg-[#1a4ed0] transition duration-300">
                {course.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoursesList
