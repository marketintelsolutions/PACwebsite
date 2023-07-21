import React from "react";

const Block = ({ title, number }) => {
  return (
    <div className="block">
      <h3>{title}</h3>
      <div className="details">
        <p>international</p>
        <div className="send">
          <p>{number} </p>
          <h4>Send an email</h4>
        </div>
      </div>
    </div>
  );
};

export default Block;
