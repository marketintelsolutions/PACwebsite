import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { realEstate } from "../utils/data";
import estateBg from "../assets/images/estateBg.png";

const RealEstate = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="real-estate">
      <SectionOne
        color="#38B6FF"
        text="Real Estate & Infrastructure"
        img={estateBg}
      />

      <div className="bottom portfolio">
        {realEstate.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default RealEstate;
