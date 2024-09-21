import React, { useState } from 'react';
import './bookingform.css';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const room = location.state;

    // Logging to check room data
    console.log("Room Data:", room); // Log the room data

    // Initialize state for dates and guests
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);

    // Ensure room is defined before proceeding
    if (!room) {
        return <div>No room data available. Please select a room first.</div>;
    }

    const basePrice = parseFloat(room.Amount.replace(/[^\d.-]+/g, '')); // Convert to number
    const pricePerGuest = 200; // Additional charge per guest over 2
    const totalPrice = numGuests <= 2 ? basePrice : basePrice + (numGuests - 2) * pricePerGuest;

    const handleReserve = () => {
        // Navigate to Booknow and pass necessary data
        navigate("/booknow", {
            state: {
                checkInDate,
                checkOutDate,
                numGuests,
                totalPrice,
                room: room.Rooms,
                basePrice: room.Amount,
            }
        });
    };

    return (
        <div className="booking-container">
            <h2>Booking Details for {room.Rooms}</h2>
            <div className="form-group">
                <label>Check-In Date:</label>
                <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Check-Out Date:</label>
                <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Number of Guests:</label>
                <input type="number" value={numGuests} min="1" onChange={(e) => setNumGuests(Number(e.target.value))} />
            </div>
            <div className="price-details">
                <h3>Price Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Base Price</td>
                            <td>{room.Amount}</td>
                        </tr>
                        {numGuests > 2 && (
                            <tr>
                                <td>Additional Guests ({numGuests - 2})</td>
                                <td>R {(numGuests - 2) * pricePerGuest}</td>
                            </tr>
                        )}
                        <tr>
                            <td><strong>Total Price</strong></td>
                            <td><strong>R {totalPrice.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="reserve-btn" onClick={handleReserve}>Reserve</button>
        </div>
    );
};

export default BookingForm;
