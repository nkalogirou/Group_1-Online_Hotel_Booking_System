import React, { useEffect, useState } from 'react';

function UserBookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');  // Get JWT token from localStorage

    if (token) {
      fetch('http://localhost:3000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,  // Pass JWT token in the Authorization header
        },
      })
        .then((response) => {
          console.log("Response Status:", response.status);  // Log status code
          return response.json();
        })
        .then((data) => {
          console.log("Bookings Data:", data);  // Log the response data
          if (data.bookings) {
            setBookings(data.bookings);
          } else {
            setError("No bookings found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching booking history:", error);
          setError("An error occurred while fetching booking history.");
        });
    } else {
      setError("You must be logged in to view booking history.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-history-page">
      <h1>Your Booking History</h1>
      {error && <p>{error}</p>}
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Date</th>
              <th>Hotel</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.date}</td>
                <td>{booking.hotel}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default UserBookingHistory;
