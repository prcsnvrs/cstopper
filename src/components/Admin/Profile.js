import React from 'react';
import './design/profile.css';
import Navbar from './Navbar'; // Import Navbar component

const Profile = () => {
  return (
    <div className='profile'>
      <Navbar />
      <div className='body'>
        <div className='texts'>
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
