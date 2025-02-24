// const express = require("express");
// const dotenv = require("dotenv");
// const connectDb = require("./config/dbConnection");
// const cors = require("cors");  // Declare cors only once
// const parkingRoute = require("./routes/parkingRoute");  // Assuming you have parking routes set up
// const checkValidVehicle = require("./middlewares/vechileCheck");  // Assuming you have vehicle check middleware

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());  // Enable CORS for frontend communication
// app.use(express.json());  // Parse JSON request bodies

// // Connect to MongoDB
// connectDb();

// // Test Route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Register routes
// app.use("/api/bookings", require("./routes/bookingRoute")); // Booking routes
// app.use("/api/parking", parkingRoute);  // Register parking routes

// // Fallback for undefined routes
// app.use((req, res) => {
//   res.status(404).json({ message: "Endpoint not found" });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const parkingRoute = require("./routes/parkingRoute");
const bookingRoute = require("./routes/bookingRoute");

dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Enable CORS for frontend communication
app.use(express.json());  // Parse JSON request bodies

// Connect to MongoDB
connectDb().then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after DB connection is established
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit process if DB connection fails
});

// Test Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Register API routes
app.use("/api/bookings", bookingRoute); 
app.use("/api/parking", parkingRoute);  

// Fallback for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});
