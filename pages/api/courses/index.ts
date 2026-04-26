import { NextApiRequest, NextApiResponse } from "next"
import { getCoursesPaginated } from "@/utils/contentful"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const skip = Number(req.query.skip || 0)
    const limit = Number(req.query.limit || 6)
    const locale = Array.isArray(req.query.locale)
      ? req.query.locale[0]
      : req.query.locale || "sv"

    console.info("[api:courses] request", {
      skip,
      limit,
      locale,
    })

    const { courses, total } = await getCoursesPaginated({
      skip: Number.isNaN(skip) ? 0 : skip,
      limit: Number.isNaN(limit) ? 6 : limit,
      locale,
    })

    console.info("[api:courses] response", {
      returned: courses.length,
      total,
    })

    return res.status(200).json({ courses, total })
  } catch (error) {
    console.error("Error fetching paginated courses:", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}
