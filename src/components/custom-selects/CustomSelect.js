import React, { useState, Fragment } from "react";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";

export function SelectTypeView() {
  const [openViewStatus, setOpenViewStatus] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <div className="wrapper-select-brand">
      <div
        className="wrapper-select-brand__select"
        onClick={() => setOpenViewStatus(!openViewStatus)}
      >
        <ArrowDown
          style={openViewStatus ? { transform: "rotate(180deg)" } : null}
        />
        <p>{optionSelected ? optionSelected : "View All"}</p>
      </div>
      {openViewStatus && (
        <div className="select-brand__options">
          <p
            onClick={() => {
              setOpenViewStatus(false);
              setOptionSelected("All");
            }}
          >
            All
          </p>
          <p
            onClick={() => {
              setOpenViewStatus(false);
              setOptionSelected("Last Updated");
            }}
          >
            Last Updated
          </p>
          <p
            onClick={() => {
              setOpenViewStatus(false);
              setOptionSelected("Brand Name");
            }}
          >
            Brand Name
          </p>
          <p
            onClick={() => {
              setOpenViewStatus(false);
              setOptionSelected("Number of Models");
            }}
          >
            Number of Models
          </p>
        </div>
      )}
    </div>
  );
}
export function SelectStatus(props) {
  const { backgroundColorStatus, detailBrand, isAddBrand } = props;
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [optionSelected, setOptionSelected] = useState(
    detailBrand && detailBrand.status
  );
  const [optionAddBrand, setOptionAddBrand] = useState("Active");
  if (isAddBrand) {
    return (
      <>
        <div
          className="wrapper-dropdown__status-brand"
          style={
            optionAddBrand === "Active"
              ? { background: "#cef7e2", width: "60%" }
              : { background: "none", width: "65%" }
          }
          onClick={() => setIsOpenStatus(!isOpenStatus)}
        >
          <>
            <p
              className={
                optionAddBrand === "Active"
                  ? "dot-status--active"
                  : "dot-status--inactive"
              }
            >
              &nbsp;
            </p>
            <p
              className={
                optionAddBrand === "Active"
                  ? "status-title--active"
                  : "status-title--inactive"
              }
            >
              {optionAddBrand}
            </p>
            <ArrowDown
              style={isOpenStatus ? { transform: "rotate(180deg)" } : null}
            />
          </>
        </div>
        <div className="dropdown-status">
          <div
            className={
              isOpenStatus
                ? "wrapper-dropdown__status"
                : "wrapper-dropdown__status--none "
            }
          >
            <div
              className="option-status--active"
              onClick={() => {
                setIsOpenStatus(false);
                setOptionAddBrand("Active");
              }}
            >
              <p className="dot-status--active">&nbsp;</p>
              <p>Active</p>
            </div>
            <div
              className="option-status--inactive"
              onClick={() => {
                setIsOpenStatus(false);
                setOptionAddBrand("Inactive");
              }}
            >
              <p className="dot-status--inactive">&nbsp;</p>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="wrapper-dropdown__status-brand"
          style={backgroundColorStatus(optionSelected)}
          onClick={() => setIsOpenStatus(!isOpenStatus)}
        >
          <>
            <p
              className={
                optionSelected === "Active"
                  ? "dot-status--active"
                  : "dot-status--inactive"
              }
            >
              &nbsp;
            </p>
            <p
              className={
                optionSelected === "Active"
                  ? "status-title--active"
                  : "status-title--inactive"
              }
            >
              {optionSelected}
            </p>
            <ArrowDown
              style={isOpenStatus ? { transform: "rotate(180deg)" } : null}
            />
          </>
        </div>
        <div className="dropdown-status">
          <div
            className={
              isOpenStatus
                ? "wrapper-dropdown__status"
                : "wrapper-dropdown__status--none "
            }
          >
            <div
              className="option-status--active"
              onClick={() => {
                setIsOpenStatus(false);
                setOptionSelected("Active");
              }}
            >
              <p className="dot-status--active">&nbsp;</p>
              <p>Active</p>
            </div>
            <div
              className="option-status--inactive"
              onClick={() => {
                setIsOpenStatus(false);
                setOptionSelected("Inactive");
              }}
            >
              <p className="dot-status--inactive">&nbsp;</p>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
