import { useState } from "react";
import "./App.css";
import api from "./apiClient";

<<<<<<< HEAD
// Pages
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserHome from "./pages/UserHome";
import UserBookings from "./pages/UserBookings";
import UserBookingHistory from "./pages/UserBookingHistory";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import ReportsPage from "./pages/ReportsPage";
import AdminReportsPage from "./pages/AdminReportsPage";
import AdminBookingHistoryPage from "./pages/AdminBookingHistoryPage";

function App() {
  const [view, setView] = useState("guest"); 
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("");

  // ---------------- LOGIN ----------------
  const handleLogin = async (email, password, setMessage) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const data = res.data;
      setToken(data.token);
      setUserId(data.userId);
      setUserName(data.name);
      setRole(data.role);

      if (data.token) {
        localStorage.setItem("token", data.token);
        setUserId(data.userId);
        setRole(data.role);
        setUserName(data.name);

        if (data.role === "admin") {
          setView("admin");
          setView("admin-dashboard");
        } else {
          setView("user-home");
        }
      } else {
        setMessage("Login failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error logging in.");
    }
  };

  // ---------------- LOGOUT ----------------
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    setRole(null);
    setUserId(null);
    setUserName("");
    setView("login"); // or "guest"
  }


  // ---------------- REGISTRATION ----------------
  const handleRegister = async (formData, setMessage) => {
    try {
      const res = await api.post("/auth/register", formData);
      setMessage(res.data.message || "Registered");
    } catch (err) {
      console.error(err);
      setMessage("Error registering");
    }
  };

  // ---------------- RENDER VIEWS ----------------
  if (view === "guest") {
    return (
      <LoginPage
        onLogin={handleLogin}
        onGoRegister={() => setView("register")}
      />
    );
  }

  if (view === "register") {
    return (
      <RegistrationPage
        onRegister={handleRegister}
        onGoLogin={() => setView("guest")}
      />
    );
  }

  // USER ROUTES
  if (role === "user") {
    if (view === "user-home") {
      return (
        <UserHome
          userName={userName}
          onGoBookings={() => setView("user-bookings")}
          onGoHistory={() => setView("user-history")}
          onGoProfile={() => setView("user-profile")}
          onLogout={handleLogout}
        />
      );
    }

    if (view === "user-bookings") {
      return (
        <UserBookings
          userId={userId}
          onGoHome={() => setView("user-home")}
          onGoHistory={() => setView("user-history")}
          onLogout={handleLogout}
        />
      );
    }

    if (view === "user-history") {
      return (
        <UserBookingHistory
          userId={userId}
          onGoHome={() => setView("user-home")}
          onGoBookings={() => setView("user-bookings")}
          onLogout={handleLogout}
        />
      );
    }

    if (view === "user-profile") {
      return (
        <UserProfile
          userName={userName}
          onGoHome={() => setView("user-home")}
          onLogout={handleLogout}
        />
      );
    }
  }

    // ===================== ADMIN VIEWS =====================
  if (role === "admin") {
    if (view === "admin-dashboard") {
      return (
        <AdminDashboard
          onLogout={handleLogout}
          onGoReports={() => setView("admin-reports")}
          onGoHistory={() => setView("admin-history")}
        />
      );
    }

    if (view === "admin-reports") {
      return (
        <AdminReportsPage
          onGoDashboard={() => setView("admin-dashboard")}
          onLogout={handleLogout}
        />
      );
    }

    if (view === "admin-history") {
      return (
        <AdminBookingHistoryPage
          userId={userId}
          onGoDashboard={() => setView("admin-dashboard")}
          onLogout={handleLogout}
        />
      );
    }
  }
  // fallback
  return <div>Loading...</div>;
=======



/*trying to run registration page

import React from 'react';
import RegistrationPage from './RegistrationPage.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

return (

<div className= "App">

<RegistrationPage />


</div>



);


}

export default App;
*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage_loggedOut from './MainPage_loggedOut.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import LoginPage from './LoginPage.jsx';
import MainPage_loggedIn from './MainPage_loggedIn.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage_loggedOut />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/MainLoggedIn" element={<MainPage_loggedIn />} />
        </Routes>
      </div>
    </Router>
  );
>>>>>>> origin/vasilis-registration-navigation
}

export default App;
