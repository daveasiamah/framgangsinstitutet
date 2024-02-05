import { MetaData } from "./meta"

type StudentsSayData = {
  id: number
  imageUrl: string
  message: string
  name: string
  position: string
}

export type ImpactData = {
  metaData: MetaData

  impactBlackTitle: string
  impactBlueTitle: string
  impactSubtitle: string

  comprehenBlackTitle: string
  comprehenBlueTitle: string
  comprehenSubtitleOne: string
  comprehenSubtitleTwo: string

  studentSayBlackTitle: string
  studentSayBlueTitle: string
  studentsSayData: StudentsSayData[]

  assistTitle: string
  assistTitleTwo: string
  assistSubtitleOne: string
  assistSubtitleTwo: string

  reprocityBlackTitle: string
  reprocityBlueTitle: string
  reprocitySubtitle: string

  readyTitle: string
  readyTitletwo: string
  readyButton: string
}
