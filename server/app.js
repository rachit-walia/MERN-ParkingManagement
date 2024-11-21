const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
dotenv.config();

const app = express();

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Register user routes
app.use('/api/users', require("./routes/userRoute")); // Use `/api/users`
app.use('/api/login', require("./routes/userRoute")); // use `api/users/login`

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
