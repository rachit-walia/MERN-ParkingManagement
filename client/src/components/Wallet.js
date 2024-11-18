import React, { useState } from "react";
import '../styles/Wallet.css'
const Wallet = () => {
  const [balance, setBalance] = useState(0); // Initialize balance state

  const setNewBalance = (amount) => {
    setBalance(amount); // Function to update the balance
  };

  return (
    <div>
      <h1>Wallet</h1>
      <p>Current Balance: ${balance}</p> {/* Display the current balance */}

      <div>
        <button onClick={() => setNewBalance(300)}>Set Balance to $300</button>
        <button onClick={() => setNewBalance(500)}>Set Balance to $500</button>
        <button onClick={() => setNewBalance(1000)}>Set Balance to $1000</button>
      </div>
    </div>
  );
};

export default Wallet;
