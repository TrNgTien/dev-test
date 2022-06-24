import React, { useState } from "react";
import { LIST_CARS_BRAND } from "@constants/ConstantData";

const DropDownVehicles = () => {
  const [vehicleChecked, setVehicleChecked] = useState([]);

  const handleMultipleChecked = (e) => {
    const listVehicleChecked = [...vehicleChecked];
    if (listVehicleChecked.includes(e.target.value)) {
      const newListVehicle = listVehicleChecked.filter(
        (item) => item !== e.target.value
      );
      setVehicleChecked(newListVehicle);
    } else {
      listVehicleChecked.push(e.target.value);
      setVehicleChecked(listVehicleChecked);
    }
  };
  return (
    <div className="wrapper-dropdown__vehicle-type">
      <p>Vehicle Type</p>
      <div>
        {LIST_CARS_BRAND.map((car, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={car}
                checked={vehicleChecked.includes(car)}
                onChange={handleMultipleChecked}
                id={index}
              />
              <label htmlFor={index}>{car}</label>
            </div>
          );
        })}
      </div>
      <div className="wrapper-dropdown__operator">
        <p onClick={() => setVehicleChecked([])}>Clear</p>
        <button>Save</button>
      </div>
    </div>
  );
};

export default DropDownVehicles;
