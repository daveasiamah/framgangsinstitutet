import { MetaData } from "./meta"

type ContactForm = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
  button: string
}

type SupportData = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  action: string
}

export type ContactData = {
  metaData: MetaData

  contactBlackTitle: string
  contactBlueTitle: string
  contactSubtitle: string

  formBlackTitle: string
  formBlueTitle: string
  formSubtitle: string
  contactForm: ContactForm

  supportData: SupportData[]
}
