// Dashboard.js

import React, { useState } from 'react';
import {  PayPalButtons } from '@paypal/react-paypal-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Dashboard() {
  const [coinBalance, setCoinBalance] = useState(0);
  const [transactionAmount, setTransactionAmount] = useState(0);
 
  const Itemcheck = {coinBalance};
  const handleDeposit = (details, data) => {
   
    const amountInDollars = parseFloat(transactionAmount);
    if (!isNaN(amountInDollars) && amountInDollars > 0) {
      const amountInCoins = amountInDollars * 5;
      setCoinBalance(coinBalance + amountInCoins);
      toast.success('Transition Sucessfully  Deposit Add Your Account', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
        });
  
    }
  };

  return (
    <div>
      {/* <h1>Dashboard</h1>
      <h2>Balance: {coinBalance} coins</h2>
      <input
        type="number"
        placeholder="Enter deposit amount (in dollars)"
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
        <button onApprove={handleDeposit}></button>
     
      <button onClick={handleDeposit}>Deposit Coins (via PayPal)</button> */}
      <ToastContainer />
    </div>
  );
}



export default Dashboard;

