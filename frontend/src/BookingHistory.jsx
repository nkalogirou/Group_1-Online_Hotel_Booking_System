// src/BookingHistory.jsx
import React, { useEffect, useState } from "react";
import api from "./apiClient";

/**
 * Shows upcoming and past bookings for a given user.
 * 
 * Props:
 *   - userId (number | string): ID of the logged-in user
 */
function BookingHistory({ userId }) {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    const fetchBookings = async () => {
      setLoading(true);
      setError("");

      try {
        // This mirrors your original HTML fetch:
        // GET /bookingHistory?userId=123
        const res = await api.get("/bookingHistory", {
          params: { userId },
        });

        const data = res.data || {};
        setUpcomingBookings(data.upcomingBookings || []);
        setPastBookings(data.pastBookings || []);
      } catch (err) {
        console.error("Error fetching booking history:", err);
        setError("Failed to load booking history. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  const renderTable = (bookings) => {
    if (!bookings.length) {
      return (
        <tr>
          <td colSpan="4">No bookings found.</td>
        </tr>
      );
    }

    return bookings.map((booking) => (
      <tr key={booking.id}>
        <td>{booking.id}</td>
        <td>{booking.date}</td>
        <td>{booking.status}</td>
        <td>{booking.details}</td>
      </tr>
    ));
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Booking History</h2>

      {loading && <p style={{ textAlign: "center" }}>Loading bookings...</p>}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* Upcoming Bookings */}
      <section style={{ marginTop: "1.5rem" }}>
        <h3 style={{ textAlign: "center" }}>Upcoming Bookings</h3>
        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            margin: "20px auto",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>{renderTable(upcomingBookings)}</tbody>
        </table>
      </section>

      {/* Past Bookings */}
      <section style={{ marginTop: "1.5rem" }}>
        <h3 style={{ textAlign: "center" }}>Past Bookings</h3>
        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            margin: "20px auto",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Details</th>
            </tr>
          </thead>
          <tbody>{renderTable(pastBookings)}</tbody>
        </table>
      </section>
    </main>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
};

export default BookingHistory;
