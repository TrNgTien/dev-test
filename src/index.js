import React from "react";
import ReactDOM from "react-dom";
import MainRoutes from "./routes/MainRoutes";
import { PopUpProvider } from "@contexts/PopUpContext";
import GlobalStyles from "@components/GlobalStyles";
import {
  ViewDetailProvider,
} from "@contexts/ViewDetailContext";
ReactDOM.render(
  <React.StrictMode>
    <PopUpProvider>
      <ViewDetailProvider>
        <GlobalStyles>
          <MainRoutes />
        </GlobalStyles>
      </ViewDetailProvider>
    </PopUpProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
