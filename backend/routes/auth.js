const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;  // Load JWT secret from .env file

const router = express.Router();

// Registration Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  try {
    // Check if the email already exists
    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
      if (err) {
        console.error("DB error on register:", err.message);
        return res.status(500).json({ message: "Database error." });
      }
      if (user) {
        // If user exists, send an error message
        return res.status(400).json({ message: "Email already exists." });
      }

      // Hash the password before saving it
      const hashed = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      db.run(sql, [name, email, hashed], (err) => {
        if (err) {
          console.error("DB error on register:", err.message);
          return res.status(500).json({ message: "Error registering user." });
        }

        // Create a JWT token for the new user
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
        const link = `http://localhost:3000/verify/${token}`;  // Example verification link

        res.status(201).json({
          message: "Registration successful! Confirmation email sent.",
          confirmationLink: link,
        });
      });
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

// Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Database error." });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the entered password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Create a JWT token and return it
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,  // Use the JWT secret from .env file
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful!",
      token,  // Send the token to the frontend
      role: user.role,  // Optionally, send user role
    });
  });
});

// Example route definition
router.get("/api/bookings", authenticateUser, (req, res) => {
    const userId = req.user.id;
    const sql = "SELECT * FROM bookings WHERE user_id = ?";
    db.all(sql, [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching bookings." });
        }
        res.json({ bookings: rows });
    });
});

// Middleware to authenticate the user with JWT token
function authenticateUser(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = decoded;  // Attach the decoded user data to the request
    next();
  });
}

module.exports = router;
