

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Wallet from './components/Wallet';
import Charging from './components/Charging';
import WalletNav from './components/walletNav';
import Booking from './components/Booking';
import BodyPage from './components/BodyPage';
import ParkingPage from './components/ParkingPage';

function App() {
  const noNavFooterPaths = ["/signup", "/login"];
  const showNavFooter = !noNavFooterPaths.includes(window.location.pathname);

  return (
    <Router>
      {showNavFooter && <Navbar />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BodyPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet-nav" element={<WalletNav />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
      {showNavFooter && <Footer />}
    </Router>
  );
}

export default App;