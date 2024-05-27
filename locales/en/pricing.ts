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
  ],

    howItWorkData: {
        title: "How it works",
        subtitle: "It's as easy as 1, 2, 3.",
        button: "Only SEK 499? Yes thank you!",
        items:  [
          {
            id: 1,
            imageUrl: "/icons/home/feature-unlimited-access.png",
            desc1: "Order your e-commerce website from us and we will configure it completely for you for only SEK 499.",
            desc2: "After we design the website, we add 30 products that you can start selling right away."
          },
          {
            id: 2,
            imageUrl: "/icons/home/feature-create-content.png",
            desc1: "Let's say you had a makeup brush listed on your cosmetics website for SEK 299",
            desc2: "We will integrate a supplier who can send the exact makeup brush to anyone in the world for only SEK 99"
          },
          {
            id: 3,
            imageUrl: "/icons/home/feature-selling-service.png",
            desc1: "If you do all this correctly, this will be a great platform for a high return with only a minimum of attention!",
            desc2: "Reinvest back into your business and repeat what works!"
          }
        ]
    },

  hero: {
    title: 'E-commerce experts build an optimized e-commerce store in under 24 hours for only SEK 499!',
    desc: 'Our team of e-commerce experts have designed over 478+ dropshipping stores and are here to help you build your store for only SEK 499!',
    button: 'Get your shop SEK 499!',
    buttonDesc: '& Unlock 2 FREE Gifts',
    descTitle: '478+ Sold Stores'
  },

  reviews: {
    title: 'Reviews',
    items: [
        'After trying several online companies like Amazon FBA, SMMA, and affiliate marketing, I realized that they were mostly just out to take my money without giving any real value in return. When I came across checkified stores, I decided to give dropshipping a shot, and I\'m so glad I did. Within a single day, I had a full store ready to run, and thanks to TikTok ads, I\'ve already recouped my investment. I highly recommend this to all beginners!',
        'Being new to dropshipping, I was pleasantly surprised by the quick and easy setup of my store. Now I can focus on marketing and look forward to my journey with dropshipping.',
        'Checkified e-stores exceeded my expectations with a modern design and unique products. I recommend choosing their pre-built e-commerce stores.',
        'Despite my initial skepticism about the low price, I was pleasantly surprised by the quality of the store and the products. Checkified e-stores offer outstanding value for a beginner like me and I am very happy with my purchase.',
        'I am impressed with the high quality of my store and the associated products at such an affordable price. Thanks to Checkified, I can save a lot of time and money.',
        'I had no experience with dropshipping but still decided to try this and was pleasantly surprised by the professional store and the high quality products. The bonus book was invaluable and I would definitely recommend Checkified stores to anyone.',
        'I ordered my store and was surprised to have it delivered the very next day. Thanks to Checkified, I can now generate significant income every day. Thanks so much!',
        'I was pleasantly surprised by the high quality of my store and the products. Despite my initial skepticism, I am now a satisfied customer and look forward to doing more business with Checkified stores.',
    ]
  },

  bonuses: {
    title: '2 FREE bonuses for today\'s buyers:',
    cards: [
      '/images/pricing/bonus1.png',
      '/images/pricing/bonus2.png'
    ],
    bottomDesc: '(ONE TIME PAYMENT)',
    redPrice: 'Normal Cost: SEK 2,000+',
    greenPrice: 'Only SEK 499!',
  },

  orderNow: {
    title: 'Order Now and Get It',
    items: [
      {
        title: '30 Profitable Products Selected By Our Experts',
        desc: 'added to your store (including product descriptions)...'
      },
      {
        title: 'Exclusive Access to My Personal Supplier',
        desc: 'who stores the products you sell and ships them to your customers cheaply and quickly...'
      },
      {
        title: 'Dropshipping E-commerce',
        desc: 'book so you can understand the basics of dropshipping without having to spend money on expensive e-commerce courses...'
      },
      {
        title: 'Award-winning 24/7 Customer Support',
        desc: 'so you can have a team of eCommerce experts by your side to help you make your first online sale...'
      },
    ]
  }
}
