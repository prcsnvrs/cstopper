import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings() {
  const UpButton = {
    text1: "Edit Profile",
  };
  const BottomButton = {
    text1: "Connect to Module",
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="texts">
          <h1>Settings</h1>
          <div className="top-button">
            <button className="centered-button">
              <span
                style={{
                  color: "white",
                  fontSize: "25px",
                  paddingTop: "10px",
                  height: "40px",
                  width: "500px",
                }}
              >
                {UpButton.text1}
              </span>
            </button>
          </div>
          <div className="bottom-button">
            <button className="centered-button">
              <span
                style={{
                  color: "white",
                  fontSize: "25px",
                  paddingTop: "10px",
                  height: "40px",
                  width: "500px",
                }}
              >
                {BottomButton.text1}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
