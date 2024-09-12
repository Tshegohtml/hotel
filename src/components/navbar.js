import "./navbar";
import logo from "./STAR-HOTEL-removebg-preview (1).png";
import "./navbar.css";

const Navbar = () => {
    return (
      <div className="nav-top">
        <div className="nav-container">
            <img src={logo} alt="Logo" />
          
            <div className="navigation">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">EXPLORE</a></li>
              <li><a href="#">GALLERY</a></li>
              <li><a href="#">ROOMS</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
            </div>
            
           
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  