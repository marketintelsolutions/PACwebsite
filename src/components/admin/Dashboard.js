import React from "react";
import { Link, useLocation } from "react-router-dom";

const Dashboard = ({ children }) => {
  const location = useLocation(); // Get the current location
  const paths = location.pathname.split('/')

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <div className="items">
          <Link
            to="/admin/stay-updated"
            className={`item ${paths.includes('stay-updated') ? "active" : ""}`}
          >
            Stay Updated
          </Link>
          <Link
            to="/admin/subscribers"
            // className={`item ${location.pathname === "/admin/subscribers" || location.pathname === '/admin/subscribers/send-email' ? "active" : ""
            //   }`}
            className={`item ${paths.includes('subscribers') ? "active" : ""
              }`}
          >
            Subscribers
          </Link>
        </div>
      </div>
      <div className="center">{children}</div>
    </div>
  );
};

export default Dashboard;
