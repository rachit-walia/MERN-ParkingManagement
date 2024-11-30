const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
  },
  totalSpots: {
    type: Number,
    required: true,
  },
  availableSpots: {
    type: Number,
    required: true,
  },
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
