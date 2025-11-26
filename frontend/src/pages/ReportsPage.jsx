// src/pages/ReportsPage.jsx
import React from "react";
import LogoutButton from "../components/LogoutButton";

/**
 * ReportsPage
 *  - Only visible to admins
 *  - Displays summarized or detailed booking/hotel data
 *  - Navigation:
 *      onGoDashboard -> back to admin dashboard
 *      onLogout -> logout
 */
function ReportsPage({ onGoDashboard, onLogout }) {
  return (
    <main style={{ padding: "2rem" }}>
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Reports</h1>
          <p>Overview of system data.</p>
        </div>

        <LogoutButton onLogout={onLogout} />
      </header>

      <section style={{ marginTop: "1.5rem" }}>
        <button onClick={onGoDashboard}>Back to Dashboard</button>
      </section>

      {/* CONTENT AREA */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Coming Soon</h2>
        <p>
          Detailed financial reports, booking statistics, occupancy rates, hotel
          performance, and more will be displayed here.
        </p>
      </section>
    </main>
  );
}

export default ReportsPage;
