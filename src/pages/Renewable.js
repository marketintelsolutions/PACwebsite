import React, { useEffect } from "react";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { renewable } from "../utils/data";
import renewableBg from "../assets/images/renewableBg.png";
import SectionOne from "../components/about/SectionOne";
import animation from "../assets/images/portfolioAnimationLeft.svg";

const Renewable = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne color="#38B6FF" text="Renewable Energy" img={renewableBg} />

      <div className="bottom portfolio">
        <div className="animation">
          <img src={animation} alt="animation" />
        </div>
        {renewable.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Renewable;
