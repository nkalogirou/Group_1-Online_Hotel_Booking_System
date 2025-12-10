// src/AdminReportsPage.jsx
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

const backButton = {
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#111",
  color: "white",
};

const card = {
  background: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
};

function AdminReportsPage({ onGoDashboard, onLogout }) {
  return (
    <div style={pageStyle}>
      <div style={container}>
        {/* HEADER */}
        <header style={header}>
          <h1 style={{ margin: 0 }}>Admin Reports</h1>
          <LogoutButton onLogout={onLogout} />
        </header>

        <button style={backButton} onClick={onGoDashboard}>
          ← Back to Dashboard
        </button>

        <section style={{ ...card, marginTop: "1.5rem" }}>
          <h2 style={{ marginTop: 0 }}>Reports</h2>
          <p style={{ color: "#555" }}>
            Overview of system data for administrators.
          </p>

          <h3 style={{ marginTop: "1.5rem" }}>Coming Soon</h3>
          <p style={{ color: "#666" }}>
            Detailed financial reports, booking statistics, occupancy rates,
            hotel performance, and more will be displayed here.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AdminReportsPage;
