import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import ReactPlayer from "react-player";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
};

const AuthButton = ({
  changeLanguage,
  locale,
  t,
  className,
}: {
  changeLanguage: any;
  locale: any;
  t: any;
  className: string;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("id");
    if (idFromLocalStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div
      className={`items-center justify-center lg:justify-end gap-2 mt-8 lg:mt-0 ${className}`}
    >
      {!isLoggedIn && (
        <>
          <Link className="btn btn-link" href="/signin">
            {t.headerData.login}
          </Link>
          <Link className="btn btn-primary btn-shadow" href="/signup">
            {t.headerData.getStarted}
          </Link>
        </>
      )}
      {isLoggedIn && (
        <>
          <Link className="btn btn-primary btn-shadow" href="/dashboard">
            hem
          </Link>
        </>
      )}
    </div>
  );
};

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : sv;

  const setDefaultLangToSV = () => {
    router.push(router.pathname, router.asPath, { locale: "sv" });
  };

  useEffect(() => {
    return () => {
      setOpenMenu(false);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setDefaultLangToSV();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (e: { target: { value: any } }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (videoRef.current) {
      if (!openMenu) {
        // If menu is opening, play the video
        videoRef.current.pause();
        setShowThumbnail(true);
      } else {
        // If menu is closing, pause the video
        videoRef.current.pause();
        setShowThumbnail(true);
        videoRef.current.currentTime = 0;
      }
    }
  };

  // Add your video source and poster URL
  const [showThumbnail, setShowThumbnail] = useState(false);

  const videoSource =
    "https://api.checkified.se/public/uploads/courses/videos/INTRO.MP4";
  const posterURL = "/cover/1695042508_nyckeln-till-frihet.jpg";

  const handleThumbnailClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowThumbnail(false); // Hide the thumbnail when video starts playing
    }
  };

  const handleVideoPause = () => {
    setShowThumbnail(true); // Show the thumbnail when video is paused
  };

  return (
    <header className="bg-base-100 h-header-height fixed top-0 left-0 right-0 z-20 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="" href="/">
          <div className="flex items-center justify-start gap-2">
            <Image
              className="svg-primary object-contain"
              src="/logo.svg"
              alt="checkified"
              height={44}
              width={44}
              priority
            />
            <p className="font-bold font-roboto text-2xl">Checkified</p>
          </div>
        </Link>

        <nav
          className={`bg-base-100 absolute top-header-height ${
            openSidebar ? "left-0" : "left-[150%]"
          } lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row justify-between items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <Link className="btn btn-link" href="/university">
                {t.headerData.university}
              </Link>
            </li>

            <li>
              <label className="btn btn-link" onClick={toggleMenu}>
                {t.headerData.resources}
                <MdOutlineKeyboardArrowDown
                  size={26}
                  className={`ml-1 transform ${
                    openMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
              </label>
              <div
                className={`lg:absolute lg:w-[70%] ${
                  openMenu ? "lg:top-[100px] block" : "lg:top-[90px] hidden"
                } lg:transform lg:-translate-x-1/2 lg:left-1/2 shadow-lg lg:p-8 z-10 flex flex-col lg:flex-row lg:h-auto rounded-lg gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${
                  openMenu
                    ? "h-[400px] p-8 shadow-none border block"
                    : "h-0 p-0 hidden"
                } `}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {t.headerData.megaMenuData.map((data) => (
                    <Link key={data.id} href={data.link}>
                      <div className="mega-menu-list flex gap-6 items-start hover:bg-base-200 p-2 rounded-lg">
                        <div className="list-icon bg-base-200 p-2 rounded-lg">
                          <Image
                            src={data.imageUrl}
                            alt="Mega menu icon"
                            className="object-contain"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                        {/* <div className="bg-primary w-[2px] h-6" /> */}
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">
                            {data.title}
                          </h2>
                          <p className="text-sm text-left">{data.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="">
                  <h2 className="font-bold text-xl mb-4">
                    Checkified University

                  </h2>
                  {/* <Image
                    src="/images/video-placeholder.png"
                    alt="Video Placeholder"
                    width={300}
                    height={190}
                    priority
                  /> */}
                  {/* <video
                    ref={videoRef}
                    src={t.headerData.videoUrl}
                    width="350"
                    height="190"
                    autoPlay
                    muted
                    controls
                    poster="/images/video-placeholder.png"
                  />
                   */}
                  {/* <img src="/cover/1695042508_nyckeln-till-frihet.jpg" /> */}
                  <div className="relative">
                  {/* <video
                    width={350}
                    height={190}
                    controls
                    autoPlay
                    muted
                    ref={videoRef}
                    poster="/cover/1695042508_nyckeln-till-frihet.jpg"
                  >
                    <source
                      src="https://api.checkified.se/public/uploads/courses/videos/INTRO.MP4"
                      type="video/mp4"
                    />
                  </video> */}
                  <video
                    width={350}
                    height={190}
                    controls
                    autoPlay
                    muted
                    ref={videoRef}
                    poster={posterURL}
                    onPause={handleVideoPause} // Listen for the pause event
                    onEnded={handleVideoPause} // Listen for the end event (optional)
                  >
                    <source src={videoSource} type="video/mp4" />
                  </video>

                  {/* Display the thumbnail image */}
                  {showThumbnail && (
                    <div className="thumbnail" onClick={handleThumbnailClick}>
                      <img src={posterURL} alt="Video Thumbnail" />
                      <div className="cursor-pointer absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[4vw] h-[4vw] flex justify-center items-center rounded-full opacity-[70%]"><img src="/play.png" className="w-[1.25vw]"/></div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link className="btn btn-link" href="/pricing">
                {t.headerData.pricing}
              </Link>
            </li>
          </ul>
          <AuthButton
            locale={locale}
            changeLanguage={changeLanguage}
            t={t}
            className="flex lg:hidden"
          />
        </nav>

        <AuthButton
          locale={locale}
          changeLanguage={changeLanguage}
          t={t}
          className="hidden lg:flex"
        />

        <button className="lg:hidden rounded-md text-primary bg-base-200">
          <Hamburger
            size={26}
            onToggle={(toggled) =>
              toggled ? setOpenSidebar(true) : setOpenSidebar(false)
            }
          />
        </button>
      </div>
    </header>
  );
}
