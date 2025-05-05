import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerOfContract } from "../service/Apis/api"

type FormValues = {
  name: string
  email: string
  phone: string
  selectedCourse?: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  selectedCourse: "",
}

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  const schema = yup.object().shape({
    name: yup.string().required("Namn er påkrævet"),
    email: yup.string().email("Ogiltig email").required("Email er påkrævet"),
    phone: yup
      .string()
      .required("Telefonnummer er påkrævet")
      .matches(
        /^7\d{8}$/,
        "Ange ett giltigt svenskt telefonnummer (7XXXXXXXX)"
      ),
    selectedCourse: yup.string(),
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
    try {
      const res = await registerOfContract(data)
      if (res.success) {
        reset()
        router.push("/thank-you")
      }
    } catch (error) {
      console.log("ERROR SENDING CONTACT FORM: ", error)
    }
  }
  const onSubmit: SubmitHandler<FormValues> = (data) => sendData(data)

  const inputWrapperClass =
    "relative border rounded-lg bg-white flex items-center"
  const inputClass =
    "input w-full pl-10 pr-4 py-4 focus:outline-0 bg-white text-base"

  return (
    <div
      className="relative bg-white py-4 lg:py-10 px-6 w-full max-w-[360px] md:max-w-[390px] box-content rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src="/icons/close.svg"
        alt="close"
        width={20}
        height={20}
        className="absolute top-4 right-4 cursor-pointer"
        onClick={onClose}
      />
      <div className="w-full">
        <div className="flex-col justify-center items-center">
          <Image
            src="/new-home/contract-form-banner.png"
            alt="video"
            width="311"
            height="175"
            className="mx-auto object-cover"
          />
          <div>
            <div className="flex items-center justify-center gap-2 text-lg lg:text-xl h-12 mt-4">
              <h1 className="font-jakarta font-extrabold text-base text-[#151e3a">
                Ansök om en kostnadsfri konsultation
              </h1>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col items-center gap-4 mt-4"
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
              <p className="text-red-500 text-xs pt-1">{errors.name.message}</p>
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
              <p className="text-red-500 text-xs pt-1">
                {errors.email.message}
              </p>
            )}
          </div>

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
              <p className="text-red-500 text-xs pt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="font-inter w-full text-xs md:text-base btn btn-primary mt-4"
          >
            Ansök
          </button>
        </form>
      </div>
    </div>
  )
}
