import React from "react";
import { footer } from "../utils/data";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import phoneTransparent from "../assets/images/phoneTransparent.svg";
import mailTransparent from "../assets/images/mailTransparent.svg";
import footerBg from "../assets/images/footerBg.png";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-center">
        {footer.map((item) => {
          const { heading, items } = item;
          return (
            <div className="item">
              <h2>{heading}</h2>
              <div className="bottom">
                {items.map((i) => (
                  <p>{i}</p>
                ))}
              </div>
            </div>
          );
        })}
        <div className="item">
          <h2>connect with us</h2>
          <div className="bottom">
            <p>subscribe to our newsletter</p>
            <div className="input">
              <input type="text" placeholder="Email Address" />
              <button>subscribe</button>
            </div>
            <p>
              <span>
                <img src={phoneTransparent} alt="phoneTransparent" />
              </span>{" "}
              + 234-(1)-271-6899
            </p>
            <p className="email">
              <span>
                <img src={mailTransparent} alt="mailTransparent" />
              </span>{" "}
              info@panafricancapitalholdings.com
            </p>
            <h3>follow us</h3>
            <div className="icons">
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="icon">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="icon">
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
