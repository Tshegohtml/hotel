import React, { useState, useEffect } from "react";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import "./summary.css";
import "./bookingform.css";
import NavBar from "./navbar";
import Contactfooter from "./contactfooter";

const SummaryAndBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const room = location.state;

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const pricePerNight = 200;

  // Function to calculate the number of nights and total price
  const calculateTotalPrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (
      !isNaN(checkIn.getTime()) &&
      !isNaN(checkOut.getTime()) &&
      checkIn < checkOut
    ) {
      const timeDiff = checkOut - checkIn;
      const numberOfDays = timeDiff / (1000 * 60 * 60 * 24);
      const basePrice = parseFloat(room.Amount.replace(/[^\d.-]+/g, ""));
      const calculatedPrice =
        numberOfDays *
        (numGuests <= 2
          ? basePrice
          : basePrice + (numGuests - 2) * pricePerNight);

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
        description: room.description,
      },
    });
  };

  const handleCheckout = () => {
    navigate("/avail");
  };

  return (
    <div>
      <NavBar />
      <div className="">
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${room.image})` }}
        >
          <div className="view-room-content-h">
            <h3 className="view-room-content-h1">
              Room Details for {room.Rooms}
            </h3>
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>Room Description</h1>
        <p className="summary-heading">{room.description}</p>
        <div className="view-room-content">
          <div className="rooms-1">
            <div className="info">
              <h2>Summary for {room.Rooms}</h2>
              <p>{room.Details}</p>
              <p className="room-cost">{room.Amount} per night</p>
              <p>
                <strong>Amenities:</strong> {room.Amenities}
              </p>
              <p>
                <strong>Check-In-Time: from 09:00</strong> {room.checkIn}
              </p>
              <p>
                <strong>Check-Out-Time: from 10:00</strong> {room.checkOut}
              </p>
            </div>
          </div>
          <div className="view-room-form">
            <h2>Booking form</h2>
            <div className="form-group">
              <label>Check-In Date:</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Check-Out Date:</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Number of Guests:</label>
              <input
                type="number"
                value={numGuests}
                min="1"
                onChange={(e) => setNumGuests(Number(e.target.value))}
              />
            </div>
            <div className="view-room-price-details">
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
                    <td>
                      <strong>Total Price</strong>
                    </td>
                    <td>
                      <strong>R {totalPrice.toFixed(2)}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="summary-reserve-button" onClick={handleReserve}>
              Reserve
            </button>
          </div>
        </div>
      </div>
      <Contactfooter />
    </div>
  );
};

export default SummaryAndBooking;
