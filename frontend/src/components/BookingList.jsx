// src/components/BookingList.jsx
import React from "react";

/**
 * Props:
 *  - bookings: array
 *  - onCancel: function(id)   (optional)
 * 
 * If onCancel is provided → show Cancel buttons.
 * If not provided → table becomes read-only.
 */
function BookingList({ bookings, onCancel }) {
  return (
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
          {onCancel && <th style={th}>Action</th>}
        </tr>
      </thead>

      <tbody>
        {(!bookings || bookings.length === 0) ? (
          <tr>
            <td style={empty} colSpan={onCancel ? 7 : 6}>
              No bookings found.
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

              {onCancel && (
                <td style={td}>
                  {b.status !== "Cancelled" ? (
                    <button
                      style={cancelButton}
                      onClick={() => onCancel(b.id)}
                    >
                      Cancel
                    </button>
                  ) : (
                    "—"
                  )}
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
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

export default BookingList;
