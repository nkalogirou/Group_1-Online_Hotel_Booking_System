const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookings');
const authMiddleware = require('../authMiddleware');

router.post('/', authMiddleware, bookingController.createBooking);

module.exports = router;
