"use client"

import { useState } from "react";
import ContractForm from "./ContractForm";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const handleClick = () => {
    setShowModal(false);
  }
  return (
    <>
      {
        showModal && 
          <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center transition" onClick={handleClick}>
          <ContractForm />
        </div>
      }
      <div className="fixed bottom-10 right-10">
        <button className="flex items-center justify-center bg-primary p-4 rounded-full" onClick={openModal}>
            <svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
        </button>
      </div>
    </>
  )
}