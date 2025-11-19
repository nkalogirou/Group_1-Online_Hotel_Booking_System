// src/AdminDashboard.jsx
import React from "react";
import LogoutButton from "./LogoutButton";

function AdminDashboard({ onLogout, onGoToReports, onGoToHistory }) {
  return (
    <main style={{ padding: "2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            This page is for hotel administrators to manage hotels, bookings,
            and reports.
          </p>
        </div>

        <LogoutButton onLogout={onLogout} />
      </header>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Quick actions</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button type="button" onClick={onGoToReports}>
            View Reports
          </button>
          <button type="button" onClick={onGoToHistory}>
            View Booking History
          </button>
        </div>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Sections (planned)</h2>
        <ul>
          <li>Manage Hotels (add / edit / delete)</li>
          <li>Manage Bookings (view / cancel)</li>
          <li>View Reports (revenue, occupancy)</li>
          <li>View Booking History</li>
        </ul>
      </section>
    </main>
  );
}

export default AdminDashboard;
