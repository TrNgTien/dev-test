import React, { memo, useState } from "react";
import AdvertiseImg from "@assets/images/advertise.png";
import { LIST_CARS_ITEMS } from "@src/constants/ConstantData";
import "./styles/ListCar.scss";

function ListCar() {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="list-car__wrapper">
      <div style={viewMore ? { overflow: "auto" } : { overflow: "hidden" }}>
        <img src={AdvertiseImg} alt="advertiseImage" />
        {LIST_CARS_ITEMS.map(
          (
            {
              price,
              variants,
              rentingPrice,
              imgCar,
              carBrand,
              carName,
              logoImg,
            },
            index
          ) => {
            return (
              <div className="list-car__item" key={index}>
                <img src={imgCar} alt="car-item" />
                <div className="wrapper-information">
                  <p className="wrapper-information__car-name">{carName}</p>
                  <div className="wrapper-information__pricing">
                    <span>
                      From&nbsp;<p>${price}</p>
                    </span>
                    <p>{rentingPrice}</p>
                  </div>
                  <p className="wrapper-information__variants">{variants}</p>
                  <div className="wrapper-information__branding">
                    <img src={logoImg} alt="img-logo" />
                    <p>{carBrand}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <button onClick={() => setViewMore(true)}>View more new cars</button>
    </div>
  );
}

export default memo(ListCar);
