import React from "react";
import curvedbg from "../assets/images/curvedbg.svg";
import spirit from "../assets/images/spirit.svg";
import worldImage from "../assets/images/worldImage.svg";
import playCircle from "../assets/images/playCircle.svg";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import { foundations } from "../utils/data";

const sectionFour = () => {
  return (
    <section
      className="section-four"
      //   style={{ backgroundImage: `url(${curvedbg})` }}
    >
      <span className="bg-image">
        <img src={curvedbg} alt="curvedbg" />
      </span>
      <div className="spirit">
        <img src={spirit} alt="spirit" />
        <div className="items">
          <div className="item">
            <h1>S</h1>
            <p>service</p>
          </div>
          <div className="item">
            <h1>P</h1>
            <p>professionalism</p>
          </div>
          <div className="item">
            <h1>I</h1>
            <p>innovation</p>
          </div>
          <div className="item">
            <h1>R</h1>
            <p>respect</p>
          </div>
          <div className="item">
            <h1>I</h1>
            <p>integrity</p>
          </div>
          <div className="item">
            <h1>T</h1>
            <p>team spirit</p>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="middle">
        <div className="image">
          <img src={playCircle} alt="playCircle" className="play" />
          <img src={worldImage} alt="worldImage" className="world" />
        </div>
        <div className="text">
          <p>
            Creating Impact through opportunities, strategic alliances and
            partnerships
          </p>
          <button>Learn more</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <h2>STAY UPDATED</h2>

        <div className="foundations">
          {foundations.map((item, index) => {
            const { text, image } = item;
            return (
              <div
                className="item"
                key={index}
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="text">
                  <span></span>
                  <p>{text}</p>
                  <button>read more</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="navigation">
          <span className="arrow">
            <img src={arrowLeft} alt="arrowLeft" />
          </span>
          <div className="pages">
            <span className="page"></span>
            <span className="page"></span>
            <span className="page"></span>
            <span className="page"></span>
            <span className="page active"></span>
            <span className="page"></span>
            <span className="page"></span>
            <span className="page"></span>
            <span className="page"></span>
          </div>
          <span className="arrow">
            <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default sectionFour;
