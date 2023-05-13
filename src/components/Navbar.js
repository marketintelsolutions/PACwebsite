import React from "react";
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
              <span>
                <img src={arrowDownBlue} alt="arrowDownBlue" />
              </span>
              <div className="dropdown">
                <Link to="/portfolio/financial-services">
                  financial services
                </Link>
                <p>hospitality & entertainment</p>
                <Link to="/portfolio/real-estate">
                  real estate & infrastructure
                </Link>
                <p>Agro-allied & FMCG</p>
                <p>renewable energy</p>
                <p>technology and payment system</p>
                <p>healthcare</p>
              </div>
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
