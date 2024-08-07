import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";


import Layout from "@/components/BlankLayout";

import en from "@/locales/en";
import sv from "@/locales/sv";
import { set_new_password } from "@/service/Apis/api";
//import { Register } from "../../service/Apis/api";

type FormValues = {
  password: string;
  confirm_password: string;
};

const schema = yup
  .object({
    confirm_password: yup.string().required("Password is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function Newpassword() {
  const router = useRouter();
  const [hidePass, setHidePass] = useState<boolean>(true);
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  const [showModal, setShowModal] = useState(false);
  const [showModalCls, setShowModalCls] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const [passMatch,setPassMatch] = useState('')

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

  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const updateStrengthMeter = (strength: number) => {
    setPasswordStrength(strength);
  };

  const checkPasswordStrength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    // Calculate the password strength (you can use your own algorithm or zxcvbn here)
    const strength = Math.min(100, password.length * 10);
    updateStrengthMeter(strength);
  };

  const submitePassword = async(pass:any) =>{
    if (pass.password===pass.confirm_password) {
      try {
        const res:any = await set_new_password(pass)
        console.log(res)
        if (res.status===200) {
          setalertMessage("Lösenordsändringen lyckades")
          setShowModal(true)
          setTimeout(() => {
            router.push("/signin");
              }, 1000);
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setPassMatch("Lösenord är inte machat")
    }
    
  }
  const onSubmit: SubmitHandler<FormValues> = (data) => submitePassword(data);
   

  return (
    <Layout headTitle={t.newpassword.pageTitle}>
      <section className='relative min-h-screen flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-6/12 mb-6 lg:mb-0 lg:px-36 md:px-20 xs:px-10 my-12 xs:my-8'>
          <h2 className='text-[2.75rem] lg:text-5xl font-bold lg:mb-8'>
            {t.newpassword.title}
            {` `}<br/>
            <span className='text-blue-500'>{t.newpassword.free}</span>
            {` `}
            
          </h2>
          <p className="fgp_para"  style={{paddingRight: "14vw"}}>{t.newpassword.trial}</p>
          <div className='w-full flex justify-center align-middle'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='auth-form'
              action=''>
              <div className='w-full '>
                
                
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>
                      {t.newpassword.password}
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
                      placeholder={t.newpassword.password}
                      onInput={checkPasswordStrength}
                      className='input input-bordered w-full pl-12'
                      {...register("password")}
                    />
                    <Image
                      src={hidePass ? "/icons/eye-slash.svg" : "/icons/eye.svg"}
                      width='28'
                      height='28'
                      alt='show/hide'
                      className='maskIcon cursor-pointer'
                      onClick={togglePassword}
                    />
                  </label>
                  <div className="password-strength-meter">
                    <div
                      className={`strength-segment ${passwordStrength >= 0 ? "active" : ""}`}
                    ></div>
                    <div
                      className={`strength-segment ${passwordStrength >= 25 ? "active" : ""}`}
                    ></div>
                    <div
                      className={`strength-segment ${passwordStrength >= 50 ? "active" : ""}`}
                    ></div>
                    <div
                      className={`strength-segment ${passwordStrength >= 75 ? "active" : ""}`}
                    ></div>
                    
                  </div>
                  {/* <div className="strength-label">
                      Password Strength:{" "}
                      <span className="label-text">
                        {passwordStrength < 25
                          ? "Very Weak"
                          : passwordStrength < 50
                            ? "Weak"
                            : passwordStrength < 75
                              ? "Fair"
                              : "Strong"}
                      </span>
                    </div> */}
                </div>
                <div className='form-control relative -top-2'>
                  <label className='label'>
                    <span className='label-text'>
                      {t.newpassword.confirmpassword}
                      {errors.password && <span className='text-red-400'>*</span>}
                    </span>
                  </label>
                  <label className='relative w-full block -top-8'>
                    <Image
                      src='/icons/lock.svg'
                      className='formIcon'
                      width='31'
                      height='31'
                      alt='Email'
                    />
                    <input
                      type='text'
                      placeholder={t.newpassword.confirmpassword}
                      className='input input-bordered pl-12 w-full'
                      {...register("confirm_password")}
                    />
                    {passMatch?<p className="text-redlight-500 text-center mt-2">{passMatch}</p>:""}
                  </label>
                  
                </div>
              </div>
              
              <div className='relative -top-5'>
                <button
                  type='submit'
                  // onClick={submitePassword}
                  className='btn btn-primary mt-0 h-14 w-full shadow-btn'
                  style={{
                    boxShadow: "0px 24px 30px rgba(0, 131, 255, 0.19)",
                  }}>
                  {t.newpassword.buttonreset}
                </button>
              </div>
            </form>
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
              src='/images/otp-password/otp-man3.svg'
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
