import React from "react";
import aboutBg from "../../assets/images/aboutBg.png";

const SectionOne = () => {
  return (
    <section className="about-section-one">
      <div className="section-container">
        <div className={`"main"}`}>
          <div className="main-bg">
            <img src={aboutBg} alt="phone-bg" />
            <div className="bg-label">
              <div className="text-center">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
