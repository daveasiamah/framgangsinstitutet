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
import { AuthApi } from "../../service/Apis/api";

type FormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Enter valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function Signin() {
  const router = useRouter();
  const [hidePass, setHidePass] = useState<boolean>(true);
  const { locale } = router;
  const t = locale === "en" ? en : sv;

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

  const togglePassword = () => {
    setHidePass(!hidePass);
  };

  const login_api_call = async (data: any) => {
    const res: any = await AuthApi(data.email, data.password);
    if (res.status == 200) {
      var data = res.data;
      localStorage.setItem("id", data.id);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
      localStorage.setItem("role", data.role);
      localStorage.setItem("avatar", data.avatar);
      localStorage.setItem("email", data.email);
      localStorage.setItem("address", data.address);
      localStorage.setItem("googleId", data.googleId);
      localStorage.setItem("fbId", data.fbId);
      localStorage.setItem("token", data.token);
      console.log(data.role);
      setShowModal(true);
      setalertMessage("Inloggningen lyckades");
      setTimeout(() => {
        if (data.role === "ADMIN") {
          router.push("/admin_dashboard");
        } else {
          router.push("/dashboard");
        }
      }, 2000);
    } else {
      setalertMessage(res.response.data.message);
      setShowModalCls(true);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => login_api_call(data);

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
    <Layout headTitle={t.signInData.title}>
      <section className='relative min-h-screen flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-6/12 mb-6 lg:mb-0 lg:px-36 md:px-20 xs:px-10 my-12'>
          <h1 className='text-[2.75rem] lg:text-6xl font-bold lg:mb-16'>
            {t.signInData.title}
          </h1>
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
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>
                      {t.signInData.password}
                      {errors.password && (
                        <span className='text-red-400'>*</span>
                      )}
                    </span>
                  </label>
                  <label className='relative w-full block -top-8'>
                    <Image
                      src='/icons/lock.svg'
                      className='formIcon'
                      width='30'
                      height='30'
                      alt='Password'
                    />
                    <input
                      type={hidePass ? "password" : "text"}
                      placeholder={t.signInData.password}
                      className='input input-bordered w-full pl-12'
                      {...register("password")}
                    />
                    <Image
                      src={hidePass ? "/icons/eye-slashfull.svg" : "/icons/eye-full.svg"}
                      width='28'
                      height='28'
                      alt='show/hide'
                      className='maskIcon cursor-pointer'
                      onClick={togglePassword}
                    />
                  </label>
                </div>
              </div>
              <div className='flex w-full justify-between relative -top-2'>
                <div className='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'>
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type='checkbox'
                    value=''
                    id='checkboxDefault'
                  />
                  <label
                    className='inline-block pl-[0.15rem] text-gray-500 hover:cursor-pointer text-sm font-medium'
                    htmlFor='checkboxDefault'>
                    {t.signInData.rememberMe}
                  </label>
                </div>
                <Link
                  href='#'
                  className='text-blue-500 hover:text-blue-700 text-sm font-medium'>
                  {t.signInData.forgotPassword}
                </Link>
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
          <div className='w-full mt-8 flex justify-start'>
            <div className='w-36 text-gray-500 font-medium text-sm'>
              {t.signInData.signInWith}
            </div>
            <div
              className='w-full relative'
              style={{ borderTop: "1.5px solid #ccc", top: "10px" }}
            />
          </div>
          <div className='w-full flex justify-between mt-8 xs:mt-5 xs:hidden md:flex sm:flex lg:flex'>
            <button
              type='button'
              className='btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'>
              <div className='flex justify-center w-full'>
                <Image
                  src='/icons/google.svg'
                  className='relative'
                  width='32'
                  height='32'
                  alt='Google'
                  priority
                />
                <div className='ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm xs:top-1.5'>
                  Google
                </div>
              </div>
            </button>
            <button
              type='button'
              className='btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'>
              <div className='flex justify-center w-full'>
                <Image
                  src='/icons/facebook.svg'
                  className='relative'
                  width='32'
                  height='32'
                  alt='Facebook'
                  priority
                />
                <div className='ml-1 text-black font-semibold font-sans relative top-1 xs:text-sm xs:top-1.5'>
                  Facebook
                </div>
              </div>
            </button>
            <button
              type='button'
              className='btn h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'>
              <div className='flex justify-center w-full'>
                <Image
                  src='/icons/apple.svg'
                  className='relative'
                  width='28'
                  height='28'
                  alt='Apple'
                  priority
                />
                <div
                  className='ml-1 text-black font-semibold font-sans relative xs:text-sm xs:top-1.5'
                  style={{ top: "5px" }}>
                  Apple
                </div>
              </div>
            </button>
          </div>

          <div className='w-full flex justify-center mt-6 text-sm font-medium'>
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
