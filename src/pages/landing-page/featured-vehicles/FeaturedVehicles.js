import React, { memo, useState } from "react";
import { FEATURED_VEHICLES } from "@constants/ConstantData";
import "./FeaturedVehicles.scss";

function FeaturedVehicle() {
  const [isViewMore, setIsViewMore] = useState(false);
  const FeaturedVehicles = () => {
    return FEATURED_VEHICLES.map(
      ({ price, carName, imgCar, type, typeCar }, index) => {
        return (
          <div key={index} className="wrapper-feature__content-item">
            <img src={imgCar} alt="imageCar" />
            <div className="wrapper-feature__car-title">
              <p className="wrapper-feature__car-name">{carName}</p>
              <p className="wrapper-feature__type-car">{typeCar}</p>
            </div>
            <div className="wrapper-feature__car-title">
              <p className="wrapper-feature__type">{type}</p>
              <p className="wrapper-feature__price">${price}</p>
            </div>
          </div>
        );
      }
    );
  };
  return (
    <div className="wrapper-feature">
      <div className="wrapper-feature__header">
        <p>Our Featured Vehicles.</p>
        <div className="wrapper-feature__sub-header">
          <p>
            One of our biggest product to be featured and that has sold out the
            most.
          </p>
          <div>
            <button onClick={() => setIsViewMore(true)}>View More</button>
          </div>
        </div>
      </div>
      <div
        className="wrapper-feature__content"
        style={isViewMore ? { overflowX: "auto" } : null}
      >
        <FeaturedVehicles />
      </div>
    </div>
  );
}

export default memo(FeaturedVehicle);
