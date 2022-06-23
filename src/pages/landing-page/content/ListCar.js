import React, { memo } from "react";
import AdvertiseImg from "@assets/images/advertise.png";
import { LIST_CARS_ITEMS } from "@src/constants/ConstantData";
import { ReactComponent as BmwIcon } from "@assets/icons/bmw-logo.svg";
import "./styles/ListCar.scss";

function ListCar() {
  return (
    <div className="list-car__wrapper">
      <div >
        <img src={AdvertiseImg} alt="advertiseImage" />
        {LIST_CARS_ITEMS.map(
          (
            { price, variants, rentingPrice, imgCar, carBrand, carName },
            index
          ) => {
            return (
              <div className="list-car__item" key={index}>
                <img src={imgCar} alt="car-item" />
                <div>
                  <p>{carName}</p>
                  <div className="list-car__pricing">
                    From <p>{price}</p>
                    <p>{rentingPrice}</p>
                  </div>
                  <p>{variants} variants | with COE </p>
                  <div style={{ display: "flex" }}>
                    <BmwIcon />
                    <p>{carBrand}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <button>View more new cars</button>
    </div>
  );
}

export default memo(ListCar);
