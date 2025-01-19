import { HeaderData } from "../types/header"

export const headerData: HeaderData = {
  university: "University",
  resources: "Resources",
  megaMenuData: [
    {
      id: 1,
      imageUrl: "/public/icons/header/notification-bing.svg",
      title: "Blog",
      desc: "News about Checkified",
      link: "/blog",
    },
    {
      id: 2,
      imageUrl: "/public/icons/header/clipboard.svg",
      title: "Affiliates",
      desc: "Become a Checkified Affiliate",
      link: "/affiliate",
    },
    {
      id: 3,
      imageUrl: "/public/icons/header/award.svg",
      title: "About",
      desc: "Become part of us",
      link: "/about",
    },
    {
      id: 4,
      imageUrl: "/public/icons/header/briefcase.svg",
      title: "Checkified Ads",
      desc: "Checkified Ads",
      link: "/annonser",
    },
    {
      id: 5,
      imageUrl: "/public/icons/header/box.svg",
      title: "Careers",
      desc: "Become part of us",
      link: "/careers",
    },
    {
      id: 6,
      imageUrl: "/public/icons/header/sms.svg",
      title: "Contact",
      desc: "Reach out to us",
      link: "/contact-us",
    },
  ],
  // videoUrl: "/images/videos/INTRO.mp4",
  pricing: "E-shops",
  login: "Log In",
  getStarted: "Join today",
  dashboard: "Dashboard",
}
