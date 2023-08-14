import React from "react";
import prevblue from "../../assets/logos/prevblue.svg";
import nextblue from "../../assets/logos/nextblue.svg";
import { Translate } from "react-auto-translate";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="center">
        <div className="left">
          <p>
            <Translate>Showing 1 to 10 of 981 entries</Translate>
          </p>
          <span>1</span>
        </div>
        <div className="right">
          <button>
            <img src={prevblue} alt="prevblue" />
            <span>
              <Translate>Previous</Translate>
            </span>
          </button>
          <button>
            <span>
              <Translate>Next</Translate>
            </span>
            <img src={nextblue} alt="nextblue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
