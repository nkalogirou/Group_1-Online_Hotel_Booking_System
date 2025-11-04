// ======= Hotel Booking System - Server.js =======
// (Test Version)

// Εισαγωγή modules
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Ενεργοποίηση middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Δοκιμαστικό route
app.get("/", (req, res) => {
    res.send("Server is running successfully.");
});

// Εκκίνηση server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});