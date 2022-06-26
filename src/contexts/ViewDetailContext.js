import { createContext, useState } from "react";

export const ViewDetailContext = createContext();

export function ViewDetailProvider({ children }) {
  const [viewDetail, setViewDetail] = useState(false);

  const toggleViewDetail = () => {
    setViewDetail(true);
  };
  const toggleNotViewDetail = () => {
    setViewDetail(false);
  };
  const value = {
    viewDetail,
    toggleViewDetail,
    toggleNotViewDetail,
  };
  return (
    <ViewDetailContext.Provider value={value}>
      {children}
    </ViewDetailContext.Provider>
  );
}
