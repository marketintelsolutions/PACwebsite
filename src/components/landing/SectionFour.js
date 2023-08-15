import React, { useState } from "react";
import curvedbg from "../../assets/images/curvedbg.svg";
import spirit from "../../assets/images/spirit.svg";
import worldImage from "../../assets/images/worldImage.svg";
import playCircle from "../../assets/images/playCircle.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import vector from "../../assets/logos/vector.svg";
import vector1 from "../../assets/logos/vector1.svg";
import vector2 from "../../assets/logos/vector2.svg";
import { foundations } from "../../utils/data";
import LiquidBackground from "../LiquidBackground";
import ButtonAnimation from "../ButtonAnimation";
import { Translate } from "react-auto-translate";
import { itemsData } from "../../utils/landingData";

const SectionFour = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction) => {
    const max = Math.floor(foundations.length / 3) - 1;
    console.log(max, scrollIndex);
    if (direction === "left" && scrollIndex !== 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === "right" && scrollIndex <= max) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const visibleFoundations = foundations.slice(scrollIndex, scrollIndex + 3);

  return (
    <section
      className="section-four"
      //   style={{ backgroundImage: `url(${curvedbg})` }}
    >
      <span className="bg-image">
        {/* <img src={curvedbg} alt="curvedbg" /> */}
        <LiquidBackground />
      </span>
      <div className="spirit">
        {/* <img src={spirit} alt="spirit" /> */}
        <div className="image">
          <div className="outer" style={{ backgroundImage: `url(${vector})` }}>
            <div
              className="middle"
              style={{ backgroundImage: `url(${vector1})` }}
            >
              <div
                className="inner"
                style={{ backgroundImage: `url(${vector2})` }}
              >
                <p className="text">
                  <Translate>OUR SPIRIT</Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items">
          {itemsData.map((item, index) => {
            const { letter, text } = item;

            return (
              <div className="item" key={index}>
                <h1>
                  <Translate>{letter}</Translate>
                </h1>
                <p>
                  <Translate>{text}</Translate>
                </p>
              </div>
            );
          })}
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
            <Translate>
              Creating Impact through opportunities, strategic alliances and
              partnerships.
            </Translate>
          </p>
          <a>
            <span>
              <Translate>Learn more</Translate>
            </span>
            <div className="liquid">
              <ButtonAnimation />
            </div>
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <h2>
          <Translate>STAY UPDATED</Translate>
        </h2>

        <div className="foundations-container">
          <div className="foundations">
            {visibleFoundations.map((item, index) => {
              const { text, image } = item;
              return (
                <div
                  className="item"
                  key={index}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="text">
                    <span></span>
                    <p>
                      <Translate>{text}</Translate>
                    </p>
                    <button>
                      <Translate>read more</Translate>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="navigation">
          <span className="arrow" onClick={() => handleScroll("left")}>
            <img src={arrowLeft} alt="arrowLeft" />
          </span>
          <div className="pages">
            {foundations.map((_, index) => {
              let active = scrollIndex === index;
              return (
                <span className={`${active ? "page active" : "page"}`}></span>
              );
            })}
          </div>
          <span className="arrow" onClick={() => handleScroll("right")}>
            <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
