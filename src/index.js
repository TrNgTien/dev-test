import React from "react";
import ReactDOM from "react-dom";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyles from "@src/components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <MainRoutes />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);
