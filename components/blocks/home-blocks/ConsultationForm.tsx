import React, { useState } from "react"
import Image from "next/image"
import en from "@/locales/en"
import sv from "@/locales/sv"
import { useRouter } from "next/router"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import SuccessAlert from "@/components/parts/SuccessAlert"
import { registerOfContract } from "@/service/Apis/api"

type FormValues = {
  name: string
  email: string
  phone: string
  selectedCourse: string
}

export function ConsultationForm() {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv
  const [submitted, setSubmitted] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required("Namn er påkrævet"),
    email: yup.string().email("Ogiltig email").required("Email er påkrævet"),
    phone: yup.string().required("Telefonnummer er påkrævet"),
    selectedCourse: yup
      .string()
      .required("Vilken utbildning är du intresserad av?"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await registerOfContract(data)
    try {
      response.success && setSubmitted(true)
      reset()
    } catch (error) {
      console.error("Submission error:", error)
    }
  }

  const inputWrapperClass =
    "relative border rounded-lg bg-white flex items-center"
  const inputClass =
    "input w-full pl-10 pr-4 py-4 focus:outline-0 bg-white text-base"

  return (
    <div className="bg-[#072F94] max-w-[1290px] mx-auto max-h-[682px] px-4 md:px-[50px] lg:px-[155px] py-8 md:py-10 rounded-[20px]">
      <h2 className="font-jakarta text-white text-xl md:text-[40px] text-center font-bold mb-4 md:mb-10">
        Boka Kostnadsfri Konsultation
      </h2>
      {submitted && (
        <SuccessAlert
          alertMessage="Tack för din förfrågan!"
          isVisible={submitted}
          onClose={() => setSubmitted(false)}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col items-center gap-4 w-full"
      >
        {/* First Name */}
        <div className="form-control w-full">
          <div className={inputWrapperClass}>
            <Image
              src="/new-home/user.svg"
              alt="user"
              width={24}
              height={24}
              className="absolute left-3"
            />
            <input
              type="text"
              placeholder="Namn"
              className={inputClass}
              {...register("name")}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        {/* Email */}
        <div className="form-control w-full">
          <div className={inputWrapperClass}>
            <Image
              src="/new-home/message.svg"
              alt="email"
              width={24}
              height={24}
              className="absolute left-3"
            />
            <input
              type="email"
              placeholder="E-Post"
              className={inputClass}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="form-control w-full">
          <div className={inputWrapperClass}>
            <Image
              src="/new-home/phone.svg"
              alt="phone"
              width={24}
              height={24}
              className="absolute left-3"
            />
            <input
              type="text"
              placeholder="Telefonnummer"
              className={inputClass}
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Selected Course */}
        <div className="form-control w-full">
          <div className={inputWrapperClass}>
            <Image
              src="/new-home/teacher.svg"
              alt="message"
              width={24}
              height={24}
              className="absolute left-3"
            />
            <input
              type="text"
              placeholder="Vilken utbildning är du intresserad av?"
              className={inputClass}
              {...register("selectedCourse")}
            />
          </div>
          {errors.selectedCourse && (
            <p className="text-red-500 text-sm">
              {errors.selectedCourse.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitted}
          onClick={() => onSubmit}
          className="font-inter text-xs md:text-base max-w-[255px] btn btn-primary mt-4"
        >
          Boka konsultation
        </button>
      </form>
    </div>
  )
}
