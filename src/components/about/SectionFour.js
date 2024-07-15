import React from "react";
import businessMan from "../../assets/images/businessMan.png";

import { Link } from "react-router-dom";
import { directors } from "../../utils/teamData";
import { Translate } from "react-auto-translate";

const SectionFour = () => {
  return (
    <section className="about-section-four">
      <div className="section-center">
        <h1>
          <Translate>Our Leadership</Translate>
        </h1>

        <div className="bottom">
          <p>{/* <Translate>board of directors</Translate> */}</p>
          <div className="items">
            {directors.map((item, index) => {
              const { name, position, bioLink, imageSrc } = item;

              return (
                <div className="item" key={index}>
                  <img src={imageSrc} alt="businessMan" />
                  <div className="text">
                    <h2>{name}</h2>
                    <p>
                      <Translate>{position}</Translate>
                    </p>
                    <Link to={`${bioLink}`}>
                      <Translate>read bio</Translate>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
