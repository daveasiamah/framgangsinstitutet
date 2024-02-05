import React, {useState} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contact } from "../../service/Apis/api";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

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
  .required();

type Props = {
  contactData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    button: string;
  };
};

export default function ContactForm({ contactData }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const senddata = async(data: any) => {
    console.log(data);
    const res : any = await contact(data);
    if (res.status==200) {
      setShowModal(true);
      setalertMessage("Meddelande Skickat");
    } else {
      setalertMessage("Misslyckas");
      setShowModalCls(true);
    }
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => senddata(data);
  const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [mobileValid, setmobileValid] = useState(false);
  const [messageValid, setmessageValid] = useState(false);
 
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFirstNameValid(value.trim() !== ""); // Custom validation logic for first name

  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLastNameValid(value.trim() !== ""); // Custom validation logic for last name
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmailValid(/^\S+@\S+\.\S+$/.test(value)); // Custom validation logic for email
  };

  const handlemobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setmobileValid(/^[0-9]+$/.test(value)); // Custom validation logic for password
  };
  
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setmessageValid(value.trim() !== ""); // Custom validation logic for last name
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="home-form bg-white" action="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData.firstName}
              {errors.firstName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.firstName}
            className="input input-bordered"
            {...register("firstName")}
            onChange={handleFirstNameChange} 
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
              {contactData.lastName}
              {errors.lastName && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.lastName}
            className="input input-bordered"
            {...register("lastName")}
            onChange={handleLastNameChange} 
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
              {contactData.email}
              {errors.email && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="email"
            placeholder={contactData.email}
            className="input input-bordered"
            {...register("email")}
            onChange={handleEmailChange} 
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {contactData.phoneNumber}
              {errors.phone && <span className="text-red-400">*</span>}
            </span>
          </label>
          <input
            type="text"
            placeholder={contactData.phoneNumber}
            className="input input-bordered"
            {...register("phone")}
            onChange={handlemobileChange} 
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">
            {contactData.message}{" "}
            {errors.message && <span className="text-red-400">*</span>}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered text-base"
          rows={6}
          placeholder={contactData.message}
          {...register("message")}
          onChange={handleMessageChange} 
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      {( firstNameValid && lastNameValid && emailValid && mobileValid && messageValid) ? (
      <button type="submit" className=" btn-primary mt-8 w-full drop-shadow-none">
        {contactData.button}
      </button>
      ):(
        <div className="!cursor-not-allowed">
                  <button
                  type='submit'
                  className=' btn btn-grey !bg-gray mt-8 h-14 w-full drop-shadow-none '
                  disabled
                  >
                  {contactData.button}
                </button>
                </div>
      )}
       <SuccessAlert
        isVisible={showModal}
        alertMessage={alertMessage}
        onClose={() => setShowModal(false)}
      />
      <ErrorAlert
        isVisibleclose={showModalCls}
        alertMessage={alertMessage}
        onClose={() => setShowModalCls(false)}
      />
    </form>
  );
}
