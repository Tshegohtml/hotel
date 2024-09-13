import React from 'react';
import Double from "../components/double-room.jpg";
import Family from "../components/family.jpeg";
import Single from "../components/room.jpg";
import Apartment from "../components/Apartment rooms.jpg";
import Suite from "../components/suite.jpg";
import './rooms.css';  
import { FaWifi } from 'react-icons/fa';
import Stunning from "../components/stunning image.jpg";

const Rooms = () => {
  return (
    <div>
      <h1 className="h1-hotel">OUR ROOMS!</h1>
      <div>
        <div className="image-pic">
            <img src={Stunning} />
        </div>
      </div>

      <div className="my-rooms">
        <div className="rooms">
          <div className="rooms-image-div">
              <img
                src={Family}
                className="room-img"
                alt="Family Room"
              />
          </div>
         
          <div className="info">
            <h3>FAMILY ROOMS</h3>
            <FaWifi size={30} />
            <p>3 Queen sized beds</p>
            <p>With quality materials to provide good comfort</p>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>

        <div className="rooms">
          <div class="rooms-image-div">
              <img
                src={Double}
                className="room-img"
                alt="Double Room"
              />
          </div>
          <div className="info">
            <h3>DOUBLE ROOMS</h3>
            <FaWifi size={30} />
            <p>Has 2 king sized beds with good quality bedding</p>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>

        <div className="rooms">
          <div class="rooms-image-div">
              <img
                src={Apartment}
                className="room-img"
                alt="Apartment Room"
              />
          </div>
          <div className="info">
          <FaWifi size={30} />
            <h3>APARTMENT ROOMS</h3>
            <p>Has queen-sized bed, kitchen, bathroom, dining area, and living area</p>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>

        <div className="rooms">
          <div class="rooms-image-div">
              <img
                src={Single}
                className="room-img"
                alt="Single Room"
              />
          </div>
          <div className="info">
          <FaWifi size={30} />
            <h3>SINGLE ROOMS</h3>
            <p>1 single king-sized bed</p>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>

        <div className="rooms">
          <div class="rooms-image-div">
              <img
                src={Suite}
                className="room-img"
                alt="Suite Room"
              />
          </div>
          <div className="info">
            <h3>SUITE</h3>
            <FaWifi size={30} />
            <p>Superior Queen Bedroom</p>
            <button className="view-more-btn">VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
