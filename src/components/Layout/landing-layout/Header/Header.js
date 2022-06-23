import React from "react";
import { ReactComponent as IconLocation } from "@assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail.svg";
import { ReactComponent as UCARSLogo } from "@assets/icons/UCARSLogo.svg";
import "./Header.scss";
function Header() {
  const ContactInfo = () => {
    const PRIMARY_PHONE_NUMBER = "+65 8808 7905";
    const SECONDARY_PHONE_NUMBER = "+7 (700) 51 51 518";
    return (
      <div className="wrapper-contact">
        <div className="wrapper-contact__items-info">
          <div className="wrapper-contact__location">
            <i>
              <IconLocation />
            </i>
            <p>71 Ayer Rajah Crescent, #06-14, Singapore 139951</p>
          </div>
          <p className="wrapper-contact__divider">&nbsp;</p>
          <div className="wrapper-contact__email">
            <i>
              <MailIcon />
            </i>
            <p>
              Email us at:
              <br />
              hello@carbuyer.com.sg
            </p>
          </div>
        </div>
        <div className="wrapper-contact__telephone">
          <i>
            <PhoneIcon />
          </i>
          <p>
            {PRIMARY_PHONE_NUMBER}
            <br />
            {SECONDARY_PHONE_NUMBER}
          </p>
        </div>
      </div>
    );
  };
  const Navbar = () => {
    const navLists = ["New Cars", "Used Cars", "Reviews", "News"];
    return (
      <div className="wrapper-navbar">
        <i>
          <UCARSLogo />
        </i>
        <ul className="wrapper-navbar__nav-items">
          {navLists.map((item, index) => (
            <li key={index}>
              <p href="#1">{item}</p>
            </li>
          ))}
        </ul>
        <button>Login</button>
      </div>
    );
  };
  return (
    <div className="wrapper-header">
      <ContactInfo />
      <Navbar />
    </div>
  );
}

export default Header;
