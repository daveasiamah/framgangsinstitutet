"use client"

import { useState } from "react";
import ContractForm from "./ContractForm";

export default function ContactForm({ btnText }: { btnText: string }) {
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
      <div className="w-full mt-0 lg:mt-8">
        <button className="btn btn-primary w-full" onClick={openModal}>
          {btnText}
        </button>
      </div>
    </>
  )
}