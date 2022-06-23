import React from "react";
import { ReactComponent as CarBuyerLogo } from "@assets/icons/CarBuyerLogo.svg";
import { ReactComponent as IconLocation } from "@assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail.svg";
import ListOptions from "./components/ListOptions";
import SocialMedia from "./components/SocialMedia";
import TermOfUse from "./components/TermOfUse";
import "./Footer.scss";

export default function Footer() {
  const PRIMARY_PHONE_NUMBER = "+65 8808 7905";
  return (
    <>
      <div className="wrapper-footer__info-items">
        <div>
          <CarBuyerLogo />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <i style={{ marginRight: "10px", width: "20px", height: "20px" }}>
              <IconLocation />
            </i>
            <p style={{ whiteSpace: "nowrap" }}>
              71 Ayer Rajah Crescent, #06-14, Singapore 139951
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <i style={{ marginRight: "10px", width: "20px", height: "20px" }}>
              <MailIcon />
            </i>
            <p>hello@carbuyer.com.sg</p>
          </div>
          <div style={{ display: "flex" }}>
            <i style={{ marginRight: "10px", width: "20px", height: "20px" }}>
              <PhoneIcon />
            </i>
            <p>{PRIMARY_PHONE_NUMBER}</p>
          </div>
        </div>
        <ListOptions />
        <SocialMedia />
      </div>
      <TermOfUse />
    </>
  );
}
