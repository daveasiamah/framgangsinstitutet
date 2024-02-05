import { MetaData } from "./meta"

type JobOpeningData = {
  id: number
  title: string
  button: string
  link: string
}

export type CareersData = {
  metaData: MetaData

  careersBlackTitle: string
  careersBlueTitle: string
  careersSubtitle: string

  whyBlackTitle: string
  whyBlueTitle: string
  whySubtitleOne: string
  whySubtitleTwo: string

  jobBlackTitle: string
  jobBlueTitle: string
  jobOpeningsData: JobOpeningData[]

  embraceBlackTitle: string
  embraceBlueTitle: string
  embraceSubtitleOne: string
  embraceSubtitleTwo: string

  cultureTitle: string
  cultureSubtitleOne: string
  cultureSubtitleTwo: string
}
