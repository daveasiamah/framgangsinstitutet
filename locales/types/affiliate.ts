import { MetaData } from "./meta"

type Affiliate = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
}

type SeventhList = {
  id: number
  text: string
}

type GuideData = {
  firstTitle: string
  firstSubtitle: string
  firstLink: string
  secondTitle: string
  secondSubtitleOne: string
  secondSubtitleTwo: string
  thirdTitle: string
  thirdSubtitle: string
  fourthTitle: string
  fourthSubtitle: string
  fifthTitle: string
  fifthSubtitleOne: string
  fifthSubtitleTwo: string
  sixthTitle: string
  sixthSubtitleOne: string
  sixthSubtitleTwo: string
  seventhTitle: string
  seventhList: SeventhList[]
}

export type AffiliateData = {
  metaData: MetaData

  affiliateBlackTitle: string
  affiliateBlueTitle: string
  affiliateSubtitle: string

  joinBlackTitle: string
  joinBlueTitle: string
  joinSubtitle: string
  joinButton: string

  benefitTitle: string
  benefitSubtitleFirst: string
  benefitSubtitleSecond: string
  benefitSubtitleThird: string

  whyJoinBlackTitle: string
  whyJoinBlueTitle: string
  affiliateData: Affiliate[]

  guideLabel: string
  guideBlackTitle: string
  guideBlueTitle: string
  guideSubtitle: string
  guideData: GuideData

  getStartedBlackTitle: string
  getStartedBlueTitle: string
  getStartedSubtitle: string
  getStartedButton: string
}
