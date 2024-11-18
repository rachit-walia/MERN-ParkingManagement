import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wallet from './components/Wallet';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My Website</h1>
      </main>
      <Wallet/>
      <Footer />
    </div>
  );
}

export default App;
