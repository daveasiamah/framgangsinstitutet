import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";

import Layout from "@/components/BlankLayout";

import en from "@/locales/en";
import sv from "@/locales/sv";
import { for_pass } from "../../service/Apis/api";

type FormValues = {
  email: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Enter valid email address")
      .required("Email is required"),
  })
  .required();

export default function Forgot_pass() {
  const router = useRouter();
  const [hidePass, setHidePass] = useState<boolean>(true);
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  // const {
  //   register,
  //   // handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   resolver: yupResolver(schema),
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const togglePassword = () => {
    setHidePass(!hidePass);
  };

  const forgot_api_call = async (data: any) => {
    const res: any = await for_pass(data.email);
    if (res.status == 200) {
      const email = data.email;
      localStorage.setItem("email", email);
      var data = res.data;
      setShowModal(true);
      setalertMessage("Inloggningen lyckades");
      setTimeout(() => {
        router.push("/otp");
      }, 2000);
    } else {
      setalertMessage(res.response.data.message);
      setShowModalCls(true);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => forgot_api_call(data);

  useEffect(() => {
    return () => {
      authorization_validate();
    };
  }, []);

  const authorization_validate = () => {
    // if(localStorage.getItem('token') != ''){
    //   router.push('/dashboard')
    // }
  };

  return (
    <Layout headTitle={t.forgotpassdata.title}>
      <section className='relative min-h-screen flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-6/12 mb-6 lg:mb-0 lg:px-36 md:px-20 xs:px-10 my-12'>
        <h2 className='text-[2.75rem] lg:text-5xl font-bold lg:mb-8'>
            {t.forgotpassdata.title}
            {` `}<br/>
            <span className='text-blue-500'>{t.forgotpassdata.free}</span>
            {` `}
            {t.signUpData.trial}
          </h2>
          <div className='w-full flex justify-center align-middle'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='auth-form'
              action=''>
              <div className='w-full '>
                <div className='form-control'>
                  <label className='label xs:relative xs:top-3'>
                    <span className='label-text'>
                      {t.signInData.email}
                      {errors.email && <span className='text-red-400'>*</span>}
                    </span>
                  </label>
                  <label className='relative w-full block -top-5'>
                    <Image
                      src='/icons/message.svg'
                      className='formIcon'
                      width='31'
                      height='31'
                      alt='Email'
                    />
                    <input
                      type='email'
                      placeholder={t.signInData.email}
                      className='input input-bordered pl-12 w-full'
                      {...register("email")}
                    />
                  </label>
                </div>
              </div>
              <div className='mt-5'>
                <button
                  type='submit'
                  className='btn btn-primary h-14 w-full shadow-btn'
                  style={{
                    boxShadow: "0px 24px 30px rgba(0, 131, 255, 0.19)",
                  }}>
                  {t.signInData.title}
                </button>
              </div>
            </form>
          </div>

          <div className='w-full flex justify-start mt-6 text-sm font-medium'>
            <div className='flex justify-start'>
              <div className='text-gray-500'>
                {t.signInData.noAccount}
                <Link
                  href='/signup'
                  className='text-blue-500 hover:text-blue-700 ml-2'>
                  {t.signUpData.pageTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className='w-full lg:w-6/12 relative lg:flex md:flex sm:hidden xs:hidden'
          style={{ backgroundColor: "#EDF5FE" }}>
          <Image
            src='/graphics/donut.png'
            width='120'
            height='120'
            alt='donut'
            priority
            className='mt-4 absolute -left-12'
          />
          <Image
            src='/icons/logo.svg'
            width='50'
            height='50'
            alt='logo'
            className='mt-4 absolute right-12 top-8'
          />
          <div className='flex w-full mr-20 h-full mt-2 justify-center align-middle items-center'>
            <Image
              src='/graphics/signin-man.svg'
              className='xs:mt-8'
              width='560'
              height='565'
              alt='Siginin'
              priority
            />
          </div>
          <Image
            src='/graphics/donut.png'
            width='220'
            height='220'
            alt='donut'
            priority
            className='absolute -bottom-20 -right-20'
          />
        </div>
      </section>
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
    </Layout>
  );
}
