
import React, { useEffect } from 'react';
import '../styles/loginpop.css'; // Import CSS file for styling
import pic from '../assets/pexels-pixabay-416471.jpg';

function LoginPopup({ onClose,onOpenSignupPopup }) {
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
              <h2>Login</h2>
            </div>
              <form>
                <h3>Enter your email to log in</h3>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <input type="password" id="password1" name="password" placeholder="Enter your password" required />
                <button type="submit">Continue</button>
              </form>

              <div className="text">
                <h3>OR</h3>
              </div>
              <div className="text1">
                <p>By Continuing, you agree to the updated <b>Terms of Sale, Terms of Service </b>and <b>Privacy Policy.</b></p>
              </div>
              <div className="signin-buttons">
                <button className="sign1">Continue with Google</button>
                <button className="sign1">Continue With Facebook</button>
              </div>
              <div className="signin-texts">
                <button className="signtext"  onClick={onOpenSignupPopup}>Don't have an account then, SignUp</button>
              </div>
        </div>
        <div className='popup-pic'>
          <img src={pic} alt='img' />
        </div>
      </div>
    </div>  
  
  );
}

export default LoginPopup;
