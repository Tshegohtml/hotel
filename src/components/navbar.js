import "./navbar";
import logo from "./STAR-HOTEL-removebg-preview (1).png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
      <div className="nav-top">
        <div className="nav-container">
            <img src={logo} alt="Logo" />
          
            <div className="navigation">
            <ul>
            <li>
                <Link to="/">REGISTER</Link>
              </li>
            <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link to="/gallery">GALLERY</Link>
              </li>
              <li>
                <Link to="/resturant">RESTURANT</Link>
              </li>
              <li>
                <Link to="/rooms">ROOMS</Link>
              </li>
              <li>
                <Link to="/">CONTACT US</Link>
              </li>
            </ul>
            </div>
            
           
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  