import React, { memo, useState } from "react";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import { ReactComponent as DollarIcon } from "@assets/icons/dollars.svg";
import { LIST_CARS_BRAND } from "@src/constants/ConstantData";
import "./FilterBar.scss";
function FilterBar() {
  const [isOpenUsed, setIsOpenUsed] = useState(false);
  const [isOpenPriceRange, setIsOpenPriceRange] = useState(false);
  const [isOpenVehicleType, setIsOpenVehicleType] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const DropDownUsed = () => {
    return (
      <div className="wrapper-dropdown__cars-radio">
        <div>
          <input type="radio" id="new-car-authorised" name="used-car" />
          <label htmlFor="new-car-authorised">
            New Car ( Authorised Dealer )
          </label>
        </div>
        <div>
          <input type="radio" id="new-car-parallel" name="used-car" />
          <label htmlFor="new-car-parallel">
            New Car ( Parallel Importer )
          </label>
        </div>
        <div>
          <input type="radio" id="used-car" name="used-car" />
          <label htmlFor="used-car">Used Cars</label>
        </div>
      </div>
    );
  };
  const DropDownPriceRange = () => {
    return (
      <div className="wrapper-dropdown__price-range">
        <p>Price Range</p>
        <div className="wrapper-dropdown__price">
          <div className="wrapper-dropdown__price--min">
            <label htmlFor="min-price">Min</label>
            <div>
              S$
              <input
                id="min-price"
                onChange={(e) => setPriceMin(e.target.value)}
                value={priceMin}
                type="number"
              />
            </div>
          </div>
          <div className="wrapper-dropdown__divider-range">&nbsp;</div>
          <div className="wrapper-dropdown__price--max">
            <label htmlFor="max-price">Max</label>
            <div>
              S$
              <input
                id="max-price"
                onChange={(e) => setPriceMax(e.target.value)}
                value={priceMax}
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="wrapper-dropdown__operator">
          <p
            onClick={() => {
              setPriceMin(0);
              setPriceMax(0);
            }}
          >
            Clear
          </p>
          <button>Save</button>
        </div>
      </div>
    );
  };
  const DropDownVehicles = () => {
    return (
      <div className="wrapper-dropdown__vehicle-type">
        <p>Vehicle Type</p>
        <div>
          {LIST_CARS_BRAND.map((car, index) => {
            return (
              <div key={index}>
                <input type="checkbox" id={index} />
                <label htmlFor={index}>{car}</label>
              </div>
            );
          })}
        </div>
        <div className="wrapper-dropdown__operator">
          <p
            onClick={() => {
              setPriceMin(0);
              setPriceMax(0);
            }}
          >
            Clear
          </p>
          <button>Save</button>
        </div>
      </div>
    );
  };

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
        {isOpenPriceRange && <DropDownPriceRange />}
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
