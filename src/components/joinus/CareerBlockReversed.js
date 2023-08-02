import React from "react";
import downloadGrey from "../../assets/logos/downloadGrey.svg";

const CareerBlockReversed = ({
  heading,
  text,
  eligibility,
  image,
  mailLink,
}) => {
  return (
    <div className="career-item">
      <div className="right">
        <img src={image} alt="image" />
      </div>
      <div className="left">
        <h1>{heading}</h1>
        <span className="line"></span>
        <h2>Overview</h2>
        {text.map((item) => (
          <p>{item}</p>
        ))}
        {eligibility && (
          <>
            <h3>ELIGIBILITY CRITERIA</h3>
            <div className="list">
              <ul>
                {eligibility.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        <a href={mailLink} id="mail-link">
          SUBMIT RESUME{" "}
          <span>
            <img src={downloadGrey} alt="downloadGrey" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CareerBlockReversed;