// backend/routes/bookingHistory.js
const express = require("express");
const router = express.Router();

/**
 * GET /bookingHistory?userId=10
 *
 * For now this returns demo data so the frontend works.
 * Later you can replace this with real SELECT queries from your DB.
 */
router.get("/bookingHistory", (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ message: "Missing userId parameter" });
  }

  // 🔹 Demo data – you can replace with real database results
  const upcomingBookings = [
    {
      id: 1,
      date: "2025-12-10",
      status: "Confirmed",
      details: `Demo upcoming booking for user ${userId}`,
    },
  ];

  const pastBookings = [
    {
      id: 2,
      date: "2025-01-05",
      status: "Completed",
      details: `Demo past booking for user ${userId}`,
    },
  ];

  return res.json({
    upcomingBookings,
    pastBookings,
  });
});

module.exports = router;
