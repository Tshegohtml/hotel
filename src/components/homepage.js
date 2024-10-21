import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import { FaCalendarAlt } from "react-icons/fa";
import NavBar from "./navbar";
import Ourhistory from "./ourhistory";
import Hero from "./hero"
import Facilities from "./facilities";
import Testimony from "./testimony";
import Contactfooter from "./contactfooter";
import Reviews from "./reviews";

const Homepage = () => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("");
    
   
    const navigate = useNavigate();

    
    const handleBookNow = () => {
        navigate("/avail");
    };

    return (
        <div >
           
            <NavBar/>
            <Hero/>
            <Ourhistory/>
            <Facilities/>
            <Testimony/>
            <Reviews/>
            <Contactfooter/>
            
            
        </div>
    );
}

export default Homepage;