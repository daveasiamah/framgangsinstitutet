import React, { useState } from "react"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"

export default function KontaktaOss() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <Layout headTitle="Kontakta Oss - Checkified" isFullWidth={true}>
      <div className="min-h-screen max-w-7xl mx-auto px-4">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[#151E3A] text-[32px] md:text-[48px] font-bold font-jakarta mb-4">
              Support förfrågan
            </h1>
            <h2 className="text-[#434C69] text-[16px] md:text-[20px] font-inter font-normal">
              Fyll i formuläret nedan för att få hjälp med ditt ärende.
            </h2>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-[20px] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[#4F4F4F] text-sm font-inter mb-2"
                  >
                    Förnamn
                  </label>
                  <div className="relative">
                    <Image
                      src="/icons/user-square.svg"
                      alt="user"
                      width={24}
                      height={24}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Ange ditt förnamn"
                      className="w-full pl-12 pr-4 py-3 border border-[#AAA1A1] rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[#4F4F4F] text-sm font-inter mb-2"
                  >
                    Efternamn
                  </label>
                  <div className="relative">
                    <Image
                      src="/icons/user-square.svg"
                      alt="user"
                      width={24}
                      height={24}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Ange ditt efternamn"
                      className="w-full pl-12 pr-4 py-3 border border-[#AAA1A1] rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter"
                    />
                  </div>
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#4F4F4F] text-sm font-inter mb-2"
                  >
                    E-postadress
                  </label>
                  <div className="relative">
                    <Image
                      src="/icons/post-message.svg"
                      alt="email"
                      width={24}
                      height={24}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Din e-postadress"
                      className="w-full pl-12 pr-4 py-3 border border-[#AAA1A1] rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#4F4F4F] text-sm font-inter mb-2"
                  >
                    Telefon
                  </label>
                  <div className="relative">
                    <Image
                      src="/icons/post-message.svg"
                      alt="phone"
                      width={24}
                      height={24}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefonnummer"
                      className="w-full pl-12 pr-4 py-3 border border-[#AAA1A1] rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#4F4F4F] text-sm font-inter mb-2"
                >
                  Vad kan vi hjälpa dig med?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv ditt meddelande..."
                  rows={6}
                  className="w-full px-4 py-3 border border-[#AAA1A1] rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#225AEA] hover:bg-[#1a4aca] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm"
                >
                  Skicka in →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
