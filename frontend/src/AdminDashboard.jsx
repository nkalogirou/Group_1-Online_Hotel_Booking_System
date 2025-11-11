// src/AdminDashboard.jsx
import React from "react";

function AdminDashboard() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Admin Dashboard</h1>
      <p>
        This page is for hotel administrators to manage hotels, bookings and reports.
      </p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Sections (planned)</h2>
        <ul>
          <li>Manage Hotels (add / edit / delete)</li>
          <li>Manage Bookings (view / cancel)</li>
          <li>View Reports (revenue, occupancy)</li>
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Next steps</h2>
        <ul>
          <li>Connect to backend APIs</li>
          <li>Add tables for hotels and bookings</li>
          <li>Integrate the Reports page into the dashboard</li>
        </ul>
      </section>
    </main>
  );
}

export default AdminDashboard;
