import React from "react";
import { portfolio } from "../utils/data";

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="heading">
        <h1>our portfolio</h1>
      </div>
      <div className="bottom">
        <div className="items">
          {portfolio.map((item) => {
            const { img, text } = item;
            return (
              <div className="item">
                <span>
                  <img src={img} alt={text} />
                </span>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
