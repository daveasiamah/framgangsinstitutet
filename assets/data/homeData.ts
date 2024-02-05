export const platformData: { id: number; imageUrl: string }[] = [
  {
    id: 1,
    imageUrl: "/icons/home/platform-google.png"
  },
  {
    id: 2,
    imageUrl: "/icons/home/platform-shopify.png"
  },
  {
    id: 3,
    imageUrl: "/icons/home/platform-tiktok.png"
  },
  {
    id: 4,
    imageUrl: "/icons/home/platform-openai.png"
  },
  {
    id: 5,
    imageUrl: "/icons/home/platform-meta.png"
  }
]

export const featureData: {
  id: number
  imageUrl: string
  title: string
  desc: string
}[] = [
  {
    id: 1,
    imageUrl: "/icons/home/feature-unlimited-access.png",
    title: "Unlimited Access",
    desc: "With priority support, we have significant influence over all students."
  },
  {
    id: 2,
    imageUrl: "/icons/home/feature-create-content.png",
    title: "Create Content ",
    desc: "We demonstrate everything you need to know to get started with dropshipping."
  },
  {
    id: 3,
    imageUrl: "/icons/home/feature-selling-service.png",
    title: "Selling Services",
    desc: "We use cutting-edge selling methods to provide you with a unique e-commerce experience."
  }
]

export const expertiseData: {
  id: number
  imageUrl: string
  titleBlack: string
  titleBlue: string
  subtitle: string
  lists: { id: number; name: string }[]
  isImageLeft: boolean
}[] = [
  {
    id: 1,
    imageUrl: "/images/home/1-introduction-ground.png",
    titleBlack: "Introduction",
    titleBlue: "Ground",
    subtitle:
      "Checkified creates the ideal environment for your e-commerce journey. This formula will serve as the basis for your online business.",
    lists: [
      {
        id: 1,
        name: "Welcome"
      },
      {
        id: 2,
        name: "Mindset"
      },
      {
        id: 3,
        name: "Business"
      }
    ],
    isImageLeft: true
  },
  {
    id: 2,
    imageUrl: "/images/home/2-marketing-growth.png",
    titleBlack: "Marketing",
    titleBlue: "Growth",
    subtitle:
      "We shape the e-commerce industry through fundamental digital marketing research. Strategies that are both seamless and effective.",
    lists: [
      {
        id: 1,
        name: "Marketing Strategy"
      },
      {
        id: 2,
        name: "Creating Ads"
      },
      {
        id: 3,
        name: "Tiktok Ads"
      }
    ],
    isImageLeft: false
  },
  {
    id: 3,
    imageUrl: "/images/home/3-operations-success.png",
    titleBlack: "Operations",
    titleBlue: "Success",
    subtitle:
      "Expand your brand with in-depth knowledge. Get unlimited access to our community and meet other like-minded entrepreneurs.",
    lists: [
      {
        id: 1,
        name: "Fulfillment"
      },
      {
        id: 2,
        name: "White labeling"
      },
      {
        id: 3,
        name: "Conversion rate"
      }
    ],
    isImageLeft: true
  }
]

export const medsosData: { id: number; imageUrl: string }[] = [
  {
    id: 1,
    imageUrl: "/icons/home/1-sosmed-shopify.png"
  },
  {
    id: 2,
    imageUrl: "/icons/home/2-sosmed-google.png"
  },
  {
    id: 3,
    imageUrl: "/icons/home/3-vegas.png"
  },
  {
    id: 4,
    imageUrl: "/icons/home/4-google-analitycs.png"
  },
  {
    id: 5,
    imageUrl: "/icons/home/5-instagram.png"
  },
  {
    id: 6,
    imageUrl: "/icons/home/6-tiktok.png"
  },
  {
    id: 7,
    imageUrl: "/icons/home/7-meta.png"
  },
  {
    id: 8,
    imageUrl: "/icons/home/8-youtube.png"
  }
]

export const universityData: { id: number; name: string }[] = [
  {
    id: 1,
    name: "The basics of dropshipping and how to works."
  },
  {
    id: 2,
    name: "How to identify profitable products and niche markets"
  },
  {
    id: 3,
    name: "How to find reliable suppliers and negotiate with them"
  },
  {
    id: 4,
    name: "How to set up your online store and optimize it for sales"
  },
  {
    id: 5,
    name: "How to market your products using social media"
  },
  {
    id: 6,
    name: "How to manage your orders, inventory,and customer service"
  }
]

export const benefitData: {
  id: number
  imageUrl: string
  title: string
  subtitle: string
}[] = [
  {
    id: 1,
    imageUrl: "/icons/home/1-superior-service.png",
    title: "Superior Service",
    subtitle:
      "We place high value on our customers by providing investment assistance through their inquiries."
  },
  {
    id: 2,
    imageUrl: "/icons/home/2-find-products.png",
    title: "Find Products To Sell",
    subtitle:
      "Acquire knowledge and develop marketing strategies to establish a successful online store."
  },
  {
    id: 3,
    imageUrl: "/icons/home/3-all-in-one.png",
    title: "All in one Place",
    subtitle:
      "Our digital platform provides e-commerce expertise to assist you in breaking free from the contemporary rat race."
  }
]

export const testimonyData: {
  id: number
  imageUrl: string
  name: string
  job: string
  message: string
}[] = [
  {
    id: 1,
    imageUrl: "/images/home/1-elias.png",
    name: "Elias Bergqvist",
    job: "Checkified Student",
    message:
      "Easy to follow, you will learn while meeting other like-minded people. Checkified is the future and this is how learning should be!"
  },
  {
    id: 2,
    imageUrl: "/images/home/2-simon.png",
    name: "Simon Gustafsson",
    job: "Checkified Student",
    message:
      "Great platform. Thanks to Checkified's tools I have learned about e-commerce and increased my mindset."
  },
  {
    id: 3,
    imageUrl: "/images/home/3-linnea.png",
    name: "Linnea Östling",
    job: "Checkified Student",
    message:
      "Absolutely the best decision I've made in starting my own online business. You can hardly believe it when you get several sales."
  }
]
