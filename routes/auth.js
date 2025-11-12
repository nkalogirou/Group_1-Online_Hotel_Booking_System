const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../database/db");

 
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Please fill all fields." });
  }

  const hashed = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.run(sql, [name, email, hashed], (err) => {
    if (err) {
      return res.json({ message: "Email already exists." });
    }

    
    console.log(`Sending confirmation email to: ${email}`);
    
    
    const fakeLink = `http://localhost:3000/auth/verify/${email}`;

    res.json({
      message: "Registration successful! Confirmation email sent.",
      confirmationLink: fakeLink
    });
  });
});


const jwt = require("jsonwebtoken");


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) return res.json({ message: "Database error." });
    if (!user) return res.json({ message: "User not found." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: "Wrong password." });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      "secret123",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful!",
      token: token
    });
  });
});


router.get("/check-session", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided." });

  jwt.verify(token, "secret123", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    res.json({ message: "Session valid!", user });
  });
});


module.exports = router;

