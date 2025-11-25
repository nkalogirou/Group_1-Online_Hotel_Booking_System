// Andreas Kestoras - Fetch Booking Data (Feature 5.5.2)

// This file belongs to Andreas Kestoras
// Feature 5.5.2 - Fetch Booking Data
// This function retrieves all bookings for a specific logged-in user

// Import the database connection so we can talk to SQLite
import db from '../db/connection.js';

// This function gets all bookings for a specific user
// userId = the ID of the logged-in user
export async function fetchBookingData(userId) {

  // This is our SQL query that will run on the database
  const sql = `
    SELECT booking_id, room_id, check_in, check_out, status
    FROM bookings
    WHERE user_id = ?
    ORDER BY check_in ASC
  `;
  // SELECT = choose these columns
  // FROM bookings = from the bookings table
  // WHERE user_id = ? = only bookings that belong to this user
  // ORDER BY check_in ASC = sort by earliest check-in first

  // Execute the SQL query using the userId value
  const rows = await db.all(sql, [userId]);

  // If we found bookings, return them
  if (rows.length > 0) {
    return rows;
  }

  // If no bookings exist for the user, return a message
  return "No bookings found";
}

// Example of how this function could be used:
// const bookings = await fetchBookingData(3);
// console.log(bookings);
