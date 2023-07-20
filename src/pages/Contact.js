import React from "react";
import SectionOne from "../components/about/SectionOne";
import contactBg from "../assets/images/contactBg.png";
import contactMapOne from "../assets/images/contactMapOne.png";
import contactMapTwo from "../assets/images/contactMapTwo.png";

const Contact = () => {
  return (
    <div className="contact">
      <SectionOne color="#38B6FF" text="Contact Us" img={contactBg} />
      <div className="contact-section-two map-item">
        <div className="heading">
          <h1>Connect with PAC</h1>
          <span></span>
          <p>
            Connect with the right client relationship and specialist teams to
            move you forward
          </p>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="title item">
              <h2>PAC Holdings</h2>
              <div className="text">
                <p>Plot 8A, Elsie Femi Pearse,</p>
                <p>Off Adeola Odeku, P.O. Box 70823,</p>
                <p>Victoria Island</p>
                <p>Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="telephone item">
              <h2>Telephone</h2>
              <div className="text">
                <p>+234 (0) 271 6899</p>
                <p>+234 (0) 271 6893</p>
              </div>
            </div>
            <div className="email item">
              <h2>Email us</h2>
              <div className="text">
                <a href="info@panafricancapitalholdings.com">
                  info@panafricancapitalholdings.com
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={contactMapOne} alt="contactMapOne" />
          </div>
        </div>
      </div>
      <div className="contact-section-three"></div>
      <div className="contact-section-four map-item">
        <div className="bottom">
          <div className="right">
            <img src={contactMapTwo} alt="contactMapOne" />
          </div>
          <div className="left">
            <div className="title item">
              <h2>PAC Holdings</h2>
              <div className="text">
                <p>PanAfrican Capital (GH) Ltd.8, Blohum Street,</p>
                <p>Dzorwulu, , Along Dzorwulu Road P.M.B CT 252,</p>
                <p>Cantonments, Accra</p>
                <p>Accra, Ghana.</p>
              </div>
            </div>
            <div className="telephone item">
              <h2>Telephone</h2>
              <div className="text">
                <p>+ 233 (0) 262 727400</p>
              </div>
            </div>
            <div className="email item">
              <h2>Email us</h2>
              <div className="text">
                <a href="info@panafricancapitalholdings.com">
                  info@panafricancapitalholdings.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
