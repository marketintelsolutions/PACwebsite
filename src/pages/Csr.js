import React, { useEffect, useState } from "react";
import csrBg from "../assets/images/csrBg.png";
import csrWomen from "../assets/images/csrWomen.png";
import playWhite from "../assets/images/playWhite.svg";
import csrLogo from "../assets/logos/csrLogo.svg";
import cancelWhite from "../assets/logos/cancelWhite.svg";
import paclogo from "../assets/images/paclogo.svg";
import { blocks, goals } from "../utils/csrData";
import { useNavigate } from "react-router-dom";
import LiquidBackground from "../components/LiquidBackground";
import ButtonAnimation from "../components/ButtonAnimation";
import { Translate } from "react-auto-translate";

const Csr = ({ setNavlogo }) => {
  const [grey, setGrey] = useState(Array.from(goals).fill(false));
  const [modal, setModal] = useState(false)
  const [modalItem, setModalItem] = useState({})

  const navigate = useNavigate();

  const newArray = blocks.map((item) => {
    return { ...item, white: false };
  });

  useEffect(() => {
    window.scroll(0, 0);
    setNavlogo(csrLogo);

  }, []);

  useEffect(() => {
    const unlisten = navigate((location, action) => {
      if (action === "POP") {
        console.log("User is leaving the page");
        // Do something before the user leaves the page
        // setNavlogo(paclogo);
      }
    });

    return () => {
      console.log("Component is unmounting");
      // Do something before the component unmounts
      setNavlogo(paclogo);
    };
  }, [navigate]);

  const [items, setItems] = useState(newArray);


  return (
    <section className="csr">
      <div
        className="csr-section-one"
        style={{ backgroundImage: `url(${csrBg})` }}
      >
        <div className="center">
          <h3>
            <Translate>Make An Impact</Translate>
          </h3>
          <h1>
            <Translate>Shape the World one Life at a time</Translate>
          </h1>
          <p>
            <Translate>
              The impact of an individual is felt more when part of a
              collective. By empowering others, we shape mindsets, build
              capacity and the future with our collective efforts
            </Translate>
          </p>
        </div>
      </div>
      <div className="animation animate-left">
        <LiquidBackground />
      </div>
      <div className="csr-section-two">
        <div className="content">
          <div className="left">
            <img src={csrWomen} alt="csrWomen" />
            <img src={playWhite} alt="playWhite" className="play" />
          </div>
          <div className="right">
            <h1>
              <Translate>
                A Dream In Their Mind Is Our Mission Defined
              </Translate>
            </h1>
            <span></span>
            <p>
              <Translate>
                We recognize the need for immediate action in our communities
                and confidence that our interventions will support other efforts
                to bring development that balances social, economic, and
                environmental sustainability.
              </Translate>
            </p>
            <button>
              <span>
                <Translate>Learn more</Translate>
              </span>
              {/* <div className="liquid">
                <ButtonAnimation />
              </div> */}
            </button>
          </div>
        </div>
      </div>

      <div className="csr-section-three">
        {modal ? <div className="content modal-content">
          <div className="image"><img src={cancelWhite} alt="cancelWhite" onClick={() => setModal(false)} /></div>
          <h1>{modalItem.text}</h1>
          <p>{modalItem.description}</p>
        </div> : <div className="content">
          {items.map((item, index) => {
            const { image, text, whiteImg, description } = item;
            let border = index !== blocks.length - 1;
            return (
              <div
                className={border ? "csr-item border" : "csr-item"}
                key={index}
                onMouseEnter={() => {
                  const modifiedArray = newArray.map((item, i) => {
                    if (i !== index) return item;
                    return { ...item, white: true };
                  });
                  setItems(modifiedArray);
                }}
                onMouseLeave={() => setItems(newArray)}
                onClick={() => {
                  setModal(true)
                  setModalItem(item)
                }}
              >
                <img src={items[index].white ? whiteImg : image} alt={image} />
                <p>
                  <Translate>{text}</Translate>
                </p>
              </div>
            );
          })}
        </div>}
      </div>

      <div className="csr-section-four">
        <div className="center">
          <h1>
            <Translate>Sustainable Development Goals</Translate>
          </h1>
          <div className="line">
            <span className="red"></span>
            <span className="white"></span>
          </div>
          <div className="goals">
            {goals.map((item, index) => {
              const { image, logo, number, text, color, greyLogo } = item;
              return (
                <div
                  className="goal"
                  style={{ backgroundImage: `url(${image})` }}
                  onMouseEnter={() => {
                    const newArray = [...grey];
                    newArray[index] = true;
                    setGrey(newArray);
                  }}
                  onMouseLeave={() => setGrey(Array.from(goals).fill(false))}
                  key={index}
                >
                  <div
                    className="goal-center"
                    style={{
                      background: `${grey[index] ? "rgba(255, 255, 255, 0.70)" : color
                        }`,
                    }}
                  >
                    <img src={grey[index] ? greyLogo : logo} alt={logo} />
                    <div className="text">
                      <span>
                        <Translate>{number}</Translate>
                      </span>
                      <p>
                        <Translate>{text}</Translate>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="get-involved">
        <button>
          <Translate>Get Involved</Translate>
        </button>
      </div>
    </section>
  );
};

export default Csr;
