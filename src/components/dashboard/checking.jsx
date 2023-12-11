import React, { useState } from 'react';

function Home({ handleDeposit }) {
  const [depositAmount, setDepositAmount] = useState(0);

  const handleScan = () => {
    handleDeposit(parseFloat(depositAmount));
    setDepositAmount(0); // Clear the input field after scanning
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="number"
        step="0.001"
        placeholder="Enter deposit amount (BTC)"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button onClick={handleScan}>Scan</button>
    </div>
  );
}

export default Home;
