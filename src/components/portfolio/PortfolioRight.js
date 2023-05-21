import React from "react";
import { Link } from "react-router-dom";

const PortfolioRight = ({
  img,
  heading,
  text,
  index,
  textColor,
  subHeading,
  bgColor,
  link,
  page,
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
<<<<<<< HEAD
        <a
          href={link}
          style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
          target="_self"
        >
          Read more
        </a>
=======
        {page ? (
          <Link
            to={link}
            style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
          >
            Read more
          </Link>
        ) : (
          <a
            href={link}
            style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
            target="_blank"
          >
            Read more
          </a>
        )}
>>>>>>> 867f891d36b8d8fc70eedad1f2e9de13abde690e
      </div>
      <div className="image">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default PortfolioRight;
