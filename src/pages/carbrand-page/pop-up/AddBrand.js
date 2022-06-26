import React, { useState, useContext } from "react";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus-black.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { PopUpContext } from "@contexts/PopUpContext";

import "./AddBrand.scss";
function AddBrand() {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [imageBase64, setImageBase64] = useState("");
  const popUpContext = useContext(PopUpContext);

  const handlePreviewFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
  };
  return (
    <div className="overlay__pop-up">
      <div className="add-brand__pop-up">
        <div className="add-brand__header">
          <div className="add-brand__header-title">
            <p>Add Car Brand</p>
            <p>Setup new car brand</p>
          </div>
          <CloseIcon
            className="close-icon"
            onClick={popUpContext.togglePopUpOff}
          />
        </div>
        <div className="add-brand__body">
          <div className="add-brand__add-logo">
            <p>Brand Logo</p>
            <div className="add-brand__add-file">
              {imageBase64 ? (
                <img
                  src={imageBase64}
                  alt="logo-brand"
                  className="add-brand__img-preview"
                />
              ) : (
                <>
                  <input
                    type="file"
                    id="add-logo"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={handlePreviewFile}
                  />
                  <label htmlFor="add-logo" className="add-brand__add-zone">
                    <PlusIcon />
                    <p>Brand Logo</p>
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="add-brand__add-detail">
            <p>Brand Details</p>
            <div className="add-brand__input-detail">
              <div className="add-brand__input-brand-name">
                <p>Brand Name</p>
                <input type="text" placeholder="Input Content" />
              </div>
              <div className="add-brand__status-dropdown">
                <p>Brand Status</p>
                <div
                  className="wrapper-dropdown__status-brand"
                  onClick={() => setIsOpenStatus(!isOpenStatus)}
                >
                  <p className="dot-status--active">&nbsp;</p>
                  <p className="status-title">Active</p>
                  <ArrowDown />
                </div>
                <div className="dropdown-status">
                  <div
                    className={
                      isOpenStatus
                        ? "wrapper-dropdown__status"
                        : "wrapper-dropdown__status--none "
                    }
                  >
                    <div className="option-status--active">
                      <p className="dot-status--active">&nbsp;</p>
                      <p>Active</p>
                    </div>
                    <div className="option-status--inactive">
                      <p className="dot-status--inactive">&nbsp;</p>
                      <p>Inactive</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="add-brand__description">
              <p>Brand Description</p>
              <textarea placeholder="Input content" />
            </div>
            <div className="wrapper-btn__add-pop-up">
              <button onClick={popUpContext.togglePopUpOff}>Cancel</button>
              <button>Create Brand</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBrand;
