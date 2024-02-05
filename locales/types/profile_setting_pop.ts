import { MetaData } from "./meta"

type ProfileForm = {
  firstName: string
  lastName: string
  mail: string
  password:string
  button: string
}

type SupportData = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  action: string
}

export type profile_setting_pop = {
  metaData: MetaData

  contactBlackTitle: string
  contactBlueTitle: string
  contactSubtitle: string

  formBlackTitle: string
  formBlueTitle: string
  formSubtitle: string
  profileForm: ProfileForm

  supportData: SupportData[]
}
