// PoliceSidebar.js
import React from 'react';
import './Design/police.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faFolderClosed,
    faChartLine,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const PoliceSidebar = () => {
    return (
        <div className="police-sidebar">
            {/* Navbar with Custom Logo and POLICE Text */}
            <nav className="navbar">
                <div className="logo-container">
                    <span className="big-letter">C</span>
                    <span className="small-letter">S</span>
                    <span className="space"> </span>
                </div>
                <div className="police-text">POLICE</div>
            </nav>

            {/* Sidebar Content */}
            <div className="sidebar-content">
                {/* Icons and Labels */}
                <div className="sidebar-item active">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                    <span>Home</span>
                </div>
                <div className="sidebar-item">
                    <FontAwesomeIcon icon={faFolderClosed} size="2x" />
                    <span>Reports</span>
                </div>
                <div className="sidebar-item">
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <span>Data Analytics</span>
                </div>
            </div>

            {/* Logout Button */}
            <div className="logout-button">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default PoliceSidebar;
