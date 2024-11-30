// parkingController.js
const Parking = require('../models/Parking');

// Get parking availability for a specific vehicle type
const getParkingAvailability = async (req, res) => {
  const { vehicleType } = req.params;

  try {
    const parkingData = await Parking.findOne({ vehicleType });
    
    if (!parkingData) {
      return res.status(404).json({ message: 'Parking data not found for this vehicle type.' });
    }

    res.status(200).json(parkingData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking availability', error });
  }
};

// Book a parking spot for a vehicle
const bookParkingSpot = async (req, res) => {
  const { vehicleType } = req.params;

  try {
    const parkingData = await Parking.findOne({ vehicleType });

    if (!parkingData) {
      return res.status(404).json({ message: 'Parking data not found for this vehicle type.' });
    }

    if (parkingData.availableSpots > 0) {
      parkingData.availableSpots -= 1; // Decrease available spots by 1
      await parkingData.save();
      res.status(200).json({ message: `Parking spot for a ${vehicleType} has been successfully booked!` });
    } else {
      res.status(400).json({ message: 'No available parking spots for this vehicle type!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error booking parking spot', error });
  }
};

module.exports = {
  getParkingAvailability,
  bookParkingSpot,
};
