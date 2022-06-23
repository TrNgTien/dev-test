import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyles from "@src/components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <MainRoutes />
    </GlobalStyles>
  </React.StrictMode>
);
