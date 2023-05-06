import React from "react";
import curvedbg from "../assets/images/curvedbg.svg";
import spirit from "../assets/images/spirit.svg";
import worldImage from "../assets/images/worldImage.svg";
import playCircle from "../assets/images/playCircle.svg";

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
    </section>
  );
};

export default sectionFour;
