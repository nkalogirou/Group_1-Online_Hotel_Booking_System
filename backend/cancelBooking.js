// Andreas Kestoras — Cancelling a Booking (5.4 + 5.4.2)
// This function checks if a booking can legally be cancelled
// It verifies time rules and booking status
export async function checkCancellationEligibility(bookingId) {

  // Get booking info and calculate days until check-in
  const row = await db.get(
    `SELECT booking_id, status,
    (julianday(check_in) - julianday('now')) AS days_until_checkin
    FROM bookings WHERE booking_id = ?`,
    [bookingId]
  );

  // If booking does not exist
  if (!row) return { ok: false, reason: 'Booking not found' };

  // If already cancelled
  if (row.status === 'Cancelled')
    return { ok: false, reason: 'Already cancelled' };

  // Allow cancellation only if more than 24 hours remain
  return row.days_until_checkin >= 1
    ? { ok: true }
    : { ok: false, reason: 'Within 24 hours of check-in' };
}


// Main function that cancels a booking for a specific user
export async function cancelBooking(userId, bookingId) {

  // Get booking and owner details
  const b = await db.get(
    `SELECT booking_id, user_id, status FROM bookings WHERE booking_id = ?`,
    [bookingId]
  );

  // Booking does not exist
  if (!b) return { ok: false, reason: 'Booking not found' };

  // User is not the owner
  if (b.user_id !== userId)
    return { ok: false, reason: 'Not owner of booking' };

  // Booking already cancelled
  if (b.status === 'Cancelled')
    return { ok: false, reason: 'Already cancelled' };

  // Check if cancellation rule passes
  const eligibility = await checkCancellationEligibility(bookingId);

  if (!eligibility.ok)
    return { ok: false, reason: eligibility.reason };

  // Perform database update
  const upd = await db.run(
    `UPDATE bookings 
     SET status = 'Cancelled', updated_at = CURRENT_TIMESTAMP 
     WHERE booking_id = ?`,
    [bookingId]
  );

  // Return result
  return upd.changes > 0
    ? { ok: true, bookingId }
    : { ok: false, reason: 'Update failed' };
}
