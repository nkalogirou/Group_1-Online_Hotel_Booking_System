// src/pages/UserProfile.jsx
import React from "react";
import NavbarUser from "../components/NavbarUser";

function UserProfile({ userName, userEmail, onGoHome, onLogout }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f6f6" }}>
      {/* NAVBAR */}
      <NavbarUser
        onGoHome={onGoHome}
        onGoBookings={() => onGoHome("user-bookings")}
        onGoHistory={() => onGoHome("user-history")}
        onGoProfile={() => {}}
        onLogout={onLogout}
      />

      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          My Profile
        </h1>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={rowStyle}>
            <strong>Name:</strong>
            <span>{userName}</span>
          </div>

          <div style={rowStyle}>
            <strong>Email:</strong>
            <span>{userEmail || "Unavailable"}</span>
          </div>

          {/* Placeholder for future profile editing */}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button
              style={editButton}
              onClick={() => alert("Feature coming soon...")}
            >
              Edit Profile (Coming Soon)
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Styles
const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  borderBottom: "1px solid #eee",
};

const editButton = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default UserProfile;
