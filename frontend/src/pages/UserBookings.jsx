// src/pages/UserBookings.jsx
import React, { useEffect, useState } from "react";
import NavbarUser from "../components/NavbarUser";
import BookingForm from "../components/BookingForm";
import api from "../apiClient";

function UserBookings({ userId, onGoHome, onGoHistory, onLogout }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/bookings", { params: { userId } });
      setBookings(res.data.bookings || []);
    } catch (err) {
      console.error("Error loading bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    try {
      await api.post(`/bookings/${id}/cancel`);
      loadBookings();
    } catch (err) {
      console.error("Error cancelling booking:", err);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f6f6f6" }}>
      {/* NAVBAR */}
      <NavbarUser
        onGoHome={onGoHome}
        onGoBookings={() => {}}
        onGoHistory={onGoHistory}
        onGoProfile={() => {}}
        onLogout={onLogout}
      />

      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          My Bookings
        </h1>

        {/* BOOKING FORM */}
        <section
          style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Create a New Booking</h2>
          <BookingForm userId={userId} onCreated={loadBookings} />
        </section>

        {/* BOOKING LIST */}
        <section
          style={{
            background: "white",
            padding: "1.5rem",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Your Current Bookings</h2>

          {loading && <p>Loading...</p>}

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr>
                <th style={th}>ID</th>
                <th style={th}>Hotel</th>
                <th style={th}>Room</th>
                <th style={th}>Check-in</th>
                <th style={th}>Check-out</th>
                <th style={th}>Status</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="7" style={empty}>
                    No bookings yet.
                  </td>
                </tr>
              ) : (
                bookings.map((b) => (
                  <tr key={b.id}>
                    <td style={td}>{b.id}</td>
                    <td style={td}>{b.hotel_name}</td>
                    <td style={td}>{b.room_type}</td>
                    <td style={td}>{b.check_in_date}</td>
                    <td style={td}>{b.check_out_date}</td>
                    <td style={td}>{b.status}</td>
                    <td style={td}>
                      {b.status !== "Cancelled" ? (
                        <button
                          style={cancelButton}
                          onClick={() => cancelBooking(b.id)}
                        >
                          Cancel
                        </button>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

// ---------- STYLING ----------
const th = {
  borderBottom: "2px solid #ccc",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const td = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const empty = {
  padding: "1rem",
  textAlign: "center",
  color: "#777",
};

const cancelButton = {
  backgroundColor: "#e63946",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default UserBookings;
