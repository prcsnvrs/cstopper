import React from "react";
import "./design/dashboard.css";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="texts">
          <h1>Add Contacts</h1>
          <div className="subtxt">
            Ensure your safety by adding emergency contacts.
          </div>
          <div className="outer-container">
            <div className="subcon">
              <table className="contacts-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </td>
                    <td>
                      <div className="contact-details">
                        <div className="contactname">Parian Police Station</div>
                        <div className="contactnum">09164216215</div>
                      </div>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="iconAlignRight"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="subcon">
              <table className="contacts-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </td>
                    <td>
                      <div className="contact-details">
                        <div className="contactname">Parian Police Station</div>
                        <div className="contactnum">09164216215</div>
                      </div>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="iconAlignRight"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="submit" className="button">
                ADD CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
