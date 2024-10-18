import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import {
  FaFacebookF,
  FaWhatsapp,
  FaBluetoothB,
  FaFacebookMessenger,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dbslice";
import "./avail.css";  // Make sure you import the CSS file

function Avail() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [showShareOptions, setShowShareOptions] = useState(null);
  const [likedRoom, setLikedRoom] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleBookNowClick = (room) => {
    navigate("/summary", { state: room });
  };

  const toggleShareOptions = (index) => {
    setShowShareOptions(showShareOptions === index ? null : index);
  };

  const toggleLike = (index) => {
    if (likedRoom.includes(index)) {
      setLikedRoom(likedRoom.filter((i) => i !== index));
    } else {
      setLikedRoom([...likedRoom, index]);
    }
  };

  return (
    <div className="avail-container">
      <div className="text">
        <h1>Explore Our Elegant Rooms</h1>
        <p>
          Experience comfort and luxury in our well-appointed rooms, designed to
          meet all your needs during your stay. Whether you're here for business
          or leisure, our rooms offer a relaxing atmosphere, complete with
          modern amenities, plush bedding, and stunning views. Choose from a
          variety of room types to suit your preferences, each providing the
          perfect blend of style and functionality for an unforgettable stay.
        </p>
      </div>
      {data.map((room, index) => (
        <div className="rooms" key={index}>
          <div className="rooms-image-div">
            <img src={room.image} className="room-img-avail" alt={room.type} />
          </div>
          <div className="info">
            <h3>{room.type}</h3>
            <p>{room.details}</p>
            <p>{room.Rooms}</p>
            <p className="room-cost">R {room.Amount} per night</p>
            <p>
              <strong>Amenities:</strong> {room.Amenities}
            </p>
            <p>
              <strong>Check-In-Time:</strong> {room.checkIn}
            </p>
            <p>
              <strong>Check-Out-Time:</strong> {room.checkOut}
            </p>
            <div className="buttons-container">
              <button
                className="available-btn book-now-btn"
                onClick={() => handleBookNowClick(room)}
              >
                BOOK NOW
              </button>
              <div className="avail-icons">
                <AiOutlineLike
                  size={30}
                  onClick={() => toggleLike(index)}
                  className={likedRoom.includes(index) ? "liked like-icon" : "unliked like-icon"}
                />
                <IoMdShareAlt
                  size={30}
                  onClick={() => toggleShareOptions(index)}
                  style={{ cursor: "pointer" }}
                />
                {showShareOptions === index && (
                  <div className="share-options">
                    <FaFacebookF size={30} className="share-icon" />
                    <FaWhatsapp size={30} className="share-icon" />
                    <FaBluetoothB size={30} className="share-icon" />
                    <FaFacebookMessenger size={30} className="share-icon" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avail;
