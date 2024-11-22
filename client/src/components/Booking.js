import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Install react-calendar
import '../styles/Booking.css'// Ensure the CSS file is correctly linked

const Booking = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div id="booking-page">
      <div id="booking-header">
        <h2>Book Your Parking Space</h2>
        <p>Reserve your parking spot in advance and enjoy exclusive benefits!</p>
      </div>

      <div id="booking-content">
        <section id="calendar-container">
          <h3>Select a Date</h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
            minDate={new Date()} // Prevent booking for past dates
          />
          <p>Selected Date: {date.toDateString()}</p>
        </section>

        <section id="booking-benefits">
          <h3>Why Book in Advance?</h3>
          <ul>
            <li>Guaranteed Parking Spot: No more searching for parking at the last minute!</li>
            <li>Exclusive Discounts: Get up to 20% off for early bookings.</li>
            <li>Priority Access: Skip the queue and get quick access to the parking lot.</li>
            <li>24/7 Availability: Book your space anytime, with full flexibility.</li>
          </ul>
        </section>

        <section id="booking-images">
          <h3>Experience Our Parking Spaces</h3>
          <div id="image-gallery">
            <img src="https://jooinn.com/images/parking-lot-7.jpg" alt="Parking Lot" />
          </div>
        </section>

        <section id="booking-form">
          <h3>Ready to Book?</h3>
          <p>Fill out the form below to confirm your booking:</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" required />

            <button type="submit" id="book-now-btn">Book Now</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Booking;
