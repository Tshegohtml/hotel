import React, { useEffect } from "react";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";
import "./avail.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dbslice";

function Test() {
    const navigate = useNavigate();
    const { rooms = [], loading = false, error = null } = useSelector((state) => state.db || {});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleBookNowClick = (room) => {
        navigate("/summary", { state: room });
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    if (!rooms.length) {
        return <div>No rooms available</div>;
    }

    return (
        <div className="avail-container">
            <div className="text">
                <h1>CHECK ROOM AVAILABILITY</h1>
            </div>
            {rooms.map((room, index) => (
                <div className="rooms" key={index}>
                    <div className="rooms-image-div">
                        <img src={room.images[0] || "defaultImage.jpg"} className="room-img" alt={room.Rooms || "Room"} />
                    </div>
                    <div className="info">
                        <h3>{room.Rooms || "Room Name"}</h3>
                        <div className="rooms-icons">
                            <FaWifi size={30} aria-label="WiFi available" />
                            <MdLocalLaundryService size={30} aria-label="Laundry service" />
                            <MdCleaningServices size={30} aria-label="Cleaning services" />
                            <FaTv size={30} aria-label="Television available" />
                            <IoFastFoodOutline size={30} aria-label="Food options available" />
                            <RiParkingBoxFill size={30} aria-label="Parking available" />
                        </div>
                        <p>{room.Details || "No details available"}</p>
                        <p className="room-cost">R {room.Amount || "0.00"} per night</p>
                        <p><strong>Amenities:</strong> {room.Amenities || "No amenities listed"}</p>
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
export default Test;