import { Document } from "@contentful/rich-text-types"
export interface Ebook {
  id: string
  imageUrl: string
  tags?: [distance: string, new: string]
  title: string
  shortDescription: string
  longDescription: Document | null
  price: string
  slug: string
  purchaseLink: string
}
