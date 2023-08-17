import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
