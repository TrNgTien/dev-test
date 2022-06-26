import { createContext, useState } from "react";

export const PopUpContext = createContext();

export function PopUpProvider({ children }) {
  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUpOn = () => {
    setOpenPopUp(true);
  };
  const togglePopUpOff = () => {
    setOpenPopUp(false);
  };
  const value = {
    openPopUp,
    togglePopUpOn,
    togglePopUpOff,
  };
  return (
    <PopUpContext.Provider value={value}>{children}</PopUpContext.Provider>
  );
}
