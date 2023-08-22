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
import CustomLoader from "../../components/resources/CustomLoader";
import { limitStringTo70Characters } from "../../utils/resources/arrangeNews";
import { getPosts } from "../../utils/helpers/admin/fetchPosts";

const StayUpdated = () => {
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const posts = JSON.parse(localStorage.getItem("posts"));

  useEffect(() => {
    posts && localStorage.clear("posts");
    setLoading(true);

    return () => getPosts(setPostLists, setLoading);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log(postLists);

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
            {loading ? (
              <CustomLoader />
            ) : (
              postLists.map((item, index) => {
                const { id, header, imgUrl, published } = item;

                if (!published) return;

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
              })
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
