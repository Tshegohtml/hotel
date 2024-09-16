import React from "react";
import Family from "../components/family.jpeg";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import "./avail.css";
import Double from "../components/double-room.jpg";
import Apartment from "../components/Apartment rooms.jpg";
import Single from "../components/room.jpg";
import Suite from "../components/suite.jpg";
import { useNavigate } from "react-router-dom";

function Avail() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/aboutus");
  };

  const handleBookNowClick = () => {
    
    navigate("/booknow");
  };

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
            Enjoy a relaxing stay with top-notch amenities including high-speed
            WiFi, laundry services, and daily cleaning. The room also features a
            large TV, free parking, and complimentary meals.
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
          <p className="room-cost">R2 200 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort.
            Enjoy a relaxing stay with top-notch amenities including high-speed
            WiFi, laundry services, and daily cleaning. The room also features a
            large TV, free parking, and complimentary meals.
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
          <p className="room-cost">R1 200 per night</p>
          <p className="room-details">
            Bed Type: One large bed or two smaller beds. Room Size: Spacious
            enough for two people to stay comfortably. Amenities: The room often
            includes amenities like a private bathroom, TV, wardrobe, desk, and
            sometimes a seating area, depending on the hotel’s star rating and
            level of luxury. Privacy and Comfort: These rooms are designed to
            offer couples or two guests a comfortable and private stay.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
            <button className="available-btn book-now-btn" onClick={handleBookNowClick}>Book Now</button>
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
          <p className="room-cost">3 500 per night</p>
          <p className="room-details">
            Separate Living Areas: Unlike standard hotel rooms, apartment rooms
            often have separate areas for sleeping, living, and dining, offering
            more space and privacy. Kitchen or Kitchenette: Many apartment rooms
            include a fully equipped kitchen or kitchenette, allowing guests to
            prepare their own meals. Multiple Bedrooms: Larger apartment-style
            rooms may have one or more separate bedrooms, making them ideal for
            families or groups of friends. Extended Amenities: These rooms might
            also include features like a washing machine, dishwasher, larger
            bathrooms, and storage spaces. Home-Like Feel: Apartment rooms are
            designed to feel more like a home than a traditional hotel room,
            often furnished with comfortable sofas, dining tables, and sometimes
            even balconies or terraces.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
            <button className="available-btn book-now-btn" onClick={handleBookNowClick}>Book Now</button>
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
          <p className="room-cost">R1 500 per night</p>
          <p className="room-details">
            Our family rooms are spacious and designed for maximum comfort.
            Enjoy a relaxing stay with top-notch amenities including high-speed
            WiFi, laundry services, and daily cleaning. The room also features a
            large TV, free parking, and complimentary meals.
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
          <p className="room-cost">R3 ,000 per night</p>
          <p className="room-details">
            Separate Living Area: Unlike standard rooms, suites usually feature
            a separate living or sitting area in addition to the bedroom. This
            living space often includes comfortable seating, such as sofas and
            chairs, and sometimes a dining table. Larger Space: Suites are
            generally more spacious, offering more square footage than regular
            rooms. This makes them ideal for travelers seeking extra comfort or
            for families, couples, or business travelers needing extra space.
            Premium Amenities: Suites often come with upgraded amenities, such
            as larger TVs, enhanced bathroom features (like Jacuzzi tubs or rain
            showers), high-end toiletries, and more elaborate furniture.
            Multiple Rooms: Some suites may have more than one bedroom or a
            designated work area, making them ideal for longer stays or guests
            seeking added privacy. Kitchenette or Full Kitchen: In some cases,
            suites may include a kitchenette or full kitchen, allowing guests to
            prepare their own meals. Exclusive Services: Guests staying in
            suites may receive special services such as complimentary access to
            hotel lounges, VIP check-in, personalized concierge service, and
            higher levels of room service.
          </p>
          <div className="buttons-container">
            <button className="available-btn">Available</button>
            <button className="available-btn book-now-btn" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avail;
