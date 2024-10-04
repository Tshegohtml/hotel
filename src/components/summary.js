import React, { useState, useEffect } from 'react';
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import "./summary.css";
import './bookingform.css';

const SummaryAndBooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const room = location.state;

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const pricePerNight = 200;

    // Function to calculate the number of nights and total price
    const calculateTotalPrice = () => {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime()) && checkIn < checkOut) {
            const timeDiff = checkOut - checkIn;
            const numberOfDays = timeDiff / (1000 * 60 * 60 * 24);
            const basePrice = parseFloat(room.Amount.replace(/[^\d.-]+/g, ''));
            const calculatedPrice = numberOfDays * (numGuests <= 2 ? basePrice : basePrice + (numGuests - 2) * pricePerNight);

            setTotalPrice(calculatedPrice);
        } else {
            setTotalPrice(0);
        }
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [checkInDate, checkOutDate, numGuests]);

    if (!room) {
        return <div>No room data available.</div>;
    }

    const handleReserve = () => {
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

    const handleCheckout = () => {
        navigate("/avail");
    };

    return (
        <div className="summary-container">
            <div className="rooms-image-div2">
                <img src={room.image} className="room-img" alt={room.Rooms} />
                <h2 className='summary-heading'>Size: Spacious layout offering ample room to relax.
                    Bed: Plush single bed with premium linens for a restful night's sleep.
                    View: Stunning city or garden views, enhancing your stay.
                    Wi-Fi: High-speed internet access to stay connected.
                </h2>
            </div>
            <div className="summary-info-div"></div>
            <div className="rooms-1">
                <div className="info">
                    <h3>{room.Rooms}</h3>
                    <div className="icons-con">
                        <FaWifi size={30} />
                        <MdLocalLaundryService size={30} />
                        <MdCleaningServices size={30} />
                        <FaTv size={30} />
                        <IoFastFoodOutline size={30} />
                        <RiParkingBoxFill size={30} />
                    </div>
                    <p>{room.Details}</p>
                    <p className="room-cost">{room.Amount} per night</p>
                    <p><strong>Amenities:</strong> {room.Amenities}</p>
                    <p><strong>Check-In-Time: from 09:00</strong> {room.checkIn}</p>
                    <p><strong>Check-Out-Time: from 10:00</strong> {room.checkOut}</p>
                </div>
            </div>

            {/* Booking Form Container */}
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
                                    <td>R {(numGuests - 2) * pricePerNight}</td>
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
        </div>
    );
};

export default SummaryAndBooking;
