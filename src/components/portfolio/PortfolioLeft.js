import React from "react";
import { Link } from "react-router-dom";

const PortfolioLeft = ({
  img,
  heading,
  text,
  index,
  textColor,
  subHeading,
  bgColor,
  link,
  page,
  headingColor,
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
              : { color: `${headingColor || textColor}` }
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
        {page ? (
          <Link to={link}>Read more</Link>
        ) : (
          <a
            href={link}
            style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
            target="_blank"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioLeft;
