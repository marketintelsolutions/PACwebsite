import React from "react";

const CreatePostStayUpdated = () => {
  return (
    <div className="create-post">
      <form>
        <div className="header form-item">
          <label htmlFor="header">Header</label>
          <input type="text" id="header" placeholder="Add title or header" />
        </div>
        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input type="date" className="date-input" id="date" />
        </div>
        <div className="input-image">
          <input type="file" />
        </div>
        <div className="form-item">
          <label htmlFor="image-title">Short Image Title</label>
          <input
            type="text"
            id="image-title"
            placeholder="Add Short Image Title"
          />
        </div>
        <div className="form-item">
          <label htmlFor="title-desc">Short Title Description</label>
          <input
            type="text"
            id="title-desc"
            placeholder="Add Short Title Description"
          />
        </div>
        <div className="form-item">
          <label htmlFor="body">Short Title Description</label>
          <textarea name="body" id="body"></textarea>
        </div>
        <div className="buttons">
          <button className="discard" type="button">
            Discard
          </button>
          <button className="submit" type="button">
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostStayUpdated;
