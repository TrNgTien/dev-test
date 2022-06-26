import { CarBrandLayout } from "@components/Layout";
import React from "react";
import FilterBrand from "./filter-brand/FilterBrand";
import ListCarBrand from "./list-car/ListCarBrand";
function index() {
  return (
    <CarBrandLayout>
      <FilterBrand />
      <ListCarBrand />
    </CarBrandLayout>
  );
}

export default index;
