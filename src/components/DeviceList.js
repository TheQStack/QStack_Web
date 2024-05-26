import React, { useState } from 'react';
import StatusDot from './StatusDot';
import './DeviceList.css';

const devices = [
  { name: 'Device 1', description: 'This is device 1', specifications: 'Specs 1', location: 'Location 1', status: 'green' },
  { name: 'Device 2', description: 'This is device 2', specifications: 'Specs 2', location: 'Location 2', status: 'blue' },
  { name: 'Device 3', description: 'This is device 3', specifications: 'Specs 3', location: 'Location 3', status: 'red' },
  { name: 'Device 4', description: 'This is device 4', specifications: 'Specs 4', location: 'Location 4', status: 'green' },
  { name: 'Device 5', description: 'This is device 5', specifications: 'Specs 5', location: 'Location 5', status: 'blue' },
];

function DeviceList() {
  const [expandedDevice, setExpandedDevice] = useState(null);

  const handleButtonClick = (deviceName) => {
    if (expandedDevice === deviceName) {
      setExpandedDevice(null);
    } else {
      setExpandedDevice(deviceName);
    }
  };

  return (
    <div className="device-list">
      <div className="device-list-title">Device Name</div>
      <div className="device-list-title">Description</div>
      {devices.map((device, index) => (
        <React.Fragment key={index}>
          <div className="device-name">
            {device.name}
            <StatusDot status={device.status} />
          </div>
          <div className="device-description">
            {device.description}
            <button onClick={() => handleButtonClick(device.name)}>
              {expandedDevice === device.name ? '▲' : '▼'}
            </button>
            {expandedDevice === device.name && (
              <div>
                <p>Specifications: {device.specifications}</p>
                <p>Location: {device.location}</p>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DeviceList;