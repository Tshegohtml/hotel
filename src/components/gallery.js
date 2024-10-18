import React from 'react';
import Fams from "./fams image.jfif";
import Fam from "../components/fam image.jfif";
import Families from "../components/families.jfif";
import Famie from "../components/famie.jfif";
import "../components/gallery.css";
import Double from "../components/double.jfif";
import Doubleroom from "../components/double Room.jfif";
import Apartment from "./apartment room image.jpg";
import Appa from "../components/appa.jfif";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="headingof-gallery">
        <h1>VIEW MORE</h1>
      </div>
      <div className="gallery-heading">
        <p>FAMILY ROOMS</p>
      </div>
      <div className="gallery-image">
        <div className="galleryimg-div">
          <img className="picture-img" src={Fams} alt="Fams image" />
          <img className="picture-img" src={Doubleroom} alt="Doubleroom" />
          <img className="picture-img" src={Families} alt="Families image" />
          <img className="picture-img" src={Famie} alt="Famie image" />
        </div>
      </div>
     
      <div className="gallery-heading">
       
      </div>
      <div className="headingof-gallery">
        <p>DOUBLE ROOMS</p>
      </div>
      <div className="gallery-image">
        <div className="galleryimg-div">
          <img className="picture-img" src={Double} alt="Double image" />
          <img className="picture-img" src={Fam} alt="Fam image" />
          <img className="picture-img" src={Families} alt="Families image" />
          <img className="picture-img" src={Famie} alt="Famie image" />
        </div>
      </div>
      
   
   
      <div className="gallery-heading">
        
      </div>
      <div className="headingof-gallery">
        <p>APARTMENT ROOMS</p>
      </div>
      <div className="gallery-image">
        <div className="galaryimg-div">
          <img className="picture-img" src={Apartment} alt="Apartment image" />
          <img className="picture-img" src={Appa} alt="Appa image" />
          <img className="picture-img" src={Families} alt="Families image" />
          <img className="picture-img" src={Famie} alt="Famie image" />
        </div>
      </div>
      
   
    </div>
  );
}

export default Gallery;
