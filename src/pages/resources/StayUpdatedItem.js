import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrowRight from "../../assets/logos/arrowRight.svg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import moment from "moment";
import { arrangeAndAddTimeAgo } from "../../utils/resources/arrangeNews";
import CustomLoader from "../../components/resources/CustomLoader";
import { getBlogDetails } from "../../utils/helpers/admin/fetchPosts"
import featuredBig from '../../assets/images/featuredBig.png'
import featuredSmall from '../../assets/images/featuredSmall.png'

const StayUpdatedItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);

    setLoading(true);

    id && getBlogDetails(id, setBlog, setLoading);

    const blogList = JSON.parse(localStorage.getItem("posts"));
    console.log(blogList);
    setBlogs(arrangeAndAddTimeAgo(blogList));
  }, [id]);

  useEffect(() => {
    const featured = blogs.filter((item) => item.top === true)
    // console.log(featured);
    setFeaturedBlogs(featured)
  }, [blogs]);

  // console.log(blog, "blog");

  // const handleGoBack = () => {
  //   navigate(-1); // Go back one step in the history
  // };

  return (
    <section className="stay-updated-item">
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <div className="btn-container">
            {/* <button onClick={handleGoBack}>
              Stay Updated <img src={arrowRight} alt="arrowRight" />{" "}
            </button> */}
            <Link to={"/resources/stay-updated"} className="back">
              Stay Updated <img src={arrowRight} alt="arrowRight" />
            </Link>
          </div>
          <div className="container">
            <div className="content">
              <h1>{blog.header}</h1>
              <p className="date">{moment(blog.date).format("MMM Do YYYY")}</p>
              <div className="image">
                <img src={blog.imgUrl} alt="fashion" />
                <span>{blog.imageTitle}</span>
              </div>
              <div className="short-desc">
                <p>{blog.titleDesc}</p>
              </div>
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              >
                {/* <p>{blog.body}</p> */}
              </div>
            </div>
            <div className="right">
              <h2>Latest News</h2>
              <div className="items">
                {blogs.map((item) => {
                  const { id, header, timeAgo, published } = item;
                  if (!published) return;

                  return (
                    <div className="item">
                      <p className="time">{timeAgo}</p>
                      <Link
                        to={`/resources/stay-updated/${id}`}
                        className="text"
                      >
                        {header}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="top-news">
            <div className="top">
              <div className="box"></div>
              <h2>Top News</h2>
              <div className="line"></div>
            </div>
            <div className="news">
              {
                featuredBlogs.map((blog) => {

                })
              }
              <div className="featured">
                <img src={featuredBig} alt="featuredBig" />
                <h3>PAC Capital Commits to a 3-year Sponsorship Agreement with CANEX presents Africa @Portugal Fashion Week</h3>
                <p>February 19, 2022</p>
              </div>
              {/* <div className="others"> */}
              <div className="news-row">
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="news-row">
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="news-row">
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="news-item">
                  <img src={featuredSmall} alt="featuredSmall" />
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default StayUpdatedItem;
