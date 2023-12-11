import React, { useState } from 'react';
import './Header.css';
import {FaEyeSlash,FaEye} from 'react-icons/fa'
function FormSingup() {
  const [formData, setFormData] = useState({ email: '', password: '' , username: '' , conformPassword: '' });
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//   const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const validateForm = () => {
    const newErrors = {};
    if(formData.username.trim() === ''){
      newErrors.username = 'UserName is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    if(formData.conformPassword.trim() === ''){
      newErrors.conformPassword = 'please fill conformPassword feild'
    }else if( !formData.password.trim  === formData.conformPassword.trim){
      newErrors.conformPassword = 'Your conform password does not match your previous Password feild '
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Form is valid, you can submit or handle the login here
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="App-new">
        
      <form onSubmit={handleSubmit}>

      <div>
          <label className='allLabel' htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div>
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
        <div>
          <label className='allLabel' htmlFor="password">Password:</label>
         
           <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye style={{ fontSize:' 18px' ,color: '#c9c9c9'}}/> : <FaEyeSlash style={{ fontSize:' 18px' ,color: '#c9c9c9'}}/> }
          </span>
        </div>
          
          {errors.password && <div className="error">{errors.password}</div>}
        </div>


        <div>
          <label className='allLabel' htmlFor="password">Repat-Password:</label>
         
           <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            id="conformPassword"
            name="conformPassword"
            value={formData.conformPassword}
            onChange={handleInputChange}
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye style={{ fontSize:' 18px' ,color: '#c9c9c9'}}/> : <FaEyeSlash style={{ fontSize:' 18px' ,color: '#c9c9c9'}}/> }
          </span>
        </div>
          
          {errors.conformPassword && <div className="error">{errors.conformPassword}</div>}
        </div>

        <button style={{width:'100%'}} className='greenButtonStyles' type="submit">Register</button>
      </form>
      {/* <div className="or-line">
        <hr />
      </div>
      <div className="third-party-buttons">
        <button className="SignwithStream">Sign in with Stream</button>
        <button className="GoogoleButton">Sign in with Google</button>
      </div> */}
    </div>
  );
}

export default FormSingup;
