import React, { useState } from "react";
// import paclogo from "../assets/logos/paclogo.svg";
import arrowDownFill from "../assets/logos/arrowDownFill.svg";
import arrowDownBlue from "../assets/logos/arrowDownBlue.svg";
import mail from "../assets/logos/mail.svg";
import phone from "../assets/logos/phone.svg";
import calender from "../assets/logos/calender.svg";
import clock from "../assets/logos/clock.svg";
import menuLine from "../assets/logos/menuLine.svg";
import { Link } from "react-router-dom";
import { ourPortfolio, joinUs, resources } from "../utils/navData";

const Navbar = ({ isDropdown, setIsDropdown, logo }) => {
  const [dropItems, setDropItems] = useState([]);
  const [position, setPosition] = useState({});
  const [dropdown, setDropdown] = useState(false);

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
            <img src={logo} alt="logo" />
          </Link>
          <div className={`${dropdown ? "nav-items active" : "nav-items"}`}>
            <div className="item">
              <Link to="/about" onClick={() => setDropdown(false)}>
                About
              </Link>
            </div>
            <div className="item border">
              <Link to="/portfolio" onClick={() => setDropdown(false)}>
                Our Portfolio
              </Link>
              <span
                onClick={(e) => toggleDropdown(e, ourPortfolio)}
                className="portfolio-arrow"
              >
                <img
                  className="portfolio-arrow"
                  src={arrowDownBlue}
                  alt="arrowDownBlue"
                />
              </span>
            </div>
            <div className="item border">
              <p>Resources</p>
              <span
                onClick={(e) => toggleDropdown(e, resources)}
                className="portfolio-arrow"
              >
                <img
                  src={arrowDownBlue}
                  alt="arrowDownBlue"
                  className="portfolio-arrow"
                />
              </span>
            </div>
            <div className="item border">
              <p>Join Us</p>
              <span
                onClick={(e) => toggleDropdown(e, joinUs)}
                className="portfolio-arrow"
              >
                <img
                  src={arrowDownBlue}
                  alt="arrowDownFill"
                  className="portfolio-arrow"
                />
              </span>
            </div>
            <div className="item">
              <Link to="/csr" onClick={() => setDropdown(false)}>
                CSR
              </Link>
            </div>
            <div className="item">
              <Link to="/contact" onClick={() => setDropdown(false)}>
                Contact
              </Link>
            </div>
          </div>
          <div className="menu" onClick={() => setDropdown(!dropdown)}>
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
            if (item.external) {
              return (
                <a
                  href="https://pacresearch.org/"
                  className="drop-item"
                  onClick={() => setIsDropdown(!isDropdown)}
                  target="_blank"
                  key={index}
                  rel="noreferrer"
                >
                  {item.text}
                </a>
              );
            }
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => {
                  setIsDropdown(!isDropdown);
                  setDropdown(false);
                }}
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
