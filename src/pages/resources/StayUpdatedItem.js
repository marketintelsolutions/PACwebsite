import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <button onClick={handleGoBack}>Go Back</button>
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
