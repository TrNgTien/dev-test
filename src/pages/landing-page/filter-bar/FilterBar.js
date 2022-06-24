import React, { memo, useState } from "react";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollars.svg";
import "./FilterBar.scss";
import DropDownPrice from "./components/DropDownPrice.js";
import DropDownUsed from "./components/DropDownUsed.js";
import DropDownVehicles from "./components/DropDownVehicles.js";
function FilterBar() {
  const [isOpenUsed, setIsOpenUsed] = useState(false);
  const [isOpenPriceRange, setIsOpenPriceRange] = useState(false);
  const [isOpenVehicleType, setIsOpenVehicleType] = useState(false);

  return (
    <div className="wrapper-filter">
      <div className="wrapper-filter__used-car">
        <p>New/Used</p>
        <div
          className="filter-bar__used-car"
          onClick={() => setIsOpenUsed(!isOpenUsed)}
        >
          <p>New Cars</p>
          <i>
            <ArrowDown />
          </i>
        </div>
        {isOpenUsed && <DropDownUsed />}
      </div>
      <div className="wrapper-filter__price-range">
        <p>Price Range</p>
        <div
          className="filter-bar__price-range"
          onClick={() => setIsOpenPriceRange(!isOpenPriceRange)}
        >
          <div className="wrapper-price">
            <DollarIcon />
            <p>$10,000</p>
          </div>
          <div className="divider-range">&nbsp;</div>
          <div className="wrapper-price">
            <DollarIcon />
            <p>$100,000</p>
          </div>
          <i>
            <ArrowDown />
          </i>
        </div>
        {isOpenPriceRange && <DropDownPrice />}
      </div>
      <div className="wrapper-filter__vehicle-type">
        <p>Vehicle Type</p>
        <div
          className="filter-bar__vehicle-type"
          onClick={() => setIsOpenVehicleType(!isOpenVehicleType)}
        >
          <p>+10 more</p>
          <i>
            <ArrowDown />
          </i>
        </div>
        {isOpenVehicleType && <DropDownVehicles />}
      </div>
      <div className="wrapper-search">
        <button>Search</button>
      </div>
    </div>
  );
}
export default memo(FilterBar);
