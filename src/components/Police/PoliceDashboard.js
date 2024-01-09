// PoliceDashboard.js
import React from 'react'; // Import React
import { render } from 'react-dom'; // Import render
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Design/police.css';
import PoliceSidebar from './PoliceSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleUser,
    faPencil,
    faCar,
    faPeopleRobbery,
    faPersonFallingBurst
} from '@fortawesome/free-solid-svg-icons';

const PoliceDashboard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date =>{
    setDate(date);
  };

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
        <div className="grid-item grid-item-1">
          <FontAwesomeIcon icon={faCar} size='3x' />
          <div className='crime-num'>105</div>
          <div className='crime-desc'>Infraction Reports</div>
        </div>
        <div className="grid-item grid-item-2">
          <FontAwesomeIcon icon={faPeopleRobbery} size='3x' />
          <div className='crime-num'>97</div>
          <div className='crime-desc'>Misdemeanor Reports</div>
        </div>
        <div className="grid-item grid-item-3">
          <FontAwesomeIcon icon={faPersonFallingBurst} size='3x' />
          <div className='crime-num'>50</div>
          <div className='crime-desc'>Felony Reports</div>
        </div>
        <div className="grid-item grid-item-4">Item 4</div>
        <div className="grid-item grid-item-5">Item 5</div>
        <div className="grid-item grid-item-6">
          <Calendar onChange={onChange} value={date} />
        </div>
      </div>
    </div>
  );
};

render(<PoliceDashboard />, document.querySelector('#root')); // Render PoliceDashboard

export default PoliceDashboard;
