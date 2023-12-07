import React, { useEffect, useRef, useState } from "react";
import worldImage from "../../assets/images/worldImage.svg";
import playCircle from "../../assets/images/playCircle.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import vector from "../../assets/logos/vector.svg";
import vector1 from "../../assets/logos/vector1.svg";
import vector2 from "../../assets/logos/vector2.svg";
import vectorBlue from "../../assets/logos/vectorBlue.svg";
import landingVid from "../../assets/videos/landingVid.mp4";
import LiquidBackground from "../LiquidBackground";
import ButtonAnimation from "../ButtonAnimation";
import { Translate } from "react-auto-translate";
import { itemsData } from "../../utils/landingData";
import { getPosts } from "../../utils/helpers/admin/fetchPosts";
import { Link } from "react-router-dom";
import { limitStringTo70Characters } from "../../utils/resources/arrangeNews";
import CustomLoader from "../resources/CustomLoader";

const SectionFour = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [activeVector, setActiveVector] = useState(vector1);
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollIntervalRef = useRef(null);
  const navigationRef = useRef(null);

  const posts = JSON.parse(localStorage.getItem("posts"));
  const itemsPerPage = 3;
  const totalPages = Math.ceil(postLists.length - 1);

  useEffect(() => {
    posts && localStorage.clear("posts");
    setLoading(true);

    getPosts(setPostLists, setLoading);
  }, []);

  // const startAutoScroll = () => {
  //   scrollIntervalRef.current = setInterval(() => {
  //     handleScroll("right");
  //   }, 3000); // Adjust the interval as needed (e.g., every 3 seconds)
  // };

  // const stopAutoScroll = () => {
  //   clearInterval(scrollIntervalRef.current);
  // };

  const handleScroll = (direction) => {
    if (direction === "left") {
      if (scrollIndex > 0) {
        setScrollIndex(scrollIndex - 1);
      } else {
        setScrollIndex(totalPages - 1);
      }
    } else if (direction === "right") {
      if (scrollIndex < totalPages - 1) {
        setScrollIndex(scrollIndex + 1);
      } else {
        setScrollIndex(0);
      }
    }

    // Additional logic for automatic scrolling
    // if (direction === "auto" && scrollIndex < totalPages - 1) {
    //   setScrollIndex(scrollIndex + 1);
    // } else if (direction === "auto") {
    //   setScrollIndex(0);
    // }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      return handleScroll('right')
    }, 3000)

    return () => clearInterval(interval)
  }, [scrollIndex])

  // // USEEFFECT FOR AUTOSCROLLING
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   const callback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         startAutoScroll();
  //       } else {
  //         stopAutoScroll();
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(callback, options);
  //   if (navigationRef.current) {
  //     observer.observe(navigationRef.current);
  //   }

  //   // Clean up the observer when the component unmounts
  //   return () => {
  //     observer.disconnect();
  //     stopAutoScroll();
  //   };
  // }, []);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const startIndex = scrollIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleFoundations = postLists.slice(scrollIndex, scrollIndex + 3);

  return (
    <section className="section-four">
      <span className="bg-image">
        <LiquidBackground />
      </span>
      <div className="spirit">
        <div
          className="image"
          onMouseOver={() => {
            setActiveVector(vectorBlue);
          }}
          onMouseLeave={() => {
            setActiveVector(vector1);
          }}
        >
          <div className="outer" style={{ backgroundImage: `url(${vector})` }}>
            <div
              className="middle"
              style={{ backgroundImage: `url(${activeVector})` }}
            >
              <div
                className="inner"
                style={{ backgroundImage: `url(${vector2})` }}
              >
                <p className="text">
                  <Translate>OUR SPIRIT</Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items">
          {itemsData.map((item, index) => {
            const { letter, text } = item;

            return (
              <div className="item" key={index}>
                <h1>
                  <Translate>{letter}</Translate>
                </h1>
                <p>
                  <Translate>{text}</Translate>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="middle">
        <div className="image">

          {isVideoPlaying ? (
            <video src={landingVid} autoPlay controls className="world" />
          ) : (
            <><img
              src={playCircle}
              alt="playCircle"
              className="play"
              onClick={toggleVideo}
            /><img src={worldImage} alt="worldImage" className="world" /></>
          )}
        </div>
        <div className="text">
          <p>
            <Translate>
              CCreating Impact through opportunities, strategic alliances and 
              partnerships
            </Translate>
          </p>
          <a>
            <span>
              <Translate>Learn more</Translate>
            </span>
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <h2>
          <Translate>STAY UPDATED</Translate>
        </h2>
        <div className="foundations-container">
          {loading ? (
            <CustomLoader />
          ) : (
            <div className="foundations">
              {visibleFoundations.map((item, index) => {
                const { imgUrl, header, id } = item;
                return (
                  <div
                    className="item"
                    key={index}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                  >
                    <div className="text">
                      <span></span>
                      <p>
                        <Translate>
                          {limitStringTo70Characters(header)}...
                        </Translate>
                      </p>
                      <Link to={`/resources/stay-updated/${id}`}>
                        <Translate> Read more</Translate>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* NAVIGATION */}
        <div ref={navigationRef} className="navigation">
          <span className="arrow" onClick={() => handleScroll("left")}>
            <img src={arrowLeft} alt="arrowLeft" />
          </span>
          <div className="pages">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`page ${index === scrollIndex ? "active" : ""}`}
                onClick={() => setScrollIndex(index)}
              ></span>
            ))}
          </div>
          <span className="arrow" onClick={() => handleScroll("right")}>
            <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
