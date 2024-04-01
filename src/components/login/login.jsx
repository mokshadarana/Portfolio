import React, {useState} from 'react'
import './login.css'

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Here will be the logic to send username/password to backend for authentication
      console.log('Logging in with:', username, password);
      //Then we redirect the user to another page upon successful login
    };
  
    return (
      <main className='web-container'>
        <div className="login-container">
          <div className="login-content">
            <div className='image-container'>
              <img src="https://i.pinimg.com/564x/09/53/ab/0953abe75ec46f3e99a037cc208034db.jpg" alt="Image" className="login-image" />
            </div>
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <label className='email-label'>Enter your email to login:</label>
                <input
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='continue'>Continue</button>
                <hr className='divider'/>
                <label className='or-label'>Or</label>
                <label className='text'>By continuing, you agree to the term of Sales, Service and Privacy Policies.</label>
                <button type="google" className='google-button'>Continue with Google</button>
                <div className='button-spacing'></div>
                <button type="facebook" className='facebook-button'>Continue with Facebook</button>
                <p>
                  Don't have an account yet? SIGN-UP
                </p>
              </form>
            </div>
          </div>
  
        </div>
      </main>
  );
}

export default login
