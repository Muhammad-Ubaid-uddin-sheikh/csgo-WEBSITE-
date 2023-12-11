
import React, { useState } from 'react';
import '../Header.css';
import Deposit from '../deposit/Deposit'
import Widthdraw from '../widthdraw/Widthdraw'
const DepositPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    toggleForm();
  };

  return (
    <div className="popup-container">
      <button className='nav-link' style={{padding:'9px 26px 9px 26px',marginTop:'0px'}} onClick={togglePopup}>Widthdraw</button>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popupDeposit" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              X
            </button>

<div className="imageContainerDepositMian">
    <div className="containerRowDiv">
       
        <div className="DepositeContainer">

        <div className="AppFormButon" style={{width:'25%',marginTop:'20px'}}>
      <button  
        className={activeButton === 1 ? "active-button" : "inactive-button"}
        onClick={ () => handleButtonClick(1) }
      >
        Withdraw
       
      </button>
      <button 
        className={activeButton === 2 ? "active-button" : "inactive-button"}
        onClick={() => handleButtonClick(2) }
      >
         Deposit
      </button>
      
    </div>

        {isLogin ? (
              <div>
            <Widthdraw/>
             
                
              </div>
            ) : (
              <div>
                     <Deposit/>
              </div>
            )}
        </div>
    </div>
</div>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositPopup;
