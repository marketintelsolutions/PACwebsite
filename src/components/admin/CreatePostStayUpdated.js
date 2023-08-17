import React, { useState } from "react";

const CreatePostStayUpdated = () => {
  const [formData, setFormData] = useState({
    header: "",
    date: "",
    image: null,
    imageTitle: "",
    titleDesc: "",
    body: "",
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDiscard = () => {
    // Handle discard logic
  };

  const handleSaveAndContinue = () => {
    // Handle save and continue logic
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
        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="date-input"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="input-image">
          <input type="file" name="image" onChange={handleChange} />
        </div>
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
          <label htmlFor="body">Short Title Description</label>
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
            type="button"
            onClick={handleSaveAndContinue}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostStayUpdated;
