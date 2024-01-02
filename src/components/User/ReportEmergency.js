import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReportEmergency = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="texts">
          <h1>Report Emergency</h1>
          <div className="subtxt">File a detailed emergency report</div>
          <div className="form-container" style={{marginTop: "20px"}}>
            <form className="profile-form ">
              <div className="form-group">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="emergencytype"
                  name="emergencytype"
                  placeholder="Type of Emergency"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="comments"
                  id="comments"
                  placeholder="Detailed Report of the Emergency"
                  rows="10"
                  cols="40"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button type="submit" className="button">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportEmergency;
