import React from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './pages/Menu';
import Story from './pages/Story';
import Location from './pages/Location';
import Tables from "./pages/Tables";
import Footer from './Components/Footer';
import LoginPopup from './Components/loginpop';
import SignupPopup from './Components/signupop';

function App() {
  const [showLoginPopup, setShowLoginPopup] = React.useState(false); // Use React.useState instead of useState
  const [showSignupPopup, setShowSignupPopup] = React.useState(false); // Use React.useState instead of useState

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const openSignupPopup = () => {
    setShowSignupPopup(true);
  };

  const closeSignupPopup = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar onOpenLoginPopup={openLoginPopup} />
        <div className='main-content'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Menu" exact component={Menu} />
            <Route path="/Story" exact component={Story} />
            <Route path="/Location" exact component={Location} />
            <Route path="/Tables" exact component={Tables} />
          </Switch>
          {showLoginPopup && <LoginPopup onClose={closeLoginPopup} onOpenSignupPopup={openSignupPopup} />}
          {showSignupPopup && <SignupPopup onClose={closeSignupPopup} />}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// Prop types validation
Navbar.propTypes = {
  onOpenLoginPopup: PropTypes.func.isRequired // Validate onOpenLoginPopup prop
};

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired, // Validate onClose prop
  onOpenSignupPopup: PropTypes.func.isRequired // Validate onOpenSignupPopup prop
};

SignupPopup.propTypes = {
  onClose: PropTypes.func.isRequired // Validate onClose prop
};

export default App;
