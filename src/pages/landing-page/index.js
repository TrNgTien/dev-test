import React, { memo } from "react";
import { LandingPageLayout } from "@components/Layout";
import ListCar from "./content/ListCar";
import Description from "./Description/Description.js";
import Badge from "./badge/Badge.js";
import FilterBar from "./filter-bar/FilterBar.js";
import { DESCRIPTION } from "@src/constants/ConstantData.js";
import Services from "./content/Services.js";
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
