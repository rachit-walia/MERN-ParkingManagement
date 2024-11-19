const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("../server/config/dbConnection");  // Keep this line and remove the other
// const connectDb = require("./config/dbConnection");  // Remove this duplicate import
dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDb();  // Call the function once

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
