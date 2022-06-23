import React, { memo } from "react";
import { ReactComponent as LocationIcon } from "@assets/icons/find-location.svg";
import Payment from "@assets/images/payment.png";
import LockImg from "@assets/images/lock.png";
import "./styles/Services.scss";
function Services() {
  return (
    <div className="wrapper-services">
      <div>
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
        <div>
          <i style={{ marginRight: "10px", width: "20px", height: "20px" }}>
            <LocationIcon />
          </i>
          <p>Find Car</p>
          <p>
            Our cars are located at prime areas where by there won’t be problem
            with transportation
          </p>
        </div>
        <div>
          <img src={Payment} alt="" />
          <p>Make payments</p>
          <p>
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </p>
        </div>
        <div>
          <img src={LockImg} alt="" />
          <p>Make it Official</p>
          <p>
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Services);
