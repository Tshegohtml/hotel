import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dbslice";
import { addToFavorites } from "../redux/authSlice";
import "./avail.css"; 

function Avail() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.data);
  const { user } = useSelector((state) => state.auth); // Assuming user info is in auth slice
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

  const toggleLike = (index, room) => {
    if (likedRoom.includes(index)) {
      setLikedRoom(likedRoom.filter((i) => i !== index));
    } else {
      setLikedRoom([...likedRoom, index]);
      if (user) { // Ensure user is logged in
        dispatch(addToFavorites(user.uid, room.id));
        alert("like")
      }
    }
  };

  const handleSocialShare = (platform, roomType) => {
    let url;
    const currentUrl = window.location.href;

    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check out this amazing ${roomType}!`;
        break;
      case 'instagram':
        alert("Please share on Instagram via your mobile app.");
        return;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank");
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
          <div className="room-page" key={index}>
            <div className="room-head">
              <div
                className="image-container"
                onClick={() => handleBookNowClick(room)} 
                style={{ cursor: "pointer" }}
              >
                <img className="room-top" src={room.image} alt={room.Rooms} />
                <div className="avail-icons">
                  <AiOutlineLike
                    size={30}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering image click
                      toggleLike(index, room); // Pass room object to toggleLike
                    }}
                    className={likedRoom.includes(index) ? "liked like-icon" : "unliked like-icon"}
                    style={{ color: likedRoom.includes(index) ? "green" : "black" }} 
                  />
                  <IoMdShareAlt
                    size={30}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering image click
                      toggleShareOptions(index);
                    }}  
                  />
                  {showShareOptions === index && (
                    <div className="share-options">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        className="share-icon"
                        onClick={() => handleSocialShare('facebook', room.Rooms)} 
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="share-icon"
                        onClick={() => handleSocialShare('twitter', room.Rooms)} 
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="share-icon"
                        onClick={() => handleSocialShare('instagram', room.Rooms)} 
                      />
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="share-icon"
                        onClick={() => handleSocialShare('linkedin', room.Rooms)} 
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
