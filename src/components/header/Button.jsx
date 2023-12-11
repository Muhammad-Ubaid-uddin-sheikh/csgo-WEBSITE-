
import React, { useState } from 'react';
import './Header.css';
import Form from './Form'
import FormSignup from './FormSignup'
import Soldier from '../../asset/soldier.webp'
const Popup = () => {
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
      <button className='ButtonStylesHeader' onClick={togglePopup}>Sign In</button>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-button" onClick={closePopup}>
              X
            </button> */}

<div className="imageContainerMain">
    <div className="containerRowDiv">
        <div className="colmContainerFirst">
            <img src={Soldier} alt="" srcset="" width="100%" height="100%" />
        </div>
        <div className="colmContainerSecond">

        <div className="AppFormButon">
      <button  
        className={activeButton === 1 ? "active-button" : "inactive-button"}
        onClick={ () => handleButtonClick(1) }
      >
        Login
      </button>
      <button 
        className={activeButton === 2 ? "active-button" : "inactive-button"}
        onClick={() => handleButtonClick(2) }
      >
        Register
      </button>
    </div>

        {isLogin ? (
              <div>
            
                <Form/>
                
              </div>
            ) : (
              <div>
                  <FormSignup/>
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

export default Popup;
