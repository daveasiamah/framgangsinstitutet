"use client"
import React, { ReactNode, useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

import Header from "./parts/Header"
import Footer from "./parts/Footer"
import MetaHead from "./MetaHead"

type Props = {
  headTitle: string
  headDescription?: string
  useExactHeadTitle?: boolean
  isFullWidth?: boolean
  children: ReactNode
}

export default function Layout({
  headTitle,
  headDescription,
  useExactHeadTitle,
  isFullWidth,
  children,
}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <MetaHead
        title={headTitle}
        description={headDescription}
        exactTitle={useExactHeadTitle}
      />
      <div
        data-theme="light"
        className="flex flex-col min-h-screen overflow-hidden relative"
      >
        <Header setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        <main className="flex-grow pt-[80px] bg-base-100">
          <div className={`${isFullWidth ? "" : "container"} mx-auto isolate`}>
            {children}
          </div>
        </main>
        <button
          type="button"
          onClick={handleBackToTop}
          aria-label="Till toppen"
          className={`fixed bottom-6 right-4 z-40 inline-flex items-center gap-2 rounded-lg bg-[#225AEA] px-4 py-3 font-jakarta text-[11px] font-bold uppercase tracking-[0.05em] text-white shadow-[0_14px_30px_rgba(34,90,234,0.28)] transition-all duration-300 hover:bg-[#1B49C2] sm:bottom-8 sm:right-6 ${
            showBackToTop
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <span className="flex h-7 w-7 items-center justify-center bg-white/14">
            <ArrowUp className="h-5 w-5" />
          </span>
        </button>
        <Footer />
      </div>
    </>
  )
}
