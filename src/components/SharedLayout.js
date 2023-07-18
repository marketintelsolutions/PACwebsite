import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = ({ children }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClick = (e) => {
    // console.log(e.target.classList);
    if (!e.target.classList.contains("portfolio-arrow")) {
      setIsDropdown(false);
    }
  };
  return (
    <div onClick={(e) => handleClick(e)}>
      <Navbar isDropdown={isDropdown} setIsDropdown={setIsDropdown} />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
