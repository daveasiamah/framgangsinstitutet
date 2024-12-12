import { Spin as Hamburger } from "hamburger-react"
import en from "@/locales/en"
import sv from "@/locales/sv"
import ContractForm from "../ContractForm"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

type Props = {
  openSidebar: boolean
  setOpenSidebar: (value: boolean) => void
}

const AuthButton = ({
  changeLanguage,
  locale,
  t,
  className,
}: {
  changeLanguage: any
  locale: any
  t: any
  className: string
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("id")
    if (idFromLocalStorage) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div
      className={`items-center justify-center lg:justify-end gap-2 mt-8 lg:mt-0 ${className}`}
    >
      <div
        data-theme="light"
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${
          showModal ? "flex" : "hidden"
        }`}
        onClick={closeModal}
      >
        <ContractForm onClose={closeModal} />
      </div>
      {!isLoggedIn && (
        <>
          {/* <Link className="btn btn-link" href="/signin">
            {t.headerData.login}
          </Link> */}
          <div
            className="btn btn-primary btn-shadow"
            onClick={() => setShowModal(true)}
          >
            {t.headerData.getStarted}
          </div>
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
  )
}

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const [openMenu, setOpenMenu] = useState(false)
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
      <div className="container mx-auto flex justify-between items-center">
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
          } lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <Link className="btn btn-link" href="/university">
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
              <div
                className={`lg:absolute lg:w-[50.5%] ${
                  openMenu ? "lg:top-[100px] block" : "lg:top-[90px] hidden"
                } lg:transform lg:-translate-x-1/2 lg:left-1/2 shadow-lg lg:p-8 z-10 flex flex-col lg:flex-row lg:h-auto rounded-lg gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${
                  openMenu
                    ? "h-[400px] p-8 shadow-none border block"
                    : "h-0 p-0 hidden"
                }`}
              >
                <div className="flex flex-wrap gap-4">
                  {t.headerData.megaMenuData.map((data) => (
                    <Link key={data.id} href={data.link}>
                      <div className="mega-menu-list flex gap-6 hover:bg-base-200 p-2 rounded-lg">
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
              </div>
            </li>

            <li>
              <Link className="btn btn-link" href="/butiker">
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
  )
}
