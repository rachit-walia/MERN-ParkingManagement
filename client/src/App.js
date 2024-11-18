import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    <div>
      <Navbar />
      
      <ParkingSpace/>
      <Wallet/>
      <Footer />
    </div>
  );
}

export default App;
