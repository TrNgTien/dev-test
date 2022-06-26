import React from "react";
import Header from "./Header/Header.js";
import SideBar from "./SideBar/SideBar.js";
import "./CarBrandingLayout.scss";
import AddBrand from "@pages/carbrand-page/pop-up/AddBrand.js";
function CarBrandingLayout(props) {
  const { children } = props;
  return (
    <div className="wrapper-car-branding">
      <SideBar />
      <AddBrand />
      <div className="wrapper-car-branding__right">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default CarBrandingLayout;
