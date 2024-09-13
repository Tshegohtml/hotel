import React from "react";
import {
  FaEnvira,
  FaFacebook,
  FaHamburger,
  FaInstagramSquare,
  FaSpa,
  FaSwimmingPool,
  FaWhatsapp,
} from "react-icons/fa";
import Spa from "../components/spa image.jpg";
import "./hoover.css";

const Hoover = () => {
  return (
    <div>
      <div className="photo">
        <div className="image">
          <img src={Spa} alt="spa" width="1700" height="900" />
        </div>

        <div>
          <h1> Where Luxury Meets Comfort</h1>
          <p>
            Having to enjoy our luxurious spa treat at our hotel is an amazing
            treat we offer to our clients with best quality and elegant
            fragrance and essential oils . We provide comfort and a great
            experience to our visitors.At STAR-HOTEL, we believe in delivering
            exceptional experiences. Whether you're here for a weekend getaway
            or an extended stay, our team is ready to make your visit
            memorable.24-hour concierge service: Always available to assist you.
            Spa & Wellness Center: Relax and rejuvenate with a variety of
            treatments. Fitness Center: Fully equipped to help you maintain your
            fitness routine. Conference & Banquet Halls: Perfect for business
            meetings, weddings, and special events.
          </p>
        </div>
      </div>

      <div>
        <h2 className="heading-facility">WHAT WE OFFER AT OUR HOTEL</h2>
      </div>

      <div className="facility-icons">
        <div>
          <FaSpa size={60} />
          <h5>Comfort Spa Treat</h5>
        </div>

        <div>
          <FaEnvira size={60} />
          <h5>Enjoyable Environment</h5>
        </div>
        <div>
          <FaSwimmingPool size={60} />
          <h5>Great Pool</h5>
        </div>

        <div>
          <FaHamburger size={60} />
          <h5>We Offer Great Meals</h5>
        </div>

        <div></div>
      </div>

      <div>
        <div>
          <div className="footer-container">
            <div>
              <h1>ADDRESS</h1>
              <p>1245</p>
              <p>LESEDING</p>
              <p>TSWELELANG</p>
              <p>KIMBERLEY</p>
            </div>
            <div>
              <h1>CONTACT</h1>
              <p>0651518227</p>
              <p>info@hotel.com</p>
              <p>ytmotlhalane@gmal.com</p>
              <div>
                <div className="icon"/>
                <FaFacebook size={30} />
                <FaInstagramSquare size={30}/>
                <FaWhatsapp size={30}/>
              </div>
            </div>

            <div>
              <h1>LOCATION</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9229802106606!2d24.711653374761312!3d-28.721847671211712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b100a817a6cdf%3A0xacd6d3d2b14fb524!2sIbhotwe%20Guest%20House!5e0!3m2!1sen!2sza!4v1726216879523!5m2!1sen!2sza"
                width="600"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoover;
