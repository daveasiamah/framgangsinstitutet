import { PricingData } from "../types/pricing"

export const pricingData: PricingData = {
  metaData: {
    title: "Pricing"
  },

  pricingTitle: "Pricing Plan",
  pricingSubtitle:
    "Get access to top-tier features to take your e-commerce to the next level.",
  pricingList: [
    {
      id: 1,
      text: "One-time payment"
    },
    {
      id: 2,
      text: "No monthly fees"
    },
    {
      id: 3,
      text: "Lifetime access"
    }
  ],
  pricingData: [
    {
      id: 1,
      name: "Standard",
      imageUrl: "/icons/pricing/1-standard.png",
      isPopular: false,
      price: "$997",
      lists: [
        {
          id: 1,
          label: "Introduction to Dropshipping"
        },
        {
          id: 2,
          label: "Finding a Niche"
        },
        {
          id: 3,
          label: "Setting Up Your Store"
        },
        {
          id: 4,
          label: "Marketing and Advertising"
        },
        {
          id: 5,
          label: "Private Community Access"
        }
      ],
      buttonText: "Start Free Trial",
      secureText: "7-Day Free Trial. Cancel Anytime"
    },
    {
      id: 2,
      name: "Premium",
      imageUrl: "/icons/pricing/2-premium.png",
      isPopular: true,
      price: "$1497",
      lists: [
        {
          id: 1,
          label: "Find The Right Suppliers"
        },
        {
          id: 2,
          label: "Find The Right Suppliers"
        },
        {
          id: 3,
          label: "Make Viral Ads"
        },
        {
          id: 4,
          label: "SEO Optimization"
        },
        {
          id: 5,
          label: "Photoshop"
        },
        {
          id: 6,
          label: "Vegas Pro"
        }
      ],
      buttonText: "Start Free Trial",
      secureText: "7-Day Free Trial. Cancel Anytime"
    },
    {
      id: 3,
      name: "Platinum",
      imageUrl: "/icons/pricing/3-platinum.png",
      isPopular: false,
      price: "$1997",
      lists: [
        {
          id: 1,
          label: "Customized Strategy"
        },
        {
          id: 2,
          label: "Dropshipping Tools"
        },
        {
          id: 3,
          label: "Exclusive Events and Webinars"
        },
        {
          id: 4,
          label: "Exclusive Resources"
        },
        {
          id: 5,
          label: "Google Ads and SEO Guide"
        },
        {
          id: 6,
          label: "Personalized Coaching"
        },
        {
          id: 7,
          label: "Premium Customer Support"
        }
      ],
      buttonText: "Start Free Trial",
      secureText: "7-Day Free Trial. Cancel Anytime"
    }
  ],

  enterpriseTitle: "Enterprises",
  enterpriseSubtitle:
    "Can't find a price plan that suits your needs? No problem we have all the features for your requirements.",
  enterpriseButton: "Start Free Trial",

  outstandingTitle: "Outstanding Capital Growth",
  outstandingSubtitleFirst:
    "Checkified advocates for entrepreneurship that operates on a level playing field, encompassing both social and economic dimensions, resulting in constructive relationships among our students.",
  outstandingSubtitleSecond:
    "Our efforts foster diversity in ownership models within the business community.",

  studentSayBlackTitle: "What Our",
  studentSayBlueTitle: "Students Say",
  studentsSayData: [
    {
      id: 1,
      imageUrl: "/images/impact/1-kajsa.png",
      message:
        "Dropshipping has changed my life. Learned a lot and quit my 7-4 job. I have recommended this to my friends.",
      name: "Kajsa Wahlgren",
      position: "Checkified Student"
    },
    {
      id: 2,
      imageUrl: "/images/impact/2-andreas.png",
      message:
        "I can say with certainty that Checkified beats them all. The best solution to Start Free Trial with dropshipping.",
      name: "Andreas Bowall",
      position: "Checkified Student"
    },
    {
      id: 3,
      imageUrl: "/images/impact/3-felix.png",
      message:
        "Created my shopify store, sold first month for 35 thousand in profit margin, without scaling. Best investment.",
      name: "Felix Aadland",
      position: "Checkified Student"
    },
    {
      id: 4,
      imageUrl: "/images/impact/4-simon.png",
      message:
        "Really good content, with knowledgeable mentors. The modules are easy to follow, with notifications to keep you motivated.",
      name: "Simon Vimmerson",
      position: "Checkified Student"
    },
    {
      id: 5,
      imageUrl: "/images/impact/5-felicia.png",
      message:
        "I really love the infrastructure of dropshipping, so I bought the course and was the best thing I did. Perfect for newbie's.",
      name: "Felicia Benjaminson",
      position: "Checkified Student"
    },
    {
      id: 6,
      imageUrl: "/images/impact/6-lucas.png",
      message:
        "The platform is awesome. Took me three shops before I found a winning product. Recommend Checkified!",
      name: "Lukas Boström",
      position: "Checkified Student"
    }
  ],

  faqBlackTitle: "Frequently Asked",
  faqBlueTitle: "Questions",
  faqData: [
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
        "To enroll in a Checkified course, simply go to the Checkified website, click “Start Free Trial”. You may need to create an account on Checkified if you haven't already done so."
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
}
