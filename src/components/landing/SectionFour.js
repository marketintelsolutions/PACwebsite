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
import vectorBlue from "../../assets/logos/vectorBlue.svg";
import { foundations } from "../../utils/data";
import LiquidBackground from "../LiquidBackground";
import ButtonAnimation from "../ButtonAnimation";
import { Translate } from "react-auto-translate";
import { itemsData } from "../../utils/landingData";

const SectionFour = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [activeVector, setActiveVector] = useState(vector1);

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
        <div
          className="image"
          onMouseOver={() => {
            setActiveVector(vectorBlue);
          }}
          onMouseLeave={() => {
            setActiveVector(vector1);
          }}
        >
          <div className="outer" style={{ backgroundImage: `url(${vector})` }}>
            <div
              className="middle"
              style={{ backgroundImage: `url(${activeVector})` }}
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
        {/* <div className="spirit-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="331"
            height="361"
            viewBox="0 0 331 361"
            fill="none"
            className="spirit-main"
          >
            <g filter="url(#filter0_d_3629_1451)">
              <path
                d="M311.009 232.588V119.68C311.009 101.019 301.055 83.7847 284.905 74.4631L187.118 17.9912C170.967 8.66959 151.059 8.66959 134.891 17.9912L37.1042 74.445C20.9539 83.7847 11 101.019 11 119.68V232.588C11 251.249 20.9539 268.483 37.1042 277.805L134.891 334.259C151.041 343.58 170.949 343.58 187.118 334.259L284.905 277.805C301.055 268.483 311.009 251.249 311.009 232.588Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3629_1451"
                x="0"
                y="0"
                width="330.009"
                height="360.25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.4875 0 0 0 0 0.4875 0 0 0 0 0.4875 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3629_1451"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3629_1451"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="264"
            viewBox="0 0 244 264"
            fill="none"
            className="spirit-middle"
          >
            <path
              d="M243.701 169.668V93.5235C243.701 73.706 233.132 55.406 215.97 45.5062L150.014 7.4248C132.853 -2.47493 111.716 -2.47493 94.5723 7.4248L28.6344 45.5062C11.4724 55.406 0.904297 73.706 0.904297 93.5235V169.668C0.904297 189.486 11.4724 207.786 28.6344 217.686L94.5904 255.767C111.752 265.667 132.889 265.667 150.033 255.767L215.989 217.686C233.132 207.786 243.701 189.486 243.701 169.668Z"
              fill="#A6A6A7"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="195"
            height="213"
            viewBox="0 0 195 213"
            fill="none"
            className="spirit-inner"
          >
            <path
              d="M194.824 140.565V72.1885C194.824 58.6035 187.58 46.0663 175.82 39.2737L116.602 5.09439C104.842 -1.69813 90.3534 -1.69813 78.5929 5.09439L19.3933 39.2737C7.63282 46.0663 0.388672 58.6035 0.388672 72.1885V140.565C0.388672 154.15 7.63282 166.688 19.3933 173.48L78.611 207.659C90.3714 214.452 104.86 214.452 116.62 207.659L175.82 173.48C187.58 166.688 194.824 154.132 194.824 140.565Z"
              fill="url(#paint0_linear_3629_1453)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3629_1453"
                x1="146.212"
                y1="190.565"
                x2="48.9963"
                y2="22.1828"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1537" stop-color="white" />
                <stop offset="0.4791" stop-color="#F8F8FB" />
                <stop offset="0.9365" stop-color="#E6E6EF" />
                <stop offset="1" stop-color="#E3E3ED" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

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
