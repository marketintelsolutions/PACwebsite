import React from "react";
import downloadGrey from "../../assets/logos/downloadGrey.svg";

const CareerBlockReversed = ({
  heading,
  text,
  eligibility,
  image,
  mailLink,
}) => {
  let mailtoLink = `mailto:info@panafricancapitalholdings.com?subject=${encodeURIComponent(
    heading
  )}`;

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
                {eligibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        <a href={mailtoLink} id="mail-link">
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
