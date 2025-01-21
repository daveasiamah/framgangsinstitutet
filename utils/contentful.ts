import { createClient } from "contentful"

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
})

export async function fetchBlogPosts(locale: string = "sv", nolimit = false) {
  try {
    const entries = await client.getEntries({
      content_type: "checkifiedBlogPost",
      locale,
      select: [
        "fields.title,fields.description,fields.slug,fields.featuredImage",
        "fields.author",
        "fields.authorProfile",
        "sys.createdAt",
      ],
      order: ["-sys.createdAt"],
      ...(nolimit ? {} : { limit: 6 }),
    })
    if (entries.items) return formatBlogPostEntries(entries.items)
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
      locale: locale,
      limit: 1,
    })
    if (entry.items.length) return formatBlogPostEntries(entry.items)[0]
  } catch (error) {
    console.error("Error fetching blog post by slug:", error)
  }
  return null
}

function formatBlogPostEntries(entries: any) {
  return entries.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    subtitle: entry.fields.description,
    imageUrl: `https:${entry.fields.featuredImage?.fields?.file?.url}`,
    date: new Date(entry.sys.createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    slug: entry.fields.slug,
    blogContent: entry.fields.blogContent || null,
    author: entry.fields.author || "",
    authorProfile:
      `https:${entry.fields.authorProfile?.fields?.file?.url}` || "",
  }))
}

export async function getCourses() {
  try {
    const entries = await client.getEntries({
      content_type: "courses",
    })
    const formattedEntries = entries.items.map((entry: any) => {
      // Extract the "value" from the nested structure in shortDescription
      const shortDescriptionContent = entry.fields.shortDescription?.content
      const shortDescription =
        shortDescriptionContent?.[0]?.content?.[0]?.value || ""

      return {
        id: entry.sys.id,
        title: entry.fields.title,
        shortDescription: shortDescription,
        longDescription: shortDescription,
        imageUrl: `https:${entry.fields.imageUrl?.fields?.file?.url}`,
        price: entry.fields.price,
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
