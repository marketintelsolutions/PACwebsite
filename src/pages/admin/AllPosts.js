import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../../components/admin/Dashboard";
import deleteLogo from "../../assets/logos/delete.svg";
import { getPosts } from "../../utils/admin/fetchPosts";
import CustomLoader from "../../components/resources/CustomLoader";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = localStorage.getItem("isAuth");

  useEffect(() => {
    setLoading(true);
    return () => getPosts(setPosts, setLoading);
  }, []);

  // console.log(posts);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const postDocRef = doc(db, "stayUpdated", id); // Create the document reference
      await deleteDoc(postDocRef); // Delete the document using the reference
      // setLoading(false);

      getPosts(setPosts, setLoading);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      <Link to="/admin/stay-updated/create-post" className="add-btn">
        Add New Post
      </Link>
      <div className="dashboard">
        {loading ? (
          <CustomLoader />
        ) : (
          <table>
            <thead>
              <tr>
                <td>S/N</td>
                <td>Article Name</td>
                <td>Date</td>
                <td>Unpublished</td>
                <td>Published</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>

            <tbody>
              {posts?.map((post, index) => {
                const { header, id, date } = post;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{header}</td>
                    <td>{date}</td>
                    <td>
                      {/* <input type="radio" name="state" /> */}
                      <button type="button">c</button>
                    </td>
                    <td>
                      {/* <input type="radio" name="state" checked /> */}
                      <button type="button">c</button>
                    </td>
                    <td>Edit</td>
                    <td>
                      <img
                        src={deleteLogo}
                        alt="deleteLogo"
                        className="delete"
                        onClick={() => handleDelete(id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Dashboard>
  );
};

export default AllPosts;
