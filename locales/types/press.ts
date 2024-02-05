import { MetaData } from "./meta"

type PressCard = {
  titleOne: string
  titleTwo: string
  infoEmail: string
  pressEmail: string
  titleThree: string
}

export type PressData = {
  metaData: MetaData

  pressTitle: string
  pressSubtitle: string

  pressCard: PressCard

  builtTitle: string
  builtSubtitleOne: string
  builtSubtitlTwo: string

  skillBlackTitle: string
  skillBlueTitle: string
  skillSubtitleOne: string
  skillSubtitleTwo: string
  skillCard: string

  aboutBlackTitle: string
  aboutBlueTitle: string
  aboutSubtitle: string
  aboutLink: string

  brandBlackTitle: string
  brandBlueTitle: string
  brandSubtitle: string
  brandDownload: string

  increaseBlackTitle: string
  increaseBlueTitle: string
  increaseSubtitleOne: string
  increaseSubtitleTwo: string
}
