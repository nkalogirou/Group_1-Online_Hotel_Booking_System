const db = require('../database/db');

exports.createBooking = (req, res) => {
  const { room_id, check_in, check_out, total_price } = req.body;

  
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const userId = req.user.id;

  if (!room_id || !check_in || !check_out || !total_price) {
    return res.status(400).json({ message: "Missing fields" });
  }

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
      check_in, check_in,
      check_out, check_out,
      check_in, check_out
    ],
    (err, row) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (row.count > 0) {
        return res.status(409).json({ message: "Room not available" });
      }

      const insertSql = `
        INSERT INTO bookings (user_id, room_id, check_in, check_out, total_price)
        VALUES (?, ?, ?, ?, ?)
      `;

      db.run(
        insertSql,
        [userId, room_id, check_in, check_out, total_price],
        function (err) {
          if (err) return res.status(500).json({ message: "Insert error" });

          return res.status(201).json({
            message: "Booking created",
            booking_id: this.lastID
          });
        }
      );
    }
  );
};
