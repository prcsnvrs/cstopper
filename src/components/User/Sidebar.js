// Sidebar.js
import React from "react";
import './design/dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowPointer,
    faContactBook,
    faFileAlt,
    faHome,
    faLocation,
    faMapLocationDot,
    faPhone,
    faSignOutAlt,
    faUserCircle,
    faUserTag
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const icons = [
        { id: 1, name: " ", icon: faHome, link: "/" },
        { id: 2, name: " ", icon: faContactBook, link: "/emergencycontacts" }, // Link changed to "/emergency-contacts"
        { id: 3, name: " ", icon: faMapLocationDot, link: "/register" },
        { id: 4, name: " ", icon: faFileAlt, link: "/contact" },
        { id: 5, name: " ", icon: faPhone, link: "/contact" },
        { id: 6, name: " ", icon: faUserTag, link: "/contact" },
        { id: 7, name: " ", icon: faArrowPointer, link: "/contact" },
        { id: 8, name: " ", icon: faSignOutAlt, link: "/login" },
    ];

    const handleSignOutClick = () => {
        navigate('/');
    };

    return (
        <div className="sidebar">
            <div className="cs">
                <h2>C<span>S</span></h2>
            </div>
            {icons.map((item, index) => (
                <Link key={item.id} to={item.link} className={index === 0 ? "active" : ""}>
                    <FontAwesomeIcon
                        icon={item.icon}
                        className={index === icons.length - 1 ? "last-icon red-icon" : (index === 0 ? "white-icon" : "red-icon")}
                        onClick={index === icons.length - 1 ? handleSignOutClick : undefined}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Sidebar;
