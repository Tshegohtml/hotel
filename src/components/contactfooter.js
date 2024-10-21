import React, { useState } from "react";
import "./contactfooter.css";

function Contactfooter() {
  // Declare state variables
  const [nameInput, setNameInput] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  
  // Mock user object for demonstration (since user is not defined)
  const user = { name: "Guest", email: "guest@example.com" };

  // Function to handle review submission (dummy function)
  const addReview = () => {
    console.log("Review submitted:", {
      name: nameInput,
      email: user.email,
      review: reviewText,
      rating,
    });
    // Reset the form after submission
    setNameInput("");
    setReviewText("");
    setRating(0);
  };

  return (
    <div>
      <div>
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

          <div>
            <h1>LOCATION</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9229802106606!2d24.711653374761312!3d-28.721847671211712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b100a817a6cdf%3A0xacd6d3d2b14fb524!2sIbhotwe%20Guest%20House!5e0!3m2!1sen!2sza!4v1726216879523!5m2!1sen!2sza"
              width="600"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Contactfooter;
