import React, { useState } from "react"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/locales/en"
import sv from "@/locales/sv"
import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function KontaktaOss() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  const schema = yup.object().shape({
    firstName: yup.string().required("Förnamn är obligatoriskt"),
    lastName: yup.string().required("Efternamn är obligatoriskt"),
    email: yup
      .string()
      .email("Ogiltig e-postadress")
      .required("E-postadress är obligatoriskt"),
    phone: yup.string().required("Telefonnummer är obligatoriskt"),
    message: yup.string().required("Meddelande är obligatoriskt"),
  })

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Tack för ditt meddelande! Vi kommer att kontakta dig snart.",
        })
        reset()
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "Det uppstod ett fel när vi skickade ditt meddelande. Försök igen senare.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Det uppstod ett fel när vi skickade ditt meddelande. Försök igen senare.",
      })
      console.error("Form submission error:", error)
    }
  }

  return (
    <Layout headTitle="Kontakta Oss - Checkified" isFullWidth={true}>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[800px] mx-auto">
            {/* Header */}
            <div className="text-center pt-[32px]">
              <h1 className="text-[#151E3A] text-[32px] md:text-[48px] font-bold font-jakarta mb-4">
                Support förfrågan
              </h1>
              <h2 className="text-[#434C69] text-[16px] md:text-[20px] font-inter font-normal">
                Fyll i formuläret nedan för att få hjälp med ditt ärende.
              </h2>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-[20px] p-8 md:p-12">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
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
                        {...register("firstName")}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = "Ange ditt förnamn")
                        }
                        placeholder="Ange ditt förnamn"
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-[#AAA1A1]"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
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
                        {...register("lastName")}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = "Ange ditt efternamn")
                        }
                        placeholder="Ange ditt efternamn"
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-[#AAA1A1]"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
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
                        {...register("email")}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = "Din e-postadress")
                        }
                        placeholder="Din e-postadress"
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter ${
                          errors.email ? "border-red-500" : "border-[#AAA1A1]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
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
                        src="/icons/call.svg"
                        alt="phone"
                        width={24}
                        height={24}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      />
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Telefonnummer")}
                        placeholder="Telefonnummer"
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter ${
                          errors.phone ? "border-red-500" : "border-[#AAA1A1]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
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
                    {...register("message")}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) =>
                      (e.target.placeholder = "Skriv ditt meddelande...")
                    }
                    placeholder="Skriv ditt meddelande..."
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg bg-[#F6F6F6] text-[#4F4F4F] placeholder-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#225AEA] focus:border-transparent font-inter resize-none ${
                      errors.message ? "border-red-500" : "border-[#AAA1A1]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="px-6 py-2 bg-[#225AEA] hover:bg-[#1a4aca] disabled:bg-[#9db1f0] text-white font-semibold rounded-[7px] transition-colors duration-200 font-jakarta text-sm disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Skickar..." : "Skicka in →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
