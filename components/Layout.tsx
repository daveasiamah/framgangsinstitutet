"use client";
import React, { ReactNode, useState } from "react"


import Header from "./parts/Header"
import Footer from "./parts/Footer"
import MetaHead from "./MetaHead"


type Props = {
  headTitle: string
  isFullWidth?: boolean
  children: ReactNode
}

export default function Layout({ headTitle, isFullWidth, children }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
    
      <MetaHead title={headTitle} />
      <div data-theme="light" className="overflow-hidden relative">
        <Header setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
        <main className="pt-header-height bg-base-100">
          <div className={`${isFullWidth ? "" : "container"} mx-auto isolate`}>
            
            {children}
            
          </div>
        </main>
        <Footer />
      </div>
      
    </>
  )
}
