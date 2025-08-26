type MegaMenuData = {
  id: number
  imageUrl: string
  title: string
  desc: string
  link: string
}

export type HeaderData = {
  trainingCourses: string
  resources: string
  megaMenuData: MegaMenuData[]
  estore: string
  dropShippingMentorship?: string
  getStarted: string
}
