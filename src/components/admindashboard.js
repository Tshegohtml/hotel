import React, { useState } from "react";
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFirestore } from "../redux/AdminSlice";
import "../components/addroomform.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// AddRoomForm Component
function AddRoomForm() {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [bedCount, setBedCount] = useState('');
  const [price, setPrice] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState([]);
  const navigate = useNavigate();

  const amenitiesOptions = ["WiFi", "Parking", "TV", "Air Conditioning", "Mini Bar"];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRoom = {
      roomNumber,
      roomType,
      bedCount: parseInt(bedCount, 10),
      price: parseFloat(price),
      isAvailable,
      description,
      amenities,
    };

    try {
      const docRef = await addDoc(collection(db, "addrooms"), newRoom);
      console.log("Room added with ID:", docRef.id);

      Swal.fire({
        title: "Room added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/viewaddedrooms");

      setRoomNumber('');
      setRoomType('');
      setBedCount('');
      setPrice('');
      setDescription('');
      setAmenities([]);
      setIsAvailable(true);
    } catch (error) {
      console.error("Error adding room:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to add room. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAmenitiesChange = (e) => {
    const value = e.target.value;
    setAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="add-room-form">
      <h2>Add New Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Room Number:</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Room Type:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Family Room">Family Room</option>
            <option value="Suite">Suite</option>
            <option value="Double Room">Double Room</option>
            <option value="Apartment Room">Apartment Room</option>
            <option value="Single Room">Single Room</option>
          </select>
        </div>

        <div>
          <label>Number of Beds:</label>
          <input
            type="number"
            value={bedCount}
            onChange={(e) => setBedCount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price per Night (R):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Available:</label>
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={() => setIsAvailable(!isAvailable)}
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Room description"
          />
        </div>

        <div>
          <label>Amenities:</label>
          <select multiple value={amenities} onChange={handleAmenitiesChange}>
            {amenitiesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}

// AdminDashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.admin);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "reservations") {
      fetchDataFirestore(dispatch);
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul className="sidebar-nav">
          <li
            className={activeTab === "reservations" ? "active" : ""}
            onClick={() => handleTabClick("reservations")}
          >
            Bookings
          </li>
          <li
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </li>
          <li
            className={activeTab === "viewbookings" ? "active" : ""}
            onClick={() => handleTabClick("viewbookings")}
          >
            View Bookings
          </li>
          <li
            className={activeTab === "deleteBookings" ? "active" : ""}
            onClick={() => handleTabClick("deleteBookings")}
          >
            Delete Bookings
          </li>
          <li
            className={activeTab === "addRooms" ? "active" : ""}
            onClick={() => handleTabClick("addRooms")}
          >
            Add Rooms
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="admin-header">
          <h1>Welcome, Admin</h1>
        </header>

        <section className="content-section">
          {activeTab === "overview" && (
            <div className="dashboard-overview">
              <h2>Overview</h2>
              <p>Here's a summary of the admin activities.</p>
            </div>
          )}

          {activeTab === "reservations" && (
            loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading bookings: {error}</p>
            ) : data.length === 0 ? (
              <p>No bookings available.</p>
            ) : (
              <div className="view-reservations">
                <h2>Reservations</h2>
                <table className="bookings-table">
                  <thead>
                    <tr>
                      <th>Check-in</th>
                      <th>Checkout</th>
                      <th>Guest Name</th>
                      <th>Email</th>
                      <th>Room Type</th>
                      <th>Guests</th>
                      <th>Total Price</th>
                      <th>Paid</th>
                      <th>Transaction ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((booking, index) => (
                      <tr key={index}>
                        <td>{booking.checkin}</td>
                        <td>{booking.checkout}</td>
                        <td>{booking.firstName} {booking.lastName}</td>
                        <td>{booking.email}</td>
                        <td>{booking.roomType}</td>
                        <td>{booking.guests}</td>
                        <td>{booking.totalPrice}</td>
                        <td>{booking.paid}</td>
                        <td>{booking.transactionId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}

          {activeTab === "addRooms" && (
            <div className="add-rooms-form">
              <AddRoomForm />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
