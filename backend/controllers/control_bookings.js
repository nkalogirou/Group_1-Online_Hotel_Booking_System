const db = require('../database/db');

function convertDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month}-${day}`;
}

exports.createBooking = (req, res) => {
  const { room_id, check_in, check_out } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = req.user.id;

  if (!room_id || !check_in || !check_out) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const checkInSQL = convertDate(check_in);
  const checkOutSQL = convertDate(check_out);

  const checkSql = `
    SELECT COUNT(*) AS count FROM bookings
    WHERE room_id = ?
    AND status = 'confirmed'
    AND (
      (date(check_in) <= date(?) AND date(check_out) > date(?)) OR
      (date(check_in) < date(?) AND date(check_out) >= date(?)) OR
      (date(check_in) >= date(?) AND date(check_out) <= date(?))
    )
  `;

  db.get(
    checkSql,
    [
      room_id,
      checkInSQL, checkInSQL,
      checkOutSQL, checkOutSQL,
      checkInSQL, checkOutSQL
    ],
    (err, row) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (row.count > 0) {
        return res.status(409).json({ message: "Room not available" });
      }

      
      const total_price = 150;

      const insertSql = `
        INSERT INTO bookings (user_id, room_id, check_in, check_out, total_price, status)
        VALUES (?, ?, ?, ?, ?, 'confirmed')
      `;

      db.run(
        insertSql,
        [userId, room_id, checkInSQL, checkOutSQL, total_price],
        function (err) {
          if (err) return res.status(500).json({ message: "Insert error" });

          return res.status(201).json({
            message: "Booking created",
            booking_id: this.lastID,
            total_price,
            check_in: check_in,
            check_out: check_out
          });
        }
      );
    }
  );
};




exports.cancelBooking = (req, res) => {
  const bookingId = req.params.id;

  
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = req.user.id;
  const userRole = req.user.role || 'user';

  
  const findSql = 'SELECT * FROM bookings WHERE id = ?';

  db.get(findSql, [bookingId], (err, booking) => {
    if (err) {
      console.error('DB error (find booking):', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    
    if (booking.user_id !== userId && userRole !== 'admin') {
      return res.status(403).json({ message: 'Not allowed to cancel this booking' });
    }

    
    if (booking.status !== 'confirmed') {
      return res.status(400).json({ message: 'Only confirmed bookings can be cancelled' });
    }


    const now = new Date();
    const checkInDate = new Date(booking.check_in); 

    const diffMs = checkInDate - now;
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 24) {
      return res.status(400).json({
        message: 'You can cancel a booking only up to 24 hours before check-in'
      });
    }

    
    const cancelSql = `
      UPDATE bookings
      SET status = 'cancelled'
      WHERE id = ?
    `;

    db.run(cancelSql, [bookingId], function (err2) {
      if (err2) {
        console.error('DB error (cancel booking):', err2);
        return res.status(500).json({ message: 'Database error during cancellation' });
      }

      const refundAmount = booking.total_price || 0;

      return res.json({
        message: 'Booking cancelled successfully',
        booking_id: bookingId,
        refundAmount,
        status: 'cancelled'
      });
    });
  });
};
