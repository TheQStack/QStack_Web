import React from 'react';
import DeviceList from '../components/DeviceList';
import Template from '../components/Template';
import './ConsoleScreen.css';

function ConsoleScreen() {
  return (
    <div>
      <h2>Console Screen</h2>
      <p>Welcome to the console page!</p>
      <div className="template">
        <Template />
      </div>
      <DeviceList />
    </div>
  );
}

export default ConsoleScreen;