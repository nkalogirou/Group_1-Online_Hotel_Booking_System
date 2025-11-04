// Andreas Kestoras - Fetch Booking Data (Feature 5.5.2)
// Description: Fetches past and upcoming bookings for a logged-in user.

import db from '../db/connection.js'; // example path - adjust if needed

export async function fetchBookingData(userId) {
  const sql = `
    SELECT booking_id, room_id, check_in, check_out, status
    FROM bookings
    WHERE user_id = ?
    ORDER BY check_in ASC
  `;

  const rows = await db.all(sql, [userId]);
  return rows.length > 0 ? rows : "No bookings found";
}

// Example usage:
// const bookings = await fetchBookingData(3);
// console.log(bookings);
