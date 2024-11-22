import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Install react-calendar if not already installed
import '../styles/Charging.css'; // Ensure this CSS file is updated

const Charging = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [chargerType, setChargerType] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Charging slot booked for ${date.toDateString()} at ${time} using a ${chargerType} charger.`);
  };

  return (
    <div id="charging-page">
      <div id="charging-header">
        <h2>Book Your EV Charging Slot</h2>
        <p>Reserve your EV charger and stay powered up on the go!</p>
      </div>

      <div id="charging-content">
        {/* Calendar Section */}
        <div id="calendar-container">
          <h3>Select a Date</h3>
          <Calendar 
            onChange={handleDateChange} 
            value={date} 
            minDate={new Date()} // Prevent booking for past dates
          />
          <p>Selected Date: {date.toDateString()}</p>
        </div>

        {/* Charging Options Section */}
        <div id="charging-options">
          <h3>Select Charging Slot</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="time">Preferred Time:</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
            />
            
            <label htmlFor="chargerType">Select Charger Type:</label>
            <select 
              id="chargerType" 
              name="chargerType" 
              value={chargerType} 
              onChange={(e) => setChargerType(e.target.value)} 
              required
            >
              <option value="" disabled>Select Charger Type</option>
              <option value="Fast Charger">Fast Charger</option>
              <option value="Standard Charger">Standard Charger</option>
              <option value="Ultra-fast Charger">Ultra-fast Charger</option>
            </select>

            <button type="submit" id="submit-btn">Book Charger</button>
          </form>
        </div>

        {/* Why Charge With Us Section */}
        <div id="charging-why">
          <h3>Why Charge With Us?</h3>
          <p>
            We provide a reliable and seamless charging experience for electric vehicles,
            ensuring you stay powered wherever you go. Here's why you should choose us:
          </p>
          <ul>
            <li>Multiple charging stations across India for easy access.</li>
            <li>Fast and efficient charging options tailored to your needs.</li>
            <li>Competitive pricing with rewards and discounts for regular users.</li>
            <li>Round-the-clock support for any assistance required.</li>
          </ul>
          <img
            src="https://assets.mspimages.in/wp-content/uploads/2022/06/India-EV-charging.jpg?is-pending-load=1"
            alt="EV Charging Station in India"
          />
        </div>

        {/* Charging Time Section */}
        <div id="charging-time">
          <h3>Charging Time</h3>
          <p>
            Discover how quickly you can charge your EV at our stations. With advanced
            charging technology, we ensure your wait time is minimized. Charging times depend on:
          </p>
          <ul>
            <li>
              <strong>Fast Chargers:</strong> Get 80% charge in just 30 minutes.
            </li>
            <li>
              <strong>Standard Chargers:</strong> Full charge in 3-4 hours.
            </li>
            <li>
              <strong>Home Chargers:</strong> Convenient overnight charging.
            </li>
          </ul>
          <img
            src="https://assets.mspimages.in/wp-content/uploads/2022/06/India-EV-charging.jpg?is-pending-load=1"
            alt="EV Charging Time"
          />
        </div>
      </div>
    </div>
  );
};

export default Charging;
