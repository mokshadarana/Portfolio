import { useEffect } from 'react';
import "../styles/signuppop.css";
import PropTypes from 'prop-types';
import pic from "../assets/signup.jpg";
function SignupPopup({ onClose }) {
  useEffect(() => {
    // Add event listener to disable scrolling when the popup is opened
    document.body.style.overflow = 'hidden';
    // Cleanup function to enable scrolling when the popup is closed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='popup-container'>
    <div className='popup'>
      <div className='popup-content'>
          <div className="close">
            <button className="close-btn" onClick={onClose}>X</button>
          </div>
          <div className="popup-header">
            <h2>Signup</h2>
          </div>
            <form className='signup'>
              <h3>Enter your email to Sign Up.</h3>
              <input type="name" id="name" name="name" placeholder="Enter your name" required />
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
              <input type="password" id="password" name="password" placeholder="Renter password" required />
              <button type="submit">Continue</button>
            </form>
           
      </div>
      <div className='popup-pic'>
        <img src={pic} alt='img' />
      </div>
    </div>
  </div> 
  );
}

SignupPopup.propTypes = {
  onClose: PropTypes.func.isRequired, 
};

export default SignupPopup;
