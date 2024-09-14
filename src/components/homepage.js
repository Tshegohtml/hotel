import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import { FaCalendarAlt } from "react-icons/fa";
import Hoover from "./hoover";

const Homepage = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("");
    
   
    const navigate = useNavigate();

    
    const handleBookNow = () => {
        navigate("/rooms");
    };

    return (
        <div className="home">
            <div className="section1">
                <div className="text-overlay">
                    <h1>Welcome to the STAR-HOTEL</h1>
                    <h4>ENJOY YOUR STAY AT OUR LUXURIOUS HOTEL</h4>
                   
                    <button className="book-now-btn" onClick={handleBookNow}>
                        BOOK NOW
                    </button>
                </div>
            </div>
            
            <Hoover />
        </div>
    );
}

export default Homepage;