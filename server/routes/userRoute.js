const express = require("express");
const { registerUser , loginUser  } = require("../controllers/userController");

const router = express.Router();

// User registration
router.post("/", registerUser ); // Change this line to use "/" instead of "/register"

// User login
router.post("/login", loginUser );

module.exports = router;