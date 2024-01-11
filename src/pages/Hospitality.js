import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import hospitalityBg from "../assets/images/hospitalityBg.png";
import { hospitality } from "../utils/data";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const Hospitality = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="hospitality">
      <SectionOne
        color="#FAB400"
        text="Hospitality & Entertainment"
        img={hospitalityBg}
        textColor='#000'
      />

      <div className="top">
        <p>
          <Translate>
          Welcome to the epitome of luxury and leisure – Amber Hospitality Services! 
          We invite you to immerse yourself in a world of unparalleled hospitality 
          and entertainment where every moment is crafted to exceed your expectations. 
          Our brands are synonymous with exquisite accommodations, exquisite dining 
          experiences, and an array of captivating entertainment options designed to 
          create unforgettable memories. Whether you seek a lavish escape at our opulent 
          hotels, a culinary adventure at our world-class restaurants, or thrilling 
          entertainment at our venues, The Amber Brands promises an unparalleled journey 
          of indulgence. For a glimpse into our exceptional offerings and to discover how 
          we redefine luxury and entertainment, visit our website and let the enchantment begin.
          </Translate>
        </p>
        {/*<button>Read More</button>*/}
      </div>

      <div className="bottom portfolio">
        <div className="animation">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {hospitality.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} key={index} />;
          }
          return <PortfolioLeft {...item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Hospitality;
