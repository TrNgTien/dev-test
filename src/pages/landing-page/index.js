import React, { memo } from "react";
import { LandingPageLayout } from "@components/Layout";
import ListCar from "./Content/ListCar";
import Description from "./Description/Description";
import Badge from "./Badge/Badge";
import FilterBar from "./filter-bar/FilterBar";
import { DESCRIPTION } from "@src/constants/ConstantData";
import Services from "./Content/Services";
import FeaturedVehicle from "./featured-vehicles/FeaturedVehicles";
function LandingPage() {
  return (
    <LandingPageLayout>
      <Badge>
        <div className="badge-wrapper__content-introduction">
          <div className="badge-wrapper__text">
            <p>Car Marketplace</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </p>
          </div>
          <button>Get Started</button>
        </div>
        <FilterBar />
      </Badge>
      <ListCar />
      <Services />
      <FeaturedVehicle />
      <Description description={DESCRIPTION} />
      <Badge>
        <div className="badge-wrapper__content">
          <p>Questions about buying or renting?</p>
          <button>Ask Us</button>
        </div>
      </Badge>
    </LandingPageLayout>
  );
}

export default memo(LandingPage);
