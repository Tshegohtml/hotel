import React from "react";
import { useNavigate } from "react-router-dom"; 
import Double from "../components/double-room.jpg";
import Family from "../components/family.jpeg";
import Single from "../components/room.jpg";
import Apartment from "./apartment room image.jpg";
import Suite from "../components/suite.jpg";
import "./rooms.css";
import { FaTv, FaWifi } from "react-icons/fa";
import Stunning from "../components/stunning image.jpg";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";


const Rooms = () => {
  const navigate = useNavigate(); 
 

  const handleAvailabilityClick = () => {
    navigate("/avail");
  };

  const handleGalleryClick = () => {
    
    navigate("/gallery");
  };

  return (
    <div>
      <h1 className="h1-hotel">OUR ROOMS!</h1>
      <div>
        <div className="image-pic">
          <img src={Stunning} alt="Stunning View" />
        </div>
      </div>

      <div>
        <div className="text">
          <h2>SELECT THE ROOM OF YOUR CHOICE</h2>
        </div>
      </div>

      <div className="my-rooms">
       
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
            <div className="buttons-container">
              <button className="view-more-btn" onClick={() => handleGalleryClick('family')}>GALLERY</button>
              <button className="availability" onClick={handleAvailabilityClick}>
                CHECK AVAILABILITY
              </button>
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
            <p>Has 2 king-sized beds with good quality bedding</p>
            <div className="buttons-container">
              <button className="view-more-btn" onClick={() => handleGalleryClick('double')}>GALLERY</button>
              <button className="availability" onClick={handleAvailabilityClick}>
                CHECK AVAILABILITY
              </button>
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
            <p>Has queen-sized bed, kitchen</p>
            <div className="buttons-container">
              <button className="view-more-btn" onClick={() => handleGalleryClick('apartment')}>GALLERY</button>
              <button className="availability" onClick={handleAvailabilityClick}>
                CHECK AVAILABILITY
              </button>
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
            <p>1 single king-sized bed</p>
            <div className="buttons-container">
              <button className="view-more-btn" onClick={() => handleGalleryClick('single')}>GALLERY</button>
              <button className="availability" onClick={handleAvailabilityClick}>
                CHECK AVAILABILITY
              </button>
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
            <p>Superior Queen Bedroom</p>
            <div className="buttons-container">
              <button className="view-more-btn" onClick={() => handleGalleryClick('suite')}>GALLERY</button>
              <button className="availability" onClick={handleAvailabilityClick}>
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
