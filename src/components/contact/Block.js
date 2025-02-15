import React from "react";
import { Translate } from "react-auto-translate";

const Block = ({ title, number, email }) => {
  return (
    <div className="block">
      <h3>{title}</h3>
      <div className="details">
        <p>
          <Translate>international</Translate>
        </p>
        <div className="send">
          <p>{number} </p>
          <a target='_blank' href={`mailto:${email}`}>
            <Translate>Send an email</Translate>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Block;
