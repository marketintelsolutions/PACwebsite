import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { healthcare } from "../utils/data";
import healthcareBg from "../assets/images/healthcareBg.png";
import animation from "../assets/images/portfolioAnimationLeft.svg";

const Healthcare = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne color="#38B6FF" text="Healthcare" img={healthcareBg} />

      <div className="bottom portfolio">
        <div className="animation">
          <img src={animation} alt="animation" />
        </div>
        {healthcare.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Healthcare;
