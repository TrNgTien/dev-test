import React, { useState } from "react";

const DropDownPrice = () => {
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const handlePrice = (e, type) => {
    if (type === "min") {
      if (e.target.value >= 0) {
        setPriceMin(e.target.value);
      }
    } else {
      if (e.target.value >= 0) {
        setPriceMax(e.target.value);
      }
    }
  };
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
              value={priceMin}
              name="min-price"
              onChange={(e) => handlePrice(e, "min")}
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
              value={priceMax}
              onChange={(e) => handlePrice(e, "max")}
              name="max-price"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="wrapper-dropdown__operator">
        <p
          onClick={() => {
            setPriceMin("");
            setPriceMax("");
          }}
        >
          Clear
        </p>
        <button>Save</button>
      </div>
    </div>
  );
};

export default DropDownPrice;
