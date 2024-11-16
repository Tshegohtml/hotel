import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import StarRating from './star';
import "./reviews.css";
import { getReviews, addReviews } from '../redux/dbslice';
import { useDispatch, useSelector } from 'react-redux';

const Reviews = () => {
  const [nameInput, setNameInput] = useState("");
  const [reviewText, setReviewText] = useState(""); 
  const [rating, setRating] = useState(0); 
  const [userEmail, setUserEmail] = useState(""); 

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
      email: userEmail, 
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
   
      <h2 className="review-para">REVIEWS</h2>
      
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

      
    </div>
    </>
  );
};

// Dummy RatingReview component


export default Reviews;
