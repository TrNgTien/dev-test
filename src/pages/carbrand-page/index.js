import React, { useContext } from "react";
import { CarBrandLayout } from "@components/Layout";
import FilterBrand from "./filter-brand/FilterBrand";
import { BrandContext } from "@contexts/BrandContext";
import ListCarBrand from "./list-car/ListCarBrand";
import ViewDetail from "./view-detail/ViewDetail";
function CarBrandPage() {
  const { viewDetail } = useContext(BrandContext);
  return (
    <CarBrandLayout>
      {!viewDetail ? (
        <>
          <FilterBrand />
          <ListCarBrand />
        </>
      ) : (
        <ViewDetail />
      )}
    </CarBrandLayout>
  );
}

export default CarBrandPage;
