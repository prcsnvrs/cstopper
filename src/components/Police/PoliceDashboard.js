// PoliceDashboard.js
import React from 'react';
import './Design/police.css';
import PoliceSidebar from './PoliceSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleUser,
    faPencil
} from '@fortawesome/free-solid-svg-icons';

const PoliceDashboard = () => {
  return (
    <div>
      <PoliceSidebar />
       {/* Navbar */}
       <nav className="police-navbar">
        <div className='logo-space'>
          <div className="logo-container">
            <span className="big-letter">C</span>
            <span className="small-letter">S</span>
            <span className="space"> </span>
          </div>
          <div className="police-text">POLICE</div>
        </div>  
        <div className='nav-interactives'>
          <div className='navbar-item'>
            <FontAwesomeIcon icon={faBell} size='2x' />
          </div>
          <div className='navbar-user'>
            <div className='text'>Firstname Lastname</div>
          </div>
          <div className='navbar-item'>
            <FontAwesomeIcon icon={faCircleUser} size='3x' />
          </div>
          <div className='navbar-item'>
            <FontAwesomeIcon icon={faPencil} size='2x' />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="police-dashboard-content">
        <div className="grid-item grid-item-1">Item 1</div>
        <div className="grid-item grid-item-2">Item 2</div>
        <div className="grid-item grid-item-3">Item 3</div>
        <div className="grid-item grid-item-4">Item 4</div>
        <div className="grid-item grid-item-5">Item 5</div>
        <div className="grid-item grid-item-6">Item 6</div>
      </div>
    </div>
  );
};

export default PoliceDashboard;
