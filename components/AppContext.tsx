import React, { createContext, useContext, useEffect, useState } from 'react';

type AppContextType = {
  firstName: string | null;
  lastName: string | null;
  avatar:File | null;
  setFirstName: (name: string | null) => void;
  setLastName: (name: string | null) => void;
  setAvatar: (name: File | null) => void;
  blue_Title: string | null;
  setBlueTitle: (name: string | null) => void;
};

const AppContext = createContext<AppContextType>({
  firstName: null,
  lastName: null,
  avatar:null,
  blue_Title: null,
  setFirstName: () => {},
  setLastName: () => {},
  setAvatar: () => {},
  setBlueTitle: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [blue_Title, setBlueTitle] = useState<string | null>(null);

  useEffect(() => {
    // Check if we are in the browser environment before accessing localStorage
    const storedFirstName = typeof window !== 'undefined' ? localStorage.getItem("firstName") : null;
    const storedLastName = typeof window !== 'undefined' ? localStorage.getItem("lastName") : null;
    const storedAvatarString = typeof window !== 'undefined' ? localStorage.getItem("avatar") : null;
    const storedBlueTitle = typeof window !== 'undefined' ? localStorage.getItem("blue_Title") : null;
    setFirstName(storedFirstName);
    setLastName(storedLastName);
    setBlueTitle(storedBlueTitle);
    if (storedAvatarString) {
      const avatarBlob = new Blob([storedAvatarString], { type: 'image/jpeg' }); // You might need to adjust the type
      const avatarFile = new File([avatarBlob], 'avatar.jpg'); // You might need to adjust the filename
      setAvatar(avatarFile);
    }
  }, []);

  return (
    <AppContext.Provider value={{ firstName, lastName,avatar, blue_Title, setFirstName, setLastName,setAvatar,setBlueTitle }}>
      {children}
    </AppContext.Provider>
  );
}
