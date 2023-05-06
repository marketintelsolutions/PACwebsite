import React from "react";
import { footer } from "../utils/data";

const Footer = () => {
  return (
    <footer>
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
      </div>
    </footer>
  );
};

export default Footer;
