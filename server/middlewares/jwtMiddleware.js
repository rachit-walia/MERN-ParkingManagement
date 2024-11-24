const jwt = require("jsonwebtoken"); // Import jwt once
require("dotenv").config(); // Load environment variables

// Generate JWT Token
const generateJwtToken = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "7d" }); // Use JWT_SECRET from .env
};

// Middleware to Validate JWT Token
const validateJwtToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded payload to req.user
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { generateJwtToken, validateJwtToken }; // Export both functions
