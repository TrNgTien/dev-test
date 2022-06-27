import React from "react";
import { ReactComponent as InfoIcon } from "@assets/icons/info.svg";
import { ReactComponent as NotiIcon } from "@assets/icons/noti.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import CarType1 from "@assets/images/car-type-1.png";
import "./Header.scss";
function Header() {
  return (
    <div className="wrapper-header">
      <div className="wrapper-header__user-operations">
        <InfoIcon />
        <NotiIcon />
        <img
          src={CarType1}
          alt="avatar"
        />
        <p>Admin</p>
        <ArrowDown />
      </div>
    </div>
  );
}

export default Header;
