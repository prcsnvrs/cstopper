// UserDashboard.js
import React from "react";
import './design/dashboard.css';
import Sidebar from "./Sidebar"
import EmergencyContacts from "./EmergencyContacts"
import AddContact from "./AddContact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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

function UserDashboard() {
    const navigate = useNavigate();

    const buttonsWithIcons = [
        { text: 'Add Contact', icon: faUserTag, link: "/addcontact" },
        { text: 'Emergency Contacts', icon: faContactBook, link: "/emergencycontacts" },
        { text: 'File Emergency', icon: faFileAlt },
        { text: 'Zones', icon: faMapLocationDot },
        { text: 'Track User', icon: faLocation },
    ];

    const topButton = {
        text1: 'Juan123',
        text2: '09123456789',
        icon: faUserCircle
    };

    const handleSignOutClick = () => {
        navigate('/');
    };

    return (
        <div className="dashboard" style={{ height: '712px' }}>
            <Sidebar />
            <div className="top-button">
                <button className="centered-button">
                    <FontAwesomeIcon icon={topButton.icon} style={{ color: 'white' }} />
                    <span style={{ color: 'white', fontSize: '25px', height: '40px', width: '1030px' }}>{topButton.text1}</span>
                    <span style={{ color: 'white', fontSize: '25px' }}>{topButton.text2}</span>
                </button>
            </div>
            <div className="button-grid">
                {buttonsWithIcons.map((button, index) => (
                    <Link
                        key={index}
                        to={button.link}
                        className="centered-button"
                        style={{
                            width: '180px',
                            height: '130px',
                        }}
                    >
                        <FontAwesomeIcon icon={button.icon} style={{ color: 'white' }} />
                        <span style={{ color: 'white', fontSize: '25px', paddingTop: '10px' }}>{button.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserDashboard;

