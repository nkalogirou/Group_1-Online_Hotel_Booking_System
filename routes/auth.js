// ======= AUTH ROUTES (Registration & Login) =======
// (test version)

const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Please provide both username and password" });
    }

    res.status(200).json({
        message: `User ${username} registered successfully`
    });
});

module.exports = router;