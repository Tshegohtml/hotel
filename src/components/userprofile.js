import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase"; // Ensure you have Firebase initialized
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dbslice"; 
import { addToFavorites } from "../redux/authSlice"; 
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./navbar";
import Contactfooter from "./contactfooter";
import "./userprofile.css";

const Userprofile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.data);  // updated from rooms to data
  const [bookings, setBookings] = useState([]);
  const [likedRoom, setLikedRoom] = useState([]);
  const [showShareOptions, setShowShareOptions] = useState(null);
  const [view, setView] = useState('favorites'); // Track current view (favorites/bookings)

  useEffect(() => {
    if (!data.length) { // updated from rooms.length to data.length
      dispatch(fetchData()); 
    }
    // Fetch bookings from Firestore
    const fetchBookings = async () => {
      if (user) {
        try {
          const bookingsSnapshot = await getDocs(collection(db, "users", user.uid, "bookings"));
          const bookingsList = bookingsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBookings(bookingsList);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
    };

    fetchBookings();
  }, [dispatch, data.length, user]);

  if (!user) {
    return <p>No user data available</p>;
  }

  // Filter favorite rooms based on user.favorites
  const favoriteRooms = user.favorites ? data.filter(room => user.favorites.includes(room.id)) : [];
  console.log("Favorite rooms:", favoriteRooms);
  console.log("Data (rooms):", data);

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
    <div>
      <NavBar /> {/* Include your NavBar component */}

      {/* Create div for button to be below the navbar */}
      <div className="profile-button-container">
        {/* Round Button with T */}
        <div className="top-button">
          {  user.firstName.slice(0,1).toUpperCase()}
      
        </div>
      </div>

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
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Number of guests</th>
                    <th>Total Price</th>
                    <th> Number of Nights</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.room}</td>
                      <td>{booking.checkin}</td>
                      <td>{booking.checkout}</td>
                      <td>{booking.numGuests}</td>
                      <td>R {booking.totalPrice}</td>
                      <td>{booking.nights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>

      <Contactfooter /> {/* Include your Contactfooter component */}
    </div>
  );
};

export default Userprofile;
