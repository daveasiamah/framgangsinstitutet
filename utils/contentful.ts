import { createClient } from "contentful"
import { Document } from "@contentful/rich-text-types"

const contentfulSpaceId =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
  process.env.CONTENTFUL_SPACE_ID ||
  ""

const contentfulAccessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
  process.env.CONTENTFUL_ACCESS_TOKEN ||
  ""

const client =
  contentfulSpaceId && contentfulAccessToken
    ? createClient({
        space: contentfulSpaceId,
        accessToken: contentfulAccessToken,
      })
    : ({
        getEntries: async () => {
          throw new Error(
            "Missing Contentful credentials. Set CONTENTFUL_* for server or NEXT_PUBLIC_CONTENTFUL_* for browser usage.",
          )
        },
      } as any)

function normalizeLocale(locale?: string | string[]): string {
  if (Array.isArray(locale)) {
    return normalizeLocale(locale[0])
  }

  if (!locale || locale === "undefined" || locale === "null") {
    return "sv"
  }

  return locale
}

export async function fetchCourseBySlug(slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: "courses",
      "fields.slug": slug,
      limit: 1, // Fetch only the single course with the matching slug
    })

    if (entries.items.length === 0) {
      return null // Return null if no course matches the slug
    }

    const formattedEntries = entries.items.map((entry: any) => {
      // Extract the "value" from the nested structure in shortDescription
      const shortDescriptionContent = entry.fields.shortDescription?.content
      const shortDescription =
        shortDescriptionContent?.[0]?.content?.[0]?.value || ""

      // Ensure longDescription is properly returned
      const longDescription = entry.fields.longDescription as
        | Document
        | undefined

      return {
        id: entry.sys.id,
        title: entry.fields.title,
        shortDescription: shortDescription,
        longDescription: longDescription,
        imageUrl: `https:${entry.fields.imageUrl?.fields?.file?.url}`,
        price: entry.fields.price,
        slug: entry.fields.slug,
        purchaseLink: entry.fields.purchaseLink,
        tags: entry.fields.tags || null,
        videoInfo: entry.fields.videoInfo?.videoInfo || {
          count: 0,
          totalTime: 0,
          level: "",
          icons: { count: "", time: "", level: "" },
        },
      }
    })
    return formattedEntries
  } catch (error) {
    console.error("Error fetching course by slug:", error)
    return null
  }
}

function formatCourseEntries(entries: any[]) {
  return entries.map((entry: any) => {
    const shortDescriptionContent = entry.fields.shortDescription?.content
    const shortDescription =
      shortDescriptionContent?.[0]?.content?.[0]?.value || ""

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      shortDescription: shortDescription,
      longDescription: entry.fields.longDescription,
      imageUrl: `https:${entry.fields.imageUrl?.fields?.file?.url}`,
      price: entry.fields.price,
      slug: entry.fields.slug,
      tags: entry.fields.tags || null,
      purchaseLink: entry.fields.purchaseLink,
      videoInfo: entry.fields.videoInfo?.videoInfo || {
        count: 0,
        totalTime: 0,
        level: "",
        icons: { count: "", time: "", level: "" },
      },
    }
  })
}

export async function getCoursesPaginated(options?: {
  skip?: number
  limit?: number
  locale?: string
}) {
  const { skip = 0, limit = 6, locale = "sv" } = options || {}

  try {
    console.info("[contentful:getCoursesPaginated] request", {
      skip,
      limit,
      locale: normalizeLocale(locale),
    })

    const entries = await client.getEntries({
      content_type: "courses",
      locale: normalizeLocale(locale),
      skip,
      limit,
    })

    console.info("[contentful:getCoursesPaginated] response", {
      returned: entries.items?.length || 0,
      total: entries.total || 0,
      skip,
      limit,
    })

    return {
      courses: formatCourseEntries(entries.items),
      total: entries.total || 0,
    }
  } catch (error) {
    console.log("Error fetching paginated courses:", error)
    return {
      courses: [],
      total: 0,
    }
  }
}

export async function getCourses() {
  try {
    if (typeof window !== "undefined") {
      const response = await fetch("/api/courses?skip=0&limit=1000")
      if (!response.ok) {
        throw new Error("Failed to fetch courses from API")
      }

      const data = await response.json()
      return Array.isArray(data?.courses) ? data.courses : []
    }

    const entries = await client.getEntries({
      content_type: "courses",
    })
    console.log("Fetched courses:", entries.items)
    return formatCourseEntries(entries.items)
  } catch (error) {
    console.log("Error fetching courses:", error)
    return []
  }
}

export async function getFAQs(locale: string = "sv") {
  const normalizedLocale = normalizeLocale(locale)

  const faqContentTypes = ["faqFramgngsinstitutet", "faq"]
  const queryAttempts = faqContentTypes.flatMap((contentType) => [
    {
      content_type: contentType,
      locale: normalizedLocale,
      order: ["fields.position"],
    },
    {
      content_type: contentType,
      locale: normalizedLocale,
    },
    {
      content_type: contentType,
      order: ["fields.position"],
    },
    {
      content_type: contentType,
    },
  ])

  for (const query of queryAttempts) {
    try {
      const entries = await client.getEntries(query)

      if (!entries.items || entries.items.length === 0) {
        continue
      }

      const formattedEntries = entries.items
        .map((entry: any) => ({
          id: entry.sys.id,
          question: entry.fields?.question || "",
          answer: (entry.fields?.answer || null) as Document,
          lastUpdated: entry.fields?.lastUpdated || entry.sys.updatedAt,
          position: entry.fields?.position ?? Number.MAX_SAFE_INTEGER,
        }))
        .sort((a: any, b: any) => Number(a.position) - Number(b.position))

      return formattedEntries
    } catch (error) {
      console.log("Error fetching FAQs with query:", query, error)
    }
  }

  return []
}
