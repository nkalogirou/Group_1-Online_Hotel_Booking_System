// src/pages/UserBookingHistory.jsx
import React, { useEffect, useState } from "react";
import NavbarUser from "../components/NavbarUser";
import api from "../apiClient";

function UserBookingHistory({ userId, onGoHome, onGoBookings, onLogout }) {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const res = await api.get("/bookingHistory", { params: { userId } });

      setUpcoming(res.data.upcomingBookings || []);
      setPast(res.data.pastBookings || []);
    } catch (err) {
      console.error("Error fetching history:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f6f6f6" }}>
      {/* NAVBAR */}
      <NavbarUser
        onGoHome={onGoHome}
        onGoBookings={onGoBookings}
        onGoHistory={() => {}}
        onGoProfile={() => {}}
        onLogout={onLogout}
      />

      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Booking History
        </h1>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {/* UPCOMING BOOKINGS */}
        <section style={sectionStyle}>
          <h2>Upcoming Bookings</h2>
          {renderTable(upcoming)}
        </section>

        {/* PAST BOOKINGS */}
        <section style={sectionStyle}>
          <h2>Past Bookings</h2>
          {renderTable(past)}
        </section>
      </main>
    </div>
  );
}

// ---------- RENDER TABLE ----------
function renderTable(rows) {
  if (!rows || rows.length === 0) {
    return <p style={{ color: "#777" }}>No records found.</p>;
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
  marginBottom: "2rem",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
};

const th = {
  padding: "8px",
  backgroundColor: "#f2f2f2",
  borderBottom: "2px solid #ccc",
  textAlign: "left",
};

const td = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

export default UserBookingHistory;
