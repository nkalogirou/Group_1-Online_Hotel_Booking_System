// Andreas Kestoras — Admin Reports (5.8.2)
import db from '../db/connection.js'; // adjust path if your connection file lives elsewhere

export async function revenueByDay(startDate, endDate) {
  const rows = await db.all(
    `SELECT date(b.check_in) AS day,
            SUM((julianday(b.check_out) - julianday(b.check_in)) * r.price) AS revenue
     FROM bookings b
     JOIN rooms r ON r.room_id = b.room_id
     WHERE b.status = 'Confirmed'
       AND date(b.check_in) >= date(?) AND date(b.check_out) <= date(?)
     GROUP BY day ORDER BY day ASC`,
    [startDate, endDate]
  );
  return rows.map(r => ({ day: r.day, revenue: Number(r.revenue || 0) }));
}

export async function bookingsByStatus(startDate, endDate) {
  return await db.all(
    `SELECT status, COUNT(*) AS count
     FROM bookings
     WHERE date(check_in) >= date(?) AND date(check_out) <= date(?)
     GROUP BY status ORDER BY count DESC`,
    [startDate, endDate]
  );
}
