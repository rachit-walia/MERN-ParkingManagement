import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login'; // Import the Login component
import Wallet from './components/Wallet';
import ParkingSpace from './components/ParkingSpace';
import WalletNav from './components/walletNav'; // Import the WalletNav component
import Booking from './components/Booking'; // Import the BookingPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ParkingSpace />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet-nav" element={<WalletNav />} />
        <Route path="/booking" element={<Booking />} /> {/* Add BookingPage route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
