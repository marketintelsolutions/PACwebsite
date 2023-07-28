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

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-center">
        <div className="item small">
          <div className="bottom">
            <p>Home</p>
            <p>About</p>
            <p>Resources</p>
            <p>Portfolio</p>
          </div>
        </div>
        {footer.map((item) => {
          const { heading, items } = item;
          return (
            <div className="item large">
              <h2>{heading}</h2>
              <div className="bottom">
                {items.map((i) => {
                  if (i.external) {
                    return (
                      <a href={i.link} target="_blank" rel="noreferrer">
                        {i.text}
                      </a>
                    );
                  }
                  return <Link to={i.link}>{i.text}</Link>;
                })}
              </div>
            </div>
          );
        })}
        <div className="item ">
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
