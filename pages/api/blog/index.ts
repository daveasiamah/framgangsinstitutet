import { NextApiRequest, NextApiResponse } from "next"
import { fetchBlogPosts } from "@/utils/contentful"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const locale = Array.isArray(req.query?.locale)
      ? req.query.locale[0]
      : req.query?.locale
    const blogsList = await fetchBlogPosts(locale || "sv", !!req.query?.nolimit)
    res.status(200).json({ data: blogsList })
  } catch (error) {
    console.error("Error fetching blogs:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}
