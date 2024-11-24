// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// // Helper function to generate JWT
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" }); // Token valid for 30 days
// };

// // @desc    Register a new user
// // @route   POST /api/users/register
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//     const { firstName, lastName, email, password, phoneNumber } = req.body;

//     // Check if all fields are provided
//     if (!firstName || !lastName || !email || !password || !phoneNumber) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new user
//     const newUser = await User.create({
//         firstName,
//         lastName,
//         email,
//         password: hashedPassword,
//         phoneNumber,
//     });

//     if (newUser) {
//         return res.status(201).json({
//             message: "User registered successfully",
//             user: {
//                 id: newUser._id,
//                 firstName: newUser.firstName,
//                 lastName: newUser.lastName,
//                 email: newUser.email,
//             },
//             token: generateToken(newUser._id),
//         });
//     } else {
//         return res.status(500).json({ message: "Failed to register user" });
//     }
// });

// // @desc    Login a user
// // @route   POST /api/users/login
// // @access  Public
// const loginUser = asyncHandler(async (req, res) => {
//     console.log("Login request body:", req.body);
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//         return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Respond with user details and token
//     return res.status(200).json({
//         message: "Login successful",
//         user: {
//             id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//         },
//         token: generateToken(user._id),
//     });
// });

// module.exports = { registerUser, loginUser };


const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Generate Access Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Generate Refresh Token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
  });

  if (user) {
    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id, user.role),
      refreshToken: generateRefreshToken(user._id),
    });
  } else {
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({
    message: "Login successful",
    token: generateToken(user._id, user.role),
    refreshToken: generateRefreshToken(user._id),
  });
});

// Refresh Token
const refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is required" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const newToken = generateToken(decoded.id, decoded.role);
    res.status(200).json({ token: newToken });
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired refresh token" });
  }
});

module.exports = { registerUser, loginUser, refreshToken };
