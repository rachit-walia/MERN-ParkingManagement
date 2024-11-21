import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login'; // Import the Login component
import Wallet from './components/Wallet';
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/" element={<ParkingSpace />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;