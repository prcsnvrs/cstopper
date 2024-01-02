import React from "react";
import './design/dashboard.css';
import Sidebar from "./Sidebar"
const Dashboard = () => {
  return (
    <div className='dash'>
      <Sidebar />
      <div className='body'>
        <div className='texts'>
          <h1>Emergency Contacts</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
