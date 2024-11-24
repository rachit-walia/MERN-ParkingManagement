const express = require("express");
const { registerUser, loginUser, refreshToken } = require("../controllers/userController");
const { validateJwtToken } = require("../middlewares/jwtMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshToken);

// Example of a protected route
router.get("/secure-data", validateJwtToken, (req, res) => {
  res.status(200).json({ message: "Secure data accessed", user: req.user });
});

module.exports = router;
