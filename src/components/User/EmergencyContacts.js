import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="texts">
          <h1>Emergency Contacts</h1>
          <div className="subtxt">List of Emergency Police Contacts</div>
          <div className="outer-container">
            <div className="subcon">
              <div className="user-icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "white", fontSize: "30px" }}
                />
                <div className="contactname">Mabolo Police Station</div>
                <div className="contactnum">09325924464</div>
              </div>
            </div>
            <div className="subcon">
              <div className="user-icon">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "white", fontSize: "30px" }}
                />
                <div className="contactname">Parian Police Station</div>
                <div className="contactnum">09164216215</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
