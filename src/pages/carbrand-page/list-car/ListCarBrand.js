import React, { useContext } from "react";
import { LIST_CAR_BRAND } from "@constants/ConstantData";
import { BrandContext } from "@contexts/BrandContext";
import BMWLogo from "@assets/images/bmw-brand.png";
import KIALogo from "@assets/images/kia-logo.png";
import NissanLogo from "@assets/images/nissan-logo.png";
import ToyotaLogo from "@assets/images/toyota-logo.png";
import MazdaLogo from "@assets/images/mazda-logo.png";
import HyundaiLogo from "@assets/images/hyundai-logo.png";
import "./ListCarBrand.scss";
function ListCarBrand() {
  const { toggleViewDetail, brandSearched } = useContext(BrandContext);
  const renderLogo = (brandName) => {
    switch (brandName) {
      case "BMW":
        return BMWLogo;
      case "KIA":
        return KIALogo;
      case "Nissan":
        return NissanLogo;
      case "Toyota":
        return ToyotaLogo;
      case "Hyundai":
        return HyundaiLogo;
      case "MAZDA":
        return MazdaLogo;
      default:
        return;
    }
  };
  const RenderListCarBrand = () => {
    const brandNeeded = [...LIST_CAR_BRAND];
    const brandFiltered = brandNeeded.filter((brand) =>
      brand.branding.toLowerCase().includes(brandSearched)
    );
    if (brandSearched) {
      return brandFiltered.map(
        (
          { branding, brandDescription, numberOfModals, timeUpdated, status },
          index
        ) => {
          return (
            <div className="list-brand__wrapper-item" key={index}>
              <input type="radio" className="radio-check" />
              <img src={renderLogo(branding)} alt="logo-brand" />
              <p
                className={
                  status === "Active"
                    ? "list-brand__status--active"
                    : "list-brand__status--inactive"
                }
              >
                &nbsp;
              </p>
              <div className="list-brand__car-info">
                <p>{branding}</p>
                <div className="list-brand__car-stats">
                  <p>{brandDescription}</p>
                  <p className="divider">&nbsp;</p>
                  <p>{numberOfModals}</p>
                </div>
              </div>

              <div className="list-brand__time-updated">
                <p>Last Update</p>
                <p>{timeUpdated}</p>
              </div>
              <div className="list-brand__status-dot">
                <p
                  className={
                    status === "Active"
                      ? "list-brand__status-dot--active"
                      : "list-brand__status-dot--inactive"
                  }
                >
                  &nbsp;
                </p>
                <p
                  className={
                    status === "Active"
                      ? "status-color--active"
                      : "status-color--inactive"
                  }
                >
                  {status}
                </p>
              </div>
              <button
                onClick={() =>
                  toggleViewDetail(
                    {
                      branding,
                      status,
                      brandDescription,
                    },
                    renderLogo(branding)
                  )
                }
              >
                View Details
              </button>
            </div>
          );
        }
      );
    } else {
      return LIST_CAR_BRAND.map(
        (
          { branding, brandDescription, numberOfModals, timeUpdated, status },
          index
        ) => {
          return (
            <div className="list-brand__wrapper-item" key={index}>
              <input type="radio" className="radio-check" />
              <img src={renderLogo(branding)} alt="logo-brand" />
              <p
                className={
                  status === "Active"
                    ? "list-brand__status--active"
                    : "list-brand__status--inactive"
                }
              >
                &nbsp;
              </p>
              <div className="list-brand__car-info">
                <p>{branding}</p>
                <div className="list-brand__car-stats">
                  <p>{brandDescription}</p>
                  <p className="divider">&nbsp;</p>
                  <p>{numberOfModals}</p>
                </div>
              </div>

              <div className="list-brand__time-updated">
                <p>Last Update</p>
                <p>{timeUpdated}</p>
              </div>
              <div className="list-brand__status-dot">
                <p
                  className={
                    status === "Active"
                      ? "list-brand__status-dot--active"
                      : "list-brand__status-dot--inactive"
                  }
                >
                  &nbsp;
                </p>
                <p
                  className={
                    status === "Active"
                      ? "status-color--active"
                      : "status-color--inactive"
                  }
                >
                  {status}
                </p>
              </div>
              <button
                onClick={() =>
                  toggleViewDetail(
                    {
                      branding,
                      status,
                      brandDescription,
                    },
                    renderLogo(branding)
                  )
                }
              >
                View Details
              </button>
            </div>
          );
        }
      );
    }
  };
  return (
    <div className="list-brand__wrapper">
      <RenderListCarBrand />
    </div>
  );
}

export default ListCarBrand;
