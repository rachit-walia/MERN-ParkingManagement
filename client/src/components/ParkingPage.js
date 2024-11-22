import React, { useState } from 'react';
import '../styles/ParkingPage.css'; // Make sure to style it as per your requirements

const ParkingPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [availability, setAvailability] = useState({
    "2-wheeler": { total: 50, available: 30 },
    "3-wheeler": { total: 20, available: 12 },
    "4-wheeler": { total: 100, available: 60 },
  });
  const [message, setMessage] = useState('');

  // Handle vehicle selection
  const handleVehicleSelect = (vehicleType) => {
    setSelectedVehicle(vehicleType);
    setMessage('');
  };

  // Book a parking spot
  const bookParking = () => {
    if (availability[selectedVehicle].available > 0) {
      setAvailability((prev) => ({
        ...prev,
        [selectedVehicle]: {
          ...prev[selectedVehicle],
          available: prev[selectedVehicle].available - 1,
        },
      }));
      setMessage(`🚗 Parking spot for a ${selectedVehicle} has been successfully booked!`);
    } else {
      setMessage('❌ Sorry, no parking spots available for the selected vehicle type!');
    }

    setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
  };

  return (
    <div id="parking-page">
      <h1 id="parking-heading">🚘 Parking Spot Management</h1>
      <p id="parking-description">Select your vehicle type and check parking availability below:</p>

      <div id="vehicle-options">
        <button id="2-wheeler-button" onClick={() => handleVehicleSelect('2-wheeler')}>🛵 2-Wheeler</button>
        <button id="3-wheeler-button" onClick={() => handleVehicleSelect('3-wheeler')}>🛺 3-Wheeler</button>
        <button id="4-wheeler-button" onClick={() => handleVehicleSelect('4-wheeler')}>🚗 4-Wheeler</button>
      </div>

      {selectedVehicle && (
        <div id="availability-info">
          <h2 id="availability-heading">Parking Availability for {selectedVehicle}</h2>
          <p id="total-spots">
            Total Spots: <strong id="total-count">{availability[selectedVehicle].total}</strong>
          </p>
          <p id="available-spots">
            Available Spots: <strong id="available-count">{availability[selectedVehicle].available}</strong>
          </p>
          <button id="book-parking" onClick={bookParking} disabled={availability[selectedVehicle].available === 0}>
            Book Parking Spot
          </button>
        </div>
      )}

      {message && <p id="parking-message">{message}</p>}

      <div id="parking-tips">
        <h2 id="parking-tips-heading">🅿️ Parking Tips</h2>
        <ul id="tips-list">
          <li>📋 Check availability before heading to the parking lot.</li>
          <li>🕒 Reserve your spot during peak hours to avoid inconvenience.</li>
          <li>🔒 Always lock your vehicle and avoid leaving valuables inside.</li>
          <li>🚶 Park only in designated areas to avoid fines or towing.</li>
        </ul>
      </div>

      <div id="parking-images">
        <h2 id="gallery-heading">Gallery</h2>
        <div id="image-gallery">
          <img id="parking-lot-image"
            src="https://jooinn.com/images/parking-lot-7.jpg"
            alt="Parking Lot"
          />
          <img id="vehicles-parking-image"
            src="https://wallpaperaccess.com/full/4327615.jpg"
            alt="Vehicles Parking"
          />
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
