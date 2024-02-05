import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/profile_form";
import Popupform from "@/components/parts/popup_form";
import Popup from "@/components/parts/popup";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";
import { Popup_form } from "@/locales/sv/popup_form";
import { useRouter } from "next/router";
type Props = {};

export default function Profile_setting_pop({}: Props) {
  const router = useRouter();
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : sv;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === 'null') {
      router.push("/coursecheckout");
    } 
  }
  const handleClosePopup = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      localStorage.removeItem("blue_Title");
      localStorage.removeItem("black_Title");
      localStorage.setItem("black_Title", "Redigera");
      localStorage.setItem("blue_Title", "Profil");
    }
  }, []);
  return (
    <Layout headTitle={profile_pop.metaData.title}>
      <section className="grid grid-cols-4">
        <div className="pt-8 pl-8 pr-8 pb-0 bg-base-100 rounded-[3rem] gap-8 col-span-3">
          <ProfileForm profile_pop={profile_pop.profileForm}  onEditIconClick={handleOpenPopup}/>
        </div>
      </section>
     
      <Popup isOpen={isOpen} onClose={handleClosePopup}>
        <Popupform popup_pass={Popup_form.profileForm} />
      </Popup>
    </Layout>
  );
}
