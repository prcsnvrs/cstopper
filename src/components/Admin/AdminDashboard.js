import React from 'react';
import './design/dashboard.css';
import Navbar from './Navbar'; // Import Navbar component

const Dashboard = () => {
  return (
    <div className='dash'>
      <Navbar />
      <div className='body'>
        <div className='texts'>
          <h1>DASHBOARD</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
