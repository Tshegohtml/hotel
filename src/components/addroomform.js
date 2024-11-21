import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./addroomform.css";

// Initialize Firestore
const db = getFirestore();

function AddRoomForm() {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomType, setRoomType] = useState("");
  const [bedCount, setBedCount] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  // Predefined price options
  const priceOptions = [7350, 1200, 3200, 5300, 11000, 5000, 15000];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRoom = {
      roomNumber,
      roomType,
      bedCount: parseInt(bedCount, 10), // Ensure number format
      price: parseFloat(price),        // Ensure number format
      isAvailable,
      description,
    };

    try {
      // Add new room to Firestore
      const docRef = await addDoc(collection(db, "rooms"), newRoom);
      console.log("Room added with ID:", docRef.id);

      setMessage("Room added successfully!");

      // Clear form after submission
      setRoomNumber("");
      setRoomType("");
      setBedCount("");
      setPrice("");
      setDescription("");
      setIsAvailable(true);
    } catch (error) {
      console.error("Error adding room:", error);
      setMessage("Failed to add room. Please try again.");
    }
  };

  return (
    <div className="add-room-form">
      <h2>Add New Room</h2>
      {message && <p>{message}</p>}
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
          <input
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          />
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
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          >
            <option value="">Select a price</option>
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                R {option}
              </option>
            ))}
          </select>
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
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoomForm;
