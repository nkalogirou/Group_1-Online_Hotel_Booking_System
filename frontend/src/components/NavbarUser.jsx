// src/components/NavbarUser.jsx
import React from "react";

function NavbarUser({ onGoHome, onGoBookings, onGoHistory, onGoProfile, onLogout }) {
  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side: Logo / Title */}
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={onGoHome}
      >
        Online Hotel Booking
      </div>

      {/* Right Side Buttons */}
      <div style={{ display: "flex", gap: "1.5rem", fontSize: "1rem" }}>
        <button
          onClick={onGoHome}
          style={navButtonStyle}
        >
          Home
        </button>

        <button
          onClick={onGoBookings}
          style={navButtonStyle}
        >
          My Bookings
        </button>

        <button
          onClick={onGoHistory}
          style={navButtonStyle}
        >
          History
        </button>

        <button
          onClick={onGoProfile}
          style={navButtonStyle}
        >
          Profile
        </button>

        <button
          onClick={onLogout}
          style={{
            ...navButtonStyle,
            backgroundColor: "#e63946",
            borderColor: "#e63946",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

const navButtonStyle = {
  background: "transparent",
  color: "white",
  border: "1px solid white",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default NavbarUser;
