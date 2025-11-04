// ======= Hotel Booking System – Server.js =======
// (test version)

// Εισαγωγή modules
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

// Χρήση routes
app.use("/auth", authRoutes);

// Δοκιμαστικό route
app.get("/", (req, res) => {
    res.send("Server Working");
});

// Εκκίνηση server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});