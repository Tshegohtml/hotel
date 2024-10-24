import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dbslice"; 
import { addToFavorites } from "../redux/authSlice"; 
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import "./userprofile.css"; 

const Userprofile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data: rooms } = useSelector((state) => state.data);
  const [likedRoom, setLikedRoom] = useState([]);
  const [showShareOptions, setShowShareOptions] = useState(null);
  const [view, setView] = useState('favorites'); // Track current view (favorites/bookings)

  useEffect(() => {
    if (!rooms.length) {
      dispatch(fetchData()); 
    }
  }, [dispatch, rooms.length]);

  if (!user) {
    return <p>No user data available</p>;
  }

  // Filter favorite rooms based on user.favorites
  const favoriteRooms = user.favorites ? rooms.filter(room => user.favorites.includes(room.id)) : [];

  // Placeholder for bookings (you'll need to fetch or load booking data accordingly)
  const bookings = [
  
  ];

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
        alert("Added to favorites");
      }
    }
  };

  const handleSocialShare = (platform, roomType) => {
    let url;
    const currentUrl = window.location.href; // Get the current URL

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
    <div className="profile-container">
      <h1>My Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber}</p>

      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button className={view === 'favorites' ? 'active' : ''} onClick={() => setView('favorites')}>
          My Favorites
        </button>
        <button className={view === 'bookings' ? 'active' : ''} onClick={() => setView('bookings')}>
          My Bookings
        </button>
      </div>

      {/* Display Favorites or Bookings based on toggle */}
      {view === 'favorites' && (
        <>
          <h2>Favorites</h2>
          {favoriteRooms.length === 0 ? (
            <p>No favorites added yet.</p>
          ) : (
            <div className="room">
              {favoriteRooms.map((room, index) => (
                <div className="room-page" key={index}>
                  <div className="room-head">
                    <div className="image-container">
                      <img className="room-top" src={room.image} alt={room.Rooms} />
                      <div className="avail-icons">
                        <AiOutlineLike
                          size={30}
                          onClick={(e) => {
                            e.stopPropagation(); 
                            toggleLike(index, room); // Pass room object to toggleLike
                          }}
                          className={likedRoom.includes(index) ? "liked like-icon" : "unliked like-icon"}
                          style={{ color: likedRoom.includes(index) ? "green" : "black" }} 
                        />
                        <IoMdShareAlt
                          size={30}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation(); 
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
          )}
        </>
      )}

      {view === 'bookings' && (
        <>
          <h2>Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings made yet.</p>
          ) : (
            <div className="bookings-list">
              {bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <h3>{booking.roomName}</h3>
                  <p>Date: {booking.date}</p>
                  <p>Status: {booking.status}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Userprofile;
