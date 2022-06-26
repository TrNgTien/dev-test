import React, { useContext } from "react";
import { CarBrandLayout } from "@components/Layout";
import FilterBrand from "./filter-brand/FilterBrand";
import { ViewDetailContext } from "@contexts/ViewDetailContext";
import ListCarBrand from "./list-car/ListCarBrand";
import ViewDetail from "./view-detail/ViewDetail";
function CarBrandPage() {
  const viewDetailContext = useContext(ViewDetailContext);
  return (
    <CarBrandLayout>
      {!viewDetailContext.viewDetail ? (
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
