const validateBooking = (req, res, next) => {
    const { name, email, phone, date } = req.body;
  
    if (!name || !email || !phone || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number." });
    }
  
    next();
  };
  
  module.exports = validateBooking;
  