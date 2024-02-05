import { MetaData } from "./meta"

type ProfilePayment = {
  namecard: string
  cardNumber: string
  validitydate: string
  cvc:string
  button: string
}

type SupportData = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  action: string
}

export type ProfilePaymentData = {
  metaData: MetaData

  contactBlackTitle: string
  contactBlueTitle: string
  contactSubtitle: string

  formBlackTitle: string
  formBlueTitle: string
  formSubtitle: string
  profilePayment: ProfilePayment

  supportData: SupportData[]
}
