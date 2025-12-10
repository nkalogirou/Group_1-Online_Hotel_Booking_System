const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import the auth routes
const authRoutes = require("./routes/auth");

// Use the auth routes at /auth
app.use("/auth", authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
