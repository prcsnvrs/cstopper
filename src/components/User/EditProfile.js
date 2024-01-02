import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="texts">
            <h1>Profile</h1>
            <div className="form-container">
          <div className="user-container">
            <div className="user-icon">
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ color: "white", fontSize: "90px" }}
              />
            </div>
            <div className="user-info">
              <span style={{ color: "white", fontSize: "20px" }}>Username</span>
            </div>
          </div>
          <form className="profile-form ">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Change Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter new password"
              />
            </div>
            <button type="submit" className="centered-button submit-button">
              <span
                style={{ color: "white", fontSize: "20px", paddingTop: "5px" }}
              >
                Save Changes
              </span>
            </button>
          </form>
        </div>
      </div>        
    </div>
    </div>
  );
};

export default Dashboard;
