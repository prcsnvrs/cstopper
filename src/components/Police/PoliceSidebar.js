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


// PoliceSidebar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Design/police.css';  // Assuming you have your styles in a 'police.css' file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faHome,
//     faFolderClosed,
//     faChartLine,
//     faSignOutAlt
// } from '@fortawesome/free-solid-svg-icons';

// const PoliceSidebar = () => {
//     const [activeItem, setActiveItem] = useState('home'); // Default active item is 'home'

//     const handleItemClick = (itemName) => {
//         setActiveItem(itemName);
//     };

//     return (
//         <div className="police-sidebar">
//             <nav className="navbar">
//                 {/* Your navigation logic here */}
//             </nav>

//             {/* Sidebar Content */}
//             <div className="sidebar-content">
//                 {/* Icons and Labels with navigation links */}
//                 <div className={`sidebar-item ${activeItem === 'home' ? 'active' : ''}`}>
//                     <Link to="/policedashboard" onClick={() => handleItemClick('home')}>
//                         <FontAwesomeIcon icon={faHome} size="2x" />
//                         <span>Home</span>
//                     </Link>
//                 </div>
//                 <div className={`sidebar-item ${activeItem === 'reports' ? 'active' : ''}`}>
//                     <Link to="/policereports" onClick={() => handleItemClick('reports')}>
//                         <FontAwesomeIcon icon={faFolderClosed} size="2x" />
//                         <span>Reports</span>
//                     </Link>
//                 </div>
//                 <div className={`sidebar-item ${activeItem === 'analytics' ? 'active' : ''}`}>
//                     <Link to="/policedataanalytics" onClick={() => handleItemClick('analytics')}>
//                         <FontAwesomeIcon icon={faChartLine} size="2x" />
//                         <span>Data Analytics</span>
//                     </Link>
//                 </div>
//             </div>

//             {/* Logout Button */}
//             <div className="logout-button">
//                 <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
//                 <span>Logout</span>
//             </div>
//         </div>
//     );
// };

// export default PoliceSidebar;
