import React, { useState } from "react";
import "./contactfooter.css";

function Contactfooter() {
  const [nameInput, setNameInput] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  const addReview = () => {
    console.log("Review submitted:", {
      name: nameInput,
      email: userEmail,
      review: reviewText,
      rating,
    });
    setNameInput("");
    setReviewText("");
    setRating(0);
    setUserEmail("");
  };

  return (
    <div className="contact-footer">
      <div className="footer-container">
        <div>
          <h1>ADDRESS</h1>
          <p>1245</p>
          <p>LESEDING</p>
          <p>TSWELELANG</p>
          <p>KIMBERLEY</p>
        </div>
        <div>
          <h1>CONTACT</h1>
          <p>0651518227</p>
          <p>info@hotel.com</p>
          <p>ytmotlhalane@gmal.com</p>
        </div>

        <div className="review-content">
        <h4>Leave a Review</h4>
        <input
          className="input-field"
          placeholder="Your Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        /> <br></br>
        <input
          className="input-field"
          placeholder="Your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />  <br></br>
        <textarea
          className="input-field"
          placeholder="Review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="rating-container">
          <p>Rating:</p>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`small-button ${rating === num ? "active" : ""}`}
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button className="send-button" onClick={addReview}>
          Submit
        </button>
      </div>

        <div>
          <h1>LOCATION</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9229802106606!2d24.711653374761312!3d-28.721847671211712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b100a817a6cdf%3A0xacd6d3d2b14fb524!2sIbhotwe%20Guest%20House!5e0!3m2!1sen!2sza!4v1726216879523!5m2!1sen!2sza"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      
    </div>
  );
}

// Dummy RatingReview component
const RatingReview = ({ rating, setRating }) => (
  <div className="rating-review">
    <label>Rate your stay: </label>
    <select value={rating} onChange={(e) => setRating(e.target.value)}>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
);


export default Contactfooter;
