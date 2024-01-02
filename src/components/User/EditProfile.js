import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

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
                  style={{ color: "white", fontSize: "90px", textAlign: "center", paddingTop: "20px" }}
                />
              </div>
              <div className="user-info">
                <span style={{ color: "white", fontSize: "23px" }}>
                  Username
                </span>
              </div>
            </div>
            <form className="profile-form ">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Change Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <button type="submit" className="button">
                SAVE CHANGES
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
