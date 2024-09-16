import React, { useState } from 'react';
import "../components/booknow.css";
import Stunning from "../components/stunning image.jpg";

function Booknow() {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    phone: '',
    address: '',
    email: '',
    rate: '',
    roomNumber: '',
    period: '',
    adults: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="booknow-container">
      <div className="booknow-heading">
        <h1>START-HOTEL BOOKING PAGE</h1>
      </div>
      <p>Please fill out the form</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Check-In Date:</label>
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Check-Out Date:</label>
          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Room Rate (per night):</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Room Number:</label>
          <input
            type="number"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Period (Number of Nights):</label>
          <input
            type="number"
            name="period"
            value={formData.period}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of Adults:</label>
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booknow-btn">
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default Booknow;
