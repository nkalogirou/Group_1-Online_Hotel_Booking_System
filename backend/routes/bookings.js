const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Ensure this is the correct path to your db

router.get('/api/bookings', authenticateUser, (req, res) => {
  const userId = req.user.id; // Assuming you get the user from the JWT
  const sql = "SELECT * FROM bookings WHERE user_id = ?";
  
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching bookings.' });
    }
    res.json({ bookings: rows }); // Send the bookings as JSON
  });
});

module.exports = router;
