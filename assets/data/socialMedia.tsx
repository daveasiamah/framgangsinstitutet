import React from "react"
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

export const socialMedia = (
  size: number,
): {
  id: number
  url: string
  logo: React.ReactNode
}[] => {
  return [
    {
      id: 1,
      url: "https://www.facebook.com/profile.php?id=61588567389983",
      logo: <FaFacebook size={size} />,
    },
    {
      id: 2,
      url: "https://instagram.com/framgangsinstitutet",
      logo: <FaInstagram size={size} />,
    },
    {
      id: 3,
      url: "https://www.youtube.com/@framgangsinstitutet",
      logo: <FaYoutube size={size} />,
    },
    {
      id: 4,
      url: "https://tiktok.com/@framgangsinstitutet",
      logo: <FaTiktok size={size} />,
    },
  ]
}
