// ======== Hotel Booking System - Server.js ========
//"(test version)"
// Εισαγωγή modules
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Μεσαία λογισμικά (middlewares)
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Δοκιμαστικό route
app.get("/", (req, res) => {
  res.send("Server Working");
});

// Εκκίνηση server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
