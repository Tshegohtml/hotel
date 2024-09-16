import React from 'react';

import './aboutus.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Waterfall from "../components/waterfall image.jpg";

function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-heading">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-content">
        <img src={Waterfall} alt="Waterfall" className="water-image" />
        <div className="aboutus-text">
          <h2>Welcome to Our Hotel</h2>
          <p>
            At Our Hotel, we are committed to providing you with an exceptional experience. Our mission is to offer
            luxurious and comfortable accommodations while ensuring top-notch service. Whether you're here for business
            or leisure, we aim to make your stay memorable.
          </p>
          <p>
            Our team is dedicated to making sure every aspect of your visit is perfect. From our elegant rooms and
            suites to our exquisite dining options, we strive to exceed your expectations. For any inquiries or further
            information, feel free to contact us at: <a href="mailto:ytmotlhlane@gmail.com">ytmotlhlane@gmail.com</a>.
          </p>
          <div className="contact-info">
            <p>Address: 1245 Leseding Street</p>
            <p>Tswelelang</p>
            <p>Kimberley</p>
            <p>8345</p>
            <p>phone: 0651518227</p>
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
