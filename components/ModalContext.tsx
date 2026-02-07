import React, { createContext, useContext, useState, ReactNode } from "react";

// Types for the modal context
interface ModalContextType {
  openContractForm: () => void;
  closeContractForm: () => void;
  isContractFormOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContractFormOpen, setIsContractFormOpen] = useState(false);

  const openContractForm = () => setIsContractFormOpen(true);
  const closeContractForm = () => setIsContractFormOpen(false);

  return (
    <ModalContext.Provider value={{ openContractForm, closeContractForm, isContractFormOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
