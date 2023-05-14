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

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <>
      <div className="pre-nav">
        <div className="center">
          <div className="dropdown item">
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
          <div className="dropdown item">
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
            <Link to="/about" className="item">
              <p>About</p>
            </Link>
            <div className="item">
              <Link to="/portfolio">Our Portfolio</Link>
              <span onClick={() => setIsDropdown(!isDropdown)}>
                <img src={arrowDownBlue} alt="arrowDownBlue" />
              </span>
              {isDropdown && (
                <div className="dropdown">
                  <Link
                    to="/portfolio/financial-services"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    financial services
                  </Link>
                  <Link
                    to="/portfolio/hospitality"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    hospitality & entertainment
                  </Link>
                  <Link
                    to="/portfolio/real-estate"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    real estate & infrastructure
                  </Link>
                  <Link
                    to="/portfolio/agro-allied"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    Agro-allied & FMCG
                  </Link>
                  <Link
                    to="/portfolio/renewable"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    renewable energy
                  </Link>
                  <Link
                    to="/portfolio/technology"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    technology and payment system
                  </Link>
                  <Link
                    to="/portfolio/healthcare"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    healthcare
                  </Link>
                </div>
              )}
            </div>
            <div className="item">
              <p>Resources</p>
              <span>
                <img src={arrowDownBlue} alt="arrowDownBlue" />
              </span>
            </div>
            <div className="item">
              <p>Join Us</p>
              <span>
                <img src={arrowDownBlue} alt="arrowDownFill" />
              </span>
            </div>
            <div className="item">
              <p>Contact</p>
            </div>
          </div>
          <div className="menu">
            <img src={menuLine} alt="menuLine" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
