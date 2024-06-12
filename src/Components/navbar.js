import logo from "../assets/logo.png";
import "../styles/navbar.css";

const navbar = () => {
    return(
        <main>
            <div className="bar">
                <img src={logo} alt="Logo"></img>
                <ul className="navbar-list">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">About</li>
                <li className="navbar-item">Contact</li>
            </ul>
            </div>
        </main>
    )
}

export default navbar;