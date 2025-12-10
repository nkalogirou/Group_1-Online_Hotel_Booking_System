// src/AdminBookingHistoryPage.jsx
import React from "react";
import LogoutButton from "../components/LogoutButton";
import BookingHistory from "../BookingHistory";

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  padding: "2rem 1rem",
};

const container = {
  maxWidth: "960px",
  margin: "0 auto",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
};

const backButton = {
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#111",
  color: "white",
};

const contentCard = {
  background: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  marginTop: "1.5rem",
};

function AdminBookingHistoryPage({ userId, onGoDashboard, onLogout }) {
  return (
    <div style={pageStyle}>
      <div style={container}>
        {/* HEADER */}
        <header style={header}>
          <h1 style={{ margin: 0 }}>Admin Booking History</h1>
          <LogoutButton onLogout={onLogout} />
        </header>

        <button style={backButton} onClick={onGoDashboard}>
          ← Back to Dashboard
        </button>

        {/* Wrap BookingHistory to align it with the page */}
        <div style={contentCard}>
          <BookingHistory userId={userId} hideNavbar={true} />
        </div>
      </div>
    </div>
  );
}

export default AdminBookingHistoryPage;
