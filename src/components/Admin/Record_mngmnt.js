import React from 'react';
import './design/record_mngmnt.css';
import Navbar from './Navbar'; // Import Navbar component

const Record_mngmnt = () => {
  return (
    <div className='record'>
      <Navbar />
      <div className='body'>
        <div className='texts'>
          <h1>Record MANAGEMENT</h1>
        </div>
      </div>
    </div>
  );
};

export default Record_mngmnt;
