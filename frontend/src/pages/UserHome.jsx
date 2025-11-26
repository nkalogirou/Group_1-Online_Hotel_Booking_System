// src/pages/UserHome.jsx
import React from "react";
import NavbarUser from "../components/NavbarUser";

function UserHome({ userName, onGoBookings, onGoHistory, onGoProfile, onLogout }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f6f6" }}>
      {/* NAVBAR */}
      <NavbarUser
        onGoHome={() => {}}
        onGoBookings={onGoBookings}
        onGoHistory={onGoHistory}
        onGoProfile={onGoProfile}
        onLogout={onLogout}
      />

      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Welcome back, {userName}!
        </h1>

        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Access your bookings, view history, and manage your profile.
        </p>

        {/* Cards Section (kept from Vasilis) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h3>My Bookings</h3>
            <p>View, create, or modify your bookings.</p>
            <button style={buttonStyle} onClick={onGoBookings}>
              Go
            </button>
          </div>

          <div style={cardStyle}>
            <h3>Booking History</h3>
            <p>See all your past bookings.</p>
            <button style={buttonStyle} onClick={onGoHistory}>
              Go
            </button>
          </div>

          <div style={cardStyle}>
            <h3>Profile</h3>
            <p>Update your profile details.</p>
            <button style={buttonStyle} onClick={onGoProfile}>
              Go
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// STYLES (kept minimal to preserve Vasilis' look)
const cardStyle = {
  width: "250px",
  background: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const buttonStyle = {
  marginTop: "1rem",
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default UserHome;
