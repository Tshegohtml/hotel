import React, { useState } from 'react';
import "../components/booknow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";  // Assuming you've initialized Firebase in a 'firebase.js' file

function Booknow() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;
  
  const { checkInDate, checkOutDate, numGuests, totalPrice, room, basePrice } = location.state || {};
  
  const [formData, setFormData] = useState({
    checkin: checkInDate || '',
    checkout: checkOutDate || '',
    adults: numGuests || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      try {
        // Save booking details to the user's profile in Firestore
        const bookingData = {
          room: room || "Standard",
          checkin: formData.checkin,
          checkout: formData.checkout,
          numGuests: formData.adults,
          totalPrice: totalPrice,
          basePrice: basePrice,
        };

        await setDoc(doc(db, "users", user.uid, "bookings", Date.now().toString()), bookingData);

        // Navigate to the payment page
        navigate("/payment", {
          state: {
            room: room || "Standard",
            checkin: formData.checkin,
            checkout: formData.checkout,
            numGuests: formData.adults,
            totalPrice: totalPrice,
            basePrice: basePrice
          }
        });
      } catch (error) {
        console.error("Error saving booking:", error);
      }
    }
  };

  return (
    <div className='book-now-summary'>
      <h1 style={{textAlign:"center"}}>Booking Summary</h1>
      <div className='book-now-card'>
        <div className="price-details">
          <h3>Price Details</h3>
          <p>Room: {room || "Standard"}</p>
          <p>Base Price: R {basePrice}</p>
          <p>Total Price: R {totalPrice ? totalPrice.toFixed(2) : "0.00"}</p>
        </div>

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
            <button type="button" onClick={() => setFormData({ ...formData, checkin: '' })}>Edit</button>
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
            <button type="button" onClick={() => setFormData({ ...formData, checkout: '' })}>Edit</button>
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
            <button type="button" onClick={() => setFormData({ ...formData, adults: '' })}>Edit</button>
          </div>

          <div>
            <button className="continue-btn" type="submit">Proceed to payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booknow;
