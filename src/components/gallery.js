import React from 'react';
import Fams from "./fams image.jfif";
import Fam from "../components/fam image.jfif";
import Families from "../components/families.jfif";
import Famie from "../components/famie.jfif";
import "../components/gallery.css";
import Double from "../components/double.jfif";
import Doubleroom from "../components/double Room.jfif";
import Apartment from "../components/Apartment rooms.jpg";
import Appa from "../components/appa.jfif";

function Gallery() {
  return (
    <div className="viewmore-container">
      <div className="the-heading">
        <h1>VIEW MORE</h1>
      </div>
      <div className="heading">
        <p>FAMILY ROOMS</p>
      </div>
      <div className="img-container">
        <div className="img-div">
          <img className="picture-img" src={Fams} alt="Fams image" />
          <img className="picture-img" src={Doubleroom} alt="Doubleroom" />
          <img className="picture-img" src={Families} alt="Families image" />
          <img className="picture-img" src={Famie} alt="Famie image" />
        </div>
      </div>
     
      <div className="the-heading">
       
      </div>
      <div className="heading">
        <p>DOUBLE ROOMS</p>
      </div>
      <div className="img-container">
        <div className="img-div">
          <img className="picture-img" src={Double} alt="Double image" />
          <img className="picture-img" src={Fam} alt="Fam image" />
          <img className="picture-img" src={Families} alt="Families image" />
          <img className="picture-img" src={Famie} alt="Famie image" />
        </div>
      </div>
      
   
   
      <div className="the-heading">
        
      </div>
      <div className="heading">
        <p>APARTMENT ROOMS</p>
      </div>
      <div className="img-container">
        <div className="img-div">
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
