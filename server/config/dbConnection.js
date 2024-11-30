const mongoose = require("mongoose");
const Parking = require("../models/Parking");

const connectDb = async () => {
  try {
    // Connect to MongoDB without deprecated options
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database Connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit with failure
  }
};


const createInitialData = async () => {
  const initialData = [
    { vehicleType: '2-wheeler', totalSpots: 50, availableSpots: 30 },
    { vehicleType: '3-wheeler', totalSpots: 20, availableSpots: 12 },
    { vehicleType: '4-wheeler', totalSpots: 100, availableSpots: 60 },
  ];

  try {
    await Parking.insertMany(initialData);
    console.log('Initial parking data created.');
  } catch (error) {
    console.error('Error creating initial parking data:', error);
  }
};

createInitialData();

module.exports = connectDb;
