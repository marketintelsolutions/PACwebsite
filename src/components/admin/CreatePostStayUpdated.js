import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsCalendar2Date } from "react-icons/bs";
import selectImage from "../../assets/images/myImage.svg";

const CreatePostStayUpdated = () => {
  const [formData, setFormData] = useState({
    header: "",
    date: "",
    imgUrl: null,
    imageTitle: "",
    titleDesc: "",
    body: "",
  });
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const postCollectionRef = collection(db, "stayUpdated");
  let navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `${image?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setFormData((prev) => ({ ...prev, imgUrl: downloadUrl }));
            console.log("hello");
          });
        }
      );
    };

    formData && uploadFile();
  }, [image]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      const selectedImage = files[0];
      setImage(selectedImage);
      console.log(image);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDiscard = () => {
    // Handle discard logic
  };

  const handleSaveAndContinue = async () => {
    const { header, date, imgUrl, imageTitle, titleDesc, body } = formData;

    if (!header || !date || !imgUrl || !imageTitle || !titleDesc || !body) {
      alert("kindly fill all fields");
      return;
    }
    // Handle save and continue logic
    console.log("hey there");
    await addDoc(postCollectionRef, { ...formData });
    // await addDoc(postCollectionRef, { title: "hello" });
    console.log("entered");
    navigate("/admin");
  };

  return (
    <div className="create-post">
      <form>
        <div className="header form-item">
          <label htmlFor="header">Header</label>
          <input
            type="text"
            id="header"
            name="header"
            placeholder="Add title or header"
            value={formData.header}
            onChange={handleChange}
          />
        </div>
        <div className="form-item date-item">
          <label htmlFor="date">Date</label>
          <label htmlFor="date" className="custom">
            {formData.date || "Add or change date"}
            <span>
              <BsCalendar2Date />
            </span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="image-item">
          <label htmlFor="image">
            <img src={selectImage} alt="selectImage" />
            <p>{image ? image.name : "No Image Selected"}</p>
            <button type="button">Replace image</button>
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        {/* {progress > 0 && (
          <>
            <progress value={progress} max="100" />
            {progress}%
          </>
        )} */}
        <div className="form-item">
          <label htmlFor="image-title">Short Image Title</label>
          <input
            type="text"
            id="image-title"
            name="imageTitle"
            placeholder="Add Short Image Title"
            value={formData.imageTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="title-desc">Short Title Description</label>
          <input
            type="text"
            id="title-desc"
            name="titleDesc"
            placeholder="Add Short Title Description"
            value={formData.titleDesc}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="body">Body Of Article</label>
          <textarea
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="discard" type="button" onClick={handleDiscard}>
            Discard
          </button>
          <button
            className="submit"
            type="submit"
            onClick={handleSaveAndContinue}
            disabled={progress !== null && progress < 100}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostStayUpdated;
