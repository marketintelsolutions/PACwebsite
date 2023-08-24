import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../../components/admin/Dashboard";
import deleteLogo from "../../assets/logos/delete.svg";
import sendIcon from "../../assets/logos/sendIcon.svg";
import alert from "../../assets/logos/alert.svg";
import closeModal from "../../assets/logos/closeModal.svg";
import { getSubscribers } from "../../utils/helpers/admin/fetchSubscribers";
import CustomLoader from "../../components/resources/CustomLoader";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import moment from "moment";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState("");

  const isAuthenticated = localStorage.getItem("isAuth");

  useEffect(() => {
    window.scroll(0, 0);
    setLoading(true);
    return () => getSubscribers(setSubscribers, setLoading);
  }, []);

  // console.log(posts);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const postDocRef = doc(db, "subscribers", id); // Create the document reference
      await deleteDoc(postDocRef); // Delete the document using the reference
      // setLoading(false);

      getSubscribers(setSubscribers, setLoading);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  
  

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      {isModal && (
        <div className="modal">
          <div className="modal-center">
            <div className="close-btn" onClick={() => setModal(false)}>
              <img src={closeModal} alt="closeModal" />
            </div>
            <div className="icon">
              <img src={alert} alt="alert" />
            </div>
            <p>Are you sure you want to delete this post?</p>
            <div className="buttons">
              <button
                to="/admin"
                className="button"
                onClick={() => handleDelete(id)}
              >
                Yes, confirm
              </button>
              <button className="grey button" onClick={() => setModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
     <div className="top-btns">
        <input type="checkbox" name="selectall" id="setSubscribers" />
        <div className="options">
            <img src={sendIcon} alt="sendIcon" />
            <img src={deleteLogo} alt="deleteLogo" />
        </div>
     </div>
      <div className="dashboard">
        {loading ? (
          <CustomLoader />
        ) : (
          <table>
            <thead>
              <tr>
                <td>S/N</td>
                <td>Email Address</td>
                <td>Date</td>
                <td>Check</td>
                <td>Delete</td>
              </tr>
            </thead>

            <tbody>
              {subscribers?.map((subscriber, index) => {
                const {email, currentDate} = subscriber
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="email">{email}</td>
                    <td className="date">{moment(currentDate).format('YYYY MM DD')}</td>
                    <td>
                      <input
                        type="checkbox"
                        name={`unpublished${index}`}
                      />
                    </td>
                    <td>
                      <img
                        src={deleteLogo}
                        alt="deleteLogo"
                        className="delete"
                        
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

export default Subscribers;
