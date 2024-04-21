import React, {useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router"

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import en from "@/locales/en"
import sv from "@/locales/sv"
import { registerOfContract } from "../service/Apis/api";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";
import Title from "./parts/Title";
import BlurCircle from "./graphic/BlurCircle";

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
    // lastName: yup.string().required("Efternamn krävs"),
    email: yup
      .string()
      .email("Ange en giltig e-postadress")
      .required("E-post krävs"),
    phone: yup
      .number()
      .typeError("Telefonen måste vara ett nummer")
      .required("Telefonnummer krävs"),
    // message: yup.string().required("Meddelande krävs"),
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

export default function ContactForm({
  onClose,
}: {
  onClose: () => void
}) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const senddata = async(data: any) => {
    console.log(data);
    const res : any = await registerOfContract(data);
    if (res.status==201) {
      setShowSuccess(true);
      // setShowModal(true);
      // setalertMessage("Meddelande Skickat");
      // onClose();
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative bg-white py-4 lg:py-10 px-6 max-w-[360px] box-content rounded-lg" onClick={handleClick}>
      <Image
        src="/icons/close.svg"
        alt="close"
        width={20}
        height={20}
        className="absolute top-4 right-4 cursor-pointer"
        onClick={onClose}
      />
      { !showSuccess && <div>
      <div className="flex-col justify-center items-center">
        {/* <iframe 
          width="311" 
          height="175" 
          src="https://www.youtube.com/embed/pTVfynxC3-c?si=VXY1V0Wf90F4QeV9" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          className="home_video_cover mt-4 max-w-full hidden lg:block mx-auto" 
        ></iframe> */}
        <Image
          src="/images/home/nyckeln-till-frihet.jpg"
          alt="video"
          width="240" 
          height="100" 
          className="mx-auto object-cover rounded-4xl"
        />
        <div className="lg:mt-6">
          <div className="flex items-center justify-center gap-2 text-lg lg:text-xl font-bold">
            <h1>{t.homeData.popupBlackTitle}</h1>
            <h1 className="text-primary">{t.homeData.popupBlueTitle}</h1>
          </div>
          <p className="text-gray-500 mt-1 lg:mt-4 text-sm lg:text-lg">{t.homeData.popupSubtitle}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="form-control">
            <div className="flex pl-4 border rounded-lg">
              <Image
                src="/icons/form/user.svg"
                alt="user"
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <input
                type="text"
                placeholder={t.homeData.popupForm.firstName}
                className="input focus:outline-0 flex-1 bg-white"
                {...register("firstName")}
                onChange={handleFirstNameChange} 
              />
            </div>
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <div className="flex pl-4 border rounded-lg">
              <Image
                src="/icons/form/email.svg"
                alt="email"
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <input
                type="email"
                placeholder={t.homeData.popupForm.email}
                className="input focus:outline-0 flex-1 bg-white"
                {...register("email")}
                onChange={handleEmailChange} 
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <div className="flex pl-4 border rounded-lg">
              <Image
                src="/icons/form/phone.svg"
                alt="phone"
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <input
                type="text"
                placeholder={t.homeData.popupForm.phoneNumber}
                className="input focus:outline-0 flex-1 bg-white"
                {...register("phone")}
                onChange={handlemobileChange} 
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
        {( firstNameValid && emailValid && mobileValid) ? (
        <button type="submit" className="btn-primary mt-6 w-full drop-shadow-none">
          {t.homeData.popupButton}
        </button>
        ):(
          <div className="!cursor-not-allowed">
            <button
              type='submit'
              className=' btn btn-grey !bg-gray mt-6 h-14 w-full drop-shadow-none '
              disabled
              >
              {t.homeData.popupButton}
            </button>
          </div>
        )}
        <SuccessAlert
          isVisible={showModal}
          alertMessage={alertMessage}
          onClose={() => { setShowModal(false); onClose(); } }
        />
        <ErrorAlert
          isVisibleclose={showModalCls}
          alertMessage={alertMessage}
          onClose={() => setShowModalCls(false)}
        />
      </form>
      </div> }
      { showSuccess && <div>
      <div className="flex-col justify-center items-center">
        <Image
          src={`${t.homeData.popupSuccessImage}`}
          alt="video"
          width="300" 
          height="100" 
          className="mx-auto object-cover rounded-4xl"
        />
        <div className="lg:mt-6">
          <div className="flex items-center justify-center gap-2 text-lg lg:text-xl font-bold">
            <h1>{t.homeData.popupSuccessBlackTitle}</h1>
            <h1 className="text-primary">{t.homeData.popupSuccessBlueTitle}</h1>
          </div>
          <p className="text-gray-500 mt-1 lg:mt-4 text-sm lg:text-lg">{t.homeData.popupSuccessMessage}</p>
        </div>
      </div>
      {t.homeData.popupSuccessRedirectButtons.map((buttonData) => (
        <button key={buttonData.link} onClick={()=>{
          window.open(buttonData.link, '_blank');
        }} className="btn-primary mt-6 w-full drop-shadow-none"
        style={{
          textAlign: "center",
          paddingRight: 0,
          paddingLeft: "5px",
          borderRadius: "24px",
          fontSize: 14
        }}>
          <Image
                src={buttonData.icon}
                alt="user"
                width={20}
                height={20}
                className="flex-shrink-0"
                style={{
                  marginBottom: "-18px",
                  marginLeft: 11
                }}
                key={buttonData.link}
              />
          {buttonData.text}
        </button>
      ))} 
      </div> }
      <BlurCircle positionClassName="left-0 top-0 z-1" size="lg" />
    </div>
  );
}
