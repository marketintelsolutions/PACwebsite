import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/logos/arrowRight.svg";

const StayUpdatedItem = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <section className="stay-updated-item">
      <div className="content">
        <div className="btn-container">
          <button onClick={handleGoBack}>
            Stay Updated <img src={arrowRight} alt="arrowRight" />{" "}
          </button>
        </div>
        <h1>
          PAC Capital Commits to a 3-year Sponsorship Agreement with CANEX
          presents Africa @Portugal Fashion Week
        </h1>
        <p className="date">27th March 2023</p>
      </div>
    </section>
  );
};

export default StayUpdatedItem;
