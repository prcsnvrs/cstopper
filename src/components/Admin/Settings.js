import React from 'react';
import './design/settings.css';
import Navbar from './Navbar'; // Import Navbar component

const Settings = () => {
  return (
    <div className='settings'>
      <Navbar />
      <div className='body'>
        <div className='texts'>
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
