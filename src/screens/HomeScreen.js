import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Home Screen</h2>
        <p>Welcome to the home page!</p>
        <Link to="/console">Go to Console</Link>
        <br />
        <Link to="/add-computer">Add Computer</Link>
      </div>
    </div>
  );
}

export default HomeScreen;