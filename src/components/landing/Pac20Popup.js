import React, { useEffect, useState } from "react";
import { Translate } from "react-auto-translate";

const PAC20_LINK = "https://pacholdingsat20.panafricancapitalholdings.com/";

const Pac20Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), 600);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="pac20-popup" onClick={() => setIsOpen(false)}>
      <div className="pac20-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="pac20-close"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/pac20.png`}
          alt="PAC Holdings at 20"
        />
        <a className="pac20-cta" href={PAC20_LINK}>
          <Translate>Learn More</Translate>
        </a>
      </div>
    </div>
  );
};

export default Pac20Popup;
