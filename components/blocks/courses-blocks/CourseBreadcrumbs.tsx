import React from "react"
import { useRouter } from "next/router"

interface BreadcrumbsProps {
  courseTitle?: string // The course title to display as the last breadcrumb
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ courseTitle }) => {
  const router = useRouter()
  const { locale } = router

  // Localization for breadcrumb links
  const isEnglish = locale === "en"
  const translations = {
    home: isEnglish ? "Home" : "Hem",
    courses: isEnglish ? "Courses" : "Utbildningar",
  }

  // Generate dynamic breadcrumbs
  const breadcrumbs = [
    { name: translations.home, href: `/${locale}/` },
    { name: translations.courses, href: `/${locale}/utbildningar` },
  ]

  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <a
              href={breadcrumb.href}
              className="text-gray-400 hover:text-gray-700"
            >
              {breadcrumb.name}
            </a>
            {index < breadcrumbs.length - 1 && (
              <span aria-hidden="true" className="mx-2 text-gray-400">
                {">"}
              </span>
            )}
          </li>
        ))}
        {courseTitle && (
          <>
            <span aria-hidden="true" className="mx-2 text-gray-400">
              {">"}
            </span>
            <li className="text-gray-700 flex-1 min-w-0">
              <span className="block truncate">{courseTitle}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
