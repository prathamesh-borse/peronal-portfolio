"use client"; // Needed in Next.js App Router

import { createContext, useContext, useState } from "react";

// Create the context
const GlobalContext = createContext();

// Create the provider
export const GlobalProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ isClick, toggleNavbar }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalContext = () => useContext(GlobalContext);
