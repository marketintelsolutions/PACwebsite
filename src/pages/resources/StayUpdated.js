import React, { useEffect, useState } from "react";
import SectionOne from "../../components/about/SectionOne";
import vendorbg from "../../assets/images/vendorbg.png";
import { foundations } from "../../utils/data";
import Pagination from "../../components/resources/Pagination";
import { Link } from "react-router-dom";
import LiquidBackground from "../../components/LiquidBackground";
import { Translate } from "react-auto-translate";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const StayUpdated = () => {
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const postCollectionRef = collection(db, "stayUpdated");

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    return () => getPosts();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // if (loading) return <h2>Loading...</h2>;

  return (
    <section className="stay-updated">
      <SectionOne color="#38B6FF" text="Stay Updated" img={vendorbg} />
      <div className="animation animate-left">
        <LiquidBackground />
      </div>
      <div className="section-two">
        <div className="foundations-container">
          <div className="foundations">
            {postLists.map((item, index) => {
              const { id, header, imgUrl } = item;
              return (
                <div
                  className="item"
                  key={index}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                >
                  <div className="text">
                    <span></span>
                    <p>
                      <Translate>{header}</Translate>
                    </p>
                    <Link to={`/resources/stay-updated/${id}`}>
                      <Translate> Read more</Translate>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
