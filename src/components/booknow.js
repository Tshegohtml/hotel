import React, { useState } from 'react';
import "../components/booknow.css";
import { useLocation, useNavigate } from "react-router-dom"; 


function Booknow() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Retrieve the data passed from BookingForm or defaults
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
        // Pass booking data to the payment page
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
    };

    return (

        <div className='book-now-summary'>
            <h1 style={{textAlign:"center"}}>Booking  Summary</h1>
            <div className='book-now-card'>

             {/* Display Price Details */}
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

               
                <div >
                    <button className="continue-btn" type="submit">Proceed to payment</button>
                </div>
                
            </form>
            

            </div>

            
        </div>
    );
}

export default Booknow;
