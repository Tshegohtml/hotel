import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dbslice";
import "./avail.css"; 

function Avail() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [showShareOptions, setShowShareOptions] = useState(null);
  const [likedRoom, setLikedRoom] = useState([]);

  const [showShareModal, setShowShareModal] = useState(false); 
  const [currentRoomToShare, setCurrentRoomToShare] = useState(''); 
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

  const handleShare = (roomType) => {
    if (navigator.share) {
      
      navigator.share({
        title: `Check out the ${roomType}`,
        text: `I found this amazing room: ${roomType} at our hotel. You should check it out!`,
        url: window.location.href,  
      })
      .then(() => console.log('Room details shared successfully'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      
      setCurrentRoomToShare(roomType);
      setShowShareModal(true);
    }
  };

  return (
    <div className="avail-container">
      <div className="text">
        <h1 className="room-header">Explore Our Elegant Rooms</h1>
        <p className="room-text">
          Experience comfort and luxury in our well-appointed rooms, designed to
          meet all your needs during your stay. Whether you're here for business
          or leisure, our rooms offer a relaxing atmosphere, complete with
          modern amenities, plush bedding, and stunning views. Choose from a
          variety of room types to suit your preferences, each providing the
          perfect blend of style and functionality for an unforgettable stay.
        </p>
      </div>
      <div className="room">
        {data.map((room, index) => (
          <div
            className="room-page"
            key={index}
          
          >
            <div className="room-head">
              <div className="image-container">
                <img className="room-top" src={room.image} alt={room.Rooms} />
                <div className="avail-icons">
                  <AiOutlineLike
                    size={30}
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toggleLike(index);
                    }}
                    className={
                      likedRoom.includes(index) ? "liked like-icon" : "unliked like-icon"
                    }
                    style={{ color: likedRoom.includes(index) ? "green" : "black" }} 
                  />
                  <IoMdShareAlt
                    size={30}
                   
                    style={{ cursor: "pointer" }}
                    onClick={()=> handleShare(room)}
                  />
                  {showShareOptions === index && (
                    <div className="share-options">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        className="share-icon"
                        onClick={() => alert("Shared on Facebook!")} 
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="share-icon"
                        onClick={() => alert("Shared on Twitter!")} 
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="share-icon"
                        onClick={() => alert("Shared on Instagram!")} 
                      />
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="share-icon"
                        onClick={() => alert("Shared on LinkedIn!")} 
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="room-down">
                <h3>{room.Rooms}</h3>
                <p className="room-price">Price: R{room.Amount}</p>
                <p>{room.Details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avail;
