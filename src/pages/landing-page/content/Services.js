import React, { memo } from "react";
import { ReactComponent as LocationIcon } from "@assets/icons/find-location.svg";
import Payment from "@assets/images/payment.png";
import LockImg from "@assets/images/lock.png";
import "./styles/Services.scss";
function Services() {
  return (
    <div className="wrapper-services">
      <div className="wrapper-services__title">
        <p>How it works.</p>
        <p>This is how our products works </p>
      </div>
      <div
        style={{
          backgroundColor: "#232323",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10%",
        }}
      >
        <div className="wrapper-services__items">
          <i style={{ marginRight: "10px", width: "20px", height: "20px" }}>
            <LocationIcon />
          </i>
          <p className="item-title">Find Car</p>
          <p className="item-content">
            Our cars are located at prime areas where by there won’t be problem
            with transportation
          </p>
        </div>
        <div className="wrapper-services__items">
          <img src={Payment} alt="" />
          <p className="item-title">Make payments</p>
          <p className="item-content">
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </p>
        </div>
        <div className="wrapper-services__items">
          <img src={LockImg} alt="" />
          <p className="item-title">Make it Official</p>
          <p className="item-content">
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Services);
