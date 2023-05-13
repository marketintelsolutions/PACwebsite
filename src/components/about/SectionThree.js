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
      {/* <div className="bg-image">
        <img src={goalsBg} alt="goalsBg" />
      </div> */}
      <div className="goals-center">
        <div className="goals">
          <div className="goal-container">
            <div className="goal">
              <img src={binoculars} alt="binoculars" />
              <p className="main-text">our vision</p>
              <div className="text">
                <p>
                  “To deliver exceptional services in our chosen markets and
                  create value for all our stakeholders”
                </p>
              </div>
            </div>
          </div>
          <div className="goal-container">
            <div className="goal">
              <img src={airplane} alt="airplane" />
              <p className="main-text">our mission</p>
              <div className="text">
                <p>
                  “To run successful & socially responsible business
                  institutions, providing sustainable returns to stake holders”
                </p>
              </div>
            </div>
          </div>
          <div className="goal-container">
            <div className="goal">
              <img src={handshake} alt="handshake" />
              <p className="main-text">our core values</p>
              <div className="spirit text">
                <p>
                  <span>S</span>ervice
                </p>
                <p>
                  <span>P</span>rofessionalism
                </p>
                <p>
                  <span>I</span>ntegrity
                </p>
                <p>
                  <span>R</span>espect
                </p>
                <p>
                  <span>I</span>nnovation
                </p>
                <p>
                  <span>T</span>eam spirit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
