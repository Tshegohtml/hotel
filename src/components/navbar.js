import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import Logo from "../components/logo-removebg-preview.png";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Set 'Home' as default active item
  const handleMenuClick = (item) => {
    setActiveItem(item); // Update active item when clicked
  };
  return (
    <div className="nav-container">
      <div>
      <img src={Logo} alt="Logo" className="logo" width="400" height="200" />
      </div>
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => handleMenuClick('Home')}
        >
          Home
        </li>

<Link to="/aboutus">
        <li
          className={activeItem === 'Aboutus' ? 'active' : ''}
          onClick={() => handleMenuClick('Aboutus')}
        >
          Aboutus
        </li></Link>

        <Link to="/gallery"> 
        
        <li
          className={activeItem === 'Gallery' ? 'active' : ''}
          onClick={() => handleMenuClick('Gallery')}
        >
         Gallery
        </li></Link>
        
       
        

        <Link to="/rooms">
        <li
          className={activeItem === 'Blog' ? 'active' : ''}
          onClick={() => handleMenuClick('Rooms')}
        >
         Rooms
        </li></Link>
      </ul>
    </div>
  );
};
export default NavBar;









