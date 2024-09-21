import React from "react";
import Family from "../components/family.jpeg";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import "./avail.css";
import Double from "../components/double-room.jpg";
import Apartment from "./apartment room image.jpg";
import Single from "../components/room.jpg";
import Suite from "../components/suite.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from "react";
import { fetchData} from '../redux/dbslice';

function Avail() {
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchData()); // Fetch data from Firestore
  }, [dispatch]);
  console.log(data);
  console.log(loading);
  console.log(error);

  const rooms = [
    {
      Rooms: "Family Room",
      image: Family,
      Amount: "R 3 200",
      Details: "3 Queen sized beds. Spacious and designed for maximum comfort. Includes complimentary breakfast and dinner.",
      Amenities: "WiFi, Laundry Service, Daily Cleaning, Parking",
      Guests: 3,
      available: true,
    },
    {
      Rooms: "Double Room",
      image: Double,
      price: "R 1 200",
      details: "One large bed or two smaller beds. Perfect for couples. Breakfast included.",
      amenities: "WiFi, Laundry Service, TV, Parking",
      Guests: 2,
      available: true,
    },
    {
      Rooms: "Apartment Room",
      image: Apartment,
      Amount: "R 7 350",
      Details: "Separate living areas, ideal for families or groups. Includes a full kitchen and breakfast.",
      Amenities: "WiFi, Laundry Service, Living Area, Kitchen, Parking",
      Guests: 4,
      available: true,
    },
    {
      Rooms: "Single Room",
      image: Single,
      Amount: "R 1 150",
      Details: "Comfortable room designed for one guest. Includes breakfast.",
      Amenities: "WiFi, TV, Laundry Service",
      Guests: 4,
      available: false,
    },
    {
      Rooms: "Suite",
      image: Suite,
      Amount: "R 5 300",
      Details: "Spacious suite with premium amenities. Includes breakfast and access to the VIP lounge.",
      Amenities: "WiFi, Laundry Service, Living Area, Kitchenette, Parking",
      Guests: 4,
      available: true,
    },
  ];

  const handleBookNowClick = (room) => {
    console.log(room);
    navigate("/summary", { state: room });
  };

  return (
    <div className="avail-container">
      <div className="text">
        <h1>CHECK ROOM AVAILABILITY</h1>
      </div>
      {data.map((room, index) => (
        <div className="rooms" key={index}>
          <div className="rooms-image-div">
            <img src={room.image} className="room-img" alt={room.type} />
          </div>
          <div className="info">
            <h3>{room.type}</h3>
            <div className="rooms-icons">
              <FaWifi size={30} />
              <MdLocalLaundryService size={30} />
              <MdCleaningServices size={30} />
              <FaTv size={30} />
              <IoFastFoodOutline size={30} />
              <RiParkingBoxFill size={30} />
            </div>
            <p>{room.details}</p>
            <p>{room.Rooms}</p>
            <p className="room-cost">R {room.Amount} per night</p>
            <p><strong>Amenities:</strong> {room.Amenities}</p>
            <p><strong>Check-In-Time:09:00</strong> {room.checkIn}</p>
            <p><strong>Check-Out-Time:10:00</strong> {room.checkOut}</p>
            <div className="buttons-container">
              
              
                <button
                  className="available-btn book-now-btn"
                  onClick={() => handleBookNowClick(room)}
                >
                  Book Now
                </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avail;
