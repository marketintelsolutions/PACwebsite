import React from "react";
import phoneLandingImage from "../assets/images/phoneLandingImage.png";
import paclogo from "../assets/logos/paclogo.svg";
import arrowDownFill from "../assets/logos/arrowDownFill.svg";
import arrowDownBlue from "../assets/logos/arrowDownBlue.svg";
import mail from "../assets/logos/mail.svg";
import phone from "../assets/logos/phone.svg";
import calender from "../assets/logos/calender.svg";
import clock from "../assets/logos/clock.svg";

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="section-container">
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
            <div className="logo">
              <img src={paclogo} alt="logo" />
            </div>
            <div className="nav-items">
              <div className="item">
                <p>About</p>
              </div>
              <div className="item">
                <p>Our Portfolio</p>
                <span>
                  <img src={arrowDownBlue} alt="arrowDownBlue" />
                </span>
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
          </div>
        </nav>
        <div className="main-bg">
          <img src={phoneLandingImage} alt="phone-bg" />
          <div className="bg-label">
            <div className="text-center">
              <h1>PAC Holdings</h1>
              <h3>Unlocking Value Across Africa...</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
