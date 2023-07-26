import React, { useState } from 'react';
import './index.css'; 

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className="main-container">
      <div className="second-container">
        <div className="head-banner">
          <div>
            <h1>Flat 200% OFF + Free Shipping</h1>
            <p>On First Order</p>
            <h3>Code: GADWATCH200</h3>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/304/563/original/special-sale-discount-sticker-clipart-design-illustration-free-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="login-form">
          <h2>Enter your phone number</h2>
          <input
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <a href="https://www.facebook.com">
                <button className='signupbutton'>Sign up from Facebook</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
