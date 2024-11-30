const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
dotenv.config();

const app = express();

const cors = require('cors');
app.use(cors());

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Register user routes
app.use('/api/users', require("./routes/userRoute")); 

// Register booking routes
app.use("/api/bookings", require("./routes/bookingRoute")); // Handles all booking-related routes

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
