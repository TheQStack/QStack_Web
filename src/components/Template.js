import React from 'react';
import './Template.css';

function Template() {
  return (
    <div className="template-container">
      <div className="circle-container">
        <div className="circle green"></div>
        <span>Not Being Used</span>
      </div>
      <div className="circle-container">
        <div className="circle blue"></div>
        <span>In Use</span>
      </div>
      <div className="circle-container">
        <div className="circle red"></div>
        <span>Disconnected</span>
      </div>
    </div>
  );
}

export default Template;