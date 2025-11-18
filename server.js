const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/verify", require("./routes/verify"));
app.use("/session", require("./routes/session"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
