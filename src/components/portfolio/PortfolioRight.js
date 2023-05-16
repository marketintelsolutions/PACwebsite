import React from "react";

const PortfolioRight = ({
  img,
  heading,
  text,
  index,
  textColor,
  subHeading,
  bgColor,
  link,
}) => {
  console.log(bgColor);
  return (
    <div className="item">
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
        <a
          href={link}
          style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
          target="_blank"
        >
          Read more
        </a>
      </div>
      <div className="image">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default PortfolioRight;
