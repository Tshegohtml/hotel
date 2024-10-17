import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Set 'Home' as default active item
  const handleMenuClick = (item) => {
    setActiveItem(item); // Update active item when clicked
  };
  return (
    <div className="nav-container">
      <div>
        <h1>Logo</h1>
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
        
        <Link to="/resturant">
        <li
          className={activeItem === 'Resturant' ? 'active' : ''}
          onClick={() => handleMenuClick('Resturant')}
        >
        Resturant
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









