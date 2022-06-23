import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/landing-page";
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/car-brand" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}
