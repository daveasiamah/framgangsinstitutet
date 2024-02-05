import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";
import { getUserData, updateProfile } from "../../service/Apis/api";
import { useAppContext } from "../AppContext";
import ScrollReveal from "../transition/ScrollReveal";

type FormValues = {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  profileImage: File | null;
  // message: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    mail: yup.string().required("mail name is required"),

    // password: yup
    //   .number()
    //   .typeError("zipcode must be a number")
    //   .required("zipcode number is required"),
    // message: yup.string().required("Message is required"),
  })
  .required();

type Props = {
  profile_pop: {
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
    //profileImage:File;
    button: string;
  };
  onEditIconClick: () => void;
};


export default function ProfileForm({ profile_pop, onEditIconClick }: Props) {

  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const { firstName, setFirstName } = useAppContext();
  const { lastName, setLastName } = useAppContext();
  //const { email, setEmail } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // const [firstnamedata, setfirstnamedata] = useState("");
  // const [lastnamedata, setlastnamedata] = useState("");
  // const [mailaddress, setmailaddress] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    const get_userdata = async () => {

      try {
        const res: any = await getUserData();
        //console.log(res);
        setValue("firstName", res.firstName); // Set the form value for firstName
        setFirstName(res.firstName);
        setValue("lastName", res.lastName); // Set the form value for lastName
        setLastName(res.lastName);
        setValue("mail", res.email); // Set the form value for mail
        //setEmail(res.email);
        //setValue("profileImage", res.avatarUrl);
        setProfileImageUrl(res.avatarUrl);

        //console.log("profileImage",{...register.profileImage});
      }
      catch (error) {
        console.log('error', error);
      }

    };
    get_userdata();
  }, []);

  const userdata_post_call = async (data: any) => {
    if (selectedImgFile) {
      data.profileImage = selectedImgFile;

    }
    console.log("updateimageshere", data.profileImage);

    try {
      const res: any = await updateProfile(data);
      //console.log('Profile updated successfully:', res1);
      if (res.status == 200) {
        var updatedData = res.data;

        // Update the form state with the latest data
        setValue("firstName", updatedData.firstName);
        setValue("lastName", updatedData.lastName);
        setValue("mail", updatedData.email);
        setValue("profileImage", updatedData.avatar);
        //setProfileImage(updatedData.profileImage);
        
        // Update the data in localStorage
        localStorage.setItem('firstName', updatedData.firstName);
        localStorage.setItem('lastName', updatedData.lastName);
        //localStorage.setItem('mail', updatedData.email);
        localStorage.setItem('avatar', updatedData.avatar);
        localStorage.setItem('avatarUrl', updatedData.avatarUrl);
        setFirstName(updatedData.firstName);
        setLastName(updatedData.lastName);
        //setEmail(updatedData.email);
        //setProfileImage(updatedData.avatar);


        setShowModal(true);
        setalertMessage("Inloggningen lyckades");
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
        console.log("updatedData", updatedData);
      } else {
        setalertMessage(res.response.data.message);
        setShowModalCls(true);
      }

    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error, show an error message, etc.
    }
  };

  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);
  const handleImgFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]; // Use files[0] to get the first selected file
      setSelectedImgFile(file);

      console.log("Selected Image File:", file);
    }
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      (fileInputRef.current as HTMLInputElement).click();
    }
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    await userdata_post_call(data);
  };

  return (

    <><section className=" bg-primary rounded-[2rem] text-white relative mb-5 isolate">
      <div className="w-full  p-7 rounded-tl-3xl rounded-bl-3xl lg:mr-auto mt-40 lg:mt-0">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-10 place-content-between form_benner_outer">
            <div className="form_benner_wrap">
              <div className=" grid grid-cols-2 gap- place-content-between form_benner_logo first-letter border border-white rounded-2xl p-4">
                <div className="bg-white p-1 rounded-full w-fit border border-white form_inner_logo ">
                  <div className="bg-white rounded-full w-fit p-4">
                    <div onClick={handleClick}>
                      {selectedImgFile ? (
                        <img
                          src={URL.createObjectURL(selectedImgFile)}
                          alt="Selected"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                          height={45}
                          width={45} />
                      ) : profileImageUrl ? (
                        <img
                          src={profileImageUrl}
                          alt="Profile"
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                          height={45}
                          width={45} />
                      ) : null}
                    </div>
                    {/* Hidden file input */}
                    <input
                      type='file'
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleImgFileChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 place-content-center">
                  <div className="form_benner_icon grid grid-cols-2 place-content-center rounded-lg w-fit mx-auto">
                    <div className="form_inner_icon_1 bg-primary rounded-lg py-2 px-3" onClick={handleClick}>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.12498 17.4172H11.875C15.8333 17.4172 17.4166 15.8338 17.4166 11.8755V7.1255C17.4166 3.16717 15.8333 1.58383 11.875 1.58383H7.12498C3.16665 1.58383 1.58331 3.16717 1.58331 7.1255V11.8755C1.58331 15.8338 3.16665 17.4172 7.12498 17.4172Z"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M7.12502 7.91716C7.99947 7.91716 8.70835 7.20827 8.70835 6.33382C8.70835 5.45937 7.99947 4.75049 7.12502 4.75049C6.25057 4.75049 5.54169 5.45937 5.54169 6.33382C5.54169 7.20827 6.25057 7.91716 7.12502 7.91716Z"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M2.11371 15.0026L6.01662 12.3822C6.64204 11.9626 7.54454 12.0101 8.10662 12.493L8.36787 12.7226C8.98537 13.253 9.98288 13.253 10.6004 12.7226L13.8937 9.89638C14.5112 9.36596 15.5087 9.36596 16.1262 9.89638L17.4166 11.0047"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="form_inner_icon_2 py-2 px-3">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6251 4.7343C13.9889 4.47305 11.3368 4.33847 8.69262 4.33847C7.12512 4.33847 5.55762 4.41764 3.99012 4.57597L2.37512 4.7343"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M6.72919 3.93453L6.90335 2.89745C7.03002 2.14537 7.12502 1.58328 8.46294 1.58328H10.5371C11.875 1.58328 11.9779 2.17703 12.0967 2.90537L12.2709 3.93453"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M14.923 7.23575L14.4085 15.2078C14.3214 16.4507 14.2501 17.4166 12.0414 17.4166H6.95888C4.75013 17.4166 4.67888 16.4507 4.59179 15.2078L4.07721 7.23575"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M8.17804 13.0627H10.8143"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                        <path
                          d="M7.52063 9.89575H11.479"
                          stroke="white"
                          stroke-width="1.17003"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/profile_setting_pop/banner.png"
                alt="stats"
                fill
                className="absolute object-contain profile_pop_img" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <form onSubmit={handleSubmit(onSubmit)} className="" action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="form-control">
            <label className="label">
              <span className="label-text form-text-color">
                {profile_pop.firstName}
                {errors.firstName && <span className="text-red-400">*</span>}
              </span>
            </label>
            <input
              type="text"
              placeholder={profile_pop.firstName}
              className="input bg-base-200"
              // value={firstnamedata}
              // onChange={e => setfirstnamedata(e.target.value)}
              {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text form-text-color">
                {profile_pop.lastName}
                {errors.lastName && <span className="text-red-400">*</span>}
              </span>
            </label>
            <input
              type="text"
              placeholder={profile_pop.lastName}
              className="input bg-base-200 z-50"
              {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text form-text-color">
                {profile_pop.mail}
                {errors.mail && <span className="text-red-400">*</span>}
              </span>
            </label>
            <input
              type="text"
              placeholder={profile_pop.mail}
              className="input bg-base-200"
              {...register("mail")} />
            {errors.mail && (
              <p className="text-red-400 text-sm mt-1">{errors.mail.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text form-text-color">
                {profile_pop.password}
                {errors.password && <span className="text-red-400">*</span>}
              </span>
            </label>
            <div className="relative" onClick={onEditIconClick}>
              <svg width="24" height="24" className="edit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#0083FF" />
                <path d="M8.5 17.69C7.89 17.69 7.33 17.47 6.92 17.07C6.43 16.58 6.22 15.87 6.33 15.12L6.76 12.11C6.84 11.53 7.22 10.78 7.63 10.37L15.51 2.49C17.5 0.5 19.52 0.5 21.51 2.49C22.6 3.58 23.09 4.69 22.99 5.8C22.9 6.7 22.42 7.58 21.51 8.48L13.63 16.36C13.22 16.77 12.47 17.15 11.89 17.23L8.88 17.66C8.75 17.69 8.62 17.69 8.5 17.69ZM16.57 3.55L8.69 11.43C8.5 11.62 8.28 12.06 8.24 12.32L7.81 15.33C7.77 15.62 7.83 15.86 7.98 16.01C8.13 16.16 8.37 16.22 8.66 16.18L11.67 15.75C11.93 15.71 12.38 15.49 12.56 15.3L20.44 7.42C21.09 6.77 21.43 6.19 21.48 5.65C21.54 5 21.2 4.31 20.44 3.54C18.84 1.94 17.74 2.39 16.57 3.55Z" fill="#0083FF" />
                <path d="M19.85 9.83C19.78 9.83 19.71 9.82 19.65 9.8C17.02 9.06 14.93 6.97 14.19 4.34C14.08 3.94 14.31 3.53 14.71 3.41C15.11 3.3 15.52 3.53 15.63 3.93C16.23 6.06 17.92 7.75 20.05 8.35C20.45 8.46 20.68 8.88 20.57 9.28C20.48 9.62 20.18 9.83 19.85 9.83Z" fill="#0083FF" />
              </svg>
              <input
                type="password"
                placeholder={profile_pop.password}
                className="input bg-base-200 w-full"
                {...register("password")} />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

        </div>
        <div className="form-control items-end">
          <button className="btn btn-primary w-full lg:w-fit mb-6 mt-6 btn-spara" type="submit"
          >
            Spara
          </button>
        </div>
        <SuccessAlert
          isVisible={showModal}
          alertMessage={alertMessage}
          onClose={() => setShowModal(false)} />
        <ErrorAlert
          isVisibleclose={showModalCls}
          alertMessage={alertMessage}
          onClose={() => setShowModalCls(false)} />
      </form></>

  );
}