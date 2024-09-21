import React, { useState } from 'react';
import "../components/booknow.css";
import { useLocation, useNavigate } from "react-router-dom"; 

function Booknow() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Retrieve the data passed from BookingForm
    const { checkInDate, checkOutDate, numGuests, totalPrice, room, basePrice } = location.state || {};

    // Initialize form data with retrieved values
    const [formData, setFormData] = useState({
        checkin: checkInDate || '',
        checkout: checkOutDate || '',
        adults: numGuests || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Navigate to the payment page here
        navigate("/payment");
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

                {/* Display Price Details */}
                <div className="price-details">
                    <h3>Price Details</h3>
                    <p>Room: {room}</p>
                    <p>Base Price: R {basePrice}</p>
                    <p>Total Price: R {totalPrice.toFixed(2)}</p>
                </div>

                <div className="booknow-btn">
                    <button className="continue-btn" type="submit">Continue</button>
                </div>
            </form>
        </div>
    );
}

export default Booknow;