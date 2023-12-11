import './CridetCard.css'
import CriditCard from '../../../../asset/creditcardnew.webp'
import React, { useState } from 'react';
import {BsCurrencyDollar} from 'react-icons/bs'
import {RiCopperCoinFill} from 'react-icons/ri'
function CridetCard() {
  const [dollars, setDollars] = useState(5);
  const [coins, setCoins] = useState((dollars * 1.57).toFixed(2)); // Conversion rate: 1 dollar = 1.57 coins

  const handleDollarChange = (e) => {
    const inputDollars = e.target.value;
    setDollars(inputDollars);
    setCoins((inputDollars * 1.46).toFixed(2));
  };

  const handleCoinChange = (e) => {
    const inputCoins = e.target.value;
    setCoins(inputCoins);
    setDollars((inputCoins / 1.46).toFixed(2));
  };

///////// form  const hading ////////

const [formData, setFormData] = useState({ email: '', firstname: '' , lastname: ''});
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validateForm = () => {
    const newErrors = {};
    if(formData.firstname.trim() === ''){
      newErrors.firstname = 'FirstName is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.lastname.trim() === '') {
      newErrors.lastname = 'LastName is required';
    }
    // if(formData.conformPassword.trim() === ''){
    //   newErrors.conformPassword = 'please fill conformPassword feild'
    // }else if( !formData.password.trim  === formData.conformPassword.trim){
    //   newErrors.conformPassword = 'Your conform password does not match your previous Password feild '
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
  
    if (isFormValid) {
      // Form is valid, you can submit or handle the login here
      console.log('Form data submitted:', formData);
      window.open('https://commerce.coinbase.com/checkout/199277bb-f84e-4bf1-bdc2-7bade51caba7', '_blank');
    }
  };




  return (
     <>

     <div className="CredetcardIFrstMain" >

      <div className="imageTextCredetCard">
        <img src={CriditCard} alt="" />
      </div>
      </div>
      <div className="formDivMain">
         <div className="css-dspxar">
         <div className="divsinoutFeild"><label className='allLabel' style={{width:'100%'}}>

        Pay
        <div className="css-1f8eutj"><BsCurrencyDollar style={{color:'rgb(34, 197, 94)',fontSize:'1.125rem'}}/></div>
        <input
        className='inputFeildEdit'
          type="number"
          value={dollars}
          onChange={handleDollarChange}
          min="0"
          step="0.01"
        />
      </label></div>
      <div className="divsinputequalto">=</div>
         <div className="divsinoutFeild"><label className='allLabel' style={{width:'100%'}}>
       Receive
       <div className="css-1f8eutj"> <RiCopperCoinFill style={{color:'#E7B503',fontSize:'1.125rem'}}/></div>
        <input
        className='inputFeildEdit'
          type="number"
          value={coins}
          onChange={handleCoinChange}
          min="0"
          step="0.01"
        />
      </label></div>
      
         </div> 
         </div>
    
         <div className="formDivMain">
         <div className="css-dspxar">
         <form className='formIdNews' onSubmit={handleSubmit}>
         <div className="divsinoutFeild" style={{width:'50%',paddingRight:'5px'}}>

         <label className='allLabel' htmlFor="firstname">FirstName:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          {errors.firstname && <div className="error">{errors.firstname}</div>}
         </div>
         <div className="divsinoutFeild" style={{width:'50%',paddingLeft:'5px'}}>

         <label className='allLabel' htmlFor="lastname">LastName:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          {errors.lastname && <div className="error">{errors.lastname}</div>}

         </div>
         <div className="divsinoutFeildThirdEmail" >
         <label className='allLabel' htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
         </div>
         
         <button  style={{width:'100%'}} className='greenButtonStyles' type="submit">Pay With COINBASE</button>
         </form>
         </div>
         <p className="seconddeadingSkin" style={{textAlign:'start',fontSize:'13px',fontWeight:'400',paddingTop:'10px'}}>The payments via COIN will be not accepted in Belgium, China, Japan, The Netherlands and the Isle of Man, Taiwan, Thailand, Switzerland, Norway, Denmark, Singapore. You will be redirected to complete the payment. It may take up to a few minutes to receive the funds. If you need help, do not hesitate to contact our support.</p>
         <p className="seconddeadingSkin" style={{textAlign:'start',fontSize:'13px',fontWeight:'400',paddingTop:'10px'}}>Payments may be handled on behalf of Rust Clash Entertainment Ltd, registration number HE439425, located at Thermistokli Dervi, 48, 3rd Floor, Office 306, 1065, Nicosia, Cyprus.</p>
         </div>
     
     
     </>
  );
}

export default CridetCard


