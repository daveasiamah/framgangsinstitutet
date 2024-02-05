import React from "react"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

import ButtonArrow from "@/components/parts/ButtonArrow"
import Title from "@/components/parts/Title"
import Layout from "@/components/Layout"
import Accordion from "@/components/parts/Accordion"

const pricingData: {
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

const faqData: { id: number; question: string; answer: string }[] = [
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

type Props = {}

export default function Pricing({}: Props) {
  return (
    <Layout headTitle="Pricing" isFullWidth>
      <section className="bg-primary p-8 lg:px-12 lg:py-20">
        <Title
          blackText="Pricing Plan"
          className="mx-auto w-[300px] leading-[3rem] text-center text-white"
        />
        <p className="text-white text-center max-w-2xl mx-auto">
          Get access to top-tier features to take your e-commerce to the next
          level.
        </p>
        <ul className="mt-12 text-subtitle grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
          {["One-time payment", "No monthly fees", "Lifetime access"].map(
            (list, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-xl shadow-xl"
              >
                <FaCheckCircle className="text-primary" size={20} /> {list}
              </li>
            )
          )}
        </ul>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 md:gap-16 md:gap-y-28 lg:gap-8 mt-28">
          {pricingData.map((data) => (
            <div
              key={data.id}
              className={`${
                data.isPopular ? "bg-base-200" : "bg-white"
              } shadow-xl relative rounded-[2rem] flex flex-col`}
            >
              <div className="h-24 relative overflow-hidden rounded-t-[2rem]">
                {data.isPopular && (
                  <div className="bg-subtitle-dark absolute text-white px-4 py-1 top-[23px] right-[-68px] text-center rotate-45 w-[200px]">
                    Popular
                  </div>
                )}
              </div>

              <div
                className={`px-8 pb-8 flex-1 flex rounded-[2rem] mx-auto ${
                  data.isPopular ? "bg-base-200" : "bg-white"
                }`}
              >
                <Image
                  src={data.imageUrl}
                  alt="pricing standard"
                  height={160}
                  width={160}
                  className="absolute object-contain -top-20 left-1/2 transform -translate-x-1/2"
                />
                <div className="flex flex-col justify-between items-center">
                  <div>
                    <h2 className="text-center text-3xl font-bold mb-2">
                      {data.name}
                    </h2>
                    <p className="text-center text-primary font-bold text-2xl mb-4">
                      ${data.price}
                    </p>
                    <p className="text-center font-bold text-subtitle">
                      Summary
                    </p>

                    <p className="text-primary text-center mt-6 font-bold text-lg">
                      {data.name === "Standard" && (
                        <span className="invisible">None</span>
                      )}
                      {data.name === "Premium" && (
                        <span>All in Standard and:</span>
                      )}
                      {data.name === "Platinum" && (
                        <span>All in Premium and:</span>
                      )}
                    </p>
                    <ul className="text-subtitle grid gap-4 mt-3">
                      {data.lists.map((list) => (
                        <li key={list.id} className="flex items-center gap-2">
                          <FaCheckCircle className="text-primary" size={20} />{" "}
                          {list.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <button className="btn btn-primary w-full mt-12">
                      Get Started
                    </button>
                    <div className="flex items-center gap-4 text-sm mt-6 font-semibold text-subtitle">
                      <MdLockOutline
                        size={26}
                        className="p-[2px] border-2 border-subtitle rounded-full"
                      />
                      Secure 256-bit SSL encryption
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-14 mb-16">
        <div className="bg-base-200 p-8 lg:p-12 rounded-[3rem] flex flex-col lg:flex-row gap-12">
          <div className="relative aspect-square w-[130px] lg:w-[180px] rounded-full bg-primary mx-auto">
            <Image
              src="/icons/pricing/grammerly.png"
              alt="grammerly"
              width={90}
              height={90}
              className="absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div>
            <Title blackText="Enterprises" className="text-left mb-[1rem]" />
            <p className="text-subtitle">
              Can`t find a price plan that suits your needs? No problem we have
              all the features for your requirements.
            </p>
          </div>
          <ButtonArrow href="/signup" className="mr-auto">
            Get Started
          </ButtonArrow>
        </div>
      </section>

      <section className="container mx-auto our-culture-container bg-primary rounded-[2rem] py-16 text-white relative mb-16 isolate">
        <div className="w-full lg:w-[55%] bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tr-3xl rounded-br-3xl backdrop-blur-xl mt-28 md:mt-48 lg:mt-0">
          <h2 className="text-[40px] mb-4 font-bold">
            Outstanding Capital Growth
          </h2>
          <p className="mb-6">
            Checkified advocates for entrepreneurship that operates on a level
            playing field, encompassing both social and economic dimensions,
            resulting in constructive relationships among our students.
          </p>
          <p>
            Our efforts foster diversity in ownership models within the business
            community.
          </p>
        </div>
        <Image
          src="/images/pricing/smartphone-men.png"
          alt="coffee men"
          height={560}
          width={560}
          className="absolute object-contain -top-28 md:-top-36 lg:top-12 xl:-top-20 left-1/2 lg:left-3/4 transform -translate-x-1/2 scale-75 md:scale-[.7] lg:scale-[.9] xl:scale-[1] z-[-1]"
        />
      </section>

      <section className="container mx-auto mb-16">
        <Image
          src="/images/pricing/bulb.png"
          alt="bulb"
          height={500}
          width={500}
          className="object-contain mx-auto mb-16"
        />

        <Accordion data={faqData} />
      </section>
    </Layout>
  )
}
