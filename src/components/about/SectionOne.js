import React from "react";
import { Translate } from "react-auto-translate";

const SectionOne = ({ color, text, img, textColor }) => {
  return (
    <section className="about-section-one">
      <div className="section-container">
        <div className={`"main"}`}>
          <div className="main-bg">
            <img src={img} alt="bg" />
            <div className="bg-label" style={{ backgroundColor: `${color}` }}>
              <div className="text-center">
                <div className="text">
                  <h1 style={{ color: `${textColor}`, backgroundColor: `${color}` }}>
                    <Translate>{text}</Translate>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
