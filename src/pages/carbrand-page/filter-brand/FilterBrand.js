import React, { useContext } from "react";
import { PopUpContext } from "@contexts/PopUpContext";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus.svg";
import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import "./FilterBrand.scss";

function FilterBrand() {
  const popUpContext = useContext(PopUpContext);
  return (
    <div className="wrapper-filter-branding">
      <div className="wrapper-filter__operation-filter">
        <p>CAR BRANDS LIST</p>
        <div className="wrapper-select-brand">
          <ArrowDown />
          <select className="select-brand">
            <option hidden>View All</option>
            <option value="all">All</option>
            <option value="last updated">Last Updated</option>
            <option value="brand name">Brand Name</option>
            <option value="number of models">Number of Models</option>
          </select>
        </div>
        <div className="wrapper-search">
          <SearchIcon />
          <input type="text" placeholder="Search car brand" />
        </div>
      </div>
      <div className="wrapper-add-brand" onClick={popUpContext.togglePopUpOn} >
        <PlusIcon />
        <p>Add Brand</p>
      </div>
    </div>
  );
}

export default FilterBrand;
