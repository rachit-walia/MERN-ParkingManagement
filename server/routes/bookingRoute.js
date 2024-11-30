const express = require('express');
const { createBooking, getBookings, deleteBooking } = require('../controllers/bookingController');
const validateBooking = require('../middlewares/validateBooking');

const router = express.Router();

// POST: Create a new booking
router.post('/', validateBooking, createBooking);

// GET: Retrieve all bookings
router.get('/', getBookings);

// DELETE: Delete a booking by ID
router.delete('/:id', deleteBooking);

module.exports = router;
