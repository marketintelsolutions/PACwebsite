import React from "react";
import prevblue from "../../assets/logos/prevblue.svg";
import nextblue from "../../assets/logos/nextblue.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="center">
        <div className="left">
          <p>Showing 1 to 10 of 981 entries</p>
          <span>1</span>
        </div>
        <div className="right">
          <button>
            <img src={prevblue} alt="prevblue" />
            <span>Previous</span>
          </button>
          <button>
            <span>Next</span>
            <img src={nextblue} alt="nextblue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
