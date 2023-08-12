import React, { useState } from "react";
import mail from "../../assets/logos/mail.svg";
import phone from "../../assets/logos/phone.svg";
import calender from "../../assets/logos/calender.svg";
import clock from "../../assets/logos/clock.svg";
import { countries, languages } from "../../utils/navData";
import arrowDownFill from "../../assets/logos/arrowDownFill.svg";

const Prenav = ({
  active,
  setActive,
  setPreDropItems,
  setIsPrenavDropdown,
  isPrenavDropdown,
  setPrePosition,
}) => {
  const togglePreDropdown = (e, category) => {
    const { type, items } = category;
    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setIsPrenavDropdown(!isPrenavDropdown);
    setPrePosition({ top: topPosition, left });
    setPreDropItems(items);

    // console.log(preDropItems);
    setActive({ ...active, focus: `${type}` });
  };

  return (
    <div
      className={`${
        active.country !== "Nigeria" ? "pre-nav pre-nav-selected" : "pre-nav"
      }`}
    >
      <div className="center">
        <div
          className="predropdown item"
          onClick={(e) => togglePreDropdown(e, countries)}
        >
          <p>{active.country}</p>
          <span>
            <img src={arrowDownFill} alt="arrowDownFill" />
          </span>
        </div>
        <div className="item">
          <img src={calender} alt="arrowDownFill" />
          <p>Mon - Fri</p>
        </div>
        <div className="item">
          <span>
            <img src={clock} alt="arrowDownFill" />
          </span>
          <p>8:00am-5:00pm</p>
        </div>
        <div className="item">
          <span>
            <img src={phone} alt="arrowDownFill" />
          </span>
          <p>+ 234-(1)-271-6899</p>
        </div>
        <div className="item">
          <span>
            <img src={mail} alt="arrowDownFill" />
          </span>
          <p>info@panfricancapitalholdings.com</p>
        </div>
        <div
          className="predropdown item"
          onClick={(e) => togglePreDropdown(e, languages)}
        >
          <p>{active.language}</p>
          <span>
            {" "}
            <img src={arrowDownFill} alt="arrowDownFill" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Prenav;
