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
  const { locale, pathname, query } = router
  const t = locale === "en" ? en : sv

  const isSlugPage = !!query.slug

  const setDefaultLangToSV = () => {
    router.push(router.pathname, router.asPath, { locale: "sv" })
  }

  useEffect(() => {
    if (pathname === "/") {
      setDefaultLangToSV()
    }
  }, [pathname])

  const getButtonTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Ansök till Mentorskap"
      case "/butiker":
        return "Få din butik"
      case "/annonser":
        return "Få dina annonser"
      case "/thank-you":
        return "Ansök till Mentorskap"
      default:
        return "Ansök till Mentorskap"
    }
  }

  // Excluded paths for the CTA button
  const excludedPaths = ["/annonser", "checkified.se/", "/butiker"]

  const menuRef = useRef<HTMLLIElement | null>(null)

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    <header className="bg-base-100 h-header-height fixed top-0 left-0 right-0 z-20 flex items-center">
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

        {/* Navigation */}
        <nav
          className={`bg-base-100 absolute top-header-height lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row items-center shadow-lg 
            lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen ${
              openSidebar ? "left-0" : "left-[150%]"
            } ${pathname === "/utbildningar" ? "mx-auto" : ""}`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <Link
                className="btn btn-link"
                href="/om-oss"
                onClick={() => setOpenSidebar(false)}
              >
                Om oss
              </Link>
            </li>

            <li ref={menuRef} onMouseEnter={() => setOpenMenu(true)}>
              <label className="btn btn-link" onClick={toggleMenu}>
                Utbildning
                <MdOutlineKeyboardArrowDown
                  size={26}
                  className={`ml-1 transform transition-transform duration-300 ease-in-out ${
                    openMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
              </label>
              {/* MegaMenu */}
              <div
                onMouseEnter={() => setOpenMenu(true)}
                onMouseLeave={() => setOpenMenu(false)}
                className={`absolute transform -translate-x-1/2 left-1/2 shadow-lg p-4 md:p-6 lg:p-8 z-10 md:h-auto lg:h-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-5/12 3xl:w-2/5 max-w-[660px] rounded-[20px] 
                gap-[14px] bg-base-100 overflow-auto transition-all duration-300 ease-in-out ${
                  openMenu
                    ? "opacity-100 visible top-[70px] translate-y-0 max-h-[320px] lg:max-h-[420px] h-auto p-6 shadow-lg"
                    : "opacity-0 invisible top-[70px] -translate-y-2 max-h-0 h-0 p-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-[14px] rounded-lg w-full">
                  <Link
                    href="/dropshipping"
                    className="w-full border-[0.2px] border-solid border-[#9b9b9b40] shadow-[0px_0.5px_15px_0.5px_#9b9b9b40] rounded-lg"
                  >
                    <div
                      className="p-2 flex gap-4 rounded-lg transition-shadow duration-200 ease-in-out"
                      style={{
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 1px 4px 0 rgba(0, 0, 0, 0.15)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 1px 4px 0 rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <Image
                        src="/images/home/graphics/teacher.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={30}
                        height={30}
                        priority
                      />
                      <div className="flex flex-col gap-2">
                        <h2
                          className="text-sm font-poppins font-semibold text-left break-words"
                          style={{ lineHeight: "1.2" }}
                        >
                          Dropshipping
                        </h2>
                        <p
                          className="text-sm font-poppins text-left text-gray-600 break-words"
                          style={{ lineHeight: "1.1" }}
                        >
                          Allt du behöver lära dig för lyckas med Dropshipping
                          2026
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/e-handel"
                    className="w-full border-[0.2px] border-solid border-[#9b9b9b40] shadow-[0px_0.5px_15px_0.5px_#9b9b9b40] rounded-xl"
                  >
                    <div
                      className="p-2 flex gap-4 rounded-lg transition-shadow duration-200 ease-in-out"
                      style={{
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 1px 4px 0 rgba(0, 0, 0, 0.15)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 1px 4px 0 rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <Image
                        src="/images/home/graphics/note-2.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={30}
                        height={30}
                        priority
                      />
                      <div className="flex flex-col gap-2">
                        <h2
                          className="text-sm font-poppins font-semibold text-left break-words"
                          style={{ lineHeight: "1.2" }}
                        >
                          E-handel
                        </h2>
                        <p
                          className="text-sm font-poppins text-left text-gray-600 break-words"
                          style={{ lineHeight: "1.1" }}
                        >
                          Lär dig driva e-handel lönsamt 2026: Online utbildning
                          på distans
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                className="btn btn-link"
                href="/mentorskap"
                onClick={() => setOpenSidebar(false)}
              >
                Mentorskap
              </Link>
            </li>
            <li>
              <Link className="btn btn-link" href="/blogg">
                Blogg
              </Link>
            </li>
          </ul>
        </nav>
        {/* CTA Button: Only render when pathname is not "/utbildningar", "/ebocker", or a [slug] dynamic page */}
        <div className="hidden mt-2 mb-5 lg:mt-8 lg:flex items-center justify-center">
          {!isSlugPage &&
          pathname !== "/utbildningar" &&
          pathname !== "/ebocker" ? (
            <button
              onClick={() => {
                if (pathname === "/") {
                  router.push("/utbildningar")
                  return
                }
                const buttonTitle = getButtonTitle(pathname)

                if (buttonTitle === "Ansök till Mentorskap") {
                  window.open(
                    "https://form.jotform.com/checkifiedse/formulr",
                    "_blank"
                  )
                } else if (!excludedPaths.includes(pathname)) {
                  openModal()
                } else {
                  window.open(
                    "https://buy.stripe.com/3cscO09iSdoBgVOeUZ",
                    "_blank"
                  )
                }
              }}
              className="text-[#fff] bg-[#225AEA] font-jakarta h-full px-6 py-3 rounded-[7px] shadow-inner button-shadow"
              style={{
                boxShadow: `
          inset 11px 1px 19.4px 0px rgba(255, 255, 255, 0.3), 
          inset -4px 0px 5.8px 0px rgba(255, 255, 255, 0.25)
        `,
              }}
            >
              <p className="text-base font-semibold font-jakarta">
                {getButtonTitle(pathname)}
              </p>
            </button>
          ) : (
            <div className="hidden mt-2 mb-5 lg:mt-8 lg:flex items-center justify-center w-40">
              {/* Empty space if needed */}
            </div>
          )}
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

      {/* Modal overlay for ContractForm */}
      <div
        data-theme="light"
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center transition ${
          showModal ? "flex" : "hidden"
        }`}
        onClick={closeModal}
      >
        <ContractForm onClose={closeModal} />
      </div>
    </header>
  )
}
