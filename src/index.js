import React from "react";
import ReactDOM from "react-dom";
import MainRoutes from "./routes/MainRoutes";
import { PopUpProvider } from "@contexts/PopUpContext";
import { BrandProvider } from "@contexts/BrandContext";

import GlobalStyles from "@components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <PopUpProvider>
      <BrandProvider>
        <GlobalStyles>
          <MainRoutes />
        </GlobalStyles>
      </BrandProvider>
    </PopUpProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
