import React from "react";
import { footer } from "../utils/data";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import phoneTransparent from "../assets/images/phoneTransparent.svg";
import mailTransparent from "../assets/images/mailTransparent.svg";
import footerBg from "../assets/images/footerBg.png";
import { Link } from "react-router-dom";
import { Translate } from "react-auto-translate";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-center">
        <div className="item small">
          <div className="bottom">
            <p>
              <Translate>Home</Translate>
            </p>
            <p>
              <Translate>About</Translate>
            </p>
            <p>
              <Translate>Resources</Translate>
            </p>
            <p>
              <Translate>Portfolio</Translate>
            </p>
          </div>
        </div>
        {footer.map((item, index) => {
          const { heading, items } = item;
          return (
            <div key={index} className="item large">
              <h2>
                <Translate>{heading}</Translate>
              </h2>
              <div className="bottom">
                {items.map((i) => {
                  if (i.external) {
                    return (
                      <a href={i.link} target="_blank" rel="noreferrer">
                        <Translate>{i.text}</Translate>
                      </a>
                    );
                  }
                  return (
                    <Link to={i.link}>
                      <Translate>{i.text}</Translate>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="item ">
          <h2>
            <Translate>connect with us</Translate>
          </h2>
          <div className="bottom">
            <p>
              <Translate>subscribe to our newsletter</Translate>
            </p>
            <div className="input">
              <input type="text" placeholder="Email Address" />
              <button>
                <Translate>subscribe</Translate>
              </button>
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
            <h3>
              <Translate>follow us</Translate>
            </h3>
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
