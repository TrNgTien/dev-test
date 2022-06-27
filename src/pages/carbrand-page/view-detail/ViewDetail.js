import React, { useContext, useState } from "react";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { BrandContext } from "@contexts/BrandContext";
import { SelectStatus } from "@components/custom-selects/CustomSelect";
import "./ViewDetail.scss";

export default function ViewDetail() {
  const { detailBrand, toggleNotViewDetail } = useContext(BrandContext);
  const [branding, setBranding] = useState(detailBrand.branding);
  const [brandDescription, setBrandDescription] = useState(
    detailBrand.brandDescription
  );
  const [editDetail, setEditDetail] = useState(false);
  const [isMoveOver, setIsMoveOver] = useState(false);

  const backgroundColorStatus = (status) => {
    switch (status) {
      case "Active":
        return { background: "#cef7e2" };
      case "Inactive":
        return { background: "none" };
      default:
        return;
    }
  };
  return (
    <div className="view-detail__wrapper">
      <div className="view-detail__title">
        <ArrowDown onClick={toggleNotViewDetail} />
        <p>Brand Details</p>
      </div>
      <div className="view-detail__edit-logo">
        <p>Brand Logo</p>
        <div className="view-detail__edit-image">
          <img
            src={detailBrand.imgBrand}
            alt="logo-brand"
            className="view-detail__brand"
            onMouseEnter={() => setIsMoveOver(true)}
            onMouseLeave={() => setIsMoveOver(false)}
          />
          {editDetail && isMoveOver && (
            <div
              className="overlay-change-logo"
              onMouseEnter={() => setIsMoveOver(true)}
              onMouseLeave={() => setIsMoveOver(false)}
            >
              <p>CHANGE LOGO</p>
            </div>
          )}
        </div>
      </div>
      <div className="view-detail__description-detail">
        <p>Brand Details</p>
        {!editDetail ? (
          <>
            <div className="wrapper-info">
              <div className="view-detail__brand-name">
                <p>Brand Name</p>
                <p>{branding}</p>
              </div>
              <div className="view-detail__status">
                <p>Brand Status</p>
                <div
                  className="status-brand"
                  style={backgroundColorStatus(detailBrand.status)}
                >
                  {detailBrand.status === "Active" ? (
                    <>
                      <p className="dot-status--active">&nbsp;</p>
                      <p className="status-title--active">
                        {detailBrand.status}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="dot-status--inactive">&nbsp;</p>
                      <p className="status-title--inactive">
                        {detailBrand.status}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="view-detail__description-brand">
              <p>Brand Description</p>
              <p>{brandDescription}</p>
            </div>
            <button
              className="view-detail__btn"
              onClick={() => setEditDetail(true)}
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="view-detail__input-detail--edit">
              <div className="view-detail__input-brand-name">
                <p>Brand Name</p>
                <input
                  type="text"
                  value={branding}
                  onChange={(e) => setBranding(e.target.value)}
                  placeholder="Input Content"
                />
              </div>
              <div className="view-detail__status-dropdown--edit">
                <p>Brand Status</p>
                <SelectStatus
                  backgroundColorStatus={backgroundColorStatus}
                  detailBrand={detailBrand}
                />
              </div>
            </div>
            <div className="view-detail__description--edit">
              <p>Brand Description</p>
              <textarea
                placeholder="Input content"
                value={brandDescription}
                onChange={(e) => setBrandDescription(e.target.value)}
              />
            </div>
            <button
              className="view-detail__btn--edit"
              onClick={() => {
                setEditDetail(false);
              }}
            >
              Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}
