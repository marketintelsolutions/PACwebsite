import React, { useEffect } from "react";
import SectionOne from "../../components/about/SectionOne";
import vendorbg from "../../assets/images/vendorbg.png";
import { foundations } from "../../utils/data";
import Pagination from "../../components/resources/Pagination";

const StayUpdated = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="stay-updated">
      <SectionOne color="#38B6FF" text="Stay Updated" img={vendorbg} />
      <div className="section-two">
        <div className="foundations-container">
          <div className="foundations">
            {foundations.map((item, index) => {
              const { text, image } = item;
              return (
                <div
                  className="item"
                  key={index}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="text">
                    <span></span>
                    <p>{text}</p>
                    <button>read more</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default StayUpdated;
