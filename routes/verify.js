const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../database/db");


router.get("/:token", (req, res) => {
  const token = req.params.token;

  jwt.verify(token, "secret123", (err, decoded) => {
    if (err) return res.json({ message: "Invalid or expired token." });

    const email = decoded.email;

    const sql = "UPDATE users SET verified = 1 WHERE email = ?";
    db.run(sql, [email], (err) => {
      if (err) return res.json({ message: "Database error." });

      res.json({ message: "Account activated successfully!" });
    });
  });
});

module.exports = router;
