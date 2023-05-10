import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </SharedLayout>
    </>
  );
};

export default App;
