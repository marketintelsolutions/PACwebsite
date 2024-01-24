import React, { useEffect } from "react";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { portfolioData } from "../utils/portfolioData";
import portfolioBg from '../assets/images/portfolioBg.png'
import SectionOne from "../components/about/SectionOne";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="portfolio margin">
      <SectionOne color="#38B6FF" text='Portfolio' img={portfolioBg} />
      {portfolioData.map((data, index) => {
        if (index % 2 !== 0 || index === 1) {
          return <PortfolioRight {...data} key={index} />;
        }
        return <PortfolioLeft {...data} key={index} />;
      })}
    </div>
  );
};

export default Portfolio;
