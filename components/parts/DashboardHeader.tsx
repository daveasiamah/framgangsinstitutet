import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";
import Titleh6 from "@/components/parts/Titleh6";
import { useAppContext } from "../AppContext";
import { signOut } from "next-auth/react"
import { get_notification, del_notification, seen_notification, get_user } from "@/service/Apis/api";



type Props = {
};

type ContentItem = {
  id: string; // Change the type of id as per your data structure
  content: string;
  // Other properties as needed
};

export default function Header({ }: Props) {
  const router = useRouter();

  const { locale } = router;

  const get_check = async () => {
    const res : any = await get_user(); 
    if (!res.data.paymentvalidationId && res.data.role == 'USER') {
      router.push("/coursecheckout");
    }
  }
  useEffect(() => {
    get_check()
  }, []);
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("paymentvalidationId");
    // console.log("role found :- " + role);
    if (role === 'null') {
      // router.push("/coursecheckout");
    } 
  }
  if (typeof window !== "undefined") {
    const role = localStorage.getItem("role");
    console.log("role found :- " + role);
    if (role === "ADMIN") {
      router.push("/admin_dashboard");
    }
    if(role === null){
      router.push("/signin");
    }
  } else {
    console.log("role not found");
  }
  const { firstName, lastName, avatar, blue_Title } = useAppContext();
  console.log(blue_Title);
  //const [pageTitle, setPageTitle] = useState("");
  const [blackpageTitle, setBlackPageTitle] = useState("");
  const [openNotificationMenu, setOpenNotificationMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorage = window.localStorage;
      const blackpageTitle = localStorage.getItem("black_Title");
      setBlackPageTitle(blackpageTitle || "");
    }
  }, []);


  const [openMenu, setOpenMenu] = useState(false);
  const [isload, setisload] = useState(false);


  const t = locale === "en" ? en : sv;

  useEffect(() => {
    setOpenMenu(false);

  }, []);


  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleNotificationMenu = () => {
    setOpenNotificationMenu(!openNotificationMenu);
  };

  const logout = () => {
    signOut();
    localStorage.clear();
    router.push("/signin");
  };
  const [content, setcontent] = useState<ContentItem[]>([]); 
  useEffect(() => {
    const course_notification_api = async () => {
      try {
        const res: any = await get_notification();
        if (res.data) {
          setcontent(res.data.rows);
        }
      }
      catch (error) {
        console.log('error', error);
      }
    };
    course_notification_api();
    setisload(false);
  }, [isload]);
  console.log(content);
  const [itemsToShow, setItemsToShow] = useState(3);
  const itemsToLoad = 1;
  const handleScroll = () => {
    setItemsToShow((prevItems) => prevItems + itemsToLoad);
  };
  useEffect(() => {
    window.onload = () => {
      const scroll = document.querySelector('#scroll');
      if (scroll) {
        scroll.addEventListener("scroll", handleScroll);
        return () => {
          scroll.removeEventListener("scroll", handleScroll);
        };
      }
    };
  }, []);
  const handledeletenoti = async () => {
    try {
      const res: any = await del_notification();
      if (res) {
        console.log(res);
        setisload(true);
      }
    }
    catch (error) {
      console.log('error', error);
    }
  }
  const handleseen = async (id:string) => {
    try {
      const res: any = await seen_notification(id);
      if (res) {
        console.log(res);
        setisload(true);
      }
    }
    catch (error) {
      console.log('error', error);
    }
  }
  return (
    <header className='bg-base-100 h-header-100 fixed top-0 left-0 right-0 z-20 flex justify-between items-center'>
      <div className='mx-8 flex justify-between items-center w-full'>
        <div className='flex items-center justify-start gap-2'>
          <Link className='' href='/dashboard'>
            <div className="flex items-center justify-start gap-2">
              <div className='bg-primary rounded-full w-[50px] h-[50px] flex item-center justify-center'>
                <Image
                  className='svg-white object-contain p-2'
                  src='/logo.svg'
                  alt='checkified'
                  height={44}
                  width={44}
                  priority
                />
              </div>

              <p className='font-bold text-1xl'>Checkified</p>
            </div>
          </Link>
          {/* <h2 className='font-extrabold text-primary text-26-xl font-extrabold-mont ml-24'>
              {pageTitle}
              </h2> */}
          <Titleh6
            blackText={blackpageTitle}
            blueText={blue_Title}
            className='font-extrabold text-26-xl font-extrabold-mont ml-5-5'
          />
        </div>

        <nav
          className={`bg-base-100 absolute top-header-height lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row justify-between items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}>
          <ul className='flex flex-col lg:flex-row gap-2 lg:gap-8 h-full'>
            <li>
              <button
                className='btn btn-link rounded-full bg-base-100 h-14 cricle-shadow'
                onClick={toggleNotificationMenu}
              >
                
                
                {content && content.length > 0 ? (
                  <Image
                  className='object-contain'
                  src='/icons/header/notification-bing.svg'
                  alt='checkified'
                  height={28}
                  width={28}
                  priority
                  />
                  ) : (
                        <Image
                        className='object-contain'
                        src='/icons/header/noti.svg'
                        alt='checkified'
                        height={28}
                        width={28}
                        priority
                        />
                      )}
              </button>
              {openNotificationMenu && (
                <div className='notification-menu'>
                  <div
                    className={`absolute right-[20rem] mt-4 bg-white rounded-[28px] shadow-lg overflow-hidden z-20 px-5`}
                    style={{ width: "25rem" }}
                  >
                    <div className="flex items-center justify-between pt-5">
                      <a
                        href="#"
                        className="block text-black text-left font-600 py-2"
                      >
                        Notifications
                      </a>
                      <button
                        className="block text-primary  text-left font-300 py-2"
                        onClick={handledeletenoti}
                      >
                        Delete all
                      </button>
                    </div>

                    <div id="scroll" className="py-2 h-[14vw] overflow-y-scroll overflow-x-hidden">
                      {content && content.length > 0 ? (
                        content.slice(0, itemsToShow).map((item, index) => (
                          <a
                            onClick={()=>handleseen(item.id)}
                            className={`flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2`}
                            key={index} // Add a unique key for each item in the list
                          >
                            <img
                              className="h-8 w-8 rounded-full object-cover mx-1"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                              alt="avatar"
                            />
                            <p className="text-gray-600 text-sm mx-2">{item.content}</p>
                          </a>
                        ))
                      ) : (
                        <p>No Updates</p>
                      )}
                      {content.length > itemsToShow && (
                        <div className="mt-4 text-center">
                          <button
                            className="btn btn-primary"
                          >
                            Loading....
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              )}
            </li>

            <li>
              <label
                className='btn btn-link rounded-full bg-base-100 h-14 prfoilebtn-shadow'
                onClick={toggleMenu}>
                <div className='flex items-center justify-start gap-2'>
                  <Image
                    className='svg-primary object-contain'
                    src={typeof avatar === 'string' ? avatar : '/logo.svg'} // Check if 'avatar' is a string
                    alt='checkified'
                    height={35}
                    width={35}
                    priority
                  />
                  {firstName == 'null' ? '' : firstName} {lastName == 'null' ? '' : lastName}
                  <MdOutlineKeyboardArrowDown
                    size={26}
                    className={`ml-1 transform ${openMenu ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </div>
              </label>
              <div
                className={`lg:absolute lg:w-[18%] ${openMenu
                  ? "lg:top-[90px] lg:opacity-100"
                  : "lg:top-[90px] lg:opacity-0"
                  } lg:transform lg:translate-x-1/4 lg:left-3/4 shadow-lg lg:p-7 z-10 flex flex-col lg:flex-row lg:h-auto rounded-[28px] gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${openMenu
                    ? "h-[400px] p-8 shadow-none border opacity-100"
                    : "h-0 p-0 opacity-0"
                  } `}>
                <div className=''>
                  <Image
                    src='/images/profile-bg.png'
                    alt='Video Placeholder'
                    width={230}
                    height={150}
                    priority
                  />
                  <div className='profile-details relative -mt-8'>
                    <div className='profile-pic rounded-full flex justify-center '>
                      <Image
                        className='object-contain border-2 border-white-500/100 rounded-full profile-dropdown-icon'
                        src={typeof avatar === 'string' ? avatar : '/images/profilepic.png'} // Check if 'avatar' is a string
                        alt='checkified'
                        height={70}
                        width={70}
                        priority
                      />

                    </div>

                    <h2 className='font-semibold text-base mt-4 capitalize'>{firstName == 'null' ? '' : firstName} {lastName == 'null' ? '' : lastName}</h2>
                  </div>
                  <hr className='my-5 hr-height' />

                  <input type='checkbox' id='switch' />
                  <div className='grid grid-cols-1 lg:grid-cols-1 toggle_switch'>


                    <Link key='' href=''>
                      <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                        <div className='list-icon bg-base-100 p-1 rounded-lg'>
                          <Image
                            src='/icons/header/profile.png'
                            alt='Mega menu icon'
                            className='object-contain'
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className='menu-content'>
                          <Link href='/profile_setting_pop'>
                            <h2 className='font-medium text-xs text-707BA0 text-left'>
                              Konto
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </Link>
                    <Link key='' href=''>
                      <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                        <div className='list-icon bg-base-100 p-1 rounded-lg'>
                          <Image
                            src='/icons/header/info-circle.png'
                            alt='Mega menu icon'
                            className='object-contain'
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className='menu-content'>
                          <h2 className='font-medium text-xs text-707BA0 text-left'>
                            Hjälpcenter
                          </h2>
                        </div>
                      </div>
                    </Link>
                    <Link key='' href='' onClick={logout}>
                      <div className='mega-menu-list items-center flex gap-3 items-start rounded-lg'>
                        <div className='list-icon bg-base-100 p-1 rounded-lg'>
                          <Image
                            src='/icons/header/logout.png'
                            alt='Mega menu icon'
                            className='object-contain'
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className='menu-content'>
                          <h2
                            className='font-medium text-xs text-left text-red-600'
                            onClick={logout} >
                            Logga ut
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <button className='lg:hidden rounded-md text-primary bg-base-200'>
          <Hamburger
            size={26}
          // onToggle={(toggled) =>
          //   toggled ? setOpenSidebar(true) : setOpenSidebar(false)
          // }
          />
        </button>
      </div>
    </header>
  );
}
