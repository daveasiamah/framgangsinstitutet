interface VideoInfo {
  count: number
  totalTime: number
  level: string
  icons: { count: string; time: string; level: string }
}

export interface CourseProps {
  id: number
  imageUrl: string
  tags?: { distance: string; new: string }
  title: string
  shortDescription: string
  longDescription: string
  price: string
  purchaseLink: string
  videoInfo?: {
    count: number
    totalTime: number
    level: string
    icons: { count: string; time: string; level: string }
  }
}
