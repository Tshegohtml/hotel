import React from 'react';
import Fams from "./fams image.jfif";
import Fam from "../components/fam image.jfif";
import Families from "../components/families.jfif";
import Famie from "../components/famie.jfif";
import Double from "../components/double.jfif";
import Doubleroom from "../components/double Room.jfif";
import Apartment from "./apartment room image.jpg";
import Appa from "../components/appa.jfif";
import "../components/gallery.css";
import NavBar from "./navbar";
import Contactfooter from "./contactfooter";


function Gallery() {
  return (

    <div>
          <NavBar/>
    
    
    <div className="gallery-container">
    
      <div className="headingof-gallery">
        <h1>GALLERY</h1>
      </div>

      {/* FAMILY ROOMS Section */}
      <div className="room-section">
        <h2 className="room-heading">FAMILY ROOMS</h2>
        <div className="gallery-grid">
          <div className="room-item">
            <img className="picture-img" src={Fams} alt="Family Room 1" />
            <p className="room-description">Spacious family room with queen beds.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Doubleroom} alt="Family Room 2" />
            <p className="room-description">Family suite with two double beds.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Families} alt="Family Room 3" />
            <p className="room-description">Cozy family room with a scenic view.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Famie} alt="Family Room 4" />
            <p className="room-description">Modern family room with lounge area.</p>
          </div>
        </div>
      </div>

      {/* DOUBLE ROOMS Section */}
      <div className="room-section">
        <h2 className="room-heading">DOUBLE ROOMS</h2>
        <div className="gallery-grid">
          <div className="room-item">
            <img className="picture-img" src={Double} alt="Double Room 1" />
            <p className="room-description">Elegant room with king-sized bed.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Fam} alt="Double Room 2" />
            <p className="room-description">Double room with a city view.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Families} alt="Double Room 3" />
            <p className="room-description">Comfortable double room with amenities.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Famie} alt="Double Room 4" />
            <p className="room-description">Spacious double room with balcony.</p>
          </div>
        </div>
      </div>

      {/* APARTMENT ROOMS Section */}
      <div className="room-section">
        <h2 className="room-heading">APARTMENT ROOMS</h2>
        <div className="gallery-grid">
          <div className="room-item">
            <img className="picture-img" src={Apartment} alt="Apartment Room 1" />
            <p className="room-description">Luxury apartment with kitchenette.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Appa} alt="Apartment Room 2" />
            <p className="room-description">Spacious apartment with two bedrooms.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Families} alt="Apartment Room 3" />
            <p className="room-description">Family-friendly apartment with living area.</p>
          </div>
          <div className="room-item">
            <img className="picture-img" src={Famie} alt="Apartment Room 4" />
            <p className="room-description">Modern apartment with private balcony.</p>
          </div>
        </div>
      </div>
    </div>
    <Contactfooter/>
    </div>
  );
}

export default Gallery;
