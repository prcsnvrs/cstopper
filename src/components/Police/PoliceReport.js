// PoliceReport.js
import React, { useState } from 'react';
import PoliceSidebar from './PoliceSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCircleUser,
    faPencil
} from '@fortawesome/free-solid-svg-icons';

const PoliceReport = () => {
  // Sample data for the table
  const reportsData = [
    { reporter: 'John Doe', phoneNumber: '123-456-7890', emergencyLevel: 'High', details: 'Emergency details...', dateTime: '2024-01-05 10:30 AM' },
    { reporter: 'Jane Smith', phoneNumber: '987-654-3210', emergencyLevel: 'Medium', details: 'Emergency details...', dateTime: '2024-01-05 11:45 AM' },
    // Add more data as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on the search query
  const filteredReports = reportsData.filter(report =>
    report.reporter.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.phoneNumber.includes(searchQuery) ||
    report.emergencyLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.dateTime.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div>
        {/* Search Bar */}
        <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ padding: '10px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '16px', width: '350px', }}
        />
        
        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Reporter</th>
              <th>Phone Number</th>
              <th>Emergency Level</th>
              <th>Details</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report, index) => (
              <tr key={index}>
                <td>{report.reporter}</td>
                <td>{report.phoneNumber}</td>
                <td>{report.emergencyLevel}</td>
                <td>{report.details}</td>
                <td>{report.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PoliceReport;
