import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <div className="items">
          <Link className="item active">Stay Updated</Link>
          <Link className="item">Subscribers</Link>
        </div>
      </div>
      <div className="center">{children}</div>
    </div>
  );
};

export default Dashboard;
