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
  phone: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [APIErrors, setAPIErrors] = useState<any>(null)
  const router = useRouter()

  const schema = yup.object().shape({
    name: yup.string().required("Namn er påkrævet"),
    email: yup.string().email("Ogiltig email").required("Email er påkrævet"),
    phone: yup
      .string()
      .required("Telefonnummer er påkrævet")
      .matches(
        /^\d{9,12}$/,
        "Ange ett giltigt telefonnummer (minst 9 siffror)"
      ),
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

  const inputWrapperClass = "relative rounded-[8px] flex items-center"

  const inputClass =
    "input w-full pl-10 pr-4 py-2 font-inter text-[#4F4F4F] focus:outline-0 bg-[#F6F6F6] border-1 border-[#AAA1A1] text-2xl placeholder:text-[#4F4F4F]"

  return (
    <div
      className="relative bg-white py-4 lg:py-10 px-6 lg:px-10 w-full max-w-[360px] md:max-w-[740px] box-content rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src="/icons/close.svg"
        alt="close"
        width={20}
        height={20}
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => {
          setAPIErrors(null)
          onClose()
        }}
      />
      <div className="w-full">
        <div className="flex-col justify-center items-center">
          <div className="flex flex-row align-middle gap-2 justify-center items-center">
            <Image
              src="/images/checkified-new-logo-dark.svg"
              alt="logo"
              width={235}
              height={64}
              className="object-cover h-[64px] w-[235px]"
            />
          </div>

          <div className="flex items-center text-center justify-center gap-2 text-lg lg:text-xl h-12 mt-8">
            <h1 className="font-jakarta font-extrabold max-w-[342px] text-[18px] md:text-[32px] text-[#151e3a]">
              Se vår kostnadsfria introduktionsguide!
            </h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-4 mt-4"
        >
          {/* Error Alert */}
          <div className="text-red-500 text-xs">
            {APIErrors && APIErrors.message}
          </div>
          {/* First Name */}
          <div className="form-control w-full">
            <label className="text-[#4F4F4F] font-inter font-base">
              Förnamn
            </label>
            <div className={inputWrapperClass}>
              <Image
                src="/icons/user-square.svg"
                alt="user"
                width={24}
                height={24}
                className="absolute left-3"
              />
              <input
                type="text"
                placeholder="Ange ditt förnamn"
                className={inputClass}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs pt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Email */}
          <div className="form-control w-full">
            <label className="text-[#4F4F4F] font-inter font-base">
              E-postadress
            </label>
            <div className={inputWrapperClass}>
              <Image
                src="/icons/post-message.svg"
                alt="email"
                width={24}
                height={24}
                className="absolute left-3"
              />
              <input
                type="email"
                placeholder="Din e-postadress"
                className={inputClass}
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="font-inter flex flex-col gap-2">
            <p className="text-sm text-[#4F4F4F]">
              Vill du lyckas inom e-handel på under 30 minuter?
            </p>
            <p className="text-sm text-[#4F4F4F]">
              Genom att kolla på våra kostnadsfria introguide så godkänner jag
              Checkified{" "}
              <Link href="/gdpr" className="underline">
                GDPR Policy
              </Link>
              .
            </p>
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="font-inter flex items-center justify-center self-end w-[100px] md:w-[190px] max-w-[190px] btn btn-primary mt-4"
          >
            <p className="text-sm text-white">Se gratis introguide!</p>
          </button>
        </form>
      </div>
    </div>
  )
}
