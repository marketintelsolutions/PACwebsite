import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrowRight from "../../assets/logos/arrowRight.svg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import moment from "moment";
import { arrangeAndAddTimeAgo } from "../../utils/resources/arrangeNews";
import CustomLoader from "../../components/resources/CustomLoader";

const StayUpdatedItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);

    setLoading(true);

    id && getBlogDetails();

    const blogList = JSON.parse(localStorage.getItem("posts"));
    console.log(blogList);
    setBlogs(arrangeAndAddTimeAgo(blogList));

    console.log(arrangeAndAddTimeAgo(blogList));
  }, [id]);

  // useEffect(() => {}, []);

  const getBlogDetails = async () => {
    const docRef = doc(db, "stayUpdated", `${id}`);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setLoading(false);
  };
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
                  const { id, header, timeAgo } = item;
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
        </>
      )}
    </section>
  );
};

export default StayUpdatedItem;
