export const pricingData: {
  id: number
  name: string
  imageUrl: string
  isPopular: boolean
  price: number
  lists: {
    id: number
    label: string
  }[]
}[] = [
  {
    id: 1,
    name: "Standard",
    imageUrl: "/icons/pricing/1-standard.png",
    isPopular: false,
    price: 997,
    lists: [
      {
        id: 1,
        label: "Mindset and winning mentality"
      },
      {
        id: 2,
        label: "Marketing Strategy"
      },
      {
        id: 3,
        label: "Checkified Mastermind"
      },
      {
        id: 4,
        label: "Digital Marketing"
      },
      {
        id: 5,
        label: "Formative Evaluation"
      }
    ]
  },
  {
    id: 2,
    name: "Premium",
    imageUrl: "/icons/pricing/2-premium.png",
    isPopular: true,
    price: 1497,
    lists: [
      {
        id: 1,
        label: "How to find the right suppliers"
      },
      {
        id: 2,
        label: "How to grow a brand"
      },
      {
        id: 3,
        label: "How to make viral ads"
      },
      {
        id: 4,
        label: "Premium Theme"
      },
      {
        id: 5,
        label: "Photoshop"
      },
      {
        id: 6,
        label: "Vegas Pro"
      }
    ]
  },
  {
    id: 3,
    name: "Platinum",
    imageUrl: "/icons/pricing/3-platinum.png",
    isPopular: false,
    price: 1997,
    lists: [
      {
        id: 1,
        label: "Goal Management & Follow-up"
      },
      {
        id: 2,
        label: "Optimized Web Development"
      },
      {
        id: 3,
        label: "Settings & Optimization"
      },
      {
        id: 4,
        label: "Private mentoring 1-on-1"
      },
      {
        id: 5,
        label: "Search Engine Optimization"
      },
      {
        id: 6,
        label: "Integrated Analysis"
      },
      {
        id: 7,
        label: "Responsive Design"
      }
    ]
  }
]

export const faqData: { id: number; question: string; answer: string }[] = [
  {
    id: 1,
    question: "What is Checkified?",
    answer:
      "Checkified is an online learning platform that offers a wide range of courses. Checkified’s courses are available in a variety of subjects, including business, technology, finance, and more."
  },
  {
    id: 2,
    question: "What is Dropshipping?",
    answer:
      "Dropshipping is a method of retail sales where a store does not stock the products being sold. Instead, when the store sells a product, it buys the product from a third party and ships it directly to the customer. This means that the retailer never sees or handles the product."
  },
  {
    id: 3,
    question:
      "How is Checkified different from other online learning platforms?",
    answer:
      "Checkified stands out from other online learning platforms for its wide range of courses. A variety of features enhance the learning experience, that cater to diverse schedules and learning styles. "
  },
  {
    id: 4,
    question: "How do I enroll in a Checkified course?",
    answer:
      "To enroll in a Checkified course, simply go to the Checkified website, click “Get Started”. You may need to create an account on Checkified if you haven't already done so."
  },
  {
    id: 5,
    question: "Can I get a refund for a Checkified course?",
    answer:
      "Checkified offers a 14-day refund policy for most courses. However, there are some courses that are not eligible for refunds, so it's important to check the refund policy for each course before enrolling."
  },
  {
    id: 6,
    question: "How much does Checkified cost?",
    answer:
      "Checkified offers several flexible price plans. To access and unlock premium features, we have pricing plans based on your circumstances."
  },
  {
    id: 7,
    question: "What payments methods do you accept?",
    answer:
      "Checkified accepts several payment methods, including: Visa, Mastercard, and American Express credit or debit cards. You can also pay for Checkified courses using Klarna."
  }
]
