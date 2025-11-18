const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided." });

  jwt.verify(token, "secret123", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    
    res.json({ message: "Session valid!", user });
  });
});

module.exports = router;
