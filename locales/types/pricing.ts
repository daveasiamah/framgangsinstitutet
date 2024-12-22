import { MetaData } from "./meta"

type PricingList = {
  id: number
  text: string
}
type StudentSayData = {
  id: number
  imageUrl: string
  message: string
  name: string
  position: string
}

type FaqData = { id: number; question: string; answer: string }

type Pricing = {
  id: number
  name: string
  imageUrl: string
  isPopular: boolean
  price: string
  lists: {
    id: number
    label: string
  }[]
  buttonText: string
  secureText: string
}

export type PricingData = {
  metaData: MetaData

  pricingTitle: string
  pricingSubtitle: string
  pricingList: PricingList[]
  pricingData: Pricing[]

  enterpriseTitle: string
  enterpriseSubtitle: string
  enterpriseButton: string

  outstandingTitle: string
  outstandingSubtitleFirst: string
  outstandingSubtitleSecond: string

  studentSayBlackTitle: string
  studentSayBlueTitle: string
  studentsSayData: StudentSayData[]

  faqBlackTitle: string
  faqBlueTitle: string
  faqData: FaqData[]

  howItWorksData: {
    title: string
    items: {
      id: number
      imageUrl: string
      title: string
      description: string[]
    }[]
  }
  hero: {
    title: string
    desc: string
    button: string
    buttonDesc: string
    descTitle: string
  }

  reviews: {
    title: string
    items: string[]
  }

  topReview: {
    title: string
    avatar: string
    stars: number
    time: string
    verified: string
    description: string
  }

  bonuses: {
    title: string
    items: {
      id: string
      image: string
      title: string
      description: string
      price: string
    }[]
  }

  orderNow: {
    title: string
    items: {
      id: string
      desc: string
    }[]
  }
}
