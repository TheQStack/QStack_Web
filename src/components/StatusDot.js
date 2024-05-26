import React from 'react';
import './StatusDot.css';

function StatusDot({ status }) {
  return (
    <div className={`status-dot ${status}`}></div>
  );
}

export default StatusDot;