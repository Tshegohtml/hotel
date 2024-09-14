import React from 'react';
import Family from "../components/family.jpeg";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import './avail.css'; 
import Double from "../components/double-room.jpg";
import Apartment from "../components/Apartment rooms.jpg";
import Single from "../components/room.jpg";
import Suite from "../components/suite.jpg";

function Avail() {
  return (
    <div className="avail-container">
      <div className="text">
        <h1>CHECK ROOM AVAILABILITY</h1>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
          <img src={Family} className="room-img" alt="Family Room" />
        </div>
        <div className="info">
          <h3>FAMILY ROOMS</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
          <img src={Family} className="room-img" alt="Family Room" />
        </div>
        <div className="info">
          <h3>FAMILY ROOMS</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">NOT AVAILABLE</button>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
        <img src={Double} className="room-img" alt="Double Room" />
        </div>
        <div className="info">
          <h3>DOUBLE ROOMS</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
        <img src={Apartment} className="room-img" alt="Apartment Room" />
        </div>
        <div className="info">
          <h3>APARTMENT ROOMS</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
        <img src={Single} className="room-img" alt="Single Room" />
        </div>
        <div className="info">
          <h3>SINGLE ROOMS</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">NOT AVAILABLE</button>
          </div>
        </div>
      </div>
      <div className="rooms">
        <div className="rooms-image-div">
        <img src={Suite} className="room-img" alt="Suite Room" />
        </div>
        <div className="info">
          <h3>SUITE</h3>
          <div className="rooms-icons">
            <FaWifi size={30} />
            <MdLocalLaundryService size={30} />
            <MdCleaningServices size={30} />
            <FaTv size={30} />
            <IoFastFoodOutline size={30} />
            <RiParkingBoxFill size={30} />
          </div>
          <p>3 Queen sized beds</p>
          <p>With quality materials to provide good comfort</p>
          <p className="room-cost">$200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort. 
            Enjoy a relaxing stay with top-notch amenities including high-speed WiFi, 
            laundry services, and daily cleaning. The room also features a large TV, 
            free parking, and complimentary meals.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Avail;
