import { Document } from "@contentful/rich-text-types"
export interface Ebook {
  id: string
  imageUrl: string
  title: string
  description: Document | null
  price: string
  slug: string
  purchaseLink: string
}
