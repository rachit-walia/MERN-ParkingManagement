const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cors = require("cors");  // Declare cors only once
const parkingRoute = require("./routes/parkingRoute");  // Assuming you have parking routes set up
const checkValidVehicle = require("./middlewares/vechileCheck");  // Assuming you have vehicle check middleware

dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Enable CORS for frontend communication
app.use(express.json());  // Parse JSON request bodies

// Connect to MongoDB
connectDb();

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Register routes
app.use("/api/bookings", require("./routes/bookingRoute")); // Booking routes
app.use("/api/parking", parkingRoute);  // Register parking routes

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
