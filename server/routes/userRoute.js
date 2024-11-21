const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// User registration
router.post("/", registerUser); // POST /api/users

// User login
router.post("/login", loginUser); // POST /api/users/login

module.exports = router;
