import { createContext, useState } from "react";

export const BrandContext = createContext();

export function BrandProvider({ children }) {
  const [viewDetail, setViewDetail] = useState(false);
  const [brandSearched, setBrandSearched] = useState("");
  const [detailBrand, setDetailBrand] = useState({});

  const toggleViewDetail = (dataDetail, imgBrand) => {
    setViewDetail(true);
    setDetailBrand({ ...dataDetail, imgBrand });
  };
  const toggleNotViewDetail = () => {
    setDetailBrand({});
    setViewDetail(false);
  };
  const searchBrand = (brandName) => {
    setBrandSearched(brandName);
  };
  const value = {
    viewDetail,
    detailBrand,
    brandSearched,
    searchBrand,
    toggleViewDetail,
    toggleNotViewDetail,
  };
  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}
