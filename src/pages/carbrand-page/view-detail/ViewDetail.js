import React, { useContext } from "react";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { ViewDetailContext } from "@contexts/ViewDetailContext";
import ToyotaLogo from "@assets/images/toyota-logo.png";

import "./ViewDetail.scss";
function ViewDetail() {
  const viewDetailContext = useContext(ViewDetailContext);

  return (
    <div className="view-detail__wrapper">
      <div className="view-detail__title">
        <ArrowDown onClick={viewDetailContext.toggleNotViewDetail} />
        <p>Brand Details</p>
      </div>
      <div className="view-detail__edit-logo">
        <p>Brand Logo</p>
        <img src={ToyotaLogo} alt="logo-brand" className="view-detail__brand" />
      </div>
      <div className="view-detail__description-detail">
        <p>Brand Details</p>
        <div className="wrapper-info">
          <div className="view-detail__brand-name">
            <p>Brand Name</p>
            <p>UCARS PTE LTD</p>
          </div>
          <div className="view-detail__status">
            <p>Brand Status</p>
            <div className="status-brand">
              <p className="dot-status--active">&nbsp;</p>
              <p className="status-title">Active</p>
            </div>
          </div>
        </div>
        <div className="view-detail__description-brand">
          <p>Brand Description</p>
          <p>Ucars brand description</p>
        </div>
        <div className="view-detail__btn">
          <button>Edit Information</button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
