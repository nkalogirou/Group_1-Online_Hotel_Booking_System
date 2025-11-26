// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/db");

// ⚠️ In a real app, move this to env
const JWT_SECRET = "super-secret-key-change-me";

// ============= REGISTER =============
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.json({ message: "Please fill all fields." });
  }

  if (!["admin", "user"].includes(role)) {
    return res.json({ message: "Invalid role." });
  }

  try {
    const checkSql = "SELECT id FROM users WHERE email = ?";
    db.get(checkSql, [email], async (err, row) => {
      if (err) {
        console.error("Error checking user:", err);
        return res.status(500).json({ message: "Database error." });
      }

      if (row) {
        return res.json({ message: "User with this email already exists." });
      }

      const hashed = await bcrypt.hash(password, 10);

      const insertSql = `
        INSERT INTO users (name, email, password, role, verified)
        VALUES (?, ?, ?, ?, 1)
      `;

      db.run(insertSql, [name, email, hashed, role], function (err2) {
        if (err2) {
          console.error("Error inserting user:", err2);
          return res.status(500).json({ message: "Failed to register user." });
        }

        return res.json({
          message: "Registration successful!",
          userId: this.lastID,
        });
      });
    });
  } catch (e) {
    console.error("Unexpected error:", e);
    return res.status(500).json({ message: "Unexpected error." });
  }
});


// ============= LOGIN =============
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  const sql = "SELECT * FROM users WHERE email = ?";

  db.get(sql, [email], async (err, user) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    if (!user.verified) {
      return res
        .status(401)
        .json({ message: "Please verify your email before logging in." });
    }

    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: "Incorrect password." });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({
        message: "Login successful!",
        token,
        userId: user.id,
        role: user.role,
        name: user.name,
      });

    } catch (e) {
      console.error("Error during password comparison:", e);
      return res.status(500).json({ message: "Unexpected error." });
    }
  });
});

module.exports = router;
