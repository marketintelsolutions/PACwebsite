import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrowRight from "../../assets/logos/arrowRight.svg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import moment from "moment";
import { arrangeAndAddTimeAgo, limitStringTo50Characters, limitStringTo70Characters } from "../../utils/resources/arrangeNews";
import CustomLoader from "../../components/resources/CustomLoader";
import { getBlogDetails } from "../../utils/helpers/admin/fetchPosts"
import featuredBig from '../../assets/images/featuredBig.png'
import featuredSmall from '../../assets/images/featuredSmall.png'

const StayUpdatedItem = () => {
  // const navigate = useNavigate();

  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    setLoading(true);
    id && getBlogDetails(id, setBlog, setLoading, setFeaturedBlogs);

    const blogList = JSON.parse(localStorage.getItem("posts"));
    // console.log(blogList);
    setBlogs(arrangeAndAddTimeAgo(blogList));
  }, [id]);

  useEffect(() => {
    const blogList = JSON.parse(localStorage.getItem("posts"));

    blogList.sort((a, b) => new Date(b.date) - new Date(a.date));

    const featured = blogList.filter((item) => item.top === true)
    setFeaturedBlogs(featured)
    // console.log(featured, 'featured');
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
              <div className="featured">
                <img src={featuredBlogs[0]?.imgUrl} alt="featuredBig" />
                <Link
                  to={`/resources/stay-updated/${featuredBlogs[0]?.id}`}
                  className="heading">
                  {featuredBlogs[0]?.header}
                </Link>
                <p>{featuredBlogs[0]?.date}</p>
              </div>
              <div className="news-row">
                {
                  featuredBlogs.map((blog, index) => {
                    const { imgUrl, header, date, id } = blog

                    if (index === 0) return
                    return <div className={index < 4 ? "news-item" : "news-item small"}>
                      <div className="image"><img src={imgUrl} alt="featuredSmall" /></div>
                      <Link
                        to={`/resources/stay-updated/${id}`}
                        className="heading"
                      >
                        {limitStringTo50Characters(header)}
                      </Link>
                      {/* <p className="date">February 19, 2022</p> */}
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default StayUpdatedItem;
