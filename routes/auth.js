const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../database/db");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret123"; 


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Please fill all fields." });
  }

  try {
    const hashed = await bcrypt.hash(password, 10);

    
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.run(sql, [name, email, hashed], (err) => {
      if (err) {
        console.error("DB error on register:", err.message);
        return res.json({ message: "Email already exists." });
      }

      
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
      const link = `http://localhost:3000/verify/${token}`;

      res.json({
        message: "Registration successful! Confirmation email sent.",
        confirmationLink: link,
      });
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.json({ message: "Server error." });
  }
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) return res.json({ message: "Database error." });
    if (!user) return res.json({ message: "User not found." });

    
    if (!user.verified && user.role !== 'admin')
      return res.json({ message: "Please verify your account to login." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: "Wrong password." });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },   
      "secret123",
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful!", token, role: user.role });
  });
});


module.exports = router;
