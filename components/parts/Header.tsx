import { Spin as Hamburger } from "hamburger-react"
import en from "@/locales/en"
import sv from "@/locales/sv"
import ContractForm from "../ContractForm"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { headerData } from "@/locales/en/header"

type Props = {
  openSidebar: boolean
  setOpenSidebar: (value: boolean) => void
}

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const [openMenu, setOpenMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const router = useRouter()
  const { locale, pathname } = router
  const t = locale === "en" ? en : sv

  const setDefaultLangToSV = () => {
    router.push(router.pathname, router.asPath, { locale: "sv" })
  }

  useEffect(() => {
    if (pathname === "/") {
      setDefaultLangToSV()
    }
  }, [pathname])

  const changeLanguage = (e: { target: { value: string } }) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  const getButtonTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Starta Gratis Provperiod"
      case "/butiker":
        return "Få din butik"
      case "/annonser":
        return "Få dina annonser"
      default:
        return "Starta Gratis Provperiod"
    }
  }

  const excludedPaths = ["/annonser", "/", "/butiker"]

  const menuRef = useRef<HTMLLIElement | null>(null)

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) // Ensure event.target is not inside menuRef
    ) {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-base-100 h-header-height fixed top-0 left-0 right-0 z-20 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <div className="flex items-center justify-start gap-2">
            <Image
              className="h-[39px] md:h-[53px] w-[150.86px] md:w-[198.86px] max-w-full"
              src="/checkified_logo.svg"
              alt="checkified"
              height={53}
              width={198.86}
              priority
            />
          </div>
        </Link>

        <nav
          className={`bg-base-100 absolute top-header-height ${
            openSidebar ? "left-0" : "left-[150%]"
          } lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row items-center shadow-lg 
          lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <Link className="btn btn-link" href="/utbildningar">
                {t.headerData.university}
              </Link>
            </li>

            <li ref={menuRef}>
              <label className="btn btn-link" onClick={toggleMenu}>
                {t.headerData.resources}
                <MdOutlineKeyboardArrowDown
                  size={26}
                  className={`ml-1 transform ${
                    openMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
              </label>
              {/* MegaMenu */}
              <div
                className={`absolute ${
                  openMenu ? "top-[100px] block" : "top-[90px] hidden"
                } transform -translate-x-1/2 left-1/2 shadow-lg p-4 md:p-6 lg:p-8 z-10 md:h-auto lg:h-auto w-11/12 md:w-5/6 lg:w-11/12 xl:w-4/6 3xl:w-1/2 rounded-[30px] 
  gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${
    openMenu ? "h-[400px] p-6 shadow-lg" : "h-0 p-0 hidden"
  }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-[22px]">
                  {t.headerData.megaMenuData.map((data, index) => (
                    <Link key={data.id} href={data.link}>
                      <div
                        className={`flex gap-2 items-center hover:bg-base-200 p-2 rounded-lg ${
                          index === t.headerData.megaMenuData.length - 1
                            ? "order-first"
                            : ""
                        }`}
                        style={{
                          maxWidth: "339px",
                          height: "58px",
                          padding: "10px 6px",
                        }}
                      >
                        {/*Menu item icon */}
                        <div className="p-2 rounded-lg shadow-md flex-shrink-0">
                          <Image
                            src={data.imageUrl}
                            alt="Mega menu icon"
                            className="object-contain"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                        {/* Separator */}
                        <Image
                          src="/images/menu-separator.svg"
                          height={0}
                          width={3}
                          alt="separator"
                          className="flex-shrink-0"
                        />
                        <div className="menu-content w-full">
                          <h2
                            className="text-sm font-poppins font-semibold text-left truncate"
                            style={{ lineHeight: "1.2" }}
                          >
                            {data.title}
                          </h2>
                          <p
                            className="text-xs font-poppins text-left text-gray-600 truncate"
                            style={{ lineHeight: "1.1" }}
                          >
                            {data.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link className="btn btn-link" href="/butiker">
                {t.headerData.pricing}
              </Link>
            </li>
          </ul>
        </nav>

        <div
          data-theme="light"
          className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${
            showModal ? "flex" : "hidden"
          }`}
          onClick={closeModal}
        >
          <ContractForm onClose={closeModal} />
        </div>

        {/* CTA Button */}
        <div className="hidden mt-2 mb-5 lg:mt-8 lg:flex items-center justify-center">
          <button
            onClick={() => {
              if (!excludedPaths.includes(pathname)) {
                openModal() // Open modal for all paths except "/annonser", "/" and "/butiker/"
              } else {
                window.open("https://buy.stripe.com/3cscO09iSdoBgVOeUZ")
              }
            }}
            className="text-[#fff] bg-[#225AEA] font-jakarta h-full px-6 py-3 rounded-[7px] shadow-inner button-shadow"
            style={{
              boxShadow: `
            inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
            inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)`,
            }}
          >
            <p className="text-base font-semibold font-jakarta">
              {getButtonTitle(pathname)}
            </p>
          </button>
        </div>

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
  )
}
