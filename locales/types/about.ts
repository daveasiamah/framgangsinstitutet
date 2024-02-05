import { MetaData } from "./meta"

type StatsData = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
}

type OurHistoryData = {
  id: number
  imageUrl: string
  year: number
  title: string
  subtitle: string
}

export type AboutData = {
  metaData: MetaData

  aboutBlackTitle: string
  aboutBlueTitle: string
  aboutSubtitle: string
  aimTitle: string
  aimSubtitleOne: string
  aimSubtitleTwo: string

  teamBlackTitle: string
  teamBlueTitle: string
  teamSubtitleOne: string
  teamSubtitleTwo: string
  teamButton: string

  statsData: StatsData[]

  missionBlackTitle: string
  missionBlueTitle: string
  missionSUbtitle: string

  historyBlackTitle: string
  historyBlueTitle: string
  historySubtitle: string
  ourHistoryData: OurHistoryData[]

  partTitle: string
  partSubtitle: string
  partButton: string
}
