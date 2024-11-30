// const express = require("express");
// const dotenv = require("dotenv");
// const connectDb = require("./config/dbConnection");
// dotenv.config();

// const app = express();

// const cors = require('cors');
// app.use(cors());

// // Connect to MongoDB
// connectDb();

// // Middleware
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// // Register user routes
// app.use('/api/users', require("./routes/userRoute")); 

// // Register booking routes
// app.use("/api/bookings", require("./routes/bookingRoute")); // Handles all booking-related routes

// app.use((req, res) => {
//     res.status(404).json({ message: "Endpoint not found" });
//   })

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");

dotenv.config();
const app = express();

const cors = require("cors");
app.use(cors()); // Enable CORS for frontend communication

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDb();

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Register routes
app.use("/api/bookings", require("./routes/bookingRoute")); // Booking routes

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
