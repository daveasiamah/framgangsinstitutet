"use client"
import React, { ReactNode, useState } from "react"

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
        <Footer />
      </div>
    </>
  )
}
