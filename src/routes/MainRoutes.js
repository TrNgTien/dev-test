import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/landing-page";
import CarBranding from "@pages/carbrand-page";
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/" element={<CarBranding />} />
      </Routes>
    </Router>
  );
}
