import React, { useState, createContext } from 'react';

//Create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState();

  const handleClose = ()=> {
    setIsOpen(false);
  };

  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;