import React from "react";

const PortfolioLeft = ({
  img,
  heading,
  text,
  index,
  textColor,
  subHeading,
  bgColor,
}) => {
  return (
    <div className="item">
      <div className="image">
        <img src={img} alt={img} />
      </div>
      <div
        className="text"
        key={index}
        style={
          bgColor
            ? { background: `${bgColor}`, color: "white", padding: "20px" }
            : {}
        }
      >
        <h1
          style={
            bgColor
              ? { background: `${bgColor}`, color: "white" }
              : { color: `${textColor}` }
          }
        >
          {heading}
        </h1>
        {subHeading && <h2>{subHeading}</h2>}
        <div className="description">
          {text.map((item, index) => (
            <p
              style={
                bgColor ? { background: `${bgColor}`, color: "white" } : {}
              }
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <button
          style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default PortfolioLeft;
