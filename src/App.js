import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import AgroAllied from "./pages/AgroAllied";
import BioPage from "./pages/BioPage";
import FinancialServices from "./pages/FinancialServices";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import RealEstate from "./pages/RealEstate";

const App = () => {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:personId" element={<BioPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/financial-services"
            element={<FinancialServices />}
          />
          <Route path="/portfolio/real-estate" element={<RealEstate />} />
          <Route path="/portfolio/agro-allied" element={<AgroAllied />} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
