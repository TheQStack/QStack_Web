import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ConsoleScreen from './screens/ConsoleScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddComputerScreen from './screens/AddComputerScreen'; 
import NavBar from './components/NavBar';
import './App.css';
import TopLogo from './assets/TopLogo.png';

function Main() {
  const location = useLocation();

  return (
    <div className="App">
      <img src={TopLogo} alt="Top Logo" className="top-logo" />
      {location.pathname !== '/login' && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/console" element={<ConsoleScreen />} />
        <Route path="/add-computer" element={<AddComputerScreen />} /> 
      </Routes> 
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;