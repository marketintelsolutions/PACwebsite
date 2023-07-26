import React from "react";
import csrBg from "../assets/images/csrBg.png";
import csrWomen from "../assets/images/csrWomen.png";
import playWhite from "../assets/images/playWhite.svg";
import { blocks, goals } from "../utils/csrData";

const Csr = () => {
  return (
    <section className="csr">
      <div
        className="csr-section-one"
        style={{ backgroundImage: `url(${csrBg})` }}
      >
        <div className="center">
          <h3>Make An Impact</h3>
          <h1>Shape the World one Life at a time</h1>
          <p>
            The impact of an individual is felt more when part of a collective.
            By empowering others, we shape mindsets, build capacity and the
            future with our collective efforts
          </p>
        </div>
      </div>

      <div className="csr-section-two">
        <div className="content">
          <div className="left">
            <img src={csrWomen} alt="csrWomen" />
            <img src={playWhite} alt="playWhite" className="play" />
          </div>
          <div className="right">
            <h1>A Dream In Their Mind Is Our Mission Defined</h1>
            <span></span>
            <p>
              We recognize the need for immediate action in our communities and
              confidence that our interventions will support other efforts to
              bring development that balances social, economic, and
              environmental sustainability.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="csr-section-three">
        <div className="content">
          {blocks.map((item, index) => {
            const { image, text } = item;
            let border = index !== blocks.length - 1;
            return (
              <div className={border ? "csr-item border" : "csr-item"}>
                <img src={image} alt={image} />
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="csr-section-four">
        <div className="center">
          <h1>Sustainable Development Goals</h1>
          <div className="line">
            <span className="red"></span>
            <span className="white"></span>
          </div>
          <div className="goals">
            {goals.map((item, index) => {
              const { image, logo, number, text, color } = item;
              return (
                <div
                  className="goal"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div
                    className="goal-center"
                    style={{ background: `${color}` }}
                  >
                    <img src={logo} alt={logo} />
                    <div className="text">
                      <span>{number}</span>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="get-involved">
        <button>Get Involved</button>
      </div>
    </section>
  );
};

export default Csr;
