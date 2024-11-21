import React, { useState } from 'react';
import '../styles/WalletNav.css'; // Import your CSS for styling

const WalletNav = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [message, setMessage] = useState('');

  // Function to add money to the wallet with cashback
  const addMoney = (amount) => {
    const cashback = 50; // Fixed cashback offer
    setWalletBalance(walletBalance + amount + cashback); // Add amount and cashback
    setMessage(`Successfully added ₹${amount} to your wallet! You earned ₹${cashback} as cashback.`);
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  // Function to remove money from the wallet
  const removeMoney = (amount) => {
    if (walletBalance >= amount) {
      setWalletBalance(walletBalance - amount); // Remove amount from wallet
      setMessage(`Successfully removed ₹${amount} from your wallet.`);
    } else {
      setMessage("Insufficient balance in your wallet!");
    }
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div id="wallet-nav">
      <h2>Your Detailed Wallet</h2>
      <div id="wallet-info">
        <p>Wallet Balance: <span id="wallet-amount">₹{walletBalance}</span></p>
      </div>
      <div id="cashback-info">
        <p>💥 <strong>Cashback of ₹50 guaranteed!</strong> 💥</p>
      </div>
      
      <div id="wallet-buttons">
        <button onClick={() => addMoney(300)}>Add ₹300</button>
        <button onClick={() => addMoney(500)}>Add ₹500</button>
        <button onClick={() => addMoney(1000)}>Add ₹1000</button>

        <button onClick={() => removeMoney(300)}>Remove ₹300</button>
        <button onClick={() => removeMoney(500)}>Remove ₹500</button>
        <button onClick={() => removeMoney(1000)}>Remove ₹1000</button>
      </div>

      <div id="wallet-images">
        <img src="https://static.vecteezy.com/system/resources/previews/016/461/447/original/animated-wallet-with-cash-money-inside-icon-illustration-vector.jpg" alt="Wallet with Cash" id="wallet-image" />
        <img src="https://clipground.com/images/animated-parking-lot-clipart-1.jpg" alt="Parking Lot" id="cashback-image" />
      </div>

      {message && <p id="wallet-message">{message}</p>}

      <div id="tips">
        <h3>Did you know?</h3>
        <ul>
          <li>Earn points on every transaction to use on future purchases!</li>
          <li>Get exclusive offers and cashback when you add money regularly.</li>
          <li>Your wallet is safe and secure, and your balance is instantly updated.</li>
        </ul>
      </div>
    </div>
  );
};

export default WalletNav;
