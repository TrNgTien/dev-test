import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus-black.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import CarType1 from "@assets/images/car-type-1.png";

import "./AddBrand.scss";
function AddBrand() {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  return (
    <div className="overlay__pop-up">
      <div className="add-brand__pop-up">
        <div className="add-brand__header">
          <div className="add-brand__header-title">
            <p>Add Car Brand</p>
            <p>Setup new car brand</p>
          </div>
          <CloseIcon className="close-icon" />
        </div>
        <div className="add-brand__body">
          <div className="add-brand__add-logo">
            <p>Brand Logo</p>
            <div className="add-brand__add-file">
              <input type="file" id="add-logo" />
              {/* <img src={CarType1} alt="logo-brand" className="add-brand__img-preview" /> */}
              <label htmlFor="add-logo" className="add-brand__add-zone">
                <PlusIcon />
                <p>Brand Logo</p>
              </label>
            </div>
          </div>
          <div className="add-brand__add-detail">
            <p>Brand Details</p>
            <div className="add-brand__input-detail">
              <div className="add-brand__input-brand-name">
                <p>Brand Name</p>
                <input type="text" placeholder="Input Content" />
              </div>
              <div>
                <p>Brand Status</p>
                <div className="wrapper-dropdown__status-brand">
                  <p>&nbsp;</p>
                  <p>Active</p>
                  <ArrowDown />
                </div>
              </div>
            </div>

            <div>
              <p>Brand Description</p>
              <textarea placeholder="Input content" />
            </div>
            <div className="wrapper-btn__add-pop-up">
              <button>Cancel</button>
              <button>Create Brand</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBrand;
