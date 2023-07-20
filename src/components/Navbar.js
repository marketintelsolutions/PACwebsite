import React, { useState } from "react";
import paclogo from "../assets/logos/paclogo.svg";
import arrowDownFill from "../assets/logos/arrowDownFill.svg";
import arrowDownBlue from "../assets/logos/arrowDownBlue.svg";
import mail from "../assets/logos/mail.svg";
import phone from "../assets/logos/phone.svg";
import calender from "../assets/logos/calender.svg";
import clock from "../assets/logos/clock.svg";
import menuLine from "../assets/logos/menuLine.svg";
import { Link } from "react-router-dom";
import { ourPortfolio, joinUs } from "../utils/navData";

const Navbar = ({ isDropdown, setIsDropdown }) => {
  const [dropItems, setDropItems] = useState([]);
  const [position, setPosition] = useState({});

  const toggleDropdown = (e, items) => {
    setIsDropdown(!isDropdown);

    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setPosition({ top: topPosition, left });
    setDropItems(items);
  };
  return (
    <>
      <div className="pre-nav">
        <div className="center">
          <div className="predropdown item">
            <p>Nigeria</p>
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
          <div className="predropdown item">
            <p>English</p>
            <span>
              {" "}
              <img src={arrowDownFill} alt="arrowDownFill" />
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/" className="logo">
            <img src={paclogo} alt="logo" />
          </Link>
          <div className="nav-items">
            <div className="item">
              <Link to="/about">About</Link>
            </div>
            <div className="item border">
              <Link to="/portfolio">Our Portfolio</Link>
              <span onClick={(e) => toggleDropdown(e, ourPortfolio)}>
                <img
                  className="portfolio-arrow"
                  src={arrowDownBlue}
                  alt="arrowDownBlue"
                />
              </span>
            </div>
            <div className="item border">
              <p>Resources</p>
              <span>
                <img src={arrowDownBlue} alt="arrowDownBlue" />
              </span>
            </div>
            <div className="item border">
              <p>Join Us</p>
              <span>
                <img
                  src={arrowDownBlue}
                  alt="arrowDownFill"
                  className="portfolio-arrow"
                  onClick={(e) => toggleDropdown(e, joinUs)}
                />
              </span>
            </div>
            <div className="item">
              <p>CSR</p>
            </div>
            <div className="item">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="menu">
            <img src={menuLine} alt="menuLine" />
          </div>
        </div>
      </nav>
      {isDropdown && (
        <div
          className="dropdown"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {dropItems.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsDropdown(!isDropdown)}
                className="drop-item"
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
