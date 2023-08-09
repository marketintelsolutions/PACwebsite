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
import {
  ourPortfolio,
  joinUs,
  resources,
  countries,
  languages,
} from "../utils/navData";

const Navbar = ({ isDropdown, setIsDropdown, logo }) => {
  const [dropItems, setDropItems] = useState([]);
  const [position, setPosition] = useState({});
  const [dropdown, setDropdown] = useState(false);

  // prenav
  // const [country, setCountry] = useState("Nigeria");
  const [preDropItems, setPreDropItems] = useState([]);
  const [isPrenavDropdown, setIsPrenavDropdown] = useState(true);
  const [prePosition, setPrePosition] = useState({});
  // const [language, setLanguage] = useState("English");
  const [active, setActive] = useState({
    focus: "",
    country: "Nigeria",
    language: "English",
  });

  // TOGGLE FOR PRENAV
  const togglePreDropdown = (e, items, type) => {
    setIsPrenavDropdown(!isPrenavDropdown);

    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setPrePosition({ top: topPosition, left });
    setPreDropItems(items);

    // console.log(preDropItems);
    setActive({ ...active, focus: `${type}` });
  };

  // TOGGLE FOR NAVBAR
  const toggleDropdown = (e, items) => {
    setIsDropdown(!isDropdown);

    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setPosition({ top: topPosition, left });
    setDropItems(items);
  };

  // ONCLICK FOR PRENAV DROPDOWN
  const setActiveItem = (item) => {
    if (active.focus === "country") {
      setActive({ ...active, focus: "", country: item });
      // console.log("entered");
    } else if (active.focus === "language") {
      setActive({ ...active, focus: "", language: item });
    }
    // console.log("no entry");
    setIsPrenavDropdown(false);
  };

  return (
    <>
      {/* PRENAV */}
      <div
        className={`${
          active.country !== "Nigeria" ? "pre-nav pre-nav-selected" : "pre-nav"
        }`}
      >
        <div className="center">
          <div
            className="predropdown item"
            onClick={(e) => togglePreDropdown(e, countries, "country")}
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
            onClick={(e) => togglePreDropdown(e, languages, "language")}
          >
            <p>{active.language}</p>
            <span>
              {" "}
              <img src={arrowDownFill} alt="arrowDownFill" />
            </span>
          </div>
        </div>
      </div>

      {/*------- NAVBAR -------*/}
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

      {/* PRENAV DROPDOWN */}
      {isPrenavDropdown && (
        <div
          className="pre-dropdown dropdown"
          style={{
            // top: `${prePosition.top}px`,
            top: "72px",
            left: `${prePosition.left}px`,
          }}
        >
          {preDropItems.map((item, index) => {
            if (item === active.country || item === active.language) return;
            return (
              <p
                className="drop-item"
                key={index}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
      )}

      {/* NAVBAR DROPDOWN */}
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
