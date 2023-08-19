import React from "react";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../../components/admin/Dashboard";

const AllPosts = () => {
  const isAuthenticated = localStorage.getItem("isAuth");
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      <Link to="/admin/stay-updated/create-post" className="add-btn">
        Add New Post
      </Link>
      <div className="dashboard">dashboard here</div>
    </Dashboard>
  );
};

export default AllPosts;
