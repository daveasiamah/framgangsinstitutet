import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import ButtonArrow from "@/components/parts/ButtonArrow"
import Title from "@/components/parts/Title"

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

import { VerificationTokenRequestAPI } from "../../service/Apis/api";

type Props = {}

export default function University({ }: Props) {
    const router = useRouter()
    const { locale } = router
    const t = locale === "en" ? en : sv

    let asPath = router.asPath.split("=");

    const [VerificationToken, setVerificationToken] = useState(asPath[1]);
    const [UserVerificationStatus, setUserVerificationStatus] = useState(0);

    const VerificationTokenRequest = async () => {
        const res: any = await VerificationTokenRequestAPI(VerificationToken);
        if(res.status){
            if(res.status == 200){
                var data = res.data.user;
                localStorage.setItem("id", data.id);
                localStorage.setItem("firstName", data.firstName);
                localStorage.setItem("lastName", data.lastName);
                localStorage.setItem("role", data.role);
                localStorage.setItem("avatar", data.avatar);
                localStorage.setItem("email", data.email);
                localStorage.setItem("address", data.address);
                localStorage.setItem("googleId", data.googleId);
                localStorage.setItem("fbId", data.fbId);
                localStorage.setItem("token", res.data.token);
      localStorage.setItem("paymentvalidationId", data.paymentvalidationId);

            }else{
                // router.push("/signin");    
            }
        }else{
            // router.push("/signin");
        }
    }
    useEffect(() => {
        // if(localStorage.getItem("id")){
        //     router.push("/dashboard");
        // }else{
            VerificationTokenRequest();
        // }        
    }, []);

    return (
        <>
            <div className="text-center mb-[2rem] mt-[3rem]">
                <Title blackText="E-post Bekräftad" className=" mb-[1rem] text-center" />
                <p className="text-subtitle text-center">Klicka nedan för att fortsätta
</p>
                <Image
                src="emailConfirmed.svg"
                alt="pricing standard"
                height={364}
                width={364}
                className="icon-container inline-flex place-content-center"
                />
            </div>
            <div className="text-center m">
                <ButtonArrow href="/coursecheckout" className="mr-auto inline-flex place-content-center">Fortsätta</ButtonArrow>
            </div>
        </>
    )
}
