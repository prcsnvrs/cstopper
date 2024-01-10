// PoliceDataAnalysis.js
import React from 'react';
import PoliceSidebar from './PoliceSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleUser,
    faPencil
} from '@fortawesome/free-solid-svg-icons';

const PoliceDataAnalysis = () => {
  const crimesReportedData = [
    { barangay: 'Brgy. Caretta', crimes: 10 },
    { barangay: 'Brgy. Mabolo', crimes: 15 },
    { barangay: 'Brgy. Lusaran', crimes: 5 },
    { barangay: 'Brgy. Mabini', crimes: 8 },
    { barangay: 'Brgy. Mambaling', crimes: 12 },
    { barangay: 'Brgy. Pari-an', crimes: 7 },
    { barangay: 'Brgy. San Jose', crimes: 20 },
    // Add more data as needed
  ];

  return (
    <div>
      <PoliceSidebar />
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
      <div className="police-data-analysis-content">
        <div className="police-grid-item police-grid-item-1">
          {/* Content for Grid Item 1 */}
          <h2>Grid Item 1</h2>
          <p>Row 1 - 2, Col 1 - 3</p>
        </div>
        <div className="police-grid-item police-grid-item-2">
          {/* Content for Grid Item 2 */}
          <h2>Grid Item 2</h2>
          <p>Row 1, Col 3</p>
        </div>
        <div className="police-grid-item police-grid-item-3">
          {/* Content for Grid Item 3 */}
          <h3>Crimes Reported by Barangay</h3>
          <ul className="crimes-list">
            {crimesReportedData.map((item, index) => (
              <li key={index}>
                <span>{item.barangay}</span>
                <span>{item.crimes} crimes reported</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PoliceDataAnalysis;
