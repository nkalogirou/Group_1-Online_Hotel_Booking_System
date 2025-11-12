// Andreas Kestoras — Cancelling a Booking (5.4 + 5.4.2)
import db from '../db/connection.js'; // adjust path if different

export async function checkCancellationEligibility(bookingId) {
  const row = await db.get(
    `SELECT booking_id, status,
            (julianday(check_in) - julianday('now')) AS days_until_checkin
     FROM bookings WHERE booking_id = ?`,
    [bookingId]
  );
  if (!row) return { ok: false, reason: 'Booking not found' };
  if (row.status === 'Cancelled') return { ok: false, reason: 'Already cancelled' };
  return row.days_until_checkin >= 1
    ? { ok: true }
    : { ok: false, reason: 'Within 24 hours of check-in' };
}

export async function cancelBooking(userId, bookingId) {
  const b = await db.get(
    `SELECT booking_id, user_id, status FROM bookings WHERE booking_id = ?`,
    [bookingId]
  );
  if (!b) return { ok: false, reason: 'Booking not found' };
  if (b.user_id !== userId) return { ok: false, reason: 'Not owner of booking' };
  if (b.status === 'Cancelled') return { ok: false, reason: 'Already cancelled' };

  const elig = await checkCancellationEligibility(bookingId);
  if (!elig.ok) return { ok: false, reason: elig.reason };

  const upd = await db.run(
    `UPDATE bookings SET status = 'Cancelled', updated_at = CURRENT_TIMESTAMP
     WHERE booking_id = ?`,
    [bookingId]
  );
  return upd.changes > 0 ? { ok: true, bookingId } : { ok: false, reason: 'Update failed' };
}
