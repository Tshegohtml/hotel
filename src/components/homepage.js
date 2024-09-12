import React, { useState } from "react";
import "./homepage.css";
import { FaCalendarAlt } from "react-icons/fa";
import Hoover from "./hoover";

const Homepage = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("");

    return (
        <div className="home">
            <div className="section1">
                <div className="text-overlay">
                    <h1>Welcome to the STAR-HOTEL</h1>
                    <h4>ENJOY YOUR STAY AT OUR LUXURIOUS HOTEL</h4>
                </div>
            </div>
            <div className="section2"/>
            <div className="check">
                    <button className="date-container">
                        <label htmlFor="check-in">
                            <FaCalendarAlt className="calendar-icon" />
                            CHECK IN
                        </label>
                    </button>

                    <button className="date-container">
                        <label htmlFor="check-out">
                            <FaCalendarAlt className="calendar-icon" />
                            CHECK OUT
                        </label>
                    </button>

                    <div className="guest-container">
                        <label htmlFor="guests"></label>
                        <select
                            id="check"
                            className="check-input"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        >
                            <option value="" disabled>CHECK AVAILABILITY</option>
                            {[...Array(15).keys()].map(num => (
                                <option key={num + 1} value={num + 1}>{num + 1} Guests</option>
                            ))}
                        </select>
                    </div>

                    <button className="book-now-btn">BOOK NOW</button>
                </div>
                <Hoover />
        </div>
    );
}

export default Homepage;
