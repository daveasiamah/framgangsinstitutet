import React, { useState } from "react";
import Title from "@/components/parts/Title";
import { CgCloseO } from 'react-icons/cg';
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="content">
        <div className="grid grid-cols-2 place-content-between">
          <Title
            blackText={"Ändra"}
            blueText={"Lösenord"}
            className="text-left text-[26px] popup_form_title"
          />
          <button className="closeButton ml-auto" onClick={handleClose}>
            <CgCloseO />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
