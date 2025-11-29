import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerOfContract } from "../service/Apis/api"
import Link from "next/link"

type FormValues = {
  name: string
  email: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [APIErrors, setAPIErrors] = useState<any>(null)
  const router = useRouter()

  const schema = yup.object().shape({
    name: yup.string().required("Förnamn er påkrævet"),
    email: yup.string().email("Ogiltig email").required("Email er påkrævet"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  })

  const sendData = async (data: any) => {
    setAPIErrors(null)
    try {
      const res = await registerOfContract(data)
      if (res.success) {
        reset()
        router.push("/thank-you")
      }
      if (res.error) {
        setAPIErrors(res.error)
      }
    } catch (error) {
      setAPIErrors(error)
    }
  }
  const onSubmit: SubmitHandler<FormValues> = (data) => sendData(data)

  // Modal overlay and card styling to match screenshot
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div
        className="relative bg-white p-5 md:p-9 lg:p-[54px] w-full max-w-[360px] md:max-w-[640px] box-content rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-gray-600 text-3xl md:text-4xl"
          onClick={() => {
            setAPIErrors(null)
            onClose()
          }}
          aria-label="Stäng"
        >
          ×
        </button>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/images/checkified-new-logo-dark.svg"
            alt="logo"
            width={235}
            height={64}
            className="object-cover h-[64px] w-[235px] mb-6"
          />
          <h1 className="font-jakarta font-extrabold text-center max-w-[480px] text-[22px] md:text-[32px] text-[#151e3a] mb-8 leading-[35px] tracking-[0]">
            Se vår kostnadsfria
            <br className="hidden md:block" /> introduktionsguide!
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-5"
        >
          {/* Error Alert */}
          {APIErrors && (
            <div className="text-red-500 text-xs mb-2 text-center">
              {APIErrors.message}
            </div>
          )}
          {/* First Name */}
          <div className="w-full">
            <label className="block text-[#4F4F4F] font-inter font-medium mb-1 text-base">
              Förnamn
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/icons/user-square.svg"
                  alt="user"
                  width={24}
                  height={24}
                />
              </span>
              <input
                type="text"
                placeholder="Ange ditt förnamn"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F6F6F6] border border-[#AAA1A1] text-base font-inter text-[#4F4F4F] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#3E6FED]"
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs pt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Email */}
          <div className="w-full">
            <label className="block text-[#4F4F4F] font-inter font-medium mb-1 text-base">
              E-postadress
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Image
                  src="/icons/post-message.svg"
                  alt="email"
                  width={24}
                  height={24}
                />
              </span>
              <input
                type="email"
                placeholder="Din e-postadress"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#F6F6F6] border border-[#AAA1A1] text-base font-inter text-[#4F4F4F] placeholder-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#3E6FED]"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="font-inter flex flex-col gap-1 mt-2 mb-2">
            <p className="text-sm text-[#4F4F4F]">
              Vill du lyckas inom e-handel på under 30 minuter?
            </p>
            <p className="text-sm text-[#4F4F4F]">
              Genom att kolla på våra kostnadsfria introguide så godkänner jag
              Checkified{" "}
              <Link
                href="/gdpr"
                className="underline"
                style={{ color: "#4F545A" }}
              >
                GDPR Policy
              </Link>
              .
            </p>
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="font-inter font-semibold flex items-center justify-center cursor-pointer w-full md:w-auto md:self-end px-8 py-3 rounded-lg text-white text-base md:text-lg mt-2 shadow-sm transition-colors
              bg-[#225AEA] hover:bg-[#3E6FED] disabled:bg-[#AEBEE3]"
          >
            Se gratis introguide!
          </button>
        </form>
      </div>
    </div>
  )
}
