import React, { useContext } from "react";
import Header from "./Header/Header.js";
import SideBar from "./SideBar/SideBar.js";
import "./CarBrandingLayout.scss";
import { PopUpContext } from "@contexts/PopUpContext";
import AddBrand from "@pages/carbrand-page/pop-up/AddBrand.js";
function CarBrandingLayout(props) {
  const { children } = props;
  const popUpContext = useContext(PopUpContext);
  return (
    <div className="wrapper-car-branding">
      <SideBar />
      {popUpContext?.openPopUp === true && <AddBrand />}
      <div className="wrapper-car-branding__right">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default CarBrandingLayout;
