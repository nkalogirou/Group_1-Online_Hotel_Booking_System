// src/components/BookingForm.jsx
import React, { useState } from "react";
import api from "../apiClient";

/**
 * Props:
 *  - userId: number
 *  - onCreated: callback after booking is created
 */
function BookingForm({ userId, onCreated }) {
  const [hotelName, setHotelName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateBooking = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!hotelName || !checkInDate || !checkOutDate) {
      setMessage("Please fill hotel name and dates.");
      return;
    }

    try {
      const res = await api.post("/bookings", {
        userId,
        hotelName,
        roomType,
        checkInDate,
        checkOutDate,
      });

      setMessage(res.data.message || "Booking created successfully.");

      // Clear form fields
      setHotelName("");
      setRoomType("");
      setCheckInDate("");
      setCheckOutDate("");

      // Trigger refresh callback
      if (onCreated) onCreated();
    } catch (err) {
      console.error("Error creating booking:", err);
      if (err.response?.data?.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Error contacting server.");
      }
    }
  };

  return (
    <form
      onSubmit={handleCreateBooking}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        marginTop: "1rem",
        maxWidth: "500px",
      }}
    >
      <div>
        <label>Hotel Name</label>
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          style={input}
        />
      </div>

      <div>
        <label>Room Type (Optional)</label>
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          style={input}
        />
      </div>

      <div>
        <label>Check-In Date</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          style={input}
        />
      </div>

      <div>
        <label>Check-Out Date</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          style={input}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save Booking
      </button>

      {message && <p style={{ marginTop: "1rem", color: "red" }}>{message}</p>}
    </form>
  );
}

const input = {
  width: "100%",
  padding: "8px",
  marginTop: "4px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default BookingForm;
