import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Admin_layout from "@/components/AdminLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/profile_form";
import Popupform from "@/components/parts/popup_form";
import Popup from "@/components/parts/popup";
import AdminList from "@/components/parts/Admin_list";
import AdminGrid from "@/components/parts/Admin_grid";
import en from "@/locales/en";
import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";
import { Popup_form } from "@/locales/sv/popup_form";
import { AiOutlinePlus } from "react-icons/ai";
import {
  admin_get_users,
  activecourse,
  draftcourse,
  pausecourse,
  admin_update_users,
  admin_update_users_payment,
  admin_delete_user,
} from "../../service/Apis/api";
import { button } from "@material-tailwind/react/theme/components/button";

type Props = {};
let PerPageRecord = 20;
let PageNumber = 1;

interface ConfirmationPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className='confirmation-popup'>
      <p className='mb-4'>
        Är du säker på att du vill ta bort den här användaren?
      </p>
      <button
        className='btn mr-2 border-none mt bg-primary font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'
        onClick={onConfirm}>
        Ja
      </button>
      <button
        className='btn border-none mt bg-red-500 font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'
        onClick={onCancel}>
        Nej
      </button>
    </div>
  );
};

export default function AdminUsers({}: Props) {

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);


  // ... (existing code)

  const handleOpenConfirmationPopup = (userId: string, is:any) => {
    setUserToDelete(userId);
    // alert(45);
    setShowConfirmationPopup(is);
  };

  const handleCloseConfirmationPopup = () => {
    setUserToDelete(null);
    setShowConfirmationPopup(false);
  };

  // ... (existing code)






  interface Course {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isactive: boolean;
    avatar: string;
    paymentvalidationId: string;
  }
  const [totalAllData, settotalAllData] = useState(0);
  const [activedata, setactivedata] = useState(0);
  const [deactivedata, setdeactivedata] = useState(0);
  const [totalRows, settotalRows] = useState(0);
  const [AllUsers, setAllUsers] = useState<Course[]>([]);
  const [GetCourseid, setGetCourseid] = useState<Course[]>([]);
  const [activeButton, setActiveButton] = useState("All");
  const router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : sv;
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    if (role === "USER") {
      router.push("/dashboard");
    }
  } else {
    console.log("role not found");
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const [listViewActive, setListViewActive] = useState(true);
  const [gridViewActive, setGridViewActive] = useState(false);
  const [All, setAll] = useState(true);
  const [Activeuser, setActiveuser] = useState(false);
  const [Deactive, setDeactive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handlesearch = (search: string) => {
    setSearchQuery(search);
  };

  const handleListViewClick = () => {
    setListViewActive(true);
    setGridViewActive(false);
  };

  const handleGridViewClick = () => {
    setListViewActive(false);
    setGridViewActive(true);
  };

  const get_course = async (buttonName: any) => {
    // adminItems.splice(0, adminItems.length);
    var res: any = [];
    if (buttonName == "Deactive") {
      setActiveuser(false);
      setAll(false);
      setDeactive(true);
    } else if (buttonName == "Active") {
      setActiveuser(true);
      setAll(false);
      setDeactive(false);
    } else {
      setAll(true);
      setActiveuser(false);
      setDeactive(false);
    }
    res = await admin_get_users(PerPageRecord, PageNumber, searchQuery);
    if (res.status == 200) {
      var data = res.data;
      console.log(data);
      if (buttonName == "Deactive") {
        settotalAllData(data.deActivecountAll);
      }
      if (buttonName == "Active") {
        settotalAllData(data.ActivecountAll);
      }
      if (buttonName == "All") {
        settotalAllData(data.userscountAll);
      }
      settotalRows(data.totalRows);
      setAllUsers(data.rows);
      if (data.rows[0]) {
        setGetCourseid(data.rows[0].id);
      }
    } else {
      // if (
      //     res.response.status == 401 ||
      //     res.response.statusText == "Unauthorized"
      // ) {
      //     // localStorage.clear();
      //     // router.push('/signin')
      // }
    }
  };
  useEffect(() => {
    if (All === true) {
      get_course("All");
    }
    if (Activeuser === true) {
      get_course("Active");
    }
    if (Deactive === true) {
      get_course("Deactive");
    }
  }, [searchQuery, PerPageRecord]);
  console.log(AllUsers);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    get_course(buttonName);
  };

  const active1 =
    "btn !btn-white w-full lg:w-fit text-primary mb-8 ml-2 mr-2 text-sm font-medium pt-0 pb-0 btn-height-rem";

  const adminItems = React.useMemo(() => {
    const items = [];

    for (const course of AllUsers) {
      const {
        id,
        firstName,
        lastName,
        email,
        isactive,
        avatar,
        paymentvalidationId,
      } = course;
      if (Activeuser === true) {
        if (isactive === true) {
          items.push({
            id,
            firstName,
            lastName,
            imageUrl: "/images/../logo.png",
            avatar,
            email,
            isactive,
            paymentvalidationId,
          });
        }
      }
      if (Deactive === true) {
        if (isactive === false) {
          items.push({
            id,
            firstName,
            lastName,
            imageUrl: "/images/../logo.png",
            avatar,
            email,
            isactive,
            paymentvalidationId,
          });
        }
      }
      if (All === true) {
        items.push({
          id,
          firstName,
          lastName,
          imageUrl: "/images/../logo.png",
          avatar,
          email,
          isactive,
          paymentvalidationId,
        });
      }
    }

    return items;
  }, [AllUsers, activeButton]);

  console.log(adminItems);
  const [itemsToShow, setItemsToShow] = useState(10);
  const itemsToLoad = 10;
  const handleScroll = () => {
    // alert(4);
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight - (scrollTop + clientHeight) < 10) {
      setItemsToShow((prevItems) => prevItems + itemsToLoad);
      PerPageRecord = PerPageRecord + 10;
      // alert(41);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handelstatus = async (id: string, uisActive: boolean) => {
    const res = await admin_update_users(id, uisActive);
    console.log(res);
    if (All === true) {
      get_course("All");
    }
    if (Activeuser === true) {
      get_course("Active");
    }
    if (Deactive === true) {
      get_course("Deactive");
    }
  };
  const handelpaymentstatus = async (id: string, uisActive: boolean) => {
    const res = await admin_update_users_payment(id, uisActive);
    console.log(res);
    if (All === true) {
      get_course("All");
    }
    if (Activeuser === true) {
      get_course("Active");
    }
    if (Deactive === true) {
      get_course("Deactive");
    }
  };

//   const handeldelete = async (id: any) => {
//     const res = await admin_delete_user(id);
//     console.log(res)
//     if (All === true) {
//       get_course("All");
//     }
//     if (Activeuser === true) {
//       get_course("Active");
//     }
//     if (Deactive === true) {
//       get_course("Deactive");
//     }
//   }

//  const handeldelete = async (id: string | null) => {
//    if (id) {
//      // Perform delete operation
//      handleOpenConfirmationPopup(id);
//      console.log(`Deleting user with ID: ${id}`);
//    }
//    handleCloseConfirmationPopup();
//  };
const handeldelete = async (id: string | null) => {
  if (id) {
    // Perform delete operation
     const res = await admin_delete_user(id);
    console.log(res)
    if (All === true) {
      get_course("All");
    }
    if (Activeuser === true) {
      get_course("Active");
    }
    if (Deactive === true) {
      get_course("Deactive");
    }
    setUserToDelete(id); // Set the user ID to delete
    handleCloseConfirmationPopup(); // Open the confirmation popup
  }
};
  return (
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className=''>
        <div className='gap-8 col-span-3'>
          <div className='p-8 bg-primary flex flex-col admin2_banner'>
            <h1 className='text-4xl text-white font-semibold Admin2_title'>
              Hantera dina användare
            </h1>
            <div className='admin2_nav_button'>
              <button
                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${
                  activeButton === "All" ? `${active1}` : ""
                }`}
                onClick={() => handleClick("All")}>
                Allt
              </button>
              <button
                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${
                  activeButton === "Active" ? `${active1}` : ""
                }`}
                onClick={() => handleClick("Active")}>
                Aktiva
              </button>
              <button
                className={`btn bg-[#ffffff24] w-full lg:w-fit mb-8 ml-2 mr-2 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem  ${
                  activeButton === "Deactive" ? `${active1}` : ""
                }`}
                onClick={() => handleClick("Deactive")}>
                Inaktiverat
              </button>
            </div>
          </div>
          <div className='p-8'>
            <div className='p-8 bg-base-100 rounded-[24px] admin2_list_wrap'>
              <div className='admin2_content_header flex justify-between items-center  mb-6'>
                <div className='admin2_content_title form-text-color font-bold text-lg'>
                  <h2>
                    <span>{totalAllData} </span>
                    {activeButton} Användare
                  </h2>
                </div>
                <div className='form-control'>
                  <div className='relative'>
                    <div className='bg-base-100 w-full flex items-center rounded-corner justify-between'>
                      <input
                        type='text'
                        placeholder='Try to find...'
                        className='input admin-outline-none bg-base-200 w-[17.9rem] mr-4'
                        value={searchQuery}
                        onChange={(e) => handlesearch(e.target.value)}
                      />
                      <div className='search_svg rounded-full flex item-center justify-center ml-[-5vw]'>
                        <Image
                          src='/images/Adminimg/search-normal.svg'
                          width={20}
                          height={20}
                          alt='avatar'
                          className='rounded-corner'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-base-200 p-1 px-4 rounded-[24px]'>
                <div>
                  {listViewActive &&
                    adminItems.slice(0, itemsToShow).map((item, index) => (
                      <div
                        className='admin_list flex justify-between items-center bg-white my-4 rounded-[26px] p-3'
                        key={index}>
                        <div className='admin_list_content flex gap-4 items-center'>
                          <div className='admin_list_img overflow-hidden rounded-[16px]'>
                            {item.avatar == null ? (
                              <img
                                src={item.imageUrl}
                                alt='Admin Image'
                                width='50'
                                height='50'
                              />
                            ) : (
                              <img
                                src={"/" + item.avatar}
                                alt='Admin Image'
                                width='50'
                                height='50'
                              />
                            )}
                          </div>
                          <div className='admin_list_detail flex flex-col gap-2'>
                            <div className='flex items-center gap-4'>
                              <h4 className='text-base form-text-color font-semibold capitalize'>
                                {item.firstName} {item.lastName}
                              </h4>
                              {item.paymentvalidationId == null ? (
                                <div className='flex gap-1 items-center'>
                                  <img
                                    className='w-[1.5vw]'
                                    src='/images/../payment2.svg'
                                  />
                                  <p className='text-[0.83vw] font-semibold text-subtitle'>
                                    Betalning behandlas
                                  </p>
                                </div>
                              ) : (
                                <div className='flex gap-1 items-center'>
                                  <img
                                    className='w-[1.5vw]'
                                    src='/images/../payment.svg'
                                  />
                                  <p className='text-[0.83vw] font-semibold text-primary'>
                                    Betalning gjord
                                  </p>
                                </div>
                              )}
                            </div>
                            <p className='text-[0.83vw] font-semibold text-subtitle'>
                              {item.email}
                            </p>
                          </div>
                        </div>
                        <div className='btn-active-deactive flex items-center gap-3'>
                          {item.isactive === true ? (
                            <button
                              onClick={() => handelstatus(item.id, false)}
                              title='Avaktivera'
                              className='btn border-none mt bg-red-500 font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'>
                              {/* Avaktivera */}
                              <img src='./warning2.png' className='w-[2.2vw]' />
                            </button>
                          ) : (
                            <button
                              onClick={() => handelstatus(item.id, true)}
                              title='Aktivera'
                              className='btn border-none mt bg-primary font-medium text-white py-[0.4vw] px-[0.9vw] !pr-[0.6vw] lg:w-auto text-[1vw] rounded-[0.4rem]'>
                              <img src='./check2.png' className='w-[2.2vw]' />
                              {/* Aktivera */}
                            </button>
                          )}
                          {item.paymentvalidationId ? (
                            <button
                              title='Säga upp'
                              onClick={() =>
                                handelpaymentstatus(item.id, false)
                              }
                              className='btn border-none mt bg-red-500 font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'>
                              <img
                                src='./unsubscribe.png'
                                className='w-[2vw]'
                              />
                            </button>
                          ) : (
                            <button
                              onClick={() => handelpaymentstatus(item.id, true)}
                              title='Prenumerera'
                              className='btn border-none mt bg-primary font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'>
                              <img src='./subscribe.png' className='w-[2vw]' />
                            </button>
                          )}
                          <button
                            onClick={() =>
                              handleOpenConfirmationPopup(item.id, true)
                            }
                            className='btn border-none mt bg-red-500 font-medium text-white py-[0.4vw] px-[0.9vw] lg:w-auto text-[1vw] rounded-[0.4rem]'>
                            <img src='./delete.png' className='w-[2vw]' />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                {adminItems.length > itemsToShow && (
                  <div className='mt-4 text-center'>
                    <button
                      className='btn btn-primary'
                      onClick={() =>
                        setItemsToShow((prevItems) => prevItems + itemsToLoad)
                      }>
                      Läser in....
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... (existing code) */}
      {showConfirmationPopup && (
        <ConfirmationPopup
          onConfirm={() => handeldelete(userToDelete)}
          onCancel={handleCloseConfirmationPopup}
        />
      )}
    </Admin_layout>
  );
}
