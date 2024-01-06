// PoliceOverview.js

import React from 'react';
import './Design/PoliceOverview.css';

const PoliceOverview = () => {
  return (
    <div className="police-overview-wrapper">
      <div className="police-overview-grid">
        <div className="left-side">
          <h2>POLICE</h2>
          <div className="police-description">
            <span className="empower">Empower</span>
            <span className="separator"> </span>
            <span className="safety">safety <br /></span>
            <span className="with-button">with a button</span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button>Get Started</button> {/* Change button text to "Get Started" */}
          <div className="round-background-bottom-left"></div>
        </div>
        <div className="right-side">
          <div className="round-background-top-right"></div>
          {/* Placeholder for the photo */}
          <img
            src={require('./Design/Img/Police cstopper.png')}
            alt="Police Department"
          />
        </div>
      </div>
    </div>
  );
};

export default PoliceOverview;
