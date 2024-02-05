import React from "react"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

export const socialMedia = (
  size: number
): {
  id: number
  url: string
  logo: React.ReactNode
}[] => {
  return [
    {
      id: 1,
      url: "https://facebook.com/checkified.se",
      logo: <FaFacebook size={size} />
    },
    {
      id: 2,
      url: "https://instagram.com/checkified",
      logo: <FaInstagram size={size} />
    },
    // {
    //   id: 3,
    //   url: "https://twitter.com/checkified",
    //   logo: <FaTwitter size={size} />
    // },
    {
      id: 3,
      url: "https://youtube.com/checkifiedse",
      logo: <FaYoutube size={size} />
    },
    {
      id: 4,
      url: "https://tiktok.com/@checkified",
      logo: <FaTiktok size={size} />
    },
    {
      id: 5,
      url: "https://discord.com/invite/Zxt7qhbgVX",
      logo: <FaDiscord size={size} />
    }
  ]
}
