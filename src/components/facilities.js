import React from "react";
import "./facilities.css";
import Gym from "./gym.jpg";
import Poolimage from "./poolimage.jpg";
import { FaTv, FaWifi } from "react-icons/fa";
import { MdLocalLaundryService, MdCleaningServices } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiParkingBoxFill } from "react-icons/ri";


function Facilities() {
  return (


    <div>
         <h1 style={{textAlign:"center"}} className="history-heading"> OUR STARR-HOTEL FACILITIES</h1>
    
    <div className="facility-container">
      <div className="img-div">
       
        <img className="facilities-image" src={Gym} alt="Gym" />
      </div>
      <div className="facilities-container">
        <div className="facilities-heading">
          <p className="faciliti-para">
            At STAR-HOTEL, we pride ourselves on offering world-class facilities
            designed to cater to the needs of all our guests. Our luxurious
            rooms and suites are equipped with modern amenities for ultimate
            comfort. The hotel features a state-of-the-art Fitness Center,
            allowing guests to maintain their workout routines while traveling.
            For those seeking relaxation, our Spa & Wellness Center offers a
            variety of rejuvenating treatments in a tranquil setting. 

            </p>

          <div className="facility-icons" >
            <div>
            <FaWifi size={30} /> <br></br>

            <small>WIFI</small>
            </div>
             
             
            <div>
            <MdLocalLaundryService size={30} /><br></br>


            <small>LAUNDRY</small>
            </div>

             
            <div>
            <MdCleaningServices size={30} /><br></br>


            <small>CLEANING</small>
            </div>
           
            
              
            </div>

            <div  className="facility-icons">

            <div>
            <IoFastFoodOutline size={30} /><br></br>


            <small>MEALS</small>
            </div>

            <div>
            <FaTv size={30} /><br></br>


            <small>TV AVAILABILE</small>
            </div>

            <div>
            <RiParkingBoxFill size={30} /><br></br>


            <small>PARKING</small>
            </div>
            </div>
            
           

            

          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Facilities;
