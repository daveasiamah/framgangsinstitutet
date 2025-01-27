import { Document } from "@contentful/rich-text-types"
export interface Course {
  id: string
  imageUrl: string
  tags?: { distance: string; new: string }
  title: string
  shortDescription: string
  longDescription: Document | null
  price: string
  slug: string
  purchaseLink: string
  videoInfo?: {
    count: number
    totalTime: number
    level: string
    icons: { count: string; time: string; level: string }
  }
}
