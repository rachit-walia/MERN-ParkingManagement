// routes/parkingRoute.js
const express = require('express');
const { getParkingAvailability, bookParkingSpot } = require('../controllers/parkingController');

const router = express.Router();

// Route to get parking availability
router.get('/:vehicleType', getParkingAvailability);

// Route to book parking spot
router.post('/:vehicleType/book', bookParkingSpot);

module.exports = router;
