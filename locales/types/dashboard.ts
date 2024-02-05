import { MetaData } from "./meta";

type Dashboard = {
  id: number;
  imageUrl: string;
  title: string;
};

type pressCardData = {
  titleOne: string;
  infoEmail: string;
  pressEmail: string;
  titleTwo: string;
  titleThree: string;
};


export type DashboardData = {
  metaData: any;

  dashboardTitle: string;
  dashboardSubtitle: string;
  pressCard : any;

  dashboardData: Dashboard[];

  builtTitle: string;
  builtSubtitleOne: string;
  builtSubtitlTwo: string;

  skillBlackTitle: string;
  skillBlueTitle: string;
  skillSubtitleOne: string;
  skillSubtitleTwo: string;
  skillCard: string;

  aboutBlackTitle: string;
  aboutBlueTitle: string;
  aboutSubtitle: string;
  aboutLink: string;


  brandBlackTitle: string;
  brandBlueTitle: string;
  brandSubtitle: string;
  brandDownload: string;

  increaseBlackTitle: string;
  increaseBlueTitle: string;
  increaseSubtitleOne: string;
  increaseSubtitleTwo: string;
};
