import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowRight from "../../assets/logos/arrowRight.svg";
import fashion from "../../assets/images/fashion.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import moment from "moment";

const StayUpdatedItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    id && getBlogDetails();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const getBlogDetails = async () => {
    const docRef = doc(db, "stayUpdated", `${id}`);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
    setLoading(false);
  };
  // console.log(blog, "blog");

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };

  return (
    <section className="stay-updated-item">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="content">
          <div className="btn-container">
            <button onClick={handleGoBack}>
              Stay Updated <img src={arrowRight} alt="arrowRight" />{" "}
            </button>
          </div>
          <h1>{blog.header}</h1>
          <p className="date">{moment(blog.date).format("MMM Do YYYY")}</p>
          <div className="image">
            <img src={blog.imgUrl} alt="fashion" />
            <span>{blog.imageTitle}</span>
          </div>
          <div className="short-desc">
            <p>{blog.titleDesc}</p>
          </div>
          <div className="body">
            <p>{blog.body}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default StayUpdatedItem;
