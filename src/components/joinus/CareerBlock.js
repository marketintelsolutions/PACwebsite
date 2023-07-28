import React, { useEffect } from "react";
import downloadGrey from "../../assets/logos/downloadGrey.svg";

const CareerBlock = ({
  heading,
  text,
  eligibility,
  image,
  mailLink,
  setSubject,
}) => {
  const handleSubmit = async () => {
    // await setSubject(heading); // Wait for the state update to complete
    const subject = heading;
    const mailtoLink = `${mailLink}?subject=${encodeURIComponent(subject)}`;
    // window.location.href = mailLink;
    window.location.href = mailtoLink;
  };

  return (
    <div className="career-item">
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
        <button id="mail-link" onClick={handleSubmit}>
          SUBMIT RESUME{" "}
          <span>
            <img src={downloadGrey} alt="downloadGrey" />
          </span>
        </button>
      </div>
      <div className="right">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default CareerBlock;
