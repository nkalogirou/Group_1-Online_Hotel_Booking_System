const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/db"); // Database connection

const JWT_SECRET = "super-secret-key-change-me"; // Secret key for JWT

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Ensure email and password are provided
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

    try {
      // Compare provided password with stored hash
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: "Incorrect password." });
      }

      // Create JWT token on successful login
      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        message: "Login successful!",
        token,
        userId: user.id,
        name: user.name,
      });
    } catch (error) {
      console.error("Error during password comparison:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  });
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  const checkSql = "SELECT id FROM users WHERE email = ?";
  db.get(checkSql, [email], async (err, row) => {
    if (err) {
      console.error("Error checking user:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (row) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertSql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
      `;

      db.run(insertSql, [name, email, hashedPassword], function (err2) {
        if (err2) {
          console.error("Error inserting user:", err2);
          return res.status(500).json({ message: "Failed to register user." });
        }

        res.status(201).json({
          message: "Registration successful!",
          userId: this.lastID,  // Return the user ID from the insert operation
        });
      });
    } catch (error) {
      console.error("Error hashing password:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  });
});


module.exports = router;
