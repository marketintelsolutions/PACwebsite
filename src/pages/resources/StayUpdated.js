import React, { useEffect, useState } from "react";
import SectionOne from "../../components/about/SectionOne";
import vendorbg from "../../assets/images/vendorbg.png";
import Pagination from "../../components/resources/Pagination";
import { Link } from "react-router-dom";
import LiquidBackground from "../../components/LiquidBackground";
import { Translate } from "react-auto-translate";
import CustomLoader from "../../components/resources/CustomLoader";
import { arrangeAndAddTimeAgo, limitStringTo70Characters } from "../../utils/resources/arrangeNews";
import { getPosts } from "../../utils/helpers/admin/fetchPosts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const StayUpdated = () => {
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletter, setNewsletter] = useState('')
  const postsPerPage = 9;

  const posts = JSON.parse(localStorage.getItem("posts"));

  const postCollectionRef = collection(db, "newsletter");


  const getNewsletters = async () => {
    const snapshot = await getDocs(postCollectionRef);
    const newsletters = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('newsletter gotten');
    console.log(newsletters);
    newsletters[0] && setNewsletter(newsletters[0].newsletter); // Pre-fill with the first newsletter
  };

  useEffect(() => {
    posts && localStorage.clear("posts");
    setLoading(true);

    getPosts(setPostLists, setLoading)

  }, []);


  useEffect(() => {
    window.scroll(0, 0);
    getNewsletters();
  }, []);

  const totalPosts = postLists.length
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = postLists.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

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
              currentPosts.map((item, index) => {
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
          />
          <div className="newsletter-download"><p><Translate>Get our latest Newsletter</Translate></p><a href={newsletter} target='_blank'><Translate>Download</Translate></a></div>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
