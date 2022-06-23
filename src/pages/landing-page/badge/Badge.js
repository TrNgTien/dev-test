import React, { memo } from "react";
import Car from "@assets/images/car.png";
import "./Badge.scss"
function Badge(props) {
  const { children } = props;
  return (
    <div className="badge-wrapper">
      <img alt="" src={Car} />
      {children}
    </div>  
  );
}

export default memo(Badge);
