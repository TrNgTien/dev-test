import React, { useContext, useState } from "react";
import { PopUpContext } from "@contexts/PopUpContext";
import { BrandContext } from "@contexts/BrandContext";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus.svg";
import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import "./FilterBrand.scss";
import { SelectTypeView } from "@components/custom-selects/CustomSelect";
function FilterBrand() {
  const { brandSearched, searchBrand } = useContext(BrandContext);
  const { togglePopUpOn } = useContext(PopUpContext);
  const handleSearchBrand = (e) => {
    searchBrand(e.target.value);
  };
  return (
    <div className="wrapper-filter-branding">
      <div className="wrapper-filter__operation-filter">
        <p>CAR BRANDS LIST</p>
        <SelectTypeView />
        <div className="wrapper-search">
          <SearchIcon />
          <input
            type="text"
            onChange={handleSearchBrand}
            placeholder="Search car brand"
            value={brandSearched}
          />
        </div>
      </div>
      <div className="wrapper-add-brand" onClick={togglePopUpOn}>
        <PlusIcon />
        <p>Add Brand</p>
      </div>
    </div>
  );
}

export default FilterBrand;
