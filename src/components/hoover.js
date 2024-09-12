import React from "react";
import { FaSpa } from "react-icons/fa";
import Spa from "../components/spa image.jpg";
import "./hoover.css";

const Hoover = () => {
  return (
    <div className="photo">
      <div className="image">
        <img src={Spa} alt="spa" width="500" height="200"></img>
      </div>

      <div>
        <h1>STAR-HOTEL SPA – Where Luxury Meets Comfort</h1>
        <p>Having to enjoy our luxurious spa treat at our hotel
is an amazing treat we offer to our clients with best quality 
and elegant fragrance and essential oils . We provide comfort and 
a great experience to our visitors.At STAR-HOTEL, we believe in delivering exceptional experiences. Whether you're here for a weekend getaway or an extended stay, our team is ready to make your visit memorable.24-hour concierge service: Always available to assist you.
Spa & Wellness Center: Relax and rejuvenate with a variety of treatments.
Fitness Center: Fully equipped to help you maintain your fitness routine.
Conference & Banquet Halls: Perfect for business meetings, weddings, and special events.</p>

<h2>WHAT WE OFFER AT OUR HOTEL</h2>
<div className="icons">
    <div className="icon1">
        <FaSpa size={40}/>
    </div>
</div>
      </div>
    </div>
  );
};

export default Hoover;
