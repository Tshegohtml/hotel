import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import StarRating from './star';
import "./reviews.css";
import { getReviews, addReviews } from '../redux/dbslice';
import { useDispatch, useSelector } from 'react-redux';

const Reviews = () => {
  const [nameInput, setNameInput] = useState(""); // State for name input
  const [reviewText, setReviewText] = useState(""); // State for review text
  const [rating, setRating] = useState(0); // State for rating
  const [userEmail, setUserEmail] = useState(""); // State to store user email

  const { data, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch reviews when component loads
    dispatch(getReviews());
  }, [dispatch]);

  // Function to handle review submission
  const addReview = () => {
   

    let review = {
        name: nameInput,
      email: userEmail, // Use user-provided email
      review: reviewText,
      rating,
    }

    console.log(review)

    dispatch(addReviews(review));

  


  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (

    <>
      <h2>Reviews</h2>
    <div className="review-list-container">
    
      {data.length === 0 ? (
        <p>No reviews yet!</p>
      ) : (
        <ul className="review-list">
          {data.map((review, index) => (
            <li key={index} className="review-card">
              <h3>{review.username || "Anonymous"}</h3>
              <p>{review.email}</p>
              <p>{review.message}</p>
              <StarRating rating={review.rating} setRating={() => {}} />
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Review Form */}
      <div className="review-content">
        <h4>Leave a Review</h4>
        <input
          placeholder="Your Name"
        
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          placeholder="Your Email"
          value={userEmail} // Editable email input
          onChange={(e) => setUserEmail(e.target.value)} // Update state on change
        />
        <input
          className="INput-2"
          placeholder="Review here"
       
          onChange={(e) => setReviewText(e.target.value)}
        />
        <RatingReview
          className="RAting"
        
          setRating={setRating}
        />
        <br />
        <button className="Send-button" onClick={addReview}>
          Send
        </button>
      </div>
    </div>
    </>
  );
};

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

export default Reviews;
