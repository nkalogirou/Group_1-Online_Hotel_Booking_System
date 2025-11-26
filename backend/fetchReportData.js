// Andreas Kestoras — Admin Reports (5.8.2)

// ================================
// ADMIN REPORT DATA - FEATURE 5.8.2
// This file contains functions that calculate statistics for admin reports
// ================================


// Import the database connection so we can talk to SQLite
import db from '../db/connection.js';


// ---------------------------------------------------
// FUNCTION 1: revenueByDay(startDate, endDate)
// This function calculates how much money was made per day
// ---------------------------------------------------
export async function revenueByDay(startDate, endDate) {

  // We store the result of the SQL query in "rows"
  const rows = await db.all(

    // This is an SQL query written as a template string
    `
    SELECT

      -- Convert the check-in datetime into just a date (YYYY-MM-DD)
      date(b.check_in) AS day,

      -- Calculate total revenue:
      -- (check-out - check-in) gives number of nights
      -- multiply nights by room price
      SUM((julianday(b.check_out) - julianday(b.check_in)) * r.price) AS revenue

    FROM bookings b

    -- Join rooms table so we can access the room price
    JOIN rooms r ON r.room_id = b.room_id

    -- Only count bookings that are confirmed (not cancelled)
    WHERE b.status = 'Confirmed'

    -- Only bookings starting after or on startDate
    AND date(b.check_in) >= date(?)

    -- Only bookings ending before or on endDate
    AND date(b.check_out) <= date(?)

    -- Group results by day so each day has its own total
    GROUP BY day

    -- Sort days from earliest to latest
    ORDER BY day ASC
    `,

    // These replace the ? in the query safely
    [startDate, endDate]
  );

  // Convert SQL result to a clean JavaScript array
  return rows.map(r => ({
    // r.day is the day returned from the database
    day: r.day,

    // Convert revenue to a number (just in case SQLite returns text)
    revenue: Number(r.revenue || 0)
  }));
}


// ---------------------------------------------------
// FUNCTION 2: bookingsByStatus(startDate, endDate)
// This function counts bookings by status (Confirmed, Cancelled, etc.)
// ---------------------------------------------------
export async function bookingsByStatus(startDate, endDate) {

  // Return results of SQL query
  return await db.all(

    // SQL query to count bookings per status
    `
    SELECT

      -- The booking status (Confirmed, Cancelled)
      status,

      -- Count how many rows for each status
      COUNT(*) AS count

    FROM bookings

    -- Only bookings that match the date range
    WHERE date(check_in) >= date(?)
    AND date(check_out) <= date(?)

    -- Group by status so each status gets its own count
    GROUP BY status

    -- Order from most common to least
    ORDER BY count DESC
    `,

    // Replace the ? values safely
    [startDate, endDate]
  );
}
