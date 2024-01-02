import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './design/navbar.css';

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisibility] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisibility(!isProfileDropdownVisible);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className={`navbar ${isNavVisible ? 'active' : ''}`}><div className='logo'>
        C<span>S</span>
      </div>
      <div className='burger' onClick={toggleNav}>
        <IoMenu />
      </div>
      <ul className={`nav-list ${isNavVisible ? 'active' : ''}`}>
        <li className={`nav-item ${activeLink === '/admindashboard' ? 'active' : ''}`}>
        <Link to="/admindashboard">Dashboard</Link>
        </li>
        <li className={`nav-item ${activeLink === '/adminaccount' ? 'active' : ''}`}>
          <Link to="/adminaccount">Accounts</Link>
        </li>
        <li className={`nav-item ${activeLink === '/adminrecord' ? 'active' : ''}`}>
          <Link to="/adminrecord">Records</Link>
        </li>
        <li className={`nav-item ${activeLink === '/adminzone' ? 'active' : ''}`}>
          <Link to="/adminzone">Zones</Link>
        </li>
        <li
          className={`nav-item ${activeLink === '/adminprofile' || isProfileDropdownVisible ? 'active' : ''}`}
          onMouseEnter={toggleProfileDropdown}
          onMouseLeave={toggleProfileDropdown}
        >
          <Link to="/adminprofile">Profile</Link>
          {isProfileDropdownVisible && (
            <ul className="dropdown">
              <li><Link to="/adminsettings">Settings</Link></li>
              <li><Link to="/login">Logout</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
