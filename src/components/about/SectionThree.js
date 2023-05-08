import React from "react";
import goalsBg from "../../assets/images/goalsBg.png";
import binoculars from "../../assets/logos/binoculars.svg";
import airplane from "../../assets/logos/airplane.svg";
import handshake from "../../assets/logos/binoculars.svg";

const SectionThree = () => {
  return (
    <section
      className="about-section-three"
      style={{ backgroundImage: `url(${goalsBg})` }}
    >
      <div className="goals-center">
        <div className="goals">
          <div className="goal">
            <img src={binoculars} alt="binoculars" />
            <p>our vision</p>
          </div>
          <div className="goal">
            <img src={airplane} alt="airplane" />
            <p>our mission</p>
          </div>
          <div className="goal">
            <img src={handshake} alt="handshake" />
            <p>our core values</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
