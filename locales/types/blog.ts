import { MetaData } from "./meta"

type Blog = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  date: string
}

export type BlogData = {
  metaData: MetaData

  blogTitle: string
  blogSubtitle: string

  companyLabel: string
  companyTitle: string
  companySubtitle: string
  companyBottomCard: string

  articleBlackTitle: string
  articleBlueTitle: string
  blogData: Blog[]

  keepYourselfTitle: string
  keepYourselfSubtitle: string
  keepYourselfButton: string
}
