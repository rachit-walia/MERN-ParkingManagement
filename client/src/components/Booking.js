import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/Booking.css";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { ...formData, date };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        const error = await response.json();
        setSuccessMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setSuccessMessage("Error submitting booking. Please try again.");
    }
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
          <Calendar onChange={handleDateChange} value={date} minDate={new Date()} />
          <p>Selected Date: {date.toDateString()}</p>
        </section>

        <section id="booking-form">
          <h3>Ready to Book?</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <button type="submit" id="book-now-btn">
              Book Now
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </section>
      </div>
    </div>
  );
};

export default Booking;
