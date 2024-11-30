const Booking = require("../models/Booking");

// Create a new booking
const createBooking = async (req, res) => {
    const { name, email, phone, date } = req.body;
  
    try {
      const booking = new Booking({ name, email, phone, date });
      await booking.save();
      res.status(201).json({ message: "Booking created successfully!", booking });
    } catch (error) {
      res.status(500).json({ message: "Error creating booking", error });
    }
  };
  

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error });
  }
};

module.exports = { createBooking, getBookings, deleteBooking };
