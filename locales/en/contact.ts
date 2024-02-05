import { ContactData } from "../types/contact"

export const contactdata: ContactData = {
  metaData: {
    title: "Contact Us"
  },

  contactBlackTitle: "Contact",
  contactBlueTitle: "Us",
  contactSubtitle: "Connect with Checkified support.",

  formBlackTitle: "How Can We",
  formBlueTitle: "Help You?",
  formSubtitle:
    "If you have any questions or concerns, please contact our support team; we will respond within 24 hours.",
  contactForm: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phoneNumber: "Phone number",
    message: "Message",
    button: "Send"
  },

  supportData: [
    {
      id: 1,
      imageUrl: "/icons/contact-us/1-general.png",
      title: "General Inquiries",
      subtitle:
        "If you have any general questions about the course, you can send us an email at info@checkified.io.",
      action: "We aim to respond to all inquiries within 24 hours."
    },
    {
      id: 2,
      imageUrl: "/icons/contact-us/2-technical.png",
      title: "Technical Support",
      subtitle:
        "If you have technical problems with the platform, please send us an email at info@checkified.io.",
      action: "Our team of technical experts will be happy to help you."
    },
    {
      id: 3,
      imageUrl: "/icons/contact-us/3-billing.png",
      title: "Billing Iquiries",
      subtitle:
        "If you have questions regarding invoicing or payment, please email us at billing@checkified.io.",
      action:
        "Our billing department will be happy to help you resolve any problems."
    }
  ]
}
