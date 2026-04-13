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

function normalizeLocale(locale?: string | string[]) {
  if (Array.isArray(locale)) {
    return normalizeLocale(locale[0])
  }

  if (!locale || locale === "undefined" || locale === "null") {
    return "sv"
  }

  return locale
}

export async function fetchBlogPosts(locale: string = "sv", nolimit = false) {
  try {
    const entries = await client.getEntries({
      content_type: "checkifiedBlogPost",
      locale: normalizeLocale(locale),
      select: [
        "fields.title,fields.description,fields.slug,fields.featuredImage",
        "fields.author",
        "fields.authorProfile",
        "fields.avatar",
        "sys.createdAt",
      ],
      order: ["-sys.createdAt"],
      ...(nolimit ? {} : { limit: 6 }),
    })
    if (entries.items) return formatBlogPostEntries(entries.items)
    console.log("Fetched blog posts:", entries.items)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }

  return []
}

export async function fetchBlogPostBySlug(slug: string, locale: string) {
  try {
    const entry = await client.getEntries({
      content_type: "checkifiedBlogPost",
      "fields.slug": slug,
      locale: normalizeLocale(locale),
      limit: 1,
    })
    if (entry.items.length) return formatBlogPostEntries(entry.items)[0]
  } catch (error) {
    console.error("Error fetching blog post by slug:", error)
  }
  return null
}

function formatBlogPostEntries(entries: any) {
  return entries.map((entry: any) => {
    const date = new Date(entry.sys.createdAt).toLocaleDateString("sv-SE", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    // Capitalize the month name (e.g., "15 januari 2026" -> "15 Januari 2026")
    const capitalizedDate = date.replace(
      /(\d+\s)(\w)(\w+)/,
      (match, day, firstLetter, rest) => {
        return day + firstLetter.toUpperCase() + rest
      },
    )

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      subtitle: entry.fields.description,
      imageUrl: `https:${entry.fields.featuredImage?.fields?.file?.url}`,
      date: capitalizedDate,
      slug: entry.fields.slug,
      blogContent: entry.fields.blogContent || null,
      author: entry.fields.author || "",
      authorProfile:
        `https:${entry.fields.authorProfile?.fields?.file?.url}` || "",
      avatar: `https:${entry.fields.avatar?.fields?.file?.url}` || "",
    }
  })
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
        videoInfo: entry.fields.videoInfo.videoInfo || {
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

export async function getCourses() {
  try {
    const entries = await client.getEntries({
      content_type: "courses",
    })
    console.log("Fetched courses:", entries.items)
    const formattedEntries = entries.items.map((entry: any) => {
      // Extract the "value" from the nested structure in shortDescription
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
        videoInfo: entry.fields.videoInfo.videoInfo || {
          count: 0,
          totalTime: 0,
          level: "",
          icons: { count: "", time: "", level: "" },
        },
      }
    })
    return formattedEntries
  } catch (error) {
    console.log("Error fetching courses:", error)
    return []
  }
}

export async function fetchEbookBySlug(slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: "ebooks",
      "fields.slug": slug,
      limit: 1, // Fetch only the single course with the matching slug
    })

    if (entries.items.length === 0) {
      return null // Return null if no course matches the slug
    }

    const formattedEntries = entries.items.map((entry: any) => {
      const description = entry.fields.description || null

      return {
        id: entry.sys.id,
        title: entry.fields.title,
        description: description,
        imageUrl: `https:${entry.fields.imageUrl?.fields?.file?.url}`,
        price: entry.fields.price,
        slug: entry.fields.slug,
        purchaseLink: entry.fields.purchaseLink,
      }
    })
    return formattedEntries
  } catch (error) {
    console.error("Error fetching course by slug:", error)
    return null
  }
}

export async function getEbooks() {
  try {
    const entries = await client.getEntries({
      content_type: "ebooks",
    })
    const formattedEntries = entries.items.map((entry: any) => {
      // Extract the "value" from the nested structure in shortDescription

      return {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        imageUrl: `https:${entry.fields.imageUrl?.fields?.file?.url}`,
        price: entry.fields.price,
        slug: entry.fields.slug,
        purchaseLink: entry.fields.purchaseLink,
      }
    })
    return formattedEntries
  } catch (error) {
    console.log("Error fetching ebooks:", error)
    return []
  }
}

export async function getFAQs(locale: string = "sv") {
  const normalizedLocale = normalizeLocale(locale)

  const queryAttempts = [
    {
      content_type: "faq",
      locale: normalizedLocale,
      order: ["fields.position"],
    },
    {
      content_type: "faq",
      locale: normalizedLocale,
    },
    {
      content_type: "faq",
      order: ["fields.position"],
    },
    {
      content_type: "faq",
    },
  ]

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
