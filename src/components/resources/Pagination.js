import React from "react";
import prevblue from "../../assets/logos/prevblue.svg";
import nextblue from "../../assets/logos/nextblue.svg";
import { Translate } from "react-auto-translate";

const Pagination = ({ currentPage, totalPages, goToPage, totalPosts, postsPerPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const firstPostOnPage = (currentPage - 1) * postsPerPage + 1;
  const lastPostOnPage = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <div className="pagination">
      <div className="center">
        <div className="left">
          <p>
            <Translate>
              {`Showing ${firstPostOnPage} to ${lastPostOnPage} of ${totalPosts} entries`}
            </Translate>
          </p>
          <span>{currentPage}</span>
        </div>
        <div className="right">
          <button onClick={handlePrevious}>
            <img src={prevblue} alt="prevblue" />
            <span>
              <Translate>Previous</Translate>
            </span>
          </button>
          <button onClick={handleNext}>
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
