// src/AdminDashboard.jsx
import React from "react";
import LogoutButton from "../components/LogoutButton";

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

const card = {
  background: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
};

const actionsRow = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1rem",
};

const primaryButton = {
  padding: "0.6rem 1.2rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#111",
  color: "white",
};

function AdminDashboard({ onLogout, onGoReports, onGoHistory }) {
  return (
    <div style={pageStyle}>
      <div style={container}>
        {/* HEADER */}
        <header style={header}>
          <div>
            <h1 style={{ marginBottom: "0.4rem" }}>Admin Dashboard</h1>
            <p style={{ margin: 0, color: "#555" }}>
              Manage reports and booking information for the system.
            </p>
          </div>
          <LogoutButton onLogout={onLogout} />
        </header>

        {/* QUICK ACTIONS */}
        <section style={{ ...card, marginBottom: "1.5rem" }}>
          <h2 style={{ marginTop: 0 }}>Quick actions</h2>
          <p style={{ marginTop: "0.3rem", color: "#666" }}>
            Go directly to reporting or booking history.
          </p>

          <div style={actionsRow}>
            <button type="button" style={primaryButton} onClick={onGoReports}>
              View Reports
            </button>
            <button type="button" style={primaryButton} onClick={onGoHistory}>
              View Booking History
            </button>
          </div>
        </section>

        {/* FUTURE SECTIONS */}
        <section style={card}>
          <h2 style={{ marginTop: 0 }}>Planned admin features</h2>
          <ul style={{ marginTop: "0.5rem" }}>
            <li>Manage hotels (add / edit / delete)</li>
            <li>Manage bookings (view / cancel)</li>
            <li>Generate financial and occupancy reports</li>
            <li>View full booking history</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
