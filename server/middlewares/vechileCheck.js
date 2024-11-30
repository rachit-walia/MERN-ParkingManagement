// vehicleCheck.js
const validVehicleTypes = ['2-wheeler', '3-wheeler', '4-wheeler'];

const checkValidVehicle = (req, res, next) => {
  const { vehicleType } = req.params;
  if (!validVehicleTypes.includes(vehicleType)) {
    return res.status(400).json({ message: 'Invalid vehicle type.' });
  }
  next();
};

module.exports = checkValidVehicle;
