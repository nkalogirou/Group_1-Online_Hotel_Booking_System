import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage_loggedIn from './MainPage_loggedIn';
import MainPage_loggedOut from './MainPage_loggedOut';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import UserBookingHistory from './BookingHistory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<MainPage_loggedOut />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />  {/* Ensure onLogin is passed */}
          <Route
            path="/booking-history"
            element={isLoggedIn ? <UserBookingHistory /> : <LoginPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
