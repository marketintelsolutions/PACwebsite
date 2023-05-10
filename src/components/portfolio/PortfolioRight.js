import React from "react";

const PortfolioRight = ({ img, heading, text, index }) => {
  return (
    <div className="item">
      <div className="text" key={index}>
        <h1>{heading}</h1>
        <div className="description">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <button>Read more</button>
      </div>
      <div className="image">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default PortfolioRight;