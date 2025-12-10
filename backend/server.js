const express = require("express");
const bookingsRouter = require('./routes/bookings');
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// existing routes
app.use("/auth", require("./routes/auth"));
app.use("/verify", require("./routes/verify"));
app.use("/session", require("./routes/session"));
app.use('/bookings', bookingsRouter);

// NEW: booking history route (mounted at root)
app.use("/", require("./routes/bookingHistory"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
