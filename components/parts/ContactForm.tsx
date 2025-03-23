import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { contact } from "../../service/Apis/api"
import { useRouter } from "next/router"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone: number
  message: string
}

const schema = yup
  .object({
    firstName: yup.string().required("Förnamn krävs"),
    lastName: yup.string().required("Efternamn krävs"),
    email: yup
      .string()
      .email("Ange en giltig e-postadress")
      .required("E-post krävs"),
    phone: yup
      .number()
      .typeError("Telefonen måste vara ett nummer")
      .required("Telefonnummer krävs"),
    message: yup.string().required("Meddelande krävs"),
  })
  .required()

type Props = {
  contactData: {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    message: string
    button: string
  }
}

export default function ContactForm({ contactData }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const sendData = async (data: any) => {
    setIsSubmitting(true)
    try {
      const res: any = await contact(data)

      if (res.status === 201) {
        // Navigate immediately (or add a delay if you prefer)
        router.push("/thank-you")
      } else {
        // Optional: handle failure cases here (e.g., show an error message)
        alert("Något gick fel. Försök igen!") // Simple fallback
      }
    } catch (error) {
      console.error(error)
      alert("Ett fel uppstod. Försök igen senare.") // Optional error fallback
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => sendData(data)

  const [firstNameValid, setFirstNameValid] = useState(false)
  const [lastNameValid, setLastNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [mobileValid, setMobileValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFirstNameValid(value.trim() !== "")
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLastNameValid(value.trim() !== "")
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmailValid(/^\S+@\S+\.\S+$/.test(value))
  }

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMobileValid(/^[0-9]+$/.test(value))
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setMessageValid(value.trim() !== "")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="home-form bg-white"
      action=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData?.firstName}
              {errors.firstName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData?.firstName}
            className="input input-bordered"
            {...register("firstName")}
            onChange={(e) => {
              handleFirstNameChange(e)
            }}
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData?.lastName}
              {errors.lastName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData?.lastName}
            className="input input-bordered"
            {...register("lastName")}
            onChange={(e) => {
              handleLastNameChange(e)
            }}
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData?.email}
              {errors.email && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="email"
            placeholder={contactData?.email}
            className="input input-bordered"
            {...register("email")}
            onChange={(e) => {
              handleEmailChange(e)
            }}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData?.phoneNumber}
              {errors.phone && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData?.phoneNumber}
            className="input input-bordered"
            {...register("phone")}
            onChange={(e) => {
              handleMobileChange(e)
            }}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">
            {contactData?.message}{" "}
            {errors.message && <span className="text-red-400">*</span>}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered text-base"
          rows={6}
          placeholder={contactData?.message}
          {...register("message")}
          onChange={(e) => {
            handleMessageChange(e)
          }}
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      {firstNameValid &&
      lastNameValid &&
      emailValid &&
      mobileValid &&
      messageValid ? (
        <button
          type="submit"
          className={`btn-primary mt-8 w-full drop-shadow-none ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Skickar..." : contactData?.button}
        </button>
      ) : (
        <div className="!cursor-not-allowed">
          <button
            type="submit"
            className="btn btn-grey !bg-gray mt-8 h-14 w-full drop-shadow-none"
            disabled
          >
            {contactData?.button}
          </button>
        </div>
      )}
    </form>
  )
}
