import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SuccessAlert from "@/components/parts/SuccessAlert";
import ErrorAlert from "@/components/parts/ErrorAlert";

import ReactModal from 'react-modal';


import Layout from "@/components/BlankLayout";
import Title from "@/components/parts/Title"

import { useSession, signIn, signOut } from "next-auth/react"

import en from "@/locales/en";
import sv from "@/locales/sv";
import { Register, resend_mail, login_with_google } from "../../service/Apis/api";

type FormValues = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
};

const schema = yup
    .object({
        firstName: yup.string().required("Full Name is required"),
        // lastName: yup.string().required("Last Name is required"),
        email: yup
            .string()
            .email("Enter valid email address")
        // .matches(
        // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        // "Invalid email format"
        //   )
        // .required("Email is required"),
        // password: yup.string().required("Password is required"),
    })
// .required();

export default function SignUp() {
    const { data } = useSession();
    const router = useRouter();
    const [hidePass, setHidePass] = useState<boolean>(true);
    const { locale } = router;
    const t = locale === "en" ? en : sv;

    const [showModal, setShowModal] = useState(false);
    const [showModalCls, setShowModalCls] = useState(false);
    const [alertMessage, setalertMessage] = useState("");
    const [showModal2, setShowModal2] = useState(false);
    const [showModalCls2, setShowModalCls2] = useState(false);
    const [alertMessage2, setalertMessage2] = useState("");
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const [SignUpEmail, setSignUpEmail] = useState('');


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

    const register_api_call = async (data: any) => {
        console.log(data)
        var firstName = data.firstName;
        var lastName = data.lastName;
        var role = "USER";
        var email = data.email;
        var password = data.password;
        var phoneNumber = data.phoneNumber
        const res: any = await Register(firstName, lastName, role, email, password,phoneNumber);
        if (res.status == 201) {
            setSignUpEmail(email);
            /*var data = res.data;
            localStorage.setItem("id", data.id);
            localStorage.setItem("firstName", data.firstName);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("role", data.role);
            localStorage.setItem("avatar", data.avatar);
            
            localStorage.setItem("address", data.address);
            localStorage.setItem("googleId", data.googleId);
            localStorage.setItem("fbId", data.fbId);
            localStorage.setItem("token", data.token);
            setShowModal(true);
            setalertMessage("Inloggningen lyckades");
            setTimeout(() => {
                
            }, 2000);*/
            setmodalIsOpen(true)
        } else {
            setalertMessage(res.response.data.message);
            setShowModalCls(true);
        }
    };

    const google_login = async () => {
        const login_seestion : any = data;
        const res: any = await login_with_google(login_seestion.user.name,login_seestion.user.email,login_seestion.user.email,login_seestion.user.image);
        if (res.status == 200) {
            var logindata = res.data;
            localStorage.setItem("id", logindata.id);
            localStorage.setItem("firstName", logindata.firstName);
            localStorage.setItem("lastName", logindata.lastName);
            localStorage.setItem("role", logindata.role);
            localStorage.setItem("avatar", logindata.avatar);
            localStorage.setItem("email", logindata.email);
            localStorage.setItem("address", logindata.address);
            localStorage.setItem("googleId", logindata.googleId);
            localStorage.setItem("fbId", logindata.fbId);
            localStorage.setItem("paymentvalidationId", logindata.paymentvalidationId);
            localStorage.setItem("token", logindata.token);
            if (logindata.role === "ADMIN") {
                router.push("/admin_dashboard");
            } else {
                if (typeof window !== "undefined") {
                    const role = localStorage.getItem("paymentvalidationId");
                    // console.log("role found :- " + role);
                    if (role === 'null') {
                        router.push("/coursecheckout");
                    } else {
                        router.push("/dashboard");
                    }
                }
                // router.push("/dashboard");
            }
        }
    }
    if (data) {
        google_login();
    }


    const onSubmit: SubmitHandler<FormValues> = async (data) => await register_api_call(data);


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
    // const [eefirstNameValid, seteeFirstNameValid] = useState(false);
    // const [eelastNameValid, seteeLastNameValid] = useState(false);
    // const [eeemailValid, seteeEmailValid] = useState(false);
    // const [eepasswordValid, seteePasswordValid] = useState(false);

    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [phoneNumberValid, setPhoneNumberValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFirstNameValid(value.trim() !== ""); // Custom validation logic for first name

    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLastNameValid(value.trim() !== ""); // Custom validation logic for last name
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumberValid(/^[0-9]+$/.test(value)); // Custom validation logic for phone
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\S+@\S+\.\S+$/.test(value)) {
            setEmailValid(true);
        } // Custom validation logic for email
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length >= 6) {
            setPasswordValid(true);
        } // Custom validation logic for password
    };



    const handleresend = async () => {
        const res: any = await resend_mail(SignUpEmail);
        console.log(res)
        if (res.status == 201) {
            setalertMessage2("E-post skickat");
            setShowModal2(true);
            setShowModalCls2(false)
        } else {
            setalertMessage2("E-post inte skickat");
            setShowModalCls2(true);
            setShowModal2(true);
        }
    }


    return (
        <Layout headTitle={t.signUpData.pageTitle}>
            <section className='relative min-h-screen flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-6/12 mb-6 lg:mb-0 lg:px-36 md:px-20 xs:px-10 my-12 xs:my-8'>
                    <h2 className='text-[2.75rem] lg:text-5xl font-bold lg:mb-8'>
                        {t.signUpData.title}
                        {` `}
                        <span className='text-blue-500'>{t.signUpData.free}</span>
                        {` `}
                        {t.signUpData.trial}
                    </h2>
                    <div className='w-full flex justify-center align-middle'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='auth-form font-ctm'
                            action=''
                            noValidate >
                            <div className='w-full '>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>{t.signUpData.firstName}
                                            {errors.firstName && <span className='text-red-400'>*</span>}</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder={t.signUpData.firstName}
                                        className='input input-bordered w-full text-[11rem]'

                                        {...register("firstName")}
                                        onChange={handleFirstNameChange}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>{t.signUpData.lastName}
                                            {errors.lastName && <span className='text-red-400'>*</span>}</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder={t.signUpData.lastName}
                                        className='input input-bordered w-full'
                                        {...register("lastName")}
                                        onChange={handleLastNameChange}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>{t.signUpData.phoneNumber}
                                            {errors.phoneNumber && <span className='text-red-400'>*</span>}</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder={t.signUpData.phoneNumber}
                                        className='input input-bordered w-full'
                                        {...register("phoneNumber")}
                                        onChange={handlePhoneNumberChange}
                                    />
                                </div>                                
                                <div className='form-control mt-2'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            {t.signUpData.email}
                                            {errors.email && <span className='text-red-400'>*</span>}
                                        </span>
                                    </label>
                                    <label className='relative w-full block -top-8'>
                                        <Image
                                            src='/icons/message.svg'
                                            className='formIcon'
                                            width='31'
                                            height='31'
                                            alt='Email'
                                        />
                                        <input
                                            type='email'
                                            placeholder={t.signUpData.email}
                                            className='input input-bordered pl-12 w-full'
                                            {...register("email")}
                                            onChange={handleEmailChange}
                                        />
                                    </label>
                                </div>
                                <div className='form-control relative -top-5'>
                                    <label className='label'>
                                        <span className='label-text'>
                                            {t.signUpData.password}
                                            {errors.password && (
                                                <span className='text-red-400'>*</span>
                                            )}
                                        </span>
                                        <span className="!text-[0.8rem] text-subtitle">{t.signUpData.passwarning}</span>
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
                                            placeholder={t.signUpData.password}
                                            className='input input-bordered w-full pl-12'
                                            {...register("password")}
                                            onChange={handlePasswordChange}
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
                            <div className='relative -top-5'>
                                {(firstNameValid && lastNameValid && phoneNumberValid && emailValid && passwordValid) ? (
                                    <div className="!cursor-not-allowed">
                                        <button
                                            type='submit'
                                            className=' btn-primary mt-0 h-14 w-full drop-shadow-none'
                                        >
                                            {t.signUpData.buttonSubmit}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="!cursor-not-allowed">
                                        <button
                                            type='submit'
                                            className='btn btn-grey mt-0 h-14 w-full drop-shadow-none'
                                            disabled
                                        >
                                            {t.signUpData.buttonSubmit}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className='w-full mt-2 flex justify-start'>
                        <div className='w-40 text-gray-500 font-medium text-sm'>
                            {t.signUpData.signUpWith}
                        </div>
                        <div
                            className='w-full relative'
                            style={{ borderTop: "1.5px solid #ccc", top: "10px" }}
                        />
                    </div>
                    <div className='w-full flex justify-between mt-8 xs:mt-5 xs:hidden md:flex sm:flex lg:flex'>
                        <button
                            type='button'
                            className='btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'
                            onClick={() => signIn('google'
                                // callbackUrl: '/api/auth/google',
                            )}
                        >
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
                            className='btn mr-2 h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'
                            onClick={() => signIn('facebook')}>
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
                            className='btn h-10 w-1/3 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-200'
                            onClick={() => signIn('apple')}>
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
                                {t.signUpData.haveAccount}
                                <Link
                                    href='/signin'
                                    className='text-blue-500 hover:text-blue-700 ml-2'>
                                    {t.signInData.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-8 mb-2 text-sm font-medium'>
                        <div className='block text-center w-full'>
                            <div className='text-gray-500'>{t.signUpData.bySign}</div>
                            <div className='flex justify-center'>
                                <Link href='#' className='text-blue-500 hover:text-blue-700'>
                                    {t.signUpData.privacy}
                                </Link>
                                <div className='text-gray-500 mx-1'>{t.signUpData.and}</div>
                                <Link href='#' className='text-blue-500 hover:text-blue-700'>
                                    {t.signUpData.terms}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full lg:w-6/12 relative lg:flex md:flex sm:hidden xs:hidden'
                    style={{ backgroundColor: "#0083FF" }}>
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
                    <div className='flex flex-column w-full h-full justify-center mt-6 align-middle items-center'>
                        <div className='block'>
                            <Image
                                src='/graphics/signup-man2.png'
                                className='mt-0 sm:w-360 sm:h-365'
                                width='560'
                                height='565'
                                alt='SiginUp'
                                priority
                            />
                        </div>
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

            <ReactModal
                isOpen={modalIsOpen}
                contentLabel="Popup"
                overlayClassName="overlay emailconfirmationpopup"
            >
                <div className="popup-content pb-[5rem]">
                    <img
                        // src="https://app.dropship.io/static/media/signup_mail.deed3dbeca4d03ecfcf8.svg"
                        src="/unnamed.jpg"
                        alt="pricing standard"
                        height={100}
                        width={100}
                        className="icon-container inline-flex w-full place-content-center"
                    />
                    <p className="text-subtitle text-center mt-[2rem] mb-[2rem]">Bekräfta din e-post</p>

                    <Title blackText="" blueText={SignUpEmail} className="!text-[1.5rem] text-left mb-[1rem] text-center" />
                    <p className="text-subtitle text-center ">Fick du inte mejlet? <span className="text-primary font-semibold cursor-pointer" onClick={handleresend} >Skicka igen</span></p>

                </div>
                <SuccessAlert
                    isVisible={showModal2}
                    alertMessage={alertMessage2}
                    onClose={() => setShowModal2(false)}
                />
                <ErrorAlert
                    isVisibleclose={showModalCls2}
                    alertMessage={alertMessage2}
                    onClose={() => setShowModalCls2(false)}
                />
            </ReactModal>

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
