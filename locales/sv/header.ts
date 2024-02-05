import { HeaderData } from "../types/header"

export const headerData: HeaderData = {
  university: "University",
  resources: "Resurser",
  megaMenuData: [
    {
      id: 1,
      imageUrl: "/icons/header/1-notification-status.png",
      title: "Blogg",
      desc: "Artiklar om Checkified",
      link: "/blog"
    },
    {
      id: 2,
      imageUrl: "/icons/header/2-clipboard.png",
      title: "Affiliates",
      desc: "Bli en Checkified Affiliate",
      link: "/affiliate"
    },
    {
      id: 3,
      imageUrl: "/icons/header/3-award.png",
      title: "Om oss",
      desc: "Lär känna oss i Checkified",
      link: "/about"
    },
    {
      id: 4,
      imageUrl: "/icons/header/4-briefcase.png",
      title: "Press",
      desc: "Media & Brandkits",
      link: "/press"
    },
    {
      id: 5,
      imageUrl: "/icons/header/5-box.png",
      title: "Karriär",
      desc: "Bli en del av oss",
      link: "/careers"
    },
    {
      id: 6,
      imageUrl: "/icons/header/6-sms.png",
      title: "Kontakta oss",
      desc: "Hör av dig till oss",
      link: "/contact-us"
    }
  ],
  // videoUrl: "/images/videos/INTRO.mp4",
  pricing: "Prisplaner",
  login: "Logga In",
  getStarted: "Starta nu",
  dashboard: "Dashboard"
}
