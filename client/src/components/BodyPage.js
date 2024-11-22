// import React from "react";
// import "../styles/BodyPage.css";

// const BodyPage = () => {
//   return (
//     <div id="body-page">
//       {/* Hero Section */}
//       <section id="hero-section">
//   <div id="hero-content">
//     <h1>Welcome to W-Parking</h1>
//     <p>Your one-stop solution for booking, parking, charging, and managing your wallet.</p>
//     <button id="hero-button">Get Started</button>
//   </div>
//   <img
//     src="https://thumbs.dreamstime.com/z/rw-initial-logo-company-name-colored-red-black-swoosh-design-isolated-white-background-vector-logo-business-company-199336225.jpg"
//     alt="Hero Illustration"
//     id="hero-image"
//   />
// </section>


//       {/* Features Section */}
//       <section id="features-section">
//         <h2>Our Features</h2>
//         <div id="features-container">
//           <div className="feature-card">
//             <img
//               src="https://img.icons8.com/color/96/000000/reservation.png"
//               alt="Booking"
//             />
//             <h3>Easy Booking</h3>
//             <p>Reserve your spot hassle-free with our user-friendly booking system.</p>
//           </div>
//           <div className="feature-card">
//             <img
//               src="https://img.icons8.com/color/96/000000/car.png"
//               alt="Parking"
//             />
//             <h3>Smart Parking</h3>
//             <p>Locate and book secure parking spaces in your vicinity.</p>
//           </div>
//           <div className="feature-card">
//   <img
//     src="https://cdn2.vectorstock.com/i/1000x1000/19/26/electric-car-at-ev-charging-station-colored-vector-35941926.jpg"
//     alt="Charging"
//   />
//   <h3>Electric Charging</h3>
//   <p>Access our electric vehicle charging stations at the best rates.</p>
// </div>

//           <div className="feature-card">
//             <img
//               src="https://img.icons8.com/color/96/000000/wallet.png"
//               alt="Wallet"
//             />
//             <h3>Wallet Management</h3>
//             <p>Track your transactions and enjoy exclusive cashback offers.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <div id="testimonials-container">
//           <div className="testimonial-card">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="User"
//             />
//             <p>"MyApp has simplified my daily commute! Highly recommended."</p>
//             <h4>- Priya Sharma</h4>
//           </div>
//           <div className="testimonial-card">
//             <img
//               src="https://randomuser.me/api/portraits/men/22.jpg"
//               alt="User"
//             />
//             <p>"The wallet feature is a game-changer. Love the cashback rewards."</p>
//             <h4>- Rajesh Gupta</h4>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="cta-section">
//         <h2>Ready to Experience the Future?</h2>
//         <p>Sign up now and take control of your bookings, parking, charging, and payments in one place!</p>
//         <button id="cta-button">Join Us Today</button>
//       </section>
//     </div>
//   );
// };

// export default BodyPage;


import React from "react";
import { Link } from "react-router-dom";
import "../styles/BodyPage.css";

const BodyPage = () => {
  return (
    <div id="body-page">
      {/* Hero Section */}
      <section id="hero-section">
        <div id="hero-content">
          <h1>Welcome to W-Parking</h1>
          <p>Your one-stop solution for booking, parking, charging, and managing your wallet.</p>
          <button id="hero-button">Get Started</button>
        </div>
        <img
          src="https://thumbs.dreamstime.com/z/rw-initial-logo-company-name-colored-red-black-swoosh-design-isolated-white-background-vector-logo-business-company-199336225.jpg"
          alt="Hero Illustration"
          id="hero-image"
        />
      </section>

      {/* Features Section */}
      <section id="features-section">
        <h2>Our Features</h2>
        <div id="features-container">
          <Link to="/booking" className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/reservation.png"
              alt="Booking"
            />
            <h3>Easy Booking</h3>
            <p>Reserve your spot hassle-free with our user-friendly booking system.</p>
          </Link>
          <Link to="/parking" className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/car.png"
              alt="Parking"
            />
            <h3>Smart Parking</h3>
            <p>Locate and book secure parking spaces in your vicinity.</p>
          </Link>
          <Link to="/charging" className="feature-card">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/19/26/electric-car-at-ev-charging-station-colored-vector-35941926.jpg"
              alt="Charging"
            />
            <h3>Electric Charging</h3>
            <p>Access our electric vehicle charging stations at the best rates.</p>
          </Link>
          <Link to="/wallet" className="feature-card">
            <img
              src="https://img.icons8.com/color/96/000000/wallet.png"
              alt="Wallet"
            />
            <h3>Wallet Management</h3>
            <p>Track your transactions and enjoy exclusive cashback offers.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BodyPage;
