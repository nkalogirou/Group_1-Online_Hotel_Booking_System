// src/BookingHistory.jsx
import React, { useEffect, useState } from "react";
import api from "./apiClient";
import NavbarUser from "./NavbarUser";
import BookingHistory from "./BookingHistory";

/**
 * Props:
 *  - userId: number
 *  - hideNavbar: boolean (optional, default false)
 *
 * If hideNavbar === true -> no user navbar is rendered.
 * Used by AdminBookingHistoryPage to avoid double navigation.
 */
function BookingHistory({ userId, hideNavbar = true }) {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [error, setError] = useState("");

  const loadHistory = async () => {
    setError("");
    try {
      const res = await api.get("/bookingHistory", { params: { userId } });
      setUpcoming(res.data.upcomingBookings || []);
      setPast(res.data.pastBookings || []);
    } catch (err) {
      console.error("Error loading booking history:", err);
      setError("Failed to load booking history. Please try again.");
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      {/* USER NAVBAR (only for normal users) */}
      {!hideNavbar && <NavbarUser />}

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Booking History
        </h1>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </p>
        )}

        <section style={sectionStyle}>
          <h2>Upcoming Bookings</h2>
          {renderTable(upcoming)}
        </section>

        <section style={sectionStyle}>
          <h2>Past Bookings</h2>
          {renderTable(past)}
        </section>
      </main>
    </div>
  );
}

// ---------- TABLE RENDERING ----------
function renderTable(rows) {
  if (!rows || rows.length === 0) {
    return <p style={{ color: "#777" }}>No bookings found.</p>;
  }

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={th}>ID</th>
          <th style={th}>Date</th>
          <th style={th}>Status</th>
          <th style={th}>Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((b) => (
          <tr key={b.id}>
            <td style={td}>{b.id}</td>
            <td style={td}>{b.date}</td>
            <td style={td}>{b.status}</td>
            <td style={td}>{b.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ---------- STYLES ----------
const sectionStyle = {
  background: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  marginBottom: "1.5rem",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
};

const th = {
  padding: "8px",
  backgroundColor: "#f0f0f0",
  borderBottom: "2px solid #ccc",
  textAlign: "left",
};

const td = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

export default BookingHistory;
